import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const story = await prisma.story.findUnique({
			where: {
				id: parseInt(params.id)
			},
			include: {
				user: true
			}
		});

		return { story };
	} catch (error) {
		console.error('Failed to load story:', error);
	}
};
