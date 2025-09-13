import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function Shop() {
  // Sample product data
  const products = [
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

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Shop Collection</h1>
        <p className="text-xl font-merienda text-white/80 mb-12 text-center max-w-2xl mx-auto">
          Browse our complete collection of authentic African-inspired fashion
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
              <div className="aspect-[4/5] w-full mx-auto">
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.description}`} 
                  className="object-cover rounded-lg w-full h-full" 
                />
              </div>
              <CardHeader className="p-0 mt-2">
                <CardTitle className="text-sm font-bold text-white font-merienda mt-2">{product.name}</CardTitle>
                <CardDescription className="text-xs text-white/80 font-merienda mb-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <span className="text-sm font-bold text-white font-merienda">${product.price.toFixed(2)}</span>
              </CardContent>
              <CardFooter className="p-0 mt-2">
                <button 
                  className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300" 
                  data-product-id={product.id} 
                  data-product-name={product.name} 
                  data-price={product.price}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}