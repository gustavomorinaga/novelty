<script lang="ts">
	import { Button, type ButtonEvents, type ButtonProps } from '@novelty/ui/components';

	/* eslint-disable @typescript-eslint/no-unused-vars */

	type $$Props = ButtonProps;
	type $$Events = ButtonEvents;
</script>

<div class="cta">
	<Button size="lg" class="w-full text-base font-semibold" {...$$restProps}>
		<slot />
	</Button>
</div>

<style lang="postcss">
	div.cta {
		@apply bg-background fixed inset-x-0 bottom-0 p-4;
	}
</style>
