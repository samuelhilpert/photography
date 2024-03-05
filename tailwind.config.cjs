const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				colors: {
					'text': '#e1f2f4',
					'background': '#030809',
					'primary': '#9fcfdd',
					'secondary': '#3f2b7a',
					'accent': '#8d45be',
				   },
			}
		}
	}
};

module.exports = config;