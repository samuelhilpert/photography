const config = {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

    plugins: [require('flowbite/plugin')],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                'text': '#e7e7f6',
                'background': '#070715',
                'primary': '#9c9cbd',
                'secondary': '#2f2f38',
                'accent': '#babaee',
            },
        }
    }
};

module.exports = config;