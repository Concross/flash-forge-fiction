<script lang="ts">
	import Prisma from '@prisma/client';

	export let story: Prisma.Story;
</script>

<div class="p-5 card">
	<h2 class="text-2xl font-bold text-token">{story.title}</h2>
	<p class="text-token">{story.content}</p>
</div>

<style>
</style>
