<script>
	import '../lib/styles/app.style.postcss';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply mx-auto min-h-screen max-w-6xl p-4;
	}
</style>
