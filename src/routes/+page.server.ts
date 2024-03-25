import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth();
	const response = await prisma.story.findMany({
		where: { userId: session?.user?.id }
	});

	return { stories: response };
};
