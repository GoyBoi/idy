import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mmwafrika Store/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Shop Collection' });

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain shop.
  await expect(page).toHaveURL(/.*shop/);
});

// Import and run the DigitalHero tests
import './DigitalHero.test';