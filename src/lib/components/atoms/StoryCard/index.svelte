<script lang="ts">
	import Prisma from '@prisma/client';
	import {} from '@sveltejs/kit';

	type StoryWithSummary = Prisma.Story & { summary: string };
	export let story: StoryWithSummary | null;
	export let creatorCard = false;

	let editing = false;
	let title = '';
	let content = '';

	function startEditing() {
		editing = true;
		title = story?.title || '';
		content = story?.content || '';
	}

	function saveChanges() {
		// Perform save operation here
		// You can use the `title` and `content` variables to access the updated values
		// Once saved, you can update the `story` object or perform any other necessary actions
		editing = false;
	}

	function discardChanges() {
		editing = false;
		title = '';
		content = '';
	}
</script>

<div class="p-5 card">
	{#if creatorCard}
		{#if editing}
			<form method="POST" action="?/createStory">
				<input type="text" bind:value={title} class="input mb-2" placeholder="Title" name="title" />
				<textarea bind:value={content} class="textarea h-32" placeholder="Content" name="content"
				></textarea>
				<button type="submit">Create</button>
				<button on:click={discardChanges}>Cancel</button>
			</form>
		{:else}
			<button on:click={startEditing} class="text-xl">+</button>
		{/if}
	{:else}
		<a href={`/story/${story?.id}`}>
			<h2 class="text-2xl font-bold h2">{story?.title || 'Title'}</h2>
			<p class="p">{story?.summary || story?.content || 'Content'}</p>
		</a>
	{/if}
</div>

<style>
</style>
