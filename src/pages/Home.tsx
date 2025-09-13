import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function Home() {
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
          <Button className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda">
            Shop Collection
          </Button>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Standardized Medium Cards */}
          <Card className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
            <div className="aspect-[4/5] w-full mx-auto">
              <img src="/assets/images/Medium/1000006827.webp" alt="Handcrafted Necklace - Beautiful beads and charms" className="object-cover rounded-lg w-full h-full" />
            </div>
            <CardHeader className="p-0 mt-2">
              <CardTitle className="text-sm font-bold text-white font-merienda mt-2">Handcrafted Necklace</CardTitle>
              <CardDescription className="text-xs text-white/80 font-merienda mb-2">Beautiful beads and charms</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <span className="text-sm font-bold text-white font-merienda">$29.99</span>
            </CardContent>
            <CardFooter className="p-0 mt-2">
              <button className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300" data-product-id="1" data-product-name="Handcrafted Necklace" data-price="29.99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </CardFooter>
          </Card>

          <Card className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
            <div className="aspect-[4/5] w-full mx-auto">
              <img src="/assets/images/Medium/1000006833.webp" alt="Designer Handbag - Elegant and spacious" className="object-cover rounded-lg w-full h-full" />
            </div>
            <CardHeader className="p-0 mt-2">
              <CardTitle className="text-sm font-bold text-white font-merienda mt-2">Designer Handbag</CardTitle>
              <CardDescription className="text-xs text-white/80 font-merienda mb-2">Elegant and spacious</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <span className="text-sm font-bold text-white font-merienda">$89.99</span>
            </CardContent>
            <CardFooter className="p-0 mt-2">
              <button className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300" data-product-id="2" data-product-name="Designer Handbag" data-price="89.99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </CardFooter>
          </Card>

          <Card className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
            <div className="aspect-[4/5] w-full mx-auto">
              <img src="/assets/images/Large/1000016728.webp" alt="Traditional Dress - Authentic African design" className="object-cover rounded-lg w-full h-full" />
            </div>
            <CardHeader className="p-0 mt-2">
              <CardTitle className="text-sm font-bold text-white font-merienda mt-2">Traditional Dress</CardTitle>
              <CardDescription className="text-xs text-white/80 font-merienda mb-2">Authentic African design</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <span className="text-sm font-bold text-white font-merienda">$129.99</span>
            </CardContent>
            <CardFooter className="p-0 mt-2">
              <button className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300" data-product-id="3" data-product-name="Traditional Dress" data-price="129.99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </CardFooter>
          </Card>

          <Card className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
            <div className="aspect-[4/5] w-full mx-auto">
              <img src="/assets/images/Large/1000016808.webp" alt="Complete Outfit - Dress with matching accessories" className="object-cover rounded-lg w-full h-full" />
            </div>
            <CardHeader className="p-0 mt-2">
              <CardTitle className="text-sm font-bold text-white font-merienda mt-2">Complete Outfit</CardTitle>
              <CardDescription className="text-xs text-white/80 font-merienda mb-2">Dress with matching accessories</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <span className="text-sm font-bold text-white font-merienda">$199.99</span>
            </CardContent>
            <CardFooter className="p-0 mt-2">
              <button className="add-to-cart-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300" data-product-id="4" data-product-name="Complete Outfit" data-price="199.99">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}