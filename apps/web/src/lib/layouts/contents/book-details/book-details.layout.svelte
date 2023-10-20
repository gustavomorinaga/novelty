<script lang="ts">
	import { currencyFormat } from '@novelty/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type TBook = {
		slug: string;
		title: string;
		author: string;
		description: string;
		price: number;
		stock: number;
		sold: number;
		rating: number;
		cover: HTMLImgAttributes;
	};

	export let book: TBook;
</script>

<article class="book-details">
	<figure>
		<img id="cover" src={book.cover.src} alt={book.cover.alt} />

		<figcaption>
			<ul class="statistics">
				<li>
					<span id="stock" class="large">{book.stock}</span>
					<small class="muted">Stock</small>
				</li>
				<li>
					<span id="sold" class="large">{book.sold}</span>
					<small class="muted">Sold</small>
				</li>
				<li>
					<span id="rating" class="large">{book.rating}</span>
					<small class="muted">Rating</small>
				</li>
			</ul>
		</figcaption>
	</figure>

	<header>
		<div>
			<h2 id="title">{book.title}</h2>
			<small id="author" class="muted">by {book.author}</small>
		</div>

		<div>
			<span id="price">{currencyFormat({ value: book.price, preset: 'USD' })}</span>
		</div>
	</header>

	<h3>Description</h3>

	<p id="description">{book.description}</p>
</article>

<style lang="postcss">
	article.book-details {
		& > figure {
			@apply relative mb-8 flex items-center;

			& > img {
				@apply outline-muted w-[75vw] rounded-sm object-cover drop-shadow;
			}

			& > figcaption {
				@apply bg-muted block h-full w-full rounded-r-sm p-4;

				& > ul.statistics {
					@apply m-0 flex list-none flex-col gap-8 p-0;

					& > li {
						@apply m-0 grid place-items-center p-0;

						& > span {
							@apply tabular-nums tracking-wide;
						}
					}
				}
			}
		}

		& > header {
			@apply mb-8 flex items-end justify-between;

			& > div {
				@apply flex flex-col;

				& > span#price {
					@apply text-2xl font-medium tabular-nums tracking-wide;
				}
			}
		}

		& > p {
			@apply text-muted-foreground mt-2;
		}
	}
</style>
