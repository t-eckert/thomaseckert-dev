const defaultTheme = require("tailwindcss/defaultTheme")

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	plugins: [
		require('@tailwindcss/typography')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
};

module.exports = config;
