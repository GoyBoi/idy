import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

// Accept either a product object or individual props for backward compatibility
interface ProductCardProps {
  product?: Product;
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  id, 
  name, 
  description, 
  price, 
  image 
}) => {
  // Use product object if provided, otherwise use individual props
  const item = product || { id, name, description, price, image } as Product;
  
  // Use wishlist context and local state for visual feedback
  const { addToWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isInWishlistContext = isInWishlist(item.id);
  
  // Local state for visual feedback
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle wishlist toggle
  const handleWishlistToggle = () => {
    if (item.id && item.name && item.price && item.image) {
      addToWishlist({ id: item.id, name: item.name, price: item.price, image: item.image });
    }
  };
  
  // Function to handle add to cart
  const handleAddToCart = () => {
    if (item.id && item.name && item.price && item.image) {
      addToCart({ id: item.id, name: item.name, price: item.price, image: item.image });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000); // Reset after 2s
    }
  };
  
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] hover:scale-[1.03]">
      {/* Image container with absolute positioned wishlist icon */}
      <div className="relative aspect-square w-full bg-muted">
        <img 
          src={item.image?.startsWith('/') ? item.image : `/${item.image}`} 
          alt={item.name} 
          className="h-full w-full object-cover"
        />
        
        {/* Wishlist Heart Icon (Top Right Overlay) */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleWishlistToggle}
          className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1 shadow-sm backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={isInWishlistContext ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`h-6 w-6 ${
              isInWishlistContext 
                ? "fill-red-500 text-red-500" 
                : "text-muted-foreground"
            }`} 
          />
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 bg-card">
        <h3 className="text-center text-foreground">{item.name}</h3>
        <p className="mt-1 text-center text-lg font-bold text-foreground">
          R {item.price?.toFixed(2)}
        </p>
        <Button 
          variant="outline" 
          onClick={handleAddToCart}
          className="mt-auto w-full"
          disabled={isAdded}
        >
          {isAdded ? "✓ Added!" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;