import { test, expect } from '@playwright/test';

test.describe('DigitalHero Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/digital-hero-demo');
  });

  test('should display the hero section with proper content', async ({ page }) => {
    // Check that the hero section is visible
    const heroSection = await page.locator('section.relative.min-h-[70vh]');
    await expect(heroSection).toBeVisible();
    
    // Check that the main title is displayed
    await expect(page.getByText('Celebrate African Heritage')).toBeVisible();
    
    // Check that the subtitle is displayed
    await expect(page.getByText('Discover authentic traditional clothing and handcrafted knitwear that tells the story of our rich cultural legacy')).toBeVisible();
    
    // Check that the buttons are displayed
    await expect(page.getByRole('button', { name: 'Explore Collection' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Collections' })).toBeVisible();
  });

  test('should have proper responsive behavior', async ({ page }) => {
    // Test on desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.getByText('Celebrate African Heritage')).toBeVisible();
    
    // Test on tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Celebrate African Heritage')).toBeVisible();
    
    // Test on mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Celebrate African Heritage')).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check that buttons have proper roles
    const exploreButton = await page.getByRole('button', { name: 'Explore Collection' });
    const viewButton = await page.getByRole('button', { name: 'View Collections' });
    
    await expect(exploreButton).toBeVisible();
    await expect(viewButton).toBeVisible();
  });

  test('should navigate to shop page when Explore Collection button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Explore Collection' }).click();
    await expect(page).toHaveURL(/.*\/shop/);
  });

  test('should navigate to collections page when View Collections button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'View Collections' }).click();
    await expect(page).toHaveURL(/.*\/collections/);
  });
});