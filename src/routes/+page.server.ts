import type { PageServerLoad } from './$types';
import { Locale } from '$lib/enums';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	redirect(301, `/${Locale.En}`);
};
