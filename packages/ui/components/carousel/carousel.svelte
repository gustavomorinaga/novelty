<script lang="ts">
	import { onMount } from 'svelte';
	import { register, type SwiperContainer } from 'swiper/element/bundle';
	import { cn } from '$ui/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SwiperEvents, SwiperOptions } from 'swiper/types';

	type $$Props = HTMLAttributes<SwiperContainer> & { options: SwiperOptions };
	type $$Events = SwiperEvents;

	let ref: SwiperContainer;
	let className: $$Props['class'] = undefined;
	export let options: $$Props['options'] = {};
	export { className as class };

	onMount(() => {
		register();
		Object.assign(ref, options);
		ref.initialize();
	});
</script>

<swiper-container
	class={cn('relative block w-full overflow-hidden', className)}
	{...$$restProps}
	bind:this={ref}
	init="false"
>
	<slot />
</swiper-container>
