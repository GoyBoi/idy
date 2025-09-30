import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';

// Sample product data
const products = [
  {
    id: 1,
    name: "Handcrafted Necklace",
    price: 29.99,
    image: "/assets/images/Medium/1000006827.webp"
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: 89.99,
    image: "/assets/images/Medium/1000006833.webp"
  },
  {
    id: 3,
    name: "Traditional Dress",
    price: 129.99,
    image: "/assets/images/Large/1000016728.webp"
  },
  {
    id: 4,
    name: "Complete Outfit",
    price: 199.99,
    image: "/assets/images/Large/1000016808.webp"
  },
  {
    id: 5,
    name: "African Print Shirt",
    price: 59.99,
    image: "/assets/images/Large/1000068404.webp"
  },
  {
    id: 6,
    name: "Cultural Headwrap",
    price: 24.99,
    image: "/assets/images/Medium/1000006881.webp"
  },
  {
    id: 7,
    name: "Ankara Skirt",
    price: 79.99,
    image: "/assets/images/Large/1000016812.webp"
  },
  {
    id: 8,
    name: "Beaded Earrings",
    price: 19.99,
    image: "/assets/images/Medium/1000006827.webp"
  }
];

export function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}