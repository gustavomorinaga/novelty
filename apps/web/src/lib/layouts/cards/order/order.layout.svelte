<script lang="ts">
	import { Badge, Card } from '@novelty/ui/components';
	import { currencyFormat } from '@novelty/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type TOrder = {
		slug: string;
		title: string;
		price: number;
		orderID: string;
		status: 'processing' | 'delivered' | 'cancelled';
		cover: HTMLImgAttributes;
	};

	export let order: TOrder;
</script>

<Card.Root class="grid grid-cols-4 p-4">
	<figure class="h-fit overflow-hidden rounded-sm">
		<img src={order.cover.src} alt={order.cover.alt} />
	</figure>

	<Card.Content class="col-span-3 px-4 py-0">
		<Card.Header class="p-0">
			<Card.Title>{order.title}</Card.Title>
			<Card.Description>Order ID: {order.orderID}</Card.Description>
		</Card.Header>

		<Card.Footer class="justify-between p-0 pt-4">
			<span>{currencyFormat({ value: order.price, preset: 'USD' })}</span>

			<Badge>{order.status.toUpperCase()}</Badge>
		</Card.Footer>
	</Card.Content>
</Card.Root>
