import { test, expect } from '@playwright/test';

test('Screenshots', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Wait for the username field to be visible before interacting
  await expect(page.locator('#user-name')).toBeVisible();

  await page.screenshot({ path: './screenshots/saucedemo.png' });

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.screenshot({ path: './screenshots/login.png' });
});
