<script>
	import Typewriter from 'svelte-typewriter';
</script>

<Typewriter keepCursorOnFinish showCursorOnDelay delay={200}>
	<h1 class="text-4xl h1 sm:text-5xl mb-3 font-heading-token">The Story So Far...</h1>
</Typewriter>

<style lang="postcss">
	:root {
		--cursor-width: 0.25rem;
		--cursor-color: rgba(var(--color-primary-900) / 1);
	}
</style>
