import { FLAGSMITH_ENVIRONMENT_ID_DEV } from '$env/static/private';
import prisma from '$lib/server/prisma';
import type { LayoutServerLoad } from './$types';
import flagsmith from 'flagsmith/isomorphic';

// @ts-expect-error - Import bug
const flagsmithSSR = flagsmith.createFlagsmithInstance();

/** @type {import('@sveltejs/kit').Load} */
export const load: LayoutServerLoad = async ({ locals }) => {
	let user;
	const session = await locals.auth();

	if (session?.user?.email) {
		user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email ?? undefined
			}
		});
	}

	await flagsmithSSR.init({
		environmentID: FLAGSMITH_ENVIRONMENT_ID_DEV,
		identity: user?.id
	});

	return {
		session,
		flagsmithState: flagsmithSSR.getState()
	};
};
