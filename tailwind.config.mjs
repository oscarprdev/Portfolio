/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				inset: 'inset 20px 0 20px 0 rgba(255,255,255, 0.6), inset -20px 0 20px 0 rgba(0,0,0, 0.6)',
			},
			backgroundImage: {
				radial: 'radial-gradient(circle, rgba(255,255,255,0.5), rgba(0,0,0,0.5))',
			},
			colors: {
				dark: 'var(--dark-0)',
				dark05: 'var(--dark-0-5)',
				dark1: 'var(--dark-1)',
				dark2: 'var(--dark-2)',
				dark3: 'var(--dark-3)',
				dark4: 'var(--dark-4)',
				dark5: 'var(--dark-5)',

				light: 'var(--light-0)',
				light1: 'var(--light-1)',
				light2: 'var(--light-2)',
				light3: 'var(--light-3)',
				light4: 'var(--light-4)',
				light5: 'var(--light-5)',
			},
			width: {
				max: 'var(--max-width)',
			},
		},
	},
	plugins: [],
};
