<script lang="ts">
	import Prisma from '@prisma/client';
	import StoryCard from '$lib/components/atoms/StoryCard/index.svelte';

	export let stories: Prisma.Story[];
</script>

{#if stories}
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		{#each stories as story}
			<StoryCard {story} />
		{/each}
	</div>
{/if}

<style>
</style>
