import { Theme } from '$lib/enums';
import { writable } from 'svelte/store';

export const theme = writable(Theme.Light);
