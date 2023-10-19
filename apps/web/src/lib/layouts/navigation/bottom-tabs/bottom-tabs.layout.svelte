<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Icon } from '@novelty/ui/components';
	import type { ComponentProps } from 'svelte';

	$: currentPage = $page.url.pathname;

	const routes = [
		{
			path: '/',
			icon: 'mingcute:home-4-fill'
		},
		{
			path: '/favorites',
			icon: 'mingcute:bookmark-fill'
		},
		{
			path: '/cart',
			icon: 'mingcute:shopping-bag-1-fill'
		},
		{
			path: '/settings',
			icon: 'mingcute:settings-3-fill'
		}
	] satisfies Array<{ path: string; icon: ComponentProps<Icon>['icon'] }>;

	const getVariant = (isCurrentRoute: boolean) =>
		(isCurrentRoute ? 'primary' : 'ghost') as ComponentProps<Button>['variant'];
</script>

<nav class="bottom-tabs">
	<ul>
		{#each routes as route}
			{@const variant = getVariant(currentPage === route.path)}

			<li>
				<Button size="icon" href={route.path} {variant}>
					<Icon class="text-xl" icon={route.icon} />
				</Button>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	nav.bottom-tabs {
		@apply fixed inset-x-4 bottom-4 z-50 block;

		& > ul {
			@apply bg-muted m-0 mx-auto flex w-[75vw] list-none justify-between rounded-lg p-4 shadow;

			& > li {
				@apply m-0 p-0;
			}
		}
	}
</style>
