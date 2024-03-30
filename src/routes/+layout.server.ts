import type { LayoutServerLoad } from './$types';

/** @type {import('@sveltejs/kit').Load} */
export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth();
	const flags = await locals.flags;
	return {
		session,
		flags
	};
};
