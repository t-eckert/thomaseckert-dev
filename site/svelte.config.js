import preprocess from 'svelte-preprocess';
const netlify = require('@sveltejs/adapter-netlify')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
		postcss: true
	})],

	kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
