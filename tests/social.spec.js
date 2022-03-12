import { test, expect } from '@playwright/test';

test('check videos are loading', async ({ page }) => {
	await page.goto('http://localhost:3000/social');
	const videos = page.locator('ul');
	await expect(videos).not.toBeEmpty();
});
