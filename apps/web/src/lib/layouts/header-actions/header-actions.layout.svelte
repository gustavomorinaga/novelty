<script lang="ts">
	export let title: string;
</script>

<header class="header-actions">
	<div>
		<div class="prefix">
			<slot name="prefix" />
		</div>

		<h1 class="large">{title}</h1>

		<div class="suffix">
			<slot name="suffix" />
		</div>
	</div>
</header>

<style lang="postcss">
	header.header-actions {
		@apply relative block h-16;

		& > div {
			@apply bg-background fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 p-4;

			& > h1 {
				@apply mx-auto;
			}

			& > div:is(.prefix, .suffix) {
				@apply min-w-[2rem];
			}
		}
	}
</style>
