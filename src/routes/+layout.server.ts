import type { LayoutServerLoad } from './$types';

/** @type {import('@sveltejs/kit').Load} */
export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		session: await locals.auth()
	};
};
