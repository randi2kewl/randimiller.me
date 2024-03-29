import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        adapter: adapter(),
        //target: '#svelte'
        prerender: {
            crawl: true,
            enabled: true,
            //force: "continue",
            entries: ['*'],
        },
    }
};


export default config;
