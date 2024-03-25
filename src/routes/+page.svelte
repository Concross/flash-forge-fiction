<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';

	import { page } from '$app/stores';
	console.log($page.data.session);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		{#if $page.data.session}
			<div>
				<p>Welcome, {$page.data.session.user?.email}</p>
				<button on:click={() => signOut()}>Sign out</button>
			</div>
		{:else}
			<p>Not signed in</p>
			<button on:click={() => signIn('github')}>Sign in with GitHub</button>
		{/if}
	</div>
</div>
