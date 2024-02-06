module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],

	theme: {
		extend: {},
		colors: {
			'pale-azure': '#f7f4f8',
			'pale-ivory': '#f8eee3',
			'component-light': '#eef7fd',
			danube: '#33539E',
		},
	},
	plugins: [require('flowbite/plugin')],
};
