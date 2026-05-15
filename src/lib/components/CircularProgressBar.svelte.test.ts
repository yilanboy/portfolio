import { describe, it, expect, afterEach } from 'vitest';
import { mount, unmount, flushSync } from 'svelte';
import CircularProgressBar from './CircularProgressBar.svelte';

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
	if (instance) {
		await unmount(instance);
		instance = null;
	}
	document.body.innerHTML = '';
});

function getBar() {
	return document.querySelector('[role="progressbar"]') as HTMLElement | null;
}

describe('CircularProgressBar', () => {
	it('renders an element with role="progressbar"', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 50 }
		});
		flushSync();

		expect(getBar()).not.toBeNull();
	});

	it('exposes the progress value via aria-valuenow', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 42 }
		});
		flushSync();

		expect(getBar()?.getAttribute('aria-valuenow')).toBe('42');
	});

	it('clamps aria-valuenow at 100 when progress exceeds 100', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 250 }
		});
		flushSync();

		expect(getBar()?.getAttribute('aria-valuenow')).toBe('100');
	});

	it('reports an aria-valuemin of 0 and aria-valuemax of 100', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 10 }
		});
		flushSync();

		const bar = getBar();
		expect(bar?.getAttribute('aria-valuemin')).toBe('0');
		expect(bar?.getAttribute('aria-valuemax')).toBe('100');
	});

	it('uses the default progress of 3 when none is provided', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: {}
		});
		flushSync();

		expect(getBar()?.getAttribute('aria-valuenow')).toBe('3');
	});

	it('applies the provided bar color CSS variable inline', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 30, barColor: '#ff00aa' }
		});
		flushSync();

		const bar = getBar();
		expect(bar?.style.getPropertyValue('--bar-color')).toBe('#ff00aa');
	});

	it('applies the provided bar background color CSS variable inline', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 30, barBackgroundColor: '#001100' }
		});
		flushSync();

		const bar = getBar();
		expect(bar?.style.getPropertyValue('--bar-background-color')).toBe('#001100');
	});

	it('has an accessible name', () => {
		instance = mount(CircularProgressBar, {
			target: document.body,
			props: { progress: 80 }
		});
		flushSync();

		expect(getBar()?.getAttribute('aria-label')).toBeTruthy();
	});
});
