<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SwiperOptions } from 'swiper/types';

	type $$Props = HTMLAttributes<HTMLElement>;

	export let options: SwiperOptions = {};

	let ref: SwiperContainer & { initialize: () => void };
	let className: $$Props['class'] = undefined;
	export { className as class };

	onMount(() => {
		register();
		Object.assign(ref, options);
		ref.initialize();
	});
</script>

<swiper-container
	class={cn('relative block overflow-hidden', className)}
	{...$$restProps}
	bind:this={ref}
	init="false"
>
	<slot />
</swiper-container>
