import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: {
			roboto: ['Roboto Condensed', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#f9f9f9',
				primaryDark: '#494949',
			},
			backgroundImage: {
				'start-page': "url('/background4.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
