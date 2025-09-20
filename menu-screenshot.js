const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('http://localhost:3001');

  // Click the menu button to open the hamburger menu (using a more general selector)
  await page.click('button:has(svg):not([aria-label="User Account"]):not([aria-label="Toggle theme"]):not([aria-label="Wishlist"]):not([aria-label="Shopping Cart"])');
  await page.waitForTimeout(1000); // Wait for animation

  // Take screenshot of hamburger open (light mode)
  await page.screenshot({ path: 'hamburger-light.png' });

  // Toggle dark mode
  await page.click('button[aria-label="Toggle theme"]');
  await page.waitForTimeout(1000); // Wait for theme change

  // Take screenshot of hamburger open (dark mode)
  await page.screenshot({ path: 'hamburger-dark.png' });

  await browser.close();
})();