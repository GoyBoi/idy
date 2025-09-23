import React from 'react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { DynamicCard } from '@/components/ui/dynamic-card';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  description, 
  price, 
  image,
  className = ''
}) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image });
    }
  };

  return (
    <div className={`group relative ${className}`}>
      <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(35,70,69,0.5)]">
        {/* Animated border elements */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl border border-transparent">
            {/* Top border animation */}
            <div className="absolute -top-px left-0 h-px w-1/3 bg-gradient-to-r from-teal-500 via-transparent to-transparent animate-move-right"></div>
            {/* Right border animation */}
            <div className="absolute -right-px top-0 w-px h-1/3 bg-gradient-to-b from-teal-500 via-transparent to-transparent animate-move-down"></div>
            {/* Bottom border animation */}
            <div className="absolute -bottom-px right-0 h-px w-1/3 bg-gradient-to-l from-teal-500 via-transparent to-transparent animate-move-left"></div>
            {/* Left border animation */}
            <div className="absolute -left-px bottom-0 w-px h-1/3 bg-gradient-to-t from-teal-500 via-transparent to-transparent animate-move-up"></div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Product image */}
          <div className="aspect-[4/5] w-full mb-4 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/images/Medium/1000006827.webp';
              }}
            />
          </div>
          
          {/* Wishlist button */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleWishlist();
              }}
              className={`p-2 rounded-full ${
                isInWishlist(id) 
                  ? 'text-red-500 bg-red-500/20' 
                  : 'text-foreground hover:text-red-500 bg-black/50'
              }`}
              aria-label={isInWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill={isInWishlist(id) ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
          
          {/* Product info */}
          <h3 className="text-2xl font-bold font-sans mb-2">
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {name}
            </span>
          </h3>
          
          <p className="text-foreground/80 font-merienda mb-4">
            {description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold font-sans">
              ${price.toFixed(2)}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#234645] transition-all duration-300 font-merienda"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;