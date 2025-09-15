import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Link, useParams } from 'react-router-dom';

// Sample product data - in a real app this would come from an API
const products = [
  {
    id: 1,
    name: "Handcrafted Necklace",
    description: "Beautiful beads and charms",
    price: 29.99,
    image: "/assets/images/Medium/1000006827.webp",
    details: "This exquisite handcrafted necklace features carefully selected beads and charms that tell a story of African heritage and tradition. Each piece is unique and made with love by skilled artisans.",
    features: ["Handcrafted", "Unique design", "Ethically sourced materials", "One of a kind"]
  },
  {
    id: 2,
    name: "Designer Handbag",
    description: "Elegant and spacious",
    price: 89.99,
    image: "/assets/images/Medium/1000006833.webp",
    details: "This elegant designer handbag combines functionality with style. Made from premium materials, it features multiple compartments and a comfortable strap for all-day wear.",
    features: ["Premium materials", "Spacious interior", "Adjustable strap", "Multiple compartments"]
  },
  {
    id: 3,
    name: "Traditional Dress",
    description: "Authentic African design",
    price: 129.99,
    image: "/assets/images/Large/1000016728.webp",
    details: "This traditional dress showcases authentic African design elements. Made from high-quality fabric, it's perfect for special occasions or cultural celebrations.",
    features: ["Authentic design", "High-quality fabric", "Comfortable fit", "Cultural significance"]
  },
  {
    id: 4,
    name: "Complete Outfit",
    description: "Dress with matching accessories",
    price: 199.99,
    image: "/assets/images/Large/1000016808.webp",
    details: "This complete outfit includes a beautifully crafted dress with matching accessories. Perfect for making a statement at any event.",
    features: ["Complete set", "Coordinating accessories", "Premium quality", "Limited edition"]
  },
  {
    id: 5,
    name: "Special Collection",
    description: "Limited edition pieces",
    price: 299.99,
    image: "/assets/images/Large/1000016812.webp",
    details: "Part of our special collection, this piece represents the pinnacle of African-inspired fashion. Limited quantities available.",
    features: ["Limited edition", "Exclusive design", "Premium materials", "Collector's item"]
  },
  {
    id: 6,
    name: "Summer Hat",
    description: "Perfect for sunny days",
    price: 39.99,
    image: "/assets/images/Medium/1000006881.webp",
    details: "Stay cool and stylish with this summer hat. Designed for both fashion and function, it provides excellent sun protection.",
    features: ["Sun protection", "Lightweight", "Breathable material", "Foldable design"]
  }
];

export function ProductDetail() {
  const { id } = useParams<{ id?: string }>();
  const productId = id ? parseInt(id, 10) : 1;
  const product = products.find(p => p.id === productId) || products[0];
  
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/shop" className="text-teal-500 hover:text-teal-400 transition-colors font-merienda">
            &larr; Back to Shop
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[4/5] w-full">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover rounded-xl w-full h-full" 
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold font-sans mb-2">{product.name}</h1>
            <p className="text-xl font-merienda text-white/80 mb-6">{product.description}</p>
            
            <div className="mb-8">
              <span className="text-3xl font-bold text-white font-merienda">${product.price.toFixed(2)}</span>
            </div>
            
            <p className="text-lg font-merienda text-white/90 mb-8">{product.details}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold font-sans mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-merienda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleAddToCart}
                className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda"
              >
                Add to Cart
              </Button>
              <button 
                onClick={handleToggleWishlist}
                className={`px-6 py-3 rounded-lg font-bold border-2 transition-all duration-300 hover:scale-105 font-merienda flex items-center ${isInWishlist(product.id) ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-white/10 border-white/20 text-white hover:shadow-[0_0_15px_#234645]'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill={isInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}