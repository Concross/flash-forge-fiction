import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import { createStory } from '$lib/actions/createStory';

export const load: PageServerLoad = async () => {
	const response = await prisma.story.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});

	return { stories: response };
};

export const actions = {
	createStory
};
