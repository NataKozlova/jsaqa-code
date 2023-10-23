const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const { email, password } = require("./user.js");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2500,
    devtools: true
  });
  
  const page = await browser.newPage("https://netology.ru/?modal=sign_in");
  await page.goto("https://netology.ru/?modal=sign_in");
  const element = await page.$('[name="email"]');
  await element.click();
  await element.type(email);
  const element1= await page.$('[name="password"]');
  await element1.click();
  await element1.type(password);
  const element2 = await page.$('[data-testid="login-submit-btn"]');
  await element2.click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page).isVisible("text=Мои курсы и профессии");
})();