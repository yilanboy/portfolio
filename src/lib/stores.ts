import { Themes } from '$lib/enums';
import { writable } from 'svelte/store';

export const theme = writable(Themes.Light);
