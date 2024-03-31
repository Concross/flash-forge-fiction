import { fail, redirect } from '@sveltejs/kit';
import type { Action } from '@sveltejs/kit';
import Prisma from '@prisma/client';
import prisma from '$lib/server/prisma';
import MindsDB from 'mindsdb-js-sdk';
import connect from '$lib/server/minds';

// @ts-expect-error - Type and default import conflict
const Minds = MindsDB.default as typeof MindsDB;

export const createStory: Action = async ({ request, locals }) => {
	const data = await request.formData();
	const title = data.get('title');
	const content = data.get('content');
	const session = await locals.auth();
	const user: Prisma.User | null = await prisma.user.findUnique({
		where: {
			email: session?.user?.email ?? undefined
		}
	});

	if (!user?.id) {
		return fail(401, { message: 'Unauthorized' });
	}

	const response = await prisma.story.create({
		data: {
			title: title as string,
			content: content as string,
			userId: user.id,
			summaryRequestedAt: new Date()
		}
	});

	if (locals.flags?.ai_summarization.enabled) {
		try {
			await connect();
			Minds.SQL.runQuery(`
                UPDATE flash_forge_db.Story
                SET
                    summaryCompletedAt = NOW(),
                    summary = prediction_data.summary
                FROM (
                    SELECT input.\`content\`, input.title, model.summary 
                    FROM flash_forge_db.Story AS input
                    JOIN text_summarization_model AS model
                ) as prediction_data
                WHERE id=${response.id};
            `);
		} catch (error) {
			console.error('Failed to summarize story:', error);
		}
	}

	throw redirect(303, `/story/${response.id}`);
};
