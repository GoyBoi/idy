import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';

export function WishlistIcon() {
  const { wishlist } = useWishlist();
  
  return (
    <Link to="/wishlist" className="p-2 rounded-full hover:bg-foreground/10 transition-colors relative" aria-label="Wishlist">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <span className="sr-only">Wishlist</span>
      {wishlist.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {wishlist.length}
        </span>
      )}
    </Link>
  );
}