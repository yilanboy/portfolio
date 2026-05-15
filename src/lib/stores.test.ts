import { describe, it, expect, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import { theme } from './stores';
import { Theme } from './enums';

describe('theme store', () => {
	// The store is module-level state shared across tests. Reset before each.
	beforeEach(() => {
		theme.set(Theme.Light);
	});

	it('defaults to Light at the start of a test', () => {
		expect(get(theme)).toBe(Theme.Light);
	});

	it('notifies subscribers when set to Dark', () => {
		const seen: Theme[] = [];
		const unsubscribe = theme.subscribe((value) => seen.push(value));

		theme.set(Theme.Dark);
		theme.set(Theme.Light);

		unsubscribe();

		// initial + 2 updates
		expect(seen).toEqual([Theme.Light, Theme.Dark, Theme.Light]);
	});

	it('supports update() to toggle between themes', () => {
		theme.set(Theme.Light);

		theme.update((current) => (current === Theme.Light ? Theme.Dark : Theme.Light));
		expect(get(theme)).toBe(Theme.Dark);

		theme.update((current) => (current === Theme.Light ? Theme.Dark : Theme.Light));
		expect(get(theme)).toBe(Theme.Light);
	});

	it('stops notifying after unsubscribe', () => {
		const seen: Theme[] = [];
		const unsubscribe = theme.subscribe((value) => seen.push(value));

		unsubscribe();
		theme.set(Theme.Dark);
		// reset so we don't leak Dark into other tests
		theme.set(Theme.Light);

		// only the initial synchronous emission should be captured
		expect(seen.length).toBe(1);
	});
});
