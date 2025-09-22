import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export function CartIcon() {
  const { cartCount } = useCart();
  
  return (
    <Link to="/cart" className="p-1.5 rounded-full hover:bg-foreground/10 transition-colors relative" aria-label="Shopping Cart">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span className="sr-only">Cart</span>
      {cartCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-teal-500 text-white text-[0.6rem] rounded-full h-4 w-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}