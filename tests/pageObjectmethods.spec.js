import { expect, test } from "@playwright/test";

test("Getting the title of the page", async ({page}) => {
     await page.goto("https://practice.cydeo.com");
     let actualTitle = await page.title();
     //expect(actualTitle).toBe("Practice");
     console.log(actualTitle);

   
});

test("Getting the current URL of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com");
    let currentUrl = await page.url();
    console.log(currentUrl);
});

test("Set the window size of the browser", async ({ page }) => {
    await page.setViewportSize({width: 1850, height: 1080});
    await page.goto("https://practice.cydeo.com");


});