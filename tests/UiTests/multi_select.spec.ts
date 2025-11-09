import { test, expect } from '@playwright/test';

test('multiselection', async ({ page }) => {
  // Updated URL - correct path for the select dropdown demo
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  
  // Wait for the multi-select element to be visible before interacting
  await page.waitForSelector('#multi-select', { state: 'visible' });
  
  await page.selectOption('#multi-select', [
    { label: 'California' },
    { label: 'Florida' },
    { label: 'New York' },
  ]);
});
