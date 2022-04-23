import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"

const mdsvexConfig = {
	"extensions": [".md", ".svx"],
	"smartypants": {
		"dashes": "oldschool"
	},
	"remarkPlugins": [],
	"rehypePlugins": [],
	"layout": {
		// "writing": "./src/layouts/writing.svelte",
		// "notes": "./src/layouts/notes.svelte",
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess({
		postcss: true
	}), mdsvex(mdsvexConfig)],

	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					"src": "./src",
				}
			}
		}
	}
};

export default config;
