import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Experience from './Experience.svelte';
import { Locale } from '$lib/enums';

describe('Experience Component', () => {
	it('should add and remove event listeners on mount/unmount', async () => {
		const addEventListenerSpy = vi.spyOn(HTMLElement.prototype, 'addEventListener');
		const removeEventListenerSpy = vi.spyOn(HTMLElement.prototype, 'removeEventListener');

		const { unmount } = render(Experience, { props: { locale: Locale.En } });

		// Check if addEventListener was called for mousemove and mouseleave
		const mouseMoveCalls = addEventListenerSpy.mock.calls.filter((call) => call[0] === 'mousemove');
		const mouseLeaveCalls = addEventListenerSpy.mock.calls.filter(
			(call) => call[0] === 'mouseleave'
		);

		expect(mouseMoveCalls.length).toBeGreaterThan(0);
		expect(mouseLeaveCalls.length).toBeGreaterThan(0);

		await unmount();

		// Check if removeEventListener was called for mousemove and mouseleave
		const removeMouseMoveCalls = removeEventListenerSpy.mock.calls.filter(
			(call) => call[0] === 'mousemove'
		);
		const removeMouseLeaveCalls = removeEventListenerSpy.mock.calls.filter(
			(call) => call[0] === 'mouseleave'
		);

		// The remove calls should match the add calls count
		expect(removeMouseMoveCalls.length).toBe(mouseMoveCalls.length);
		expect(removeMouseLeaveCalls.length).toBe(mouseLeaveCalls.length);
	});

	it('should scale item on mousemove', async () => {
		render(Experience, { props: { locale: Locale.En } });

		// Wait for render
		await new Promise(r => setTimeout(r, 0));

		const skillItem = document.querySelector('.skill-item') as HTMLElement;
		expect(skillItem).toBeTruthy();
		if (!skillItem) return;

		// Trigger mousemove
		const rect = skillItem.getBoundingClientRect();
		// Simulate mouse in center
		const clientX = rect.left + rect.width / 2;

		const event = new MouseEvent('mousemove', {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: clientX
		});

		skillItem.dispatchEvent(event);

		// The logic runs synchronously.
		const scale = skillItem.style.getPropertyValue('--scale');

		expect(scale).not.toBe('');
		expect(parseFloat(scale)).toBeGreaterThan(1);
	});
});
