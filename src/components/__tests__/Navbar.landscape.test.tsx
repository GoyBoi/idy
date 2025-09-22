import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { BrowserRouter } from 'react-router-dom';

// Mock the ThemeProvider and contexts since they're not relevant for this test
jest.mock('./ThemeProvider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

jest.mock('../context/CartContext', () => ({
  CartProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useCart: () => ({ confirmation: null, hideConfirmation: jest.fn() })
}));

jest.mock('../context/WishlistContext', () => ({
  WishlistProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

// Mock the UI components
jest.mock('../components/CartIcon', () => ({
  CartIcon: () => <div data-testid="cart-icon">Cart</div>
}));

jest.mock('../components/WishlistIcon', () => ({
  WishlistIcon: () => <div data-testid="wishlist-icon">Wishlist</div>
}));

jest.mock('../components/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Toggle</div>
}));

// Mock the Sheet components to test the structure
jest.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children, open, onOpenChange }: any) => (
    <div data-testid="sheet" data-open={open} data-onopenchange={onOpenChange}>
      {children}
    </div>
  ),
  SheetTrigger: ({ children }: any) => <div data-testid="sheet-trigger">{children}</div>,
  SheetContent: ({ children, side, className }: any) => (
    <div data-testid="sheet-content" data-side={side} className={className}>
      {children}
    </div>
  ),
  SheetHeader: ({ children, className }: any) => (
    <div data-testid="sheet-header" className={className}>
      {children}
    </div>
  )
}));

// Mock Button component
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, variant, size, className, asChild, ...props }: any) => {
    if (asChild && children?.type) {
      return React.cloneElement(children, props);
    }
    return (
      <button data-testid="button" data-variant={variant} data-size={size} className={className} {...props}>
        {children}
      </button>
    );
  }
}));

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  MessageCircle: () => <div data-testid="message-icon">Message</div>,
  Mail: () => <div data-testid="mail-icon">Mail</div>,
  ShoppingBag: () => <div data-testid="shopping-bag-icon">Bag</div>,
  X: () => <div data-testid="close-icon">X</div>
}));

describe('Navbar - Hamburger Menu Landscape Improvements', () => {
  test('renders hamburger menu with correct classes for landscape mode', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the menu button is rendered
    const menuButton = screen.getByLabelText('Menu');
    expect(menuButton).toBeInTheDocument();

    // Check if Sheet components are rendered
    expect(screen.getByTestId('sheet')).toBeInTheDocument();
    expect(screen.getByTestId('sheet-trigger')).toBeInTheDocument();

    // Check if SheetContent has the correct classes for landscape improvements
    const sheetContent = screen.getByTestId('sheet-content');
    expect(sheetContent).toHaveClass('max-w-[320px]');
    expect(sheetContent).toHaveClass('landscape:max-w-[280px]');
  });

  test('applies landscape mode classes to menu content containers', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the menu button is rendered
    const menuButton = screen.getByLabelText('Menu');
    expect(menuButton).toBeInTheDocument();

    // Simulate opening the menu
    fireEvent.click(menuButton);

    // Check if SheetContent has the correct classes for landscape improvements
    const sheetContent = screen.getByTestId('sheet-content');
    expect(sheetContent).toHaveClass('max-w-[320px]');
    expect(sheetContent).toHaveClass('landscape:max-w-[280px]');
  });
});