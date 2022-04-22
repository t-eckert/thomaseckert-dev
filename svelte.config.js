import { mdsvex } from "mdsvex"
import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import { resolve } from "path"
import svg from '@poppanator/sveltekit-svg'

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
	"extensions": [".svelte", ...mdsvexConfig.extensions],
	preprocess: [preprocess({
		postcss: true
	}), mdsvex(mdsvexConfig)],
	kit: {
		adapter: netlify(),
		vite: {
			resolve: {
				alias: {
					"$": resolve("./src"),
				}
			},
			plugins: [svg()]
		}
	}
};

export default config;
