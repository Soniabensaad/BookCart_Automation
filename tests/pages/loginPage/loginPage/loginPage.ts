import BasePage from '../basePage';

export default class LoginPage extends BasePage {
  private readonly usernameInput = this.page.getByPlaceholder('Username');
  private readonly passwordInput = this.page.getByPlaceholder('Password');
  private readonly loginButton = this.page.locator('mat-card-actions button', { hasText: 'Login' });

  async enterUsername() {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.enterText(this.usernameInput, 'Nat');
  }

  async enterPassword() {
    await this.enterText(this.passwordInput, '12345678Ab');
  }

  async clickButton() {
    await this.clickElement(this.loginButton);
  }
}
