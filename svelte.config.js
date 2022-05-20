// @filename: index.js
import path from "path"
import { mdsvex } from "mdsvex"

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const mdsvexConfig = {
	"extensions": [".md", ".svx"],
	"smartypants": {
		"dashes": "oldschool"
	},
	"remarkPlugins": [],
	"rehypePlugins": [],
	"layout": {
		"writing": "./src/layouts/writing.svelte",
		"notes": "./src/layouts/notes.svelte",
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	preprocess: [preprocess({
		postcss: true
	}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					src: path.resolve("./src"),
				}
			}
		}
	}
};

export default config;
