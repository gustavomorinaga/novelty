<swiper-slide {...$$restProps} class="slide">
	<slot />
</swiper-slide>

<style lang="postcss">
	swiper-slide.slide {
		@apply pointer-events-auto;
	}
</style>
