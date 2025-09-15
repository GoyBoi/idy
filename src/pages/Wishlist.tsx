import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof wishlist[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(item.id);
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-8 text-center">Your Wishlist</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl font-merienda mb-8">Your wishlist is empty</p>
            <Link to="/shop">
              <Button className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((item) => (
              <Card key={item.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
                <div className="aspect-[4/5] w-full mx-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover rounded-lg w-full h-full" 
                  />
                </div>
                <CardHeader className="p-0 mt-2">
                  <CardTitle className="text-sm font-bold text-white font-merienda mt-2">{item.name}</CardTitle>
                  <CardDescription className="text-xs text-white/80 font-merienda mb-2">${item.price.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <span className="text-sm font-bold text-white font-merienda">${item.price.toFixed(2)}</span>
                </CardContent>
                <CardFooter className="p-0 mt-2 flex flex-col gap-2">
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="add-to-cart-btn w-full py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-[1.02] hover:shadow-[0_0_15px_#234645] transition-all duration-300 font-merienda"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="wishlist-btn w-full py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-[1.02] hover:shadow-[0_0_15px_#234645] transition-all duration-300 font-merienda"
                  >
                    Remove from Wishlist
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}