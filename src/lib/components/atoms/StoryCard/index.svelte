<script lang="ts">
	import Prisma from '@prisma/client';
	import MindsDB from 'mindsdb-js-sdk';
	import connect from '$lib/server/minds';

	export let story: Prisma.Story | null;
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
				<input type="text" bind:value={title} class="text-token" placeholder="Title" name="title" />
				<textarea bind:value={content} class="text-token" placeholder="Content" name="content"
				></textarea>
				<button type="submit">Create</button>
				<button on:click={discardChanges}>Cancel</button>
			</form>
		{:else}
			<button on:click={startEditing} class="text-xl">+</button>
		{/if}
	{:else}
		<h2 class="text-2xl font-bold text-token">{story?.title || 'Title'}</h2>
		<p class="text-token">{story?.content || 'Content'}</p>
	{/if}
</div>

<style>
</style>
