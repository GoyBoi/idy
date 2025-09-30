import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('/assets/images/Large/1000016808.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto">
          Contemporary African Print Streetwear
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mt-4">
          Premium Quality. Bold Identity.
        </p>
        <Button 
          size="lg" 
          className="mt-8 bg-white text-black hover:bg-gray-100"
        >
          Shop the Collection
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;