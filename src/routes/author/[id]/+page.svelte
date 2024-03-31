<script lang="ts">
	import { error } from '@sveltejs/kit';
	import StoryCard from '$lib/components/atoms/StoryCard/index.svelte';

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
	<ul>
		{#each author.stories as story}
			<li><StoryCard {story} /></li>
		{/each}
	</ul>
	<h2>Continuations</h2>
	<ul>
		{#each author.continuations as continuation}
			<li>{continuation.title}</li>
		{/each}
	</ul>
</div>
