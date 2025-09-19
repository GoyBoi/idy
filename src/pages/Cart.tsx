import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [updatingItemId, setUpdatingItemId] = useState<number | null>(null);

  const handleUpdateQuantity = async (itemId: number, quantity: number) => {
    setUpdatingItemId(itemId);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    updateQuantity(itemId, quantity);
    setUpdatingItemId(null);
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-8 text-center">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl font-merienda mb-8">Your cart is empty</p>
            <Link to="/shop">
              <Button className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <Card key={item.id} className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="aspect-[4/5] w-32 mx-auto sm:mx-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="object-cover rounded-lg w-full h-full" 
                        />
                      </div>
                      <div className="flex-grow">
                        <CardHeader className="p-0 text-center">
                          <CardTitle className="text-lg font-bold text-white font-merienda">{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 my-4 text-center">
                          <p className="text-sm font-merienda text-white/80 mb-2">${item.price.toFixed(2)}</p>
                          <div className="flex items-center justify-center space-x-4">
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={updatingItemId === item.id}
                              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50"
                            >
                              {updatingItemId === item.id ? (
                                <LoadingSpinner size="sm" />
                              ) : (
                                <span>-</span>
                              )}
                            </button>
                            <span className="text-white font-merienda">{item.quantity}</span>
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              disabled={updatingItemId === item.id}
                              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50"
                            >
                              {updatingItemId === item.id ? (
                                <LoadingSpinner size="sm" />
                              ) : (
                                <span>+</span>
                              )}
                            </button>
                          </div>
                        </CardContent>
                        <CardFooter className="p-0 flex justify-between items-center">
                          <span className="text-lg font-bold text-white font-merienda">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors font-merienda"
                          >
                            Remove
                          </button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-white font-sans">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-merienda text-white/80">Subtotal</span>
                      <span className="font-merienda text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-merienda text-white/80">Shipping</span>
                      <span className="font-merienda text-white">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-merienda text-white/80">Tax</span>
                      <span className="font-merienda text-white">$0.00</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between">
                        <span className="font-bold text-lg text-white font-sans">Total</span>
                        <span className="font-bold text-lg text-white font-sans">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-8">
                  <Button className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#234645] font-merienda">
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}