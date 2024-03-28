<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, AppRail, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<slot />
	<AppRail slot="sidebarRight">
		<svelte:fragment slot="lead">
			{#if $page.data.session}
				<button on:click={() => signOut()}>Sign Out</button>
			{:else}
				<button on:click={() => signIn('github')}>Sign In</button>
			{/if}
		</svelte:fragment>
	</AppRail>
</AppShell>
