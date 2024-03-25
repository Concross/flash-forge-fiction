import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '$lib/prisma';

import { AUTH_GITHUB_CLIENT_ID, AUTH_GITHUB_CLIENT_SECRET } from '$env/static/private';

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			clientId: AUTH_GITHUB_CLIENT_ID,
			clientSecret: AUTH_GITHUB_CLIENT_SECRET
		})
	]
});
