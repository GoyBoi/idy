# Mobile Menu Tests

This directory contains Playwright tests for the mobile menu component across different devices and orientations.

## Test Coverage

The tests verify the mobile menu behavior on:
1. Mobile devices in portrait mode
2. Mobile devices in landscape mode
3. Tablet/iPad modes

## Test Scenarios

- Menu visibility and functionality on mobile devices
- Overlay behavior in different orientations
- Menu accessibility features
- Proper ARIA attributes
- Keyboard navigation support
- Scrolling behavior within menu
- Orientation change consistency
- Content accessibility across all modes

## Running the Tests

To run the Playwright tests:

```bash
# Run all tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Run specific test file
npx playwright test mobile-menu.test.ts

# Run tests for a specific browser
npx playwright test --project=chromium
```

## Test Structure

- Device configurations for mobile and tablet devices
- Viewport settings for portrait and landscape orientations
- Menu visibility and interaction tests
- Accessibility compliance checks
- Scrolling behavior verification
- Orientation change handling
- Content accessibility across devices and orientations