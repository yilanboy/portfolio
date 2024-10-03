import { expect, test } from '@playwright/test';

test('user can visit root page', async ({ page }) => {
	const response = await page.request.get('/');
	await expect(response).toBeOK();
});

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Allen Jiang' })).toBeVisible();
});

test('visitor can see introduction section', async ({ page }) => {
	await page.goto('/');
	const section = await page.$('#introduction');
	expect(section).not.toBeNull();
});

test('visitor can see projects section', async ({ page }) => {
	await page.goto('/');
	const section = await page.$('#projects');
	expect(section).not.toBeNull();
});

test('visitor can see experience section', async ({ page }) => {
	await page.goto('/');
	const section = await page.$('#experience');
	expect(section).not.toBeNull();
});

test('visitor can see tech-stack section', async ({ page }) => {
	await page.goto('/');
	const section = await page.$('#skill-stack');
	expect(section).not.toBeNull();
});

test('visitor can see about section', async ({ page }) => {
	await page.goto('/');
	const section = await page.$('#about');
	expect(section).not.toBeNull();
});
