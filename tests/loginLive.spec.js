const{test,expect}=require('@playwright/test');

test('Login heroku App',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').fill('SuperSecretPassword!');

    await page.locator('.radius').click();

    await page.waitForTimeout(3000);
    await expect(page.locator('.subheader')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
});