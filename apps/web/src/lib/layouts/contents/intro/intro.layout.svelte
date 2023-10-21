<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	const sampleBooks: Array<HTMLImgAttributes> = [
		{
			src: '/covers/above-all-else-cover-hires.jpg',
			alt: 'Above All Else'
		},
		{
			src: '/covers/baa-baa-black-sheep-hires.jpg',
			alt: 'Baa Baa Black Sheep'
		},
		{
			src: '/covers/camel-rider-hires.jpg',
			alt: 'Camel Rider'
		},
		{
			src: '/covers/dancing-with-the-dinosaurs-hires.jpg',
			alt: 'Dancing with the Dinosaurs'
		},
		{
			src: '/covers/earth-hour-hires.jpg',
			alt: 'Earth Hour'
		},
		{
			src: '/covers/faces-of-the-moon-hires.jpg',
			alt: 'Faces of the Moon'
		}
	];
</script>

<section class="intro">
	<div class="stack-books">
		<div>
			{#each sampleBooks as { src, alt }, index}
				{@const rotate = `${index * 22.5}deg`}
				{@const stack = sampleBooks.length - index}

				<img {src} {alt} style:--rotate={rotate} style:--stack={stack} />
			{/each}
		</div>
	</div>

	<h1>Novelty</h1>

	<p class="lead text-balance">Let's read book with our book shope</p>
</section>

<style lang="postcss">
	section.intro {
		@apply relative my-auto pb-16 text-center;

		& > div.stack-books {
			@apply relative block h-[50vh];

			& > div {
				@apply absolute inset-0 grid place-items-center;

				& > img {
					@apply absolute z-[var(--stack)] w-52 rotate-[var(--rotate)] rounded-sm drop-shadow-lg;
				}
			}
		}
	}
</style>
