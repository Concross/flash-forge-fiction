<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import {
		AppBar,
		AppShell,
		storePopup,
		Modal,
		initializeStores,
		type ModalComponent
	} from '@skeletonlabs/skeleton';

	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import StoryContinuationModal from '$lib/components/atoms/StoryContinuationModal/index.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		storyContinuationModal: { ref: StoryContinuationModal }
	};

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal components={modalRegistry} />
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Flash Forge Fiction</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if $page.data.session}
					<button on:click={() => signOut()}>Sign Out</button>
				{:else}
					<button on:click={() => signIn('github')}>Sign In</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
