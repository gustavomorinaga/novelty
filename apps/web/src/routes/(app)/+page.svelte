<script lang="ts">
	import { BookSwipeLayout, HeaderActionsLayout } from '$lib/layouts';
	import { Button, Icon, Input, Select } from '@novelty/ui/components';

	export let data;
	const { books } = data;

	const viewOptions = [
		{
			value: 'view-all',
			label: 'View All'
		}
	];
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

<h2 class="text-balance">Which book do you want to buy?</h2>

<form class="search-book">
	<Input type="text" placeholder="Search book" />
	<Button size="icon">
		<Icon class="px-4" icon="mingcute:settings-2-fill" />
	</Button>
</form>

<section id="popular-books">
	<header>
		<h3 class="large">Popular Books</h3>

		<Select.Root>
			<Select.Trigger class="w-32">
				<Select.Value placeholder="View All" />
			</Select.Trigger>
			<Select.Content>
				{#each viewOptions as option}
					<Select.Item value={option.value}>{option.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	</header>

	<BookSwipeLayout {books} />
</section>

<style lang="postcss">
	h2 {
		@apply mb-4;
	}

	form.search-book {
		@apply flex items-center gap-2;
	}

	section#popular-books {
		@apply mt-8;

		& > header {
			@apply flex items-center justify-between;
		}
	}
</style>
