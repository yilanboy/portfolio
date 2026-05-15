import { describe, it, expect, beforeEach } from 'vitest';
import { flushSync } from 'svelte';
import { theme } from './theme.svelte';
import { Theme } from './enums';

describe('theme shared state', () => {
	// The module exports a singleton so it leaks between tests. Reset before each.
	beforeEach(() => {
		theme.current = Theme.Light;
	});

	it('defaults to Light at the start of a test', () => {
		expect(theme.current).toBe(Theme.Light);
	});

	it('reflects assignments to theme.current', () => {
		theme.current = Theme.Dark;
		expect(theme.current).toBe(Theme.Dark);

		theme.current = Theme.Light;
		expect(theme.current).toBe(Theme.Light);
	});

	it('notifies a $effect subscriber when theme.current changes', () => {
		const seen: Theme[] = [];

		const cleanup = $effect.root(() => {
			$effect(() => {
				seen.push(theme.current);
			});
		});

		flushSync();
		theme.current = Theme.Dark;
		flushSync();
		theme.current = Theme.Light;
		flushSync();

		cleanup();

		expect(seen).toEqual([Theme.Light, Theme.Dark, Theme.Light]);
	});

	it('exposes a singleton — the same instance is observed across imports', async () => {
		theme.current = Theme.Dark;

		const { theme: reimported } = await import('./theme.svelte');
		expect(reimported.current).toBe(Theme.Dark);
		expect(reimported).toBe(theme);
	});
});
