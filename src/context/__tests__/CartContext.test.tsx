import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';

describe('CartContext', () => {
  // Create a test component that uses the cart context
  const TestComponent: React.FC = () => {
    const { cart, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
    
    return (
      <div>
        <div data-testid="cart-count">{cartCount}</div>
        <div data-testid="cart-total">{cartTotal.toFixed(2)}</div>
        <button onClick={() => addToCart({ id: 1, name: 'Test Product', price: 10, image: 'test.jpg' })}>
          Add to Cart
        </button>
        <button onClick={() => removeFromCart(1)}>
          Remove from Cart
        </button>
        <button onClick={() => updateQuantity(1, 3)}>
          Update Quantity
        </button>
        {cart.map(item => (
          <div key={item.id} data-testid={`cart-item-${item.id}`}>
            <span data-testid={`item-name-${item.id}`}>{item.name}</span>
            <span data-testid={`item-quantity-${item.id}`}>{item.quantity}</span>
            <span data-testid={`item-price-${item.id}`}>{item.price}</span>
          </div>
        ))}
      </div>
    );
  };

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('should add items to the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    
    fireEvent.click(screen.getByText('Add to Cart'));
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-name-1')).toHaveTextContent('Test Product');
    expect(screen.getByTestId('item-quantity-1')).toHaveTextContent('1');
    expect(screen.getByTestId('item-price-1')).toHaveTextContent('10');
  });

  it('should increase quantity when adding the same item multiple times', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Add to Cart'));
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('2');
    expect(screen.getByTestId('item-quantity-1')).toHaveTextContent('2');
  });

  it('should remove items from the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('Remove from Cart'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.queryByTestId('cart-item-1')).not.toBeInTheDocument();
  });

  it('should update item quantity', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    fireEvent.click(screen.getByText('Update Quantity'));
    
    expect(screen.getByTestId('item-quantity-1')).toHaveTextContent('3');
    expect(screen.getByTestId('cart-count')).toHaveTextContent('3');
  });

  it('should calculate cart total correctly', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(screen.getByTestId('cart-total')).toHaveTextContent('10.00');
    
    fireEvent.click(screen.getByText('Add to Cart'));
    expect(screen.getByTestId('cart-total')).toHaveTextContent('20.00');
    
    fireEvent.click(screen.getByText('Update Quantity'));
    expect(screen.getByTestId('cart-total')).toHaveTextContent('30.00');
  });

  it('should remove item when quantity is set to 0 or less', () => {
    const TestComponentWithZeroQuantity: React.FC = () => {
      const { cart, addToCart, updateQuantity } = useCart();
      
      return (
        <div>
          <button onClick={() => addToCart({ id: 1, name: 'Test Product', price: 10, image: 'test.jpg' })}>
            Add to Cart
          </button>
          <button onClick={() => updateQuantity(1, 0)}>
            Set Quantity to 0
          </button>
          <div data-testid="cart-count">{cart.length}</div>
          {cart.map(item => (
            <div key={item.id} data-testid={`cart-item-${item.id}`}>
              <span data-testid={`item-quantity-${item.id}`}>{item.quantity}</span>
            </div>
          ))}
        </div>
      );
    };

    render(
      <CartProvider>
        <TestComponentWithZeroQuantity />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    
    fireEvent.click(screen.getByText('Set Quantity to 0'));
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
    expect(screen.queryByTestId('cart-item-1')).not.toBeInTheDocument();
  });

  it('should persist cart to localStorage', () => {
    const { unmount } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    
    // Unmount and remount to test persistence
    unmount();
    
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('1');
    expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
  });

  it('should handle corrupted localStorage data gracefully', () => {
    // Set corrupted data in localStorage
    localStorage.setItem('cart', 'invalid json');
    
    // This should not throw an error
    expect(() => {
      render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
    }).not.toThrow();
    
    // Should initialize with an empty cart
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
  });

  it('should handle non-array localStorage data gracefully', () => {
    // Set non-array data in localStorage
    localStorage.setItem('cart', JSON.stringify({}));
    
    // This should not throw an error
    expect(() => {
      render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
    }).not.toThrow();
    
    // Should initialize with an empty cart
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0');
  });
});