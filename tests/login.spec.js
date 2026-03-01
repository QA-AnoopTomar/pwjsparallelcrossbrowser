const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
 
test('custom login form - success scenario', async ({ page }) => {
  const filePath = path.join(__dirname, '..', 'login.html');
  const fileUrl = 'file://' + filePath;
 
  await page.goto(fileUrl);
 
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('button');
 
  await expect(page.locator('#message')).toBeVisible();
  await expect(page.locator('#message')).toHaveText('Login successful!');
});
 
 