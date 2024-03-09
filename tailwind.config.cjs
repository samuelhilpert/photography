const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				'text': '#ede6e7',
				'background': '#130d0d',
				'primary': '#c7a4a7',
				'secondary': '#724044',
				'accent': '#b1656b',
			   },
		}
	}
};

module.exports = config;