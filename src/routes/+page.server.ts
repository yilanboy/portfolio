import type { PageServerLoad } from './$types';
import { Locale } from '$lib/enums';

export const load: PageServerLoad = async ({ cookies }) => {
	let locale: Locale;

	if (Object.values(Locale).includes(cookies.get('locale') as Locale)) {
		locale = cookies.get('locale') as Locale;
	} else {
		cookies.set('locale', Locale.En, { path: '/', httpOnly: false });
		locale = Locale.En;
	}

	return {
		locale: locale
	};
};
