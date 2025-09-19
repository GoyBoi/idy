# Component Testing Documentation

## Overview

This document explains the testing setup for the components in the Mmwafrika Store frontend application.

## Tested Components

### Navbar

The Navbar component is tested to ensure it renders correctly with all required elements:

1. Logo ("Mmwafrika")
2. Navigation links (Home, Shop, Collections, About, Contact, Community)
3. Cart and Wishlist icons
4. User Account and Menu buttons

The tests use mocks for the CartIcon and WishlistIcon components to isolate the Navbar component.

### CartContext

The CartContext is tested with comprehensive unit tests covering:

1. Adding items to the cart
2. Increasing quantity when adding the same item multiple times
3. Removing items from the cart
4. Updating item quantity
5. Calculating cart total correctly
6. Removing item when quantity is set to 0 or less
7. Persisting cart to localStorage
8. Handling corrupted localStorage data gracefully
9. Handling non-array localStorage data gracefully

### WishlistContext

The WishlistContext is tested with comprehensive unit tests covering:

1. Adding items to the wishlist
2. Removing items from the wishlist
3. Toggling items in the wishlist
4. Persisting wishlist to localStorage
5. Handling corrupted localStorage data gracefully
6. Handling non-array localStorage data gracefully

### LoadingSpinner

The LoadingSpinner component is tested to ensure it renders correctly with:

1. Default size (md)
2. Small size (sm)
3. Large size (lg)
4. Custom CSS classes

### Shop Page

The Shop page is tested to ensure it renders correctly with:

1. Loading state initially
2. Products after loading completes
3. Proper handling of asynchronous operations

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

The current tests cover the core functionality of the components and contexts. Future improvements could include:

1. Testing user interactions with fireEvent
2. Adding snapshot tests for component rendering
3. Testing edge cases and error conditions
4. Adding integration tests for user flows
5. Adding end-to-end tests with Cypress or Puppeteer
6. Adding code coverage reporting
7. Adding accessibility tests