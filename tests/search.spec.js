const { test, expect } = require('@playwright/test');

test('Docs page opens', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page.locator('h1')).toContainText('Installation');
});