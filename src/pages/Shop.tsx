import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
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
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}