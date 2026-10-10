const { test, expect } = require('@playwright/test');

test('verify get started navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/intro/);
});