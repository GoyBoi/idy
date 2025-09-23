import { test, expect } from '@playwright/test';

test('Button showcase page loads correctly', async ({ page }) => {
  // Navigate to the button showcase page
  await page.goto('http://localhost:3001/button-showcase');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check that the page title is correct
  await expect(page).toHaveTitle(/Mmwafrika Store/);
  
  // Check that the main heading exists
  const heading = page.locator('h1:has-text("Button Showcase")');
  await expect(heading).toBeVisible();
  
  // Check that at least one button variant is visible
  const defaultButton = page.locator('button:has-text("Default Button")');
  await expect(defaultButton).toBeVisible();
  
  // Check that the button has proper styling
  const backgroundColor = await defaultButton.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });
  
  // Verify that the button is not transparent (indicating it has styling)
  expect(backgroundColor).not.toEqual('rgba(0, 0, 0, 0)');
});