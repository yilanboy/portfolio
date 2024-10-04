import { Themes, Locale } from '$lib/enums';
import { writable } from 'svelte/store';

export const theme = writable(Themes.Light);
export const locale = writable(Locale.English);
