<script>
	import { CTA } from '$lib/components';
	import { HeaderActionsLayout } from '$lib/layouts';
	import { Button, Icon } from '@novelty/ui/components';
</script>

<HeaderActionsLayout title="Settings">
	<svelte:fragment slot="prefix">
		<Button size="icon" variant="secondary" href="/">
			<Icon class="text-xl" icon="mingcute:left-fill" />
		</Button>
	</svelte:fragment>
	<svelte:fragment slot="suffix">
		<Button size="icon" variant="secondary">
			<Icon class="text-xl" icon="mingcute:pencil-fill" />
		</Button>
	</svelte:fragment>
</HeaderActionsLayout>

<CTA>Log Out</CTA>
