import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'sans-poppins': ["'Noto Sans TC', 'Poppins',sans-serif", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
