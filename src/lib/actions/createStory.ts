import { fail, redirect } from '@sveltejs/kit';

import type { Action } from '@sveltejs/kit';
import Prisma from '@prisma/client';
import prisma from '$lib/server/prisma';

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
			userId: user.id
		}
	});

	throw redirect(303, `/story/${response.id}`);
};
