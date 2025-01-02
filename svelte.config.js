import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$lang: './src/lang'
		},
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};

export default config;
