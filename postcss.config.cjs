const cssnano = require("cssnano")

const mode = process.env.NODE_ENV
const dev = mode === "development"

const config = {
	plugins: [
		require("tailwindcss/nesting"),
		require("tailwindcss"),
		require("autoprefixer"),
		!dev &&
		cssnano({
			preset: "default"
		})
	]
}

module.exports = config
