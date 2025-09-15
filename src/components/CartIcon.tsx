import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export function CartIcon() {
  const { cartCount } = useCart();
  
  return (
    <Link to="/cart" className="p-2 rounded-full hover:bg-white/10 transition-colors relative" aria-label="Shopping Cart">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span className="sr-only">Cart</span>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}