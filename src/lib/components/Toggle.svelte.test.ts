import { describe, it, expect, afterEach } from 'vitest';
import { mount, unmount, flushSync } from 'svelte';
import Toggle from './Toggle.svelte';

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
	if (instance) {
		await unmount(instance);
		instance = null;
	}
	document.body.innerHTML = '';
});

function getSwitch() {
	return document.querySelector('button[role="switch"]') as HTMLButtonElement | null;
}

describe('Toggle', () => {
	it('renders a switch role button', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: {}
		});
		flushSync();

		expect(getSwitch()).not.toBeNull();
	});

	it('defaults to aria-checked="false" when isEnabled is omitted', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: {}
		});
		flushSync();

		expect(getSwitch()?.getAttribute('aria-checked')).toBe('false');
	});

	it('reflects isEnabled=true via aria-checked="true"', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: { isEnabled: true }
		});
		flushSync();

		expect(getSwitch()?.getAttribute('aria-checked')).toBe('true');
	});

	it('flips aria-checked from false to true after a click', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: { isEnabled: false }
		});
		flushSync();

		const btn = getSwitch();
		expect(btn?.getAttribute('aria-checked')).toBe('false');

		btn?.click();
		flushSync();

		expect(getSwitch()?.getAttribute('aria-checked')).toBe('true');
	});

	it('flips aria-checked back to false after a second click', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: { isEnabled: false }
		});
		flushSync();

		const btn = getSwitch();
		btn?.click();
		flushSync();
		btn?.click();
		flushSync();

		expect(getSwitch()?.getAttribute('aria-checked')).toBe('false');
	});

	it('exposes a visually hidden text label for assistive tech', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: {}
		});
		flushSync();

		const srOnly = getSwitch()?.querySelector('.sr-only');
		expect(srOnly?.textContent?.trim()).toBe('Use setting');
	});

	it('renders as type="button" so it never submits a surrounding form', () => {
		instance = mount(Toggle, {
			target: document.body,
			props: {}
		});
		flushSync();

		expect(getSwitch()?.getAttribute('type')).toBe('button');
	});
});
