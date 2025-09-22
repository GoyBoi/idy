import React from 'react';
import { render, screen } from '@testing-library/react';
import { MobileMenu } from '../src/components/MobileMenu';
import { BrowserRouter } from 'react-router-dom';

// Mock the ThemeToggle component
jest.mock('../src/components/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>
}));

describe('MobileMenu', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    // Check if menu button is rendered
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();

    // Check if account section is present
    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();

    // Check if navigation section is present
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Collections')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();

    // Check if theme section is present
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();

    // Check if contact section is present
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('+27 79 042 7032')).toBeInTheDocument();
    expect(screen.getByText('mmwafrika.prideclothing@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Order via WhatsApp')).toBeInTheDocument();

    // Check if logout option is present
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('has proper keyboard shortcuts', () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    // Check if keyboard shortcuts are displayed
    expect(screen.getByText('⇧⌘P')).toBeInTheDocument();
    expect(screen.getByText('⌘I')).toBeInTheDocument();
    expect(screen.getByText('⌘S')).toBeInTheDocument();
    expect(screen.getByText('⇧⌘Q')).toBeInTheDocument();
  });

  it('has proper links and buttons', () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    );

    // Check if navigation links are present
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');

    const shopLink = screen.getByText('Shop').closest('a');
    expect(shopLink).toHaveAttribute('href', '/shop');

    const collectionsLink = screen.getByText('Collections').closest('a');
    expect(collectionsLink).toHaveAttribute('href', '/collections');

    const aboutLink = screen.getByText('About').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByText('Contact').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');

    const communityLink = screen.getByText('Community').closest('a');
    expect(communityLink).toHaveAttribute('href', '/community');

    // Check if external links are present
    const phoneLink = screen.getByText('+27 79 042 7032').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'https://wa.me/27790427032');
    expect(phoneLink).toHaveAttribute('target', '_blank');

    const emailLink = screen.getByText('mmwafrika.prideclothing@gmail.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:mmwafrika.prideclothing@gmail.com');

    const whatsappLink = screen.getByText('Order via WhatsApp').closest('a');
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/27790427032');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
  });
});