import type { PageServerLoad } from './$types';
import { Locale, Theme } from '$lib/enums';
import { redirect } from '@sveltejs/kit';
import type { Translation } from '$lang/type/index.type';
import english from '$lang/en';
import simplifiedChinese from '$lang/zh-CN';
import traditionalChinese from '$lang/zh-TW';
import japanese from '$lang/ja';
import type { Post } from '$lib/types';

export const load: PageServerLoad = async ({ params, cookies, fetch }) => {
	const locales: string[] = Object.values(Locale);
	const themes: string[] = Object.values(Theme);
	const translations: { [Name: string]: Translation } = {
		en: english,
		'zh-cn': simplifiedChinese,
		'zh-tw': traditionalChinese,
		ja: japanese
	};
	let locale: Locale;
	let theme: Theme;
	let body: {
		data: Post[];
	};

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

	const response = await fetch('https://docfunc.com/api/posts');

	if (response.ok) {
		body = await response.json();
	} else {
		body = { data: [] };
	}

	return {
		locale: locale,
		theme: theme,
		translation: translations[locale],
		posts: body.data
	};
};
