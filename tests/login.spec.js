const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { loginData } = require('../utils/testData');

//Valid Scenario

test('Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await loginPage.verifyLoginSuccess();
});


//Invalid or negative scenario validation - Invalid Username

test('Invalid Username Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await loginPage.login(
    loginData.invalidUser.username,
    loginData.validUser.password
  );

  await loginPage.verifyInvalidLogin();

});

//Invalid or negative scenario validation - Invalid Password

test('Invalid Password Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await loginPage.login(
    loginData.validUser.username,
    loginData.invalidUser.password
  );

  await loginPage.verifyInvalidLogin();

});

//Logout button Validation

test('Logout Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await loginPage.login(
    loginData.emptyUser.username,
    loginData.emptyUser.password
  );

  await loginPage.verifyInvalidLogin();
});

// Empty Login Validation
test('Empty Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
   await loginPage.login(
    loginData.emptyUser.username,
    loginData.emptyUser.password
  );

  await loginPage.verifyInvalidLogin();
});