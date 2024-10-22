import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'sans-poppins': [
					"'Noto Sans TC', 'Noto Sans SC', 'Noto Sans JP', 'Poppins'",
					...defaultTheme.fontFamily.sans
				],
				caveat: ["'Caveat'", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				blink: {
					'50%': { opacity: 0 }
				}
			},
			animation: {
				blink: 'blink 0.7s infinite'
			}
		}
	},
	plugins: []
};
