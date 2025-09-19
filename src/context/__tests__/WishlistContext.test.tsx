import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WishlistProvider, useWishlist } from '../WishlistContext';

describe('WishlistContext', () => {
  // Create a test component that uses the wishlist context
  const TestComponent: React.FC = () => {
    const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    
    return (
      <div>
        <div data-testid="wishlist-count">{wishlist.length}</div>
        <button onClick={() => addToWishlist({ id: 1, name: 'Test Product', price: 10, image: 'test.jpg' })}>
          Add to Wishlist
        </button>
        <button onClick={() => removeFromWishlist(1)}>
          Remove from Wishlist
        </button>
        {wishlist.map(item => (
          <div key={item.id} data-testid={`wishlist-item-${item.id}`}>
            <span data-testid={`item-name-${item.id}`}>{item.name}</span>
          </div>
        ))}
        <div data-testid="is-in-wishlist">
          {isInWishlist(1) ? 'In Wishlist' : 'Not in Wishlist'}
        </div>
      </div>
    );
  };

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should add items to the wishlist', () => {
    render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
    
    fireEvent.click(screen.getByText('Add to Wishlist'));
    
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');
    expect(screen.getByTestId('wishlist-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-name-1')).toHaveTextContent('Test Product');
    expect(screen.getByTestId('is-in-wishlist')).toHaveTextContent('In Wishlist');
  });

  it('should remove items from the wishlist', () => {
    render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    fireEvent.click(screen.getByText('Add to Wishlist'));
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('Remove from Wishlist'));
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
    expect(screen.queryByTestId('wishlist-item-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('is-in-wishlist')).toHaveTextContent('Not in Wishlist');
  });

  it('should toggle items in the wishlist', () => {
    const TestComponentWithToggle: React.FC = () => {
      const { wishlist, addToWishlist } = useWishlist();
      
      return (
        <div>
          <button onClick={() => addToWishlist({ id: 1, name: 'Test Product', price: 10, image: 'test.jpg' })}>
            Toggle Wishlist
          </button>
          <div data-testid="wishlist-count">{wishlist.length}</div>
        </div>
      );
    };

    render(
      <WishlistProvider>
        <TestComponentWithToggle />
      </WishlistProvider>
    );

    fireEvent.click(screen.getByText('Toggle Wishlist'));
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('Toggle Wishlist'));
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
  });

  it('should persist wishlist to localStorage', () => {
    const { unmount } = render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    fireEvent.click(screen.getByText('Add to Wishlist'));
    
    // Unmount and remount to test persistence
    unmount();
    
    render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );
    
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('1');
    expect(screen.getByTestId('wishlist-item-1')).toBeInTheDocument();
  });

  it('should handle corrupted localStorage data gracefully', () => {
    // Set corrupted data in localStorage
    localStorage.setItem('wishlist', 'invalid json');
    
    // This should not throw an error
    expect(() => {
      render(
        <WishlistProvider>
          <TestComponent />
        </WishlistProvider>
      );
    }).not.toThrow();
    
    // Should initialize with an empty wishlist
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
  });

  it('should handle non-array localStorage data gracefully', () => {
    // Set non-array data in localStorage
    localStorage.setItem('wishlist', JSON.stringify({}));
    
    // This should not throw an error
    expect(() => {
      render(
        <WishlistProvider>
          <TestComponent />
        </WishlistProvider>
      );
    }).not.toThrow();
    
    // Should initialize with an empty wishlist
    expect(screen.getByTestId('wishlist-count')).toHaveTextContent('0');
  });
});