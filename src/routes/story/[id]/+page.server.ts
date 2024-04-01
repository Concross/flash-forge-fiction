import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

import { createStoryContinuation } from '$lib/actions/createStoryContinuation';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const story = await prisma.story.findUnique({
			where: {
				id: parseInt(params.id)
			},
			include: {
				user: true,
				continuations: true
			}
		});

		return { story };
	} catch (error) {
		console.error('Failed to load story:', error);
	}
};

export const actions = {
	createStoryContinuation
};
