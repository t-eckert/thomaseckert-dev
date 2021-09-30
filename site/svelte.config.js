import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    preprocess: [preprocess({
		postcss: true
	}), mdsvex(mdsvexConfig)],

    kit: {
		adapter: netlify(),
		target: '#svelte'
	}
};

export default config;
