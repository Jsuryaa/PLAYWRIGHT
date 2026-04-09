// import { test, expect } from '@playwright/test';

// test("login test", async ({page}) => {
//     await page.goto("https://www.facebook.com/");
//     await page.fill("//input[@name='email']", "surya");
//     await page.fill("//input[@name='pass']", "@123456.");
//     await page.click("//button[@type='submit']");
//     await expect(page).toHaveURL(/facebook.com/);
// });


// import { test, expect } from '@playwright/test';

// test("shop test", async ({}) => {
//     const browser = await chromium.launch({
//     headless: false,   // show browser
//     slowMo: 1000       // 1 second delay between each action
//   });

//   const page = await browser.newPage();

//   await page.goto("https://www.saucedemo.com/");
//   await page.fill("#user-name", "standard_user");
//   await page.fill("#password",  "secret_sauce");
//   await page.click("#login-button");
//   await page.click("#add-to-cart-sauce-labs-backpack");
//   await page.click(".shopping_cart_link");
//   await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
//   await page.close();
// });




import { test, expect, chromium } from '@playwright/test';

test("shop test", async ({}) => {

  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000
  });

  const page = await browser.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password",  "secret_sauce");
  await page.click("#login-button");
  await page.screenshot({path:'screenshots/logintest.png', fullPage:true});
  await page.click("#add-to-cart-sauce-labs-backpack");
  await page.click(".shopping_cart_link");

  await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  await browser.close();

});



