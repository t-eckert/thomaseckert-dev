const defaultTheme = require("tailwindcss/defaultTheme")

const config = {
	mode: "jit",
	purge: {
		content: ["./src/**/*.{html,js,svelte,ts}"],
		safelist: ["justify-center", "px-2", "py-0.5", "text-gray-600", "rounded-full", "group", "cursor-pointer", "flex", "flex-row", "items-center", "gap-2", "transition", "hover:text-gray-900", "hover:bg-yellow-100", "text-gray-500", "inline-block", "w-4", "h-4", "transition", "group-hover:rotate-0", "group-hover:text-gray-900", "motion-safe:group-hover:rotate-12", "no-underline", "hover:rotate-0", "hover:text-gray-900", "motion-safe:hover:rotate-12"]
	},
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
