import { describe, it, expect, afterEach } from 'vitest';
import { mount, unmount, flushSync } from 'svelte';
import Step from './Step.svelte';

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
	if (instance) {
		await unmount(instance);
		instance = null;
	}
	document.body.innerHTML = '';
});

function getRootLink() {
	return document.querySelector('a') as HTMLAnchorElement | null;
}

describe('Step', () => {
	it('renders an anchor that points to the provided url', () => {
		instance = mount(Step, {
			target: document.body,
			props: {
				name: 'My Project',
				url: 'https://example.com',
				forwardText: 'Go'
			}
		});
		flushSync();

		const link = getRootLink();
		expect(link).not.toBeNull();
		expect(link?.getAttribute('href')).toBe('https://example.com');
	});

	it('opens the link in a new tab via target="_blank"', () => {
		instance = mount(Step, {
			target: document.body,
			props: {
				name: 'My Project',
				url: 'https://example.com',
				forwardText: 'Go'
			}
		});
		flushSync();

		expect(getRootLink()?.getAttribute('target')).toBe('_blank');
	});

	it('renders the project name as a heading', () => {
		instance = mount(Step, {
			target: document.body,
			props: {
				name: 'Cool Demo',
				url: 'https://example.com',
				forwardText: 'Go'
			}
		});
		flushSync();

		const heading = document.querySelector('h3');
		expect(heading?.textContent?.trim()).toBe('Cool Demo');
	});

	it('renders the forwardText label', () => {
		instance = mount(Step, {
			target: document.body,
			props: {
				name: 'Cool Demo',
				url: 'https://example.com',
				forwardText: 'Visit'
			}
		});
		flushSync();

		expect(document.body.textContent).toContain('Visit');
	});
});
