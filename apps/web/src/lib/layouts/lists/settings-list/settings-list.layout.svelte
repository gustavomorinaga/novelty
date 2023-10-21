<script lang="ts">
	import { Button, Icon } from '@novelty/ui/components';
	import type { ComponentProps } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type TSetting = {
		title: string;
		description: string;
		icon: ComponentProps<Icon>['icon'];
		link: Required<Pick<HTMLAnchorAttributes, 'href'>> & Pick<HTMLAnchorAttributes, 'target'>;
	};

	const settings: Array<TSetting> = [
		{
			title: 'My Orders',
			description: 'View your orders',
			icon: 'mingcute:documents-fill',
			link: { href: '/settings/orders' }
		},
		{
			title: 'Payment Methods',
			description: 'Manage your payment methods',
			icon: 'mingcute:bank-card-fill',
			link: { href: '/settings/payment-methods' }
		},
		{
			title: 'My Books',
			description: 'View your books',
			icon: 'mingcute:book-5-fill',
			link: { href: '/settings/books' }
		},
		{
			title: 'Refer Friends',
			description: 'Earn rewards',
			icon: 'mingcute:group-fill',
			link: { href: 'refer-friends' }
		}
	];
</script>

<section id="settings">
	<ul>
		{#each settings as { title, description, icon, link }}
			<li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="setting" {...link}>
					<div>
						<Icon class="bg-card h-fit w-fit overflow-hidden rounded-full p-2 text-2xl" {icon} />

						<div>
							<span class="setting-name">{title}</span>
							<p class="setting-description muted">{description}</p>
						</div>
					</div>

					<div>
						<Button size="icon" variant="outline" {...link}>
							<Icon class="text-xl" icon="mingcute:right-fill" />
						</Button>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	section#settings {
		@apply bg-muted rounded-sm;

		& > ul {
			@apply m-0 flex list-none flex-col p-0;

			& > li {
				@apply m-0;

				& > a.setting {
					@apply flex items-center justify-between gap-4 p-4;

					& > div {
						@apply flex items-center gap-4;

						& span.setting-name {
							@apply font-medium;
						}

						& p.setting-description {
							@apply mt-0;
						}
					}
				}
			}
		}
	}
</style>
