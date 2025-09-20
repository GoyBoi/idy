const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('http://localhost:3001');

  // Run axe-core scan
  const results = await new AxeBuilder({ page }).analyze();

  console.log('Axe-core scan results:');
  console.log('Violations:', results.violations.length);
  console.log('Passes:', results.passes.length);
  console.log('Incomplete:', results.incomplete.length);
  console.log('Inapplicable:', results.inapplicable.length);

  if (results.violations.length > 0) {
    console.log('\nViolations:');
    results.violations.forEach(violation => {
      console.log(`- ${violation.id}: ${violation.description}`);
      console.log(`  Impact: ${violation.impact}`);
      console.log(`  Help: ${violation.help}`);
      console.log(`  Help URL: ${violation.helpUrl}`);
      console.log('  Nodes:');
      violation.nodes.forEach(node => {
        console.log(`    - ${node.html}`);
      });
      console.log('');
    });
  } else {
    console.log('\nNo violations found!');
  }

  await browser.close();
})();