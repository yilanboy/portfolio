import type { PageServerLoad } from './$types';
import { Locale, Theme } from '$lib/enums';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, cookies }) => {
	const locales: string[] = Object.values(Locale);
	const themes: string[] = Object.values(Theme);
	let locale: Locale;
	let theme: Theme;

	if (locales.includes(params.locale ?? '')) {
		locale = params.locale as Locale;
		cookies.set('locale', params.locale, { path: '/' });
	} else if (locales.includes(cookies.get('locale') ?? '')) {
		locale = cookies.get('locale') as Locale;
		cookies.set('locale', cookies.get('locale') as Locale, { path: '/' });

		redirect(301, `/${locale}`);
	} else {
		cookies.set('locale', Locale.En, { path: '/' });

		redirect(301, `/${Locale.En}`);
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
