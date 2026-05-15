import { expect, test } from '@playwright/test';

test('user can visit root page', async ({ page }) => {
	const response = await page.request.get('/en');
	await expect(response).toBeOK();
});

test('index page has expected h1', async ({ page }) => {
	await page.goto('/en');
	await expect(page.getByRole('heading', { name: 'Allen Jiang' })).toBeVisible();
});

test('visitor can see introduction section', async ({ page }) => {
	await page.goto('/en');
	const section = await page.$('#introduction');
	expect(section).not.toBeNull();
});

test('visitor can see projects section', async ({ page }) => {
	await page.goto('/en');
	const section = await page.$('#project');
	expect(section).not.toBeNull();
});

test('visitor can see experience section', async ({ page }) => {
	await page.goto('/en');
	const section = await page.$('#experience');
	expect(section).not.toBeNull();
});

test('visitor can see tech-stack section', async ({ page }) => {
	await page.goto('/en');
	const section = await page.$('#skill');
	expect(section).not.toBeNull();
});

test('visitor can see about section', async ({ page }) => {
	await page.goto('/en');
	const section = await page.$('#about');
	expect(section).not.toBeNull();
});

test('root URL redirects to /zh-tw by default', async ({ page }) => {
	const response = await page.goto('/');
	await expect(response).toBeOK();
	expect(page.url()).toMatch(/\/zh-tw\/?$/);
});

test.describe('every supported locale renders the page', () => {
	for (const locale of ['en', 'zh-cn', 'zh-tw', 'ja']) {
		test(`${locale} returns 200 and renders the main sections`, async ({ page }) => {
			const response = await page.request.get(`/${locale}`);
			expect(response.ok()).toBe(true);

			await page.goto(`/${locale}`);
			for (const id of ['introduction', 'project', 'experience', 'skill', 'about']) {
				const section = await page.$(`#${id}`);
				expect(section, `${locale} should render #${id}`).not.toBeNull();
			}
		});
	}
});

test('back-to-top button is hidden at top and becomes interactive after scrolling', async ({
	page
}) => {
	await page.goto('/en');

	const button = page.locator('button:has(svg)').first();

	// At the very top, the scroll-to-top button must not capture clicks.
	await page.evaluate(() => window.scrollTo(0, 0));
	await expect(button.locator('xpath=ancestor::div[1]')).toHaveClass(/pointer-events-none/);

	// After scrolling, it becomes pointer-interactive.
	await page.evaluate(() => window.scrollTo(0, 800));
	await expect(button.locator('xpath=ancestor::div[1]')).toHaveClass(/pointer-events-auto/);
});

test('a theme cookie is set after first visit', async ({ page, context }) => {
	await page.goto('/en');
	const cookies = await context.cookies();
	const themeCookie = cookies.find((c) => c.name === 'theme');
	expect(themeCookie?.value).toMatch(/^(light|dark)$/);
});

test('a locale cookie is set after first visit', async ({ page, context }) => {
	await page.goto('/en');
	const cookies = await context.cookies();
	const localeCookie = cookies.find((c) => c.name === 'locale');
	expect(localeCookie?.value).toBe('en');
});
