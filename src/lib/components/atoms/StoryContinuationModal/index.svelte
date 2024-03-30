<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		continuation: ''
	};

	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}
</script>

{#if $modalStore[0]}
	<div class="modal-example-form card p-4 w-modal shadow-xl space-y-4">
		<header class="text-2xl font-bold">{$modalStore[0].title ?? 'Story Title'}</header>
		<article>{$modalStore[0].body ?? 'Summary Missing'}</article>
		<form class="modal-form p-4 space-y-4">
			<label class="label">
				<span>Story Continuation</span>
				<textarea
					class="textarea h-32"
					bind:value={formData.continuation}
					placeholder="Type away..."
					autocomplete="off"
				/>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit</button>
		</footer>
	</div>
{/if}
