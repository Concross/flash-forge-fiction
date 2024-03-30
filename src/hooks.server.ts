import flagsmith from 'flagsmith/isomorphic';
import { sequence } from '@sveltejs/kit/hooks';
import { FLAGSMITH_ENVIRONMENT_ID_DEV } from '$env/static/private';
import prisma from '$lib/server/prisma';
import { handle as auth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

// @ts-expect-error - Import bug
const flagsmithSSR = flagsmith.createFlagsmithInstance();

const addFlagsToLocals: Handle = async ({ event, resolve }) => {
	const session = await event.locals.auth();
	let user;

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

	event.locals.flags = (await flagsmithSSR.getState()).flags;
	const response = await resolve(event);
	return response;
};

export const handle = sequence(auth, addFlagsToLocals);
