const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('http://localhost:3001');

  // Take screenshot of homepage
  await page.screenshot({ path: 'homepage-mobile.png' });

  // Click the hamburger menu button
  await page.click('button[aria-label="Menu"]');
  await page.waitForTimeout(1000); // Wait for animation

  // Take screenshot of hamburger menu open
  await page.screenshot({ path: 'hamburger-menu-open.png' });

  // Close the menu
  await page.click('button[aria-label="Close"]');
  await page.waitForTimeout(500);

  // Navigate to shop page
  await page.goto('http://localhost:3001/shop');
  await page.waitForTimeout(1000);

  // Take screenshot of shop page
  await page.screenshot({ path: 'shop-page.png' });

  await browser.close();
})();