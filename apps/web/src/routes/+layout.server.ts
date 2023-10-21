import { PUBLIC_API_URI } from '$env/static/public';
import type { ComponentProps } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';
import type { ProfileLayout } from '$lib/layouts';

type TBook = { slug: string; title: string; price: number; cover: HTMLImgAttributes };

export const load = async () => {
	const profile: ComponentProps<ProfileLayout>['profile'] = {
		firstName: 'John',
		lastName: 'Doe',
		displayName: 'John Doe',
		email: 'john.doe@example.com',
		avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=john.doe@example.com'
	};

	const books: Array<TBook> = [
		{
			slug: 'above-all-else',
			title: 'Above All Else',
			price: 20,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/above-all-else-cover-hires.jpg`,
				alt: 'Above All Else'
			}
		},
		{
			slug: 'baa-baa-black-sheep',
			title: 'Baa Baa Black Sheep',
			price: 10,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/baa-baa-black-sheep-hires.jpg`,
				alt: 'Baa Baa Black Sheep'
			}
		},
		{
			slug: 'camel-rider',
			title: 'Camel Rider',
			price: 15,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/camel-rider-hires.jpg`,
				alt: 'Camel Rider'
			}
		},
		{
			slug: 'dancing-with-the-dinosaurs',
			title: 'Dancing with the Dinosaurs',
			price: 25,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/dancing-with-the-dinosaurs-hires.jpg`,
				alt: 'Dancing with the Dinosaurs'
			}
		},
		{
			slug: 'earth-hour',
			title: 'Earth Hour',
			price: 30,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/earth-hour-hires.jpg`,
				alt: 'Earth Hour'
			}
		},
		{
			slug: 'faces-of-the-moon',
			title: 'Faces of the Moon',
			price: 35,
			cover: {
				src: `${PUBLIC_API_URI}/public/covers/faces-of-the-moon-hires.jpg`,
				alt: 'Faces of the Moon'
			}
		}
	];

	return { profile, books };
};
