<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import Leader from '$lib/components/atoms/Leader/index.svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import Prisma from '@prisma/client';
	import { page } from '$app/stores';

	let tabSet: number = 0;
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
</div>

<style lang="postcss">
	:root {
		--cursor-width: 0.25rem;
		--cursor-color: rgba(var(--color-primary-900) / 1);
	}
</style>
