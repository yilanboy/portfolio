import { Theme, Locale } from '$lib/enums';
import { writable } from 'svelte/store';

export const theme = writable(Theme.Light);
export const locale = writable(Locale.En);
