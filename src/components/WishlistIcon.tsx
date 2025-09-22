import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';

export function WishlistIcon() {
  const { wishlist } = useWishlist();
  
  return (
    <Button asChild variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
      <Link to="/wishlist" aria-label="Wishlist">
        <Heart size={16} aria-hidden="true" fill="#dc7030" stroke="#dc7030" />
        <span className="sr-only">Wishlist</span>
        {wishlist.length > 0 && (
          <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
            {wishlist.length > 99 ? "99+" : wishlist.length}
          </Badge>
        )}
      </Link>
    </Button>
  );
}