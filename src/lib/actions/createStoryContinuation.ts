import { fail, redirect } from '@sveltejs/kit';
import type { Action } from '@sveltejs/kit';
import Prisma from '@prisma/client';
import prisma from '$lib/server/prisma';

export const createStoryContinuation: Action = async ({ request, locals }) => {
	const data = await request.formData();
	const continuation = data.get('continuation');
	const storyId = data.get('storyId');
	const session = await locals.auth();

	const user: Prisma.User | null = await prisma.user.findUnique({
		where: {
			email: session?.user?.email ?? undefined
		}
	});

	if (!user?.id) {
		return fail(401, { message: 'Unauthorized' });
	}

	if (!storyId) {
		return fail(400, { message: 'Story ID is required' });
	}

	const response = await prisma.storyContinuation.create({
		data: {
			content: continuation as string,
			userId: user.id,
			storyId: parseInt(storyId as string)
		}
	});

	throw redirect(303, `/story/${response.id}`);
};
