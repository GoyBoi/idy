import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useNavigate, Link } from 'react-router-dom';

export function Home() {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  // Sample product data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Necklace",
      description: "Beautiful beads and charms",
      price: 29.99,
      image: "/assets/images/Medium/1000006827.webp"
    },
    {
      id: 2,
      name: "Designer Handbag",
      description: "Elegant and spacious",
      price: 89.99,
      image: "/assets/images/Medium/1000006833.webp"
    },
    {
      id: 3,
      name: "Traditional Dress",
      description: "Authentic African design",
      price: 129.99,
      image: "/assets/images/Large/1000016728.webp"
    },
    {
      id: 4,
      name: "Complete Outfit",
      description: "Dress with matching accessories",
      price: 199.99,
      image: "/assets/images/Large/1000016808.webp"
    }
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleWishlist = (product: typeof featuredProducts[0]) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-gray-800">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gradient-to-r from-teal-500/20 to-black/50"></div>
        </div>
        
        {/* Overlay content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-white text-center px-4 mb-6">
            Discover Unique African Fashion
          </h1>
          <p className="text-xl md:text-2xl font-merienda text-white mb-8 max-w-2xl mx-auto">
            Explore our curated collection of authentic African-inspired clothing and accessories
          </p>
          <Button 
            className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda"
            onClick={() => navigate('/shop')}
          >
            Shop Collection
          </Button>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[4/5] w-full mx-auto">
                  <img src={product.image} alt={`${product.name} - ${product.description}`} className="object-cover rounded-lg w-full h-full" />
                </div>
              </Link>
              <CardHeader className="p-0 mt-2">
                <CardTitle className="text-sm font-bold text-white font-merienda mt-2">
                  <Link to={`/product/${product.id}`} className="hover:text-teal-500 transition-colors">
                    {product.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-xs text-white/80 font-merienda mb-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <span className="text-sm font-bold text-white font-merienda">${product.price.toFixed(2)}</span>
              </CardContent>
              <CardFooter className="p-0 mt-2 flex justify-between">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleToggleWishlist(product)}
                  className={`wishlist-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300 ${isInWishlist(product.id) ? 'text-red-500' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}