import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@/components/LoadingSpinner';

// Sample product data
const initialProducts = [
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
  },
  {
    id: 5,
    name: "Special Collection",
    description: "Limited edition pieces",
    price: 299.99,
    image: "/assets/images/Large/1000016812.webp"
  },
  {
    id: 6,
    name: "Summer Hat",
    description: "Perfect for sunny days",
    price: 39.99,
    image: "/assets/images/Medium/1000006881.webp"
  }
];

export function Shop() {
  const [products, setProducts] = useState<typeof initialProducts>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  // Simulate fetching products from an API
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(initialProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: typeof initialProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleWishlist = (product: typeof initialProducts[0]) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Shop Collection</h1>
        <p className="text-xl font-merienda text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
          Browse our complete collection of authentic African-inspired fashion
        </p>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="p-4 rounded-xl bg-card/10 backdrop-blur-md shadow-lg border border-border transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645] relative">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-[4/5] w-full mx-auto relative">
                    <img 
                      src={product.image} 
                      alt={`${product.name} - ${product.description}`} 
                      className="object-cover rounded-lg w-full h-full" 
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleToggleWishlist(product);
                      }}
                      className={`wishlist-btn absolute top-2 right-2 p-2 rounded-full bg-background/30 backdrop-blur-md border border-[#dc7030] shadow-lg text-foreground hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300 ${isInWishlist(product.id) ? 'text-red-500' : 'text-foreground'}`}
                      style={{ border: '1px solid #dc7030' }}
                      aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#dc7030" />
                      </svg>
                    </button>
                  </div>
                </Link>
                <CardHeader className="p-0 mt-2 text-center">
                  <CardTitle className="text-sm font-bold text-foreground font-merienda mt-2">
                    <Link to={`/product/${product.id}`} className="hover:text-teal-500 transition-colors">
                      {product.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs text-foreground/80 font-merienda mb-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-2 text-center">
                  <span className="text-sm font-bold text-foreground font-merienda">${product.price.toFixed(2)}</span>
                </CardContent>
                <CardFooter className="p-0 mt-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda"
                  >
                    Add to Cart
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