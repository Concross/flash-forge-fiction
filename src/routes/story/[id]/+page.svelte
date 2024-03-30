<script lang="ts">
	import Leader from '$lib/components/atoms/Leader/index.svelte';
	import { TabGroup, Tab, type ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import Prisma from '@prisma/client';
	import { page } from '$app/stores';

	const modalStore = getModalStore();
	let tabSet: number = 0;
	const modal: ModalSettings = {
		type: 'component',
		component: 'storyContinuationModal',
		title: $page.data.story.title,
		body: $page.data.story.summary,
		value: '',
		valueAttr: { type: 'text', minlength: 70, maxlength: 1000, required: true },
		// Returns the updated response value
		response: (res: string) => console.log('response:', res)
	};
</script>

<div>
	<Leader />
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Full Text</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Summary</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				{$page.data.story.content}
			{:else}
				{$page.data.story.summary}
			{/if}
		</svelte:fragment>
	</TabGroup>
	<button type="button" class="btn variant-filled" on:click={() => modalStore.trigger(modal)}>
		Continue the story...
	</button>
</div>
