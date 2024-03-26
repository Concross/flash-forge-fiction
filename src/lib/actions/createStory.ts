import { fail, redirect } from '@sveltejs/kit';

import type { Action } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const createStory: Action = async ({ request, locals }) => {
	const data = await request.formData();
	const title = data.get('title');
	const content = data.get('content');
	const session = await locals.auth();
	const userId = session?.user?.id;

	if (!userId) {
		return fail(401, { message: 'Unauthorized' });
	}

	const response = await prisma.story.create({
		data: {
			title: title as string,
			content: content as string,
			userId: userId
		}
	});

	throw redirect(303, `/story/${response.id}`);
};
