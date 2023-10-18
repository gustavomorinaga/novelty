<script>
	import { HeaderActionsLayout } from '$lib/layouts';
	import { Button, Icon } from '@novelty/ui/components';
</script>

<HeaderActionsLayout title="Home">
	<svelte:fragment slot="prefix">
		<Button size="icon" variant="secondary">
			<Icon class="text-xl" icon="mingcute:classify-fill" />
		</Button>
	</svelte:fragment>
	<svelte:fragment slot="suffix">
		<Button size="icon" variant="secondary">
			<Icon class="text-xl" icon="mingcute:notification-fill" />
		</Button>
	</svelte:fragment>
</HeaderActionsLayout>

<h1 class="text-balance">Which book do you want to buy?</h1>

<p class="muted">Here is a list of books you can buy.</p>
