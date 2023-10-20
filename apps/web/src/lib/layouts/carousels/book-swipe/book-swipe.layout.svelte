<script lang="ts">
	import { Button, Carousel, CarouselRoot, Icon } from '@novelty/ui/components';
	import { currencyFormat } from '@novelty/utils';
	import type { ComponentProps } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	export let books: Array<{ slug: string; title: string; price: number; cover: HTMLImgAttributes }>;

	const options: ComponentProps<CarouselRoot>['options'] = {
		slidesPerView: 'auto',
		centeredSlides: true,
		grabCursor: true,
		effect: 'cards',
		height: 720
	};
</script>

<Carousel.Root class="my-8" {options}>
	{#each books as { slug, title, price, cover: { src, alt } }}
		<Carousel.Slide class="flex h-full w-[70vw] items-center justify-center">
			<a href="/browse/{slug}">
				<figure class="book">
					<img {src} {alt} />

					<figcaption>
						<div class="details">
							<strong>{title}</strong>
							<span>{currencyFormat({ value: price, preset: 'USD' })}</span>
						</div>

						<div class="actions">
							<Button size="icon" variant="secondary" title="Favorite">
								<Icon icon="mingcute:heart-line" />
							</Button>
						</div>
					</figcaption>
				</figure>
			</a>
		</Carousel.Slide>
	{/each}
</Carousel.Root>

<style lang="postcss">
	figure.book {
		@apply grid auto-cols-fr auto-rows-fr overflow-hidden rounded-sm;
		grid-template-areas: 'stack';

		& > img {
			@apply place-self-stretch object-cover;
			grid-area: stack;
		}

		& > figcaption {
			@apply flex items-end justify-between gap-4 self-end bg-gradient-to-t from-black/90 via-black/50 px-4 pb-4 pt-16;
			grid-area: stack;

			& > div {
				@apply flex flex-col;

				&.details {
					@apply leading-tight drop-shadow;
				}
			}
		}
	}
</style>
