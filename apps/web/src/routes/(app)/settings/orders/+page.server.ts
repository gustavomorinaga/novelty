import type { HTMLImgAttributes } from 'svelte/elements';

type TOrder = { slug: string; title: string; price: number; orderID: string; status: 'processing' | 'delivered' | 'cancelled'; cover: HTMLImgAttributes };

export const load = async () => {
	const orders: Array<TOrder> = [
		{
			slug: 'above-all-else',
			title: 'Above All Else',
			price: 20,
			orderID: '1234567890',
			status: 'processing',
			cover: {
				src: '/covers/above-all-else-cover-hires.jpg',
				alt: 'Above All Else'
			}
		},
		{
			slug: 'baa-baa-black-sheep',
			title: 'Baa Baa Black Sheep',
			price: 10,
			orderID: '1234567891',
			status: 'delivered',
			cover: {
				src: '/covers/baa-baa-black-sheep-hires.jpg',
				alt: 'Baa Baa Black Sheep'
			}
		},
		{
			slug: 'camel-rider',
			title: 'Camel Rider',
			price: 15,
			orderID: '1234567892',
			status: 'cancelled',
			cover: {
				src: '/covers/camel-rider-hires.jpg',
				alt: 'Camel Rider'
			}
		},
		{
			slug: 'dancing-with-the-dinosaurs',
			title: 'Dancing with the Dinosaurs',
			price: 25,
			orderID: '1234567893',
			status: 'processing',
			cover: {
				src: '/covers/dancing-with-the-dinosaurs-hires.jpg',
				alt: 'Dancing with the Dinosaurs'
			}
		},
		{
			slug: 'earth-hour',
			title: 'Earth Hour',
			price: 30,
			orderID: '1234567894',
			status: 'processing',
			cover: {
				src: '/covers/earth-hour-hires.jpg',
				alt: 'Earth Hour'
			}
		},
		{
			slug: 'faces-of-the-moon',
			title: 'Faces of the Moon',
			price: 35,
			orderID: '1234567895',
			status: 'delivered',
			cover: {
				src: '/covers/faces-of-the-moon-hires.jpg',
				alt: 'Faces of the Moon'
			}
		}
	];

	return { orders };
};
