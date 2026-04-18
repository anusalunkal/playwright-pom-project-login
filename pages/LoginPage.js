const { expect } = require('@playwright/test');
class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  // Actions
  async goto() {
    await this.page.goto('https://practice.expandtesting.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.flashMessage)
      .toContainText('You logged into a secure area!');
  }
  

  async verifyInvalidLogin(){
    await expect(this.flashMessage).toContainText(
    /Your username is invalid!|Your password is invalid!/
  );
  }

  async logout() {
    await this.logoutButton.click();
  }

  async verifyLogoutSuccess() {
    await expect(this.flashMessage)
      .toContainText('You logged out of the secure area!');
  }
}

module.exports = { LoginPage };