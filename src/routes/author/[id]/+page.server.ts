import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params, locals }) => {
	const authorId = params.id;
	const currentUserAuth = await locals.auth();

	if (!currentUserAuth) {
		return fail(401, { message: 'Unauthorized' });
	}

	const currentUser = await prisma.user.findUnique({
		where: {
			email: currentUserAuth?.user?.email ?? undefined
		}
	});

	try {
		const author = await prisma.user.findUniqueOrThrow({
			where: {
				id: authorId
			},
			select: {
				id: true,
				name: true,
				image: true,
				email: currentUser?.id === authorId,
				stories: true,
				continuations: true
			}
		});

		return { author };
	} catch (error) {
		return fail(404, { message: 'Author not found' });
	}
};
