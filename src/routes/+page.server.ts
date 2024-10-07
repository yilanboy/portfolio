import type { PageServerLoad } from './$types';
import { Locale, Theme } from '$lib/enums';

export const load: PageServerLoad = async ({ cookies }) => {
	let locale: Locale;
	let theme: Theme;

	if (Object.values(Locale).includes(cookies.get('locale') as Locale)) {
		locale = cookies.get('locale') as Locale;
	} else {
		cookies.set('locale', Locale.En, { path: '/', httpOnly: false });
		locale = Locale.En;
	}

	if (Object.values(Theme).includes(cookies.get('theme') as Theme)) {
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
