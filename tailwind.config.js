/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'component-light': '#eef7fd',
				'pale-azure': '#f7f4f8',
				'pale-ivory': '#f8eee3',
				danube: '#33539E',
			},
		},
		fontSize: {
			sm: '0.9rem',
			base: '1.1rem',
			lg: '1.225rem',
			xl: '1.35rem',
			'2xl': '1.663rem',
			'3xl': '2.053rem',
			'4xl': '2.141rem',
			'5xl': '3.152rem',
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss/nesting'),
		require('tailwindcss-dir'),

		plugin(function ({ addVariant }) {
			addVariant('semi-dark', '.semi-dark &');
		}),
	],
};
