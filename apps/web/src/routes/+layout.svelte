<script>
	import '$lib/styles/app.style.postcss';
</script>

<svelte:head>
	<title>Novelty</title>
	<meta name="description" content="Novelty Book Store" />
</svelte:head>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto flex min-h-screen max-w-6xl flex-col p-4;
	}
</style>
