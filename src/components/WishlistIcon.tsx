import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';

export function WishlistIcon() {
  const { wishlist } = useWishlist();
  
  return (
    <Link to="/wishlist" className="p-1.5 rounded-full hover:bg-foreground/10 transition-colors relative" aria-label="Wishlist">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#dc7030" />
      </svg>
      <span className="sr-only">Wishlist</span>
      {wishlist.length > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-white text-[0.6rem] rounded-full h-4 w-4 flex items-center justify-center" style={{ border: '1px solid #dc7030' }}>
          {wishlist.length}
        </span>
      )}
    </Link>
  );
}