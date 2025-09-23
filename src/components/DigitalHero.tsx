import React, { useState, useEffect } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { useNavigate } from 'react-router-dom';

interface DigitalHeroProps {
  className?: string;
}

const DigitalHero: React.FC<DigitalHeroProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const [currentPattern, setCurrentPattern] = useState(0);
  
  // Product data with actual images
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
    }
  ];

  // Patterns representing traditional African designs
  const patterns = [
    'M10 10 L90 10 L90 90 L10 90 Z', // Simple square
    'M20 20 Q50 5 80 20 Q95 50 80 80 Q50 95 20 80 Q5 50 20 20', // Diamond
    'M30 30 C30 10, 70 10, 70 30 C90 30, 90 70, 70 70 C70 90, 30 90, 30 70 C10 70, 10 30, 30 30', // Circle
    'M10 50 L30 10 L70 10 L90 50 L70 90 L30 90 Z', // Hexagon
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden ${className}`}>
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-700/80 to-black/90">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d={patterns[currentPattern]} 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5"
              className="animate-pulse"
            />
          </svg>
        </div>
        
        {/* Floating elements representing fabric textures */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-emerald-500/10 blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-white mb-6 leading-tight">
              Celebrate <span className="text-amber-400">African</span> Heritage
            </h1>
            
            <p className="text-xl md:text-2xl font-merienda text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover authentic traditional clothing and handcrafted knitwear that tells the story of our rich cultural legacy
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <GradientButton 
                size="lg"
                className="px-8 py-4 rounded-lg font-bold text-white font-merienda shadow-xl text-lg"
                onClick={() => navigate('/shop')}
              >
                Explore Collection
              </GradientButton>
              
              <GradientButton 
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-lg font-bold text-white font-merienda border-2 border-white bg-transparent hover:bg-white/10 shadow-xl text-lg"
                onClick={() => navigate('/collections')}
              >
                View Collections
              </GradientButton>
            </div>
          </div>
          
          {/* Product showcase */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main product image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-[4/5]">
                  <img 
                    src={products[2].image} 
                    alt={products[2].name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/images/Large/1000016728.webp';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-merienda font-semibold">{products[2].name}</span>
                </div>
              </div>
              
              {/* Secondary product images */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-square">
                  <img 
                    src={products[0].image} 
                    alt={products[0].name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/images/Medium/1000006827.webp';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white font-merienda text-sm font-semibold">{products[0].name}</span>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-square">
                  <img 
                    src={products[1].image} 
                    alt={products[1].name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/images/Medium/1000006833.webp';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white font-merienda text-sm font-semibold">{products[1].name}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-teal-400/20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative border elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
    </section>
  );
};

export default DigitalHero;