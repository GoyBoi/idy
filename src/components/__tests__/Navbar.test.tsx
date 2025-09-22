import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { BrowserRouter } from 'react-router-dom';

// Mock the components that we don't want to test in isolation
jest.mock('../src/components/CartIcon', () => ({
  CartIcon: () => <div data-testid="cart-icon">Cart</div>
}));

jest.mock('../src/components/WishlistIcon', () => ({
  WishlistIcon: () => <div data-testid="wishlist-icon">Wishlist</div>
}));

jest.mock('../src/components/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>
}));

jest.mock('../src/components/MobileMenu', () => ({
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>
}));

describe('Navbar', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if logo is rendered
    expect(screen.getByText('Mmwafrika')).toBeInTheDocument();

    // Check if desktop navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    // Check if icons are rendered
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('wishlist-icon')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });
});