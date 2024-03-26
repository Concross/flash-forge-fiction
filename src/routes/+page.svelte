<script lang="ts">
	import StoryCardList from '$lib/components/molecules/StoryCardList/index.svelte';

	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="text-4xl font-bold">Stories</h1>
		<StoryCardList stories={$page.data.stories} />
	</div>
</div>
