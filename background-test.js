const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the home page
  await page.goto('http://localhost:3001');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check if the body has the gradient background class
  const hasGradientClass = await page.evaluate(() => {
    return document.body.classList.contains('with-gradient-bg');
  });
  
  console.log('Body has gradient background class:', hasGradientClass);
  
  // Check if there are floating elements
  const floatingElements = await page.$$('.floating-element');
  console.log('Number of floating elements:', floatingElements.length);
  
  // Check if there's a canvas element (Liquid Ether)
  const canvasElements = await page.$$('canvas');
  console.log('Number of canvas elements:', canvasElements.length);
  
  // Check localStorage for background preference
  const backgroundPreference = await page.evaluate(() => {
    return localStorage.getItem('backgroundPreference');
  });
  console.log('Background preference in localStorage:', backgroundPreference);
  
  // Take a screenshot
  await page.screenshot({ path: 'background-test.png' });
  
  await browser.close();
})();