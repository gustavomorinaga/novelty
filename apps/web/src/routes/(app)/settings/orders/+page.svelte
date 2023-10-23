<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { HeaderActionsLayout, OrderCardLayout } from '$lib/layouts';
	import { Button, Icon, Tabs } from '@novelty/ui/components';
	import { groupBy } from '@novelty/utils';

	export let data;
	const { orders } = data;

	const statuses = [
		{ label: 'All', value: 'all' },
		{ label: 'Processing', value: 'processing' },
		{ label: 'Delivered', value: 'delivered' },
		{ label: 'Cancelled', value: 'cancelled' }
	] as const;

	type TStatus = (typeof statuses)[number];

	const groupedOrders = { ...groupBy(orders, 'status'), all: orders } as Record<
		string,
		typeof orders
	>;

	$: currentStatus = (statuses.find(
		({ value }) => value === $page.url.searchParams.get('status')
	) || statuses.at(0)) as TStatus;
	$: currentList = groupedOrders[currentStatus.value];

	const handleTabChange = (status: TStatus['value']) => {
		$page.url.searchParams.set('status', status);
		return goto($page.url.search, { invalidateAll: true });
	};
</script>

<HeaderActionsLayout title="My Orders">
	<svelte:fragment slot="prefix">
		<Button size="icon" variant="secondary" href="/settings">
			<Icon class="text-xl" icon="mingcute:left-fill" />
		</Button>
	</svelte:fragment>
</HeaderActionsLayout>

<Tabs.Root value={currentStatus.value}>
	<Tabs.List class="w-full">
		{#each statuses as { label, value }}
			<Tabs.Trigger class="flex-auto" {value} on:click={() => handleTabChange(value)}>
				{label}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each statuses as { value }}
		<Tabs.Content {value}>
			<ul>
				{#each currentList as order}
					<li>
						<OrderCardLayout {order} />
					</li>
				{/each}
			</ul>
		</Tabs.Content>
	{/each}
</Tabs.Root>

<style lang="postcss">
	ul {
		@apply m-0 mt-8 list-none p-0;
	}
</style>
