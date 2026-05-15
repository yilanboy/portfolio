import { describe, it, expect } from 'vitest';
import { formatDate } from './helpers';

describe('formatDate', () => {
	it('formats a valid ISO date string into a localized human-readable form', () => {
		const result = formatDate('2024-01-15T10:30:00Z');

		expect(result).toBeTypeOf('string');
		expect(result.length).toBeGreaterThan(0);
		expect(result).not.toBe('2024-01-15T10:30:00Z');
	});

	it('contains the year for a valid ISO date', () => {
		const result = formatDate('2024-01-15T10:30:00Z');

		expect(result).toMatch(/2024/);
	});

	it('returns the original input as a fallback when the input is not a valid date', () => {
		const input = 'not-a-real-date';
		const result = formatDate(input);

		expect(result).toBe(input);
	});

	it('returns the original input when given an empty string', () => {
		const result = formatDate('');

		expect(result).toBe('');
	});

	it('produces a stable representation for the same input across calls', () => {
		const a = formatDate('2024-06-30T00:00:00Z');
		const b = formatDate('2024-06-30T00:00:00Z');

		expect(a).toBe(b);
	});
});
