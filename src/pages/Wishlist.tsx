import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { TrashIcon } from 'lucide-react';

export function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addingToCartId, setAddingToCartId] = useState<number | null>(null);
  const [notification, setNotification] = useState<{message: string, show: boolean} | null>(null);

  const handleAddToCart = async (item: typeof wishlist[0]) => {
    setAddingToCartId(item.id);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    setAddingToCartId(null);
  };

  const handleRemoveFromWishlist = (itemId: number, itemName: string) => {
    removeFromWishlist(itemId);
    // Show notification
    setNotification({message: `${itemName} removed from wishlist`, show: true});
    setTimeout(() => {
      setNotification(null);
    }, 1500);
  };

  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-8 text-center">Your Wishlist</h1>
        
        {/* Notification */}
        {notification && notification.show && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in">
            {notification.message}
          </div>
        )}
        
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
              <Card key={item.id} className="p-4 rounded-xl bg-card/10 backdrop-blur-md shadow-lg border border-border transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
                <div className="aspect-[4/5] w-full mx-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover rounded-lg w-full h-full" 
                  />
                </div>
                <CardHeader className="p-0 mt-2 text-center">
                  <CardTitle className="text-sm font-bold text-foreground font-merienda mt-2">{item.name}</CardTitle>
                  <CardDescription className="text-xs text-foreground/80 font-merienda mb-2">${item.price.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2 text-center">
                  <span className="text-sm font-bold text-foreground font-merienda">${item.price.toFixed(2)}</span>
                </CardContent>
                <CardFooter className="p-0 mt-2 flex flex-col gap-2">
                  <button 
                    onClick={() => handleAddToCart(item)}
                    disabled={addingToCartId === item.id}
                    className="add-to-cart-btn w-full py-2 rounded-lg bg-card/10 backdrop-blur-md border border-border shadow-md text-foreground hover:scale-[1.02] hover:shadow-[0_0_15px_#234645] transition-all duration-300 font-merienda flex items-center justify-center disabled:opacity-50"
                  >
                    {addingToCartId === item.id ? (
                      <LoadingSpinner size="sm" />
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </button>
                  <Button 
                    variant="destructive"
                    onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    aria-label="Remove from wishlist"
                  >
                    <TrashIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
                    <span className="ml-2">Remove from Wishlist</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}