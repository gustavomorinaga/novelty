<script lang="ts">
	import { BookSwipeLayout, HeaderActionsLayout } from '$lib/layouts';
	import { Button, Icon, Input } from '@novelty/ui/components';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const books: Array<{ title: string; price: number; cover: HTMLImgAttributes }> = [
		{
			title: 'Above All Else',
			price: 20,
			cover: {
				src: 'covers/above-all-else-cover-hires.jpg',
				alt: 'Above All Else'
			}
		},
		{
			title: 'Baa Baa Black Sheep',
			price: 10,
			cover: {
				src: 'covers/baa-baa-black-sheep-hires.jpg',
				alt: 'Baa Baa Black Sheep'
			}
		},
		{
			title: 'Camel Rider',
			price: 15,
			cover: {
				src: 'covers/camel-rider-hires.jpg',
				alt: 'Camel Rider'
			}
		},
		{
			title: 'Dancing with the Dinosaurs',
			price: 25,
			cover: {
				src: 'covers/dancing-with-the-dinosaurs-hires.jpg',
				alt: 'Dancing with the Dinosaurs'
			}
		},
		{
			title: 'Earth Hour',
			price: 30,
			cover: {
				src: 'covers/earth-hour-hires.jpg',
				alt: 'Earth Hour'
			}
		},
		{
			title: 'Faces of the Moon',
			price: 35,
			cover: {
				src: 'covers/faces-of-the-moon-hires.jpg',
				alt: 'Faces of the Moon'
			}
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
