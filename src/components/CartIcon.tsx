import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

export function CartIcon() {
  const { cartCount } = useCart();
  
  return (
    <Button asChild variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
      <Link to="/cart" aria-label="Shopping Cart">
        <ShoppingCart size={16} aria-hidden="true" />
        <span className="sr-only">Cart</span>
        {cartCount > 0 && (
          <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
            {cartCount > 99 ? "99+" : cartCount}
          </Badge>
        )}
      </Link>
    </Button>
  );
}