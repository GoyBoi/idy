import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../Navbar';

// Mock the CartIcon and WishlistIcon components
jest.mock('../CartIcon', () => ({
  CartIcon: () => <div data-testid="cart-icon">Cart Icon</div>
}));

jest.mock('../WishlistIcon', () => ({
  WishlistIcon: () => <div data-testid="wishlist-icon">Wishlist Icon</div>
}));

describe('Navbar', () => {
  const renderNavbar = () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  it('should render the navbar with logo and navigation links', () => {
    renderNavbar();
    
    expect(screen.getByText('Mmwafrika')).toBeInTheDocument();
    // Check that we have navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('should render cart and wishlist icons', () => {
    renderNavbar();
    
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    expect(screen.getByTestId('wishlist-icon')).toBeInTheDocument();
  });

  it('should render user account and menu buttons', () => {
    renderNavbar();
    
    expect(screen.getByLabelText('User Account')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle Menu')).toBeInTheDocument();
  });
});
