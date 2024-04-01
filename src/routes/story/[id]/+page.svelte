<script lang="ts">
	import Leader from '$lib/components/atoms/Leader/index.svelte';
	import { TabGroup, Tab, type ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const modalStore = getModalStore();
	let tabSet: number = 0;

	const modal: ModalSettings = {
		type: 'component',
		component: 'storyContinuationModal',
		title: $page.data.story.title,
		body: $page.data.story.summary,
		value: '',
		meta: {
			story: $page.data.story
		}
	};

	$: flag_summary_continuation_enabled = $page.data.flags.summary_continuation?.enabled;
</script>

<div>
	<Leader />
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>Full Text</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Summary</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Continuations</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				{$page.data.story.content}
			{:else if tabSet === 1}
				{$page.data.story.summary}
			{:else}
				{#each $page.data.story.continuations as continuation}
					<div class="snap-start shrink-0 card p-10 w-40 md:w-80 lg:w-120 text-center">
						{continuation.content}
					</div>
				{/each}
			{/if}
		</svelte:fragment>
	</TabGroup>
	{#if flag_summary_continuation_enabled}
		<button type="button" class="btn variant-filled" on:click={() => modalStore.trigger(modal)}>
			Continue the story...
		</button>
	{/if}
</div>
