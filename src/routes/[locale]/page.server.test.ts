import { describe, it, expect, vi, beforeEach } from 'vitest';
import { load } from './+page.server';
import { Locale, Theme } from '$lib/enums';

function makeCookies(initial: Record<string, string> = {}) {
	const store: Record<string, string> = { ...initial };

	return {
		store,
		jar: {
			get: vi.fn((key: string) => store[key]),
			set: vi.fn((key: string, value: string) => {
				store[key] = value;
			})
		}
	};
}

const samplePosts = [
	{
		id: 1,
		title: 'Hello',
		excerpt: 'world',
		created_at: '2024-01-01T00:00:00Z',
		updated_at: '2024-01-01T00:00:00Z',
		url: 'https://example.com/1'
	}
];

function okFetch(body: unknown) {
	return vi.fn(async () =>
		Promise.resolve({
			ok: true,
			json: async () => body
		})
	);
}

function failingFetch() {
	return vi.fn(async () =>
		Promise.resolve({
			ok: false,
			json: async () => ({ data: [] })
		})
	);
}

type LoadArgs = Parameters<typeof load>[0];

async function callLoad(args: LoadArgs) {
	try {
		const result = await load(args);
		return { result, redirect: null as null | { status: number; location: string } };
	} catch (e) {
		// SvelteKit redirect throws an object with status + location
		if (e && typeof e === 'object' && 'status' in e && 'location' in e) {
			return {
				result: null,
				redirect: {
					status: (e as { status: number }).status,
					location: (e as { location: string }).location
				}
			};
		}
		throw e;
	}
}

describe('[locale]/+page.server load', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('returns locale + theme + posts when params.locale is valid and fetch succeeds', async () => {
		const cookies = makeCookies();
		const fetch = okFetch({ data: samplePosts });

		const { result, redirect } = await callLoad({
			params: { locale: Locale.En },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(redirect).toBeNull();
		expect(result).toEqual({
			locale: Locale.En,
			theme: Theme.Light,
			posts: samplePosts
		});
	});

	it('persists params.locale in the cookie when params.locale is valid', async () => {
		const cookies = makeCookies();
		const fetch = okFetch({ data: [] });

		await callLoad({
			params: { locale: Locale.Ja },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(cookies.jar.set).toHaveBeenCalledWith('locale', Locale.Ja, { path: '/' });
	});

	it('redirects to the cookie locale (301) when params.locale is invalid but the cookie holds a valid locale', async () => {
		const cookies = makeCookies({ locale: Locale.Cn });
		const fetch = okFetch({ data: [] });

		const { redirect } = await callLoad({
			params: { locale: 'fr' },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(redirect).not.toBeNull();
		expect(redirect?.status).toBe(301);
		expect(redirect?.location).toBe(`/${Locale.Cn}`);
	});

	it('redirects to /zh-tw (301) when neither params.locale nor the cookie are valid', async () => {
		const cookies = makeCookies();
		const fetch = okFetch({ data: [] });

		const { redirect } = await callLoad({
			params: { locale: 'invalid' },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(redirect).not.toBeNull();
		expect(redirect?.status).toBe(301);
		expect(redirect?.location).toBe(`/${Locale.Tw}`);
		expect(cookies.jar.set).toHaveBeenCalledWith('locale', Locale.Tw, { path: '/' });
	});

	it('returns the theme stored in the cookie when it is a known theme value', async () => {
		const cookies = makeCookies({ theme: Theme.Dark });
		const fetch = okFetch({ data: [] });

		const { result } = await callLoad({
			params: { locale: Locale.En },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(result?.theme).toBe(Theme.Dark);
	});

	it('falls back to Light theme and writes a non-httpOnly theme cookie when none is set', async () => {
		const cookies = makeCookies();
		const fetch = okFetch({ data: [] });

		const { result } = await callLoad({
			params: { locale: Locale.En },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(result?.theme).toBe(Theme.Light);
		expect(cookies.jar.set).toHaveBeenCalledWith('theme', Theme.Light, {
			path: '/',
			httpOnly: false
		});
	});

	it('returns an empty posts array when the upstream fetch is not ok', async () => {
		const cookies = makeCookies();
		const fetch = failingFetch();

		const { result } = await callLoad({
			params: { locale: Locale.En },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(result?.posts).toEqual([]);
	});

	it('hits the docfunc.com posts endpoint via the provided fetch', async () => {
		const cookies = makeCookies();
		const fetch = okFetch({ data: [] });

		await callLoad({
			params: { locale: Locale.En },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		expect(fetch).toHaveBeenCalledWith('https://docfunc.com/api/posts');
	});

	it('propagates a network failure when the posts fetch rejects (no swallow)', async () => {
		// The load function only handles `ok: false`. A rejected fetch should bubble
		// up so SvelteKit can render an error page rather than silently serving an
		// empty list when the network is broken.
		const cookies = makeCookies();
		const fetch = vi.fn(async () => {
			throw new Error('network down');
		});

		await expect(
			load({
				params: { locale: Locale.En },
				cookies: cookies.jar,
				fetch
			} as unknown as LoadArgs)
		).rejects.toThrow('network down');
	});

	it('writes the locale cookie before redirecting when the cookie locale is the only valid source', async () => {
		const cookies = makeCookies({ locale: Locale.Ja });
		const fetch = okFetch({ data: [] });

		await callLoad({
			params: { locale: 'fr' },
			cookies: cookies.jar,
			fetch
		} as unknown as LoadArgs);

		// the implementation rewrites the cookie before throwing the redirect
		expect(cookies.jar.set).toHaveBeenCalledWith('locale', Locale.Ja, { path: '/' });
	});
});
