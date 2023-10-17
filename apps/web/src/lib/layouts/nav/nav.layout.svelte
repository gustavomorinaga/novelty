<script lang="ts">
	import { Button, Icon } from '@novelty/ui/components';
</script>

<div class="bottom-nav">
	<nav>
		<Button>
			<Icon icon="mingcute:home-4-fill" />
		</Button>

		<Button>
			<Icon icon="mingcute:bookmark-fill" />
		</Button>

		<Button>
			<Icon icon="mingcute:shopping-bag-1-fill" />
		</Button>

		<Button>
			<Icon icon="mingcute:settings-3-fill" />
		</Button>
	</nav>
</div>

<style lang="postcss">
	div.bottom-nav {
		@apply fixed inset-x-4 bottom-4 block;

		& > nav {
			@apply bg-muted mx-auto flex w-fit gap-4 rounded-lg p-2;

			& > button {
				@apply text-xl;
			}
		}
	}
</style>
