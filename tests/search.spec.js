const { test, expect } = require('@playwright/test');

test('verify search box', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.keyboard.press('/');
  await expect(page.locator('.DocSearch-Input')).toBeVisible();
});