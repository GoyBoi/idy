import React from 'react';
import DigitalHero from '@/components/DigitalHero';

const DigitalHeroDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <DigitalHero />
      
      {/* Additional content to demonstrate scrolling */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-card/10 backdrop-blur-md rounded-xl p-8 border border-border mb-8">
          <h2 className="text-3xl font-bold font-sans mb-4">About This Hero Section</h2>
          <p className="font-merienda text-foreground/90 mb-4">
            This digital hero section is designed specifically for Mmwafrika Store to showcase traditional African clothing and handcrafted knitwear. 
            The design incorporates elements that represent the rich cultural heritage of African textiles and craftsmanship.
          </p>
          <p className="font-merienda text-foreground/90">
            Key features include:
          </p>
          <ul className="font-merienda text-foreground/90 list-disc pl-6 mt-2 space-y-1">
            <li>Dynamic pattern animations representing traditional African motifs</li>
            <li>Rich color palette inspired by authentic African textiles</li>
            <li>Product showcase with floating elements</li>
            <li>Responsive design that works on all device sizes</li>
            <li>Smooth animations and transitions for enhanced user experience</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-card/10 backdrop-blur-md rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold font-sans mb-2">Feature {item}</h3>
              <p className="font-merienda text-foreground/90">
                This is a sample feature description to demonstrate how content flows after the hero section.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalHeroDemo;