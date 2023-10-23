const { test, expect } = require("@playwright/test");

const { email, password } = require("../user.js");

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[name="email"]');   
  await page.fill('[placeholder="Email"]', email);    
  await page.click('[name="password"]');
  await page.fill('[placeholder="Пароль"]', password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  const header = await page.locator("h2").first();
  await expect(header).toHaveText("Моё обучение");
  await browser.close();
});
test("Unsuccessful authorization", async ({ page }) => {
await page.goto("https://netology.ru/?modal=sign_in");
await page.click('[name="email"]');   
await page.fill('[placeholder="Email"]', notEmail);    
await page.click('[name="password"]');
await page.fill('[placeholder="Пароль"]', notPassword);
await page.locator('[data-testid="login-submit-btn"]').click();
await expect(page.locator("data-testid=login-error-hint")).toContainText("Вы ввели неправильно логин или пароль");
await browser.close();
});