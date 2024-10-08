import type { PageServerLoad } from './$types';
import { Locale, Theme } from '$lib/enums';

export const load: PageServerLoad = async ({ cookies }) => {
	let locale: Locale;
	let theme: Theme;

	const locales: string[] = Object.values(Locale);
	const themes: string[] = Object.values(Theme);

	if (locales.includes(cookies.get('locale') ?? '')) {
		locale = cookies.get('locale') as Locale;
	} else {
		cookies.set('locale', Locale.En, { path: '/', httpOnly: false });
		locale = Locale.En;
	}

	if (themes.includes(cookies.get('theme') ?? '')) {
		theme = cookies.get('theme') as Theme;
	} else {
		cookies.set('theme', Theme.Light, { path: '/', httpOnly: false });
		theme = Theme.Light;
	}

	return {
		locale: locale,
		theme: theme
	};
};
