<script lang="ts">
	import { CTA } from '$lib/components';
	import { BookDetailsLayout, HeaderActionsLayout } from '$lib/layouts';
	import { Button, Icon } from '@novelty/ui/components';
	import type { ComponentProps } from 'svelte';

	const book: ComponentProps<BookDetailsLayout>['book'] = {
		slug: 'above-all-else',
		title: 'Above All Else',
		author: 'Dana Alison Levy',
		description:
			'A powerful story of family, friendship, and activism, set in the Mexican countryside.',
		price: 20,
		stock: 912,
		sold: 500,
		rating: 4.5,
		cover: {
			src: '/covers/above-all-else-cover-hires.jpg',
			alt: 'Above All Else'
		}
	};
</script>

<HeaderActionsLayout title="Book Details">
	<svelte:fragment slot="prefix">
		<Button size="icon" variant="secondary" href="/">
			<Icon class="text-xl" icon="mingcute:left-fill" />
		</Button>
	</svelte:fragment>
	<svelte:fragment slot="suffix">
		<Button size="icon" variant="secondary">
			<Icon class="text-xl" icon="mingcute:more-2-fill" />
		</Button>
	</svelte:fragment>
</HeaderActionsLayout>

<BookDetailsLayout {book} />

<CTA>Buy This Book</CTA>
