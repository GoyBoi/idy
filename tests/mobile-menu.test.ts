import { test, expect } from '@playwright/test';

test.describe('Mobile Menu Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display mobile menu in portrait mode', async ({ page }) => {
    // Set viewport to mobile portrait mode
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that desktop navigation is hidden
    const desktopNav = await page.$('.hidden.lg\\:flex');
    expect(desktopNav).not.toBeNull();
    
    // Check that mobile menu button is visible
    const mobileMenuButton = await page.$('[aria-label="Menu"]');
    expect(mobileMenuButton).not.toBeNull();
    
    // Click the mobile menu button
    await mobileMenuButton!.click();
    
    // Wait for dropdown menu to appear
    await page.waitForSelector('[role="menu"]', { state: 'visible' });
    
    // Check that menu content is visible
    const menuContent = await page.$('[role="menu"]');
    expect(menuContent).not.toBeNull();
    
    // Check that navigation links are present
    const navLinks = await page.$$('a[href]');
    expect(navLinks.length).toBeGreaterThanOrEqual(6);
    
    // Check that contact information is present
    const contactInfo = await page.$$('.text-green-600, .text-teal-600');
    expect(contactInfo.length).toBeGreaterThanOrEqual(2);
  });

  test('should display mobile menu in landscape mode', async ({ page }) => {
    // Set viewport to mobile landscape mode
    await page.setViewportSize({ width: 667, height: 375 });
    
    // Check that desktop navigation is hidden
    const desktopNav = await page.$('.hidden.lg\\:flex');
    expect(desktopNav).not.toBeNull();
    
    // Check that mobile menu button is visible
    const mobileMenuButton = await page.$('[aria-label="Menu"]');
    expect(mobileMenuButton).not.toBeNull();
    
    // Click the mobile menu button
    await mobileMenuButton!.click();
    
    // Wait for dropdown menu to appear
    await page.waitForSelector('[role="menu"]', { state: 'visible' });
    
    // Check that menu content is visible
    const menuContent = await page.$('[role="menu"]');
    expect(menuContent).not.toBeNull();
    
    // Check menu width in landscape mode (should be wider)
    const boundingBox = await menuContent!.boundingBox();
    expect(boundingBox!.width).toBeGreaterThan(200);
    
    // Check that navigation links are present
    const navLinks = await page.$$('a[href]');
    expect(navLinks.length).toBeGreaterThanOrEqual(6);
    
    // Check that contact information is present
    const contactInfo = await page.$$('.text-green-600, .text-teal-600');
    expect(contactInfo.length).toBeGreaterThanOrEqual(2);
  });

  test('should handle orientation changes correctly', async ({ page }) => {
    // Start in portrait mode
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Click the mobile menu button
    const mobileMenuButton = await page.$('[aria-label="Menu"]');
    await mobileMenuButton!.click();
    
    // Wait for dropdown menu to appear
    await page.waitForSelector('[role="menu"]', { state: 'visible' });
    
    // Verify menu is visible
    const menuContent = await page.$('[role="menu"]');
    expect(menuContent).not.toBeNull();
    
    // Check initial width
    const initialBoundingBox = await menuContent!.boundingBox();
    
    // Change to landscape mode
    await page.setViewportSize({ width: 667, height: 375 });
    
    // Wait a bit for any reflows
    await page.waitForTimeout(500);
    
    // Check that menu is still functional
    const updatedMenuContent = await page.$('[role="menu"]');
    expect(updatedMenuContent).not.toBeNull();
    
    // Check that menu width has adjusted for landscape
    const updatedBoundingBox = await updatedMenuContent!.boundingBox();
    expect(updatedBoundingBox!.width).toBeGreaterThan(initialBoundingBox!.width || 0);
    
    // Check that navigation links are still present
    const navLinks = await page.$$('a[href]');
    expect(navLinks.length).toBeGreaterThanOrEqual(6);
  });

  test('should have all required menu sections', async ({ page }) => {
    // Set viewport to mobile portrait mode
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Click the mobile menu button
    const mobileMenuButton = await page.$('[aria-label="Menu"]');
    await mobileMenuButton!.click();
    
    // Wait for dropdown menu to appear
    await page.waitForSelector('[role="menu"]', { state: 'visible' });
    
    // Check that all required sections are present
    expect(await page.getByText('My Account')).toBeVisible();
    expect(await page.getByText('Navigation')).toBeVisible();
    expect(await page.getByText('Theme')).toBeVisible();
    expect(await page.getByText('Contact Us')).toBeVisible();
    expect(await page.getByText('Log Out')).toBeVisible();
    
    // Check that all navigation links are present
    expect(await page.getByText('Home')).toBeVisible();
    expect(await page.getByText('Shop')).toBeVisible();
    expect(await page.getByText('Collections')).toBeVisible();
    expect(await page.getByText('About')).toBeVisible();
    expect(await page.getByText('Contact')).toBeVisible();
    expect(await page.getByText('Community')).toBeVisible();
  });
});