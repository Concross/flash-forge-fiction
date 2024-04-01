<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import StoryCard from '$lib/components/atoms/StoryCard/index.svelte';

	let tabSet: number = 0;
	export let data: { author: any };

	// Fallback if the author data is not loaded
	if (!data || !data.author) {
		throw error(404, 'Author not found');
	}

	const { author } = data;
</script>

<div>
	<h1>{author.name}</h1>
	{#if author.image}
		<img src={author.image} alt={author.name} />
	{/if}
	{#if author.email}
		<p>Email: {author.email}</p>
	{/if}

	<h2>Stories</h2>
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each author.stories as story}
			<div class="snap-start shrink-0 card w-40 md:w-80 text-center">
				<StoryCard {story} />
			</div>
		{/each}
	</div>

	<h2>Continuations</h2>
	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each author.continuations as continuation}
			<div class="snap-start shrink-0 card p-10 w-40 md:w-80 lg:w-120 text-center">
				{continuation.content}
			</div>
		{/each}
	</div>
</div>
