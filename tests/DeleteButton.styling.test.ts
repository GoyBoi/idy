import { test, expect } from '@playwright/test';

test('DeleteButton styling test', async ({ page }) => {
  // Navigate to the button showcase page
  await page.goto('http://localhost:3001/button-showcase');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check that the destructive button exists
  const destructiveButton = page.locator('button:has-text("Destructive Button")');
  await expect(destructiveButton).toBeVisible();
  
  // Check that the button has proper styling by verifying it has dimensions
  const boundingBox = await destructiveButton.boundingBox();
  expect(boundingBox).not.toBeNull();
  expect(boundingBox?.width).toBeGreaterThan(20);
  expect(boundingBox?.height).toBeGreaterThan(20);
  
  // Check that the button has a background color (indicating it's styled)
  const backgroundColor = await destructiveButton.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });
  
  // Verify that the button is not transparent (indicating it has styling)
  expect(backgroundColor).not.toEqual('rgba(0, 0, 0, 0)');
});