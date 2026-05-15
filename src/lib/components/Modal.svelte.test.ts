import { describe, it, expect, afterEach } from 'vitest';
import { mount, unmount, flushSync } from 'svelte';
import Modal from './Modal.svelte';

let instance: ReturnType<typeof mount> | null = null;

afterEach(async () => {
	if (instance) {
		await unmount(instance);
		instance = null;
	}
	document.body.innerHTML = '';
});

describe('Modal', () => {
	it('renders nothing when showModal is false', () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: false }
		});
		flushSync();

		expect(document.querySelector('[role="dialog"]')).toBeNull();
	});

	it('renders the dialog with proper a11y attributes when showModal is true', () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: true }
		});
		flushSync();

		const dialog = document.querySelector('[role="dialog"]') as HTMLElement | null;

		expect(dialog).not.toBeNull();
		expect(dialog?.getAttribute('aria-modal')).toBe('true');
		expect(dialog?.getAttribute('aria-labelledby')).toBe('modal-title');
	});

	it('renders a backdrop element when open', () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: true }
		});
		flushSync();

		expect(document.getElementById('backdrop')).not.toBeNull();
	});

	it('marks the dialog as inert and removes it after the close button is clicked', async () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: true }
		});
		flushSync();

		expect(document.querySelector('[role="dialog"]')).not.toBeNull();

		const closeButton = document.querySelector(
			'[role="dialog"] button[type="button"]'
		) as HTMLButtonElement | null;
		expect(closeButton).not.toBeNull();

		closeButton?.click();
		flushSync();

		// Svelte marks descendants as inert once their out-transition starts so the
		// dialog is no longer interactive even while the fade-out is in flight.
		expect(document.querySelector('[role="dialog"] [inert]')).not.toBeNull();

		// Wait long enough for the longest out-transition (delay 200 + duration 100).
		await new Promise((r) => setTimeout(r, 500));
		flushSync();

		expect(document.querySelector('[role="dialog"]')).toBeNull();
	});

	it('closes when the Escape key is pressed on window', async () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: true }
		});
		flushSync();

		expect(document.querySelector('[role="dialog"]')).not.toBeNull();

		window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
		flushSync();

		expect(document.querySelector('[role="dialog"] [inert]')).not.toBeNull();

		await new Promise((r) => setTimeout(r, 500));
		flushSync();

		expect(document.querySelector('[role="dialog"]')).toBeNull();
	});

	it('does not close on non-Escape keys', () => {
		instance = mount(Modal, {
			target: document.body,
			props: { showModal: true }
		});
		flushSync();

		window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));
		flushSync();

		expect(document.querySelector('[role="dialog"]')).not.toBeNull();
	});
});
