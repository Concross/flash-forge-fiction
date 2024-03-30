import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { createStory } from '$lib/actions/createStory';

export const load: PageServerLoad = async () => {
	try {
		const stories = await prisma.story.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			include: {
				user: true
			}
		});

		return { stories };
	} catch (error) {
		console.error('Failed to load stories:', error);
	}
};

export const actions = {
	createStory
};
