/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				fire: {
					50: '#ffe9e9',
					100: '#ffcfcf',
					200: '#ffb7b7',
					300: '#ff9f9f',
					400: '#ff8787',
					500: '#ff6f5f',
					600: '#ff5757',
					700: '#ff3f3f',
					800: '#ff2727',
					900: '#ff0f0f'
				}
			},
			boxShadow: {
				brand: '0px 0px 47px -8px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: []
};
