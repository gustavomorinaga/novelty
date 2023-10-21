<script lang="ts">
	import { CTA } from '$lib/components';
	import { HeaderActionsLayout, ProfileLayout, SettingsListLayout } from '$lib/layouts';
	import { Button, Icon } from '@novelty/ui/components';
	import type { ComponentProps } from 'svelte';

	const profile: ComponentProps<ProfileLayout>['profile'] = {
		firstName: 'John',
		lastName: 'Doe',
		displayName: 'John Doe',
		email: 'john.doe@example.com',
		avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=john.doe@example.com'
	};
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

<ProfileLayout {profile} />
<SettingsListLayout />

<CTA>Log Out</CTA>
