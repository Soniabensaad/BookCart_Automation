import { test, expect } from '@playwright/test';

test('Screenshots', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'load' });

  // Wait for username field (reliable selector)
  const usernameField = page.locator('input[name="username"]');
  await usernameField.waitFor({ state: 'visible', timeout: 20000 });

  // Fill credentials
  await usernameField.fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  // Screenshot after filling credentials
  await page.screenshot({ path: './screenshots/filled-form.png' });

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for dashboard element
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible({ timeout: 20000 });

  // Full-page screenshot
  await page.screenshot({ path: './screenshots/dashboard.png', fullPage: true });
});
