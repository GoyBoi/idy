# Testing Documentation

## Overview

This document explains the testing setup for the Mmwafrika Store frontend application.

## Testing Framework

We use Jest as our testing framework with React Testing Library for component testing.

## Configuration

The Jest configuration is in `jest.config.js`:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
```

## Test Structure

Tests are organized in `__tests__` directories within the relevant component or module folders.

## Running Tests

To run all tests:

```
npm test
```

To run tests in watch mode:

```
npm run test:watch
```

## Test Coverage

### Context Tests

1. **CartContext**
   - Adding items to the cart
   - Increasing quantity when adding the same item multiple times
   - Removing items from the cart
   - Updating item quantity
   - Calculating cart total correctly
   - Removing item when quantity is set to 0 or less
   - Persisting cart to localStorage
   - Handling corrupted localStorage data gracefully
   - Handling non-array localStorage data gracefully

2. **WishlistContext**
   - Adding items to the wishlist
   - Removing items from the wishlist
   - Toggling items in the wishlist
   - Persisting wishlist to localStorage
   - Handling corrupted localStorage data gracefully
   - Handling non-array localStorage data gracefully

### Component Tests

1. **Navbar**
   - Rendering all required elements
   - Proper linking to all pages
   - Correct styling and layout

2. **LoadingSpinner**
   - Rendering with default size
   - Rendering with small size
   - Rendering with large size
   - Rendering with custom CSS classes

## Writing Tests

When writing tests, follow these guidelines:

1. Use React Testing Library for component tests
2. Test user interactions with fireEvent
3. Test error conditions and edge cases
4. Ensure tests are independent and can run in isolation
5. Clean up localStorage before each test
6. Test persistence to localStorage
7. Test error handling for corrupted data
8. Mock loading states for components with asynchronous operations

## Recent Updates

### UI Component Improvements
- Updated add to cart functionality from icon buttons to text buttons for better clarity and accessibility
- Centered text alignment in promotional sections for improved visual presentation
- Centered "Explore Collection" buttons in collections cards for better visual balance
- Centered text alignment in all product cards across all pages for consistent UI
- Updated hamburger menu to use Shadcn UI Sheet component for improved mobile experience
- Removed labels from contact information in hamburger menu for cleaner UI
- Ensured hamburger menu overlay consistency across all small screens

## Future Improvements

1. Add tests for components (Navbar, CartIcon, etc.)
2. Add integration tests for user flows
3. Add end-to-end tests with Cypress or Puppeteer
4. Add code coverage reporting
5. Add accessibility tests