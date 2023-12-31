/** @type {import('tailwindcss').Config} */
export default {
	presets: [require('@novelty/ui/tailwind.config')],
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/components/**/*.{svelte,ts}']
};
