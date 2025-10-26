import { test } from '@playwright/test';
import LoginPage from './pages/loginPage/loginPage/loginPage';

//test POM Login Page
test('E2E', async ({ page }) => {
  const loginPage = new LoginPage(page);
 

  await page.goto('https://bookcart.azurewebsites.net/login/');
  await loginPage.enterUsername();
  await loginPage.enterPassword();
  await loginPage.clickButton();
  
  await page.waitForTimeout(3000);

});
