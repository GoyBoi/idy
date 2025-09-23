import React from 'react';
import { DynamicCard } from '@/components/ui/dynamic-card';

const DynamicCardDemo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Dynamic Card Demo</h1>
        <p className="text-xl font-merienda text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
          Modern animated product cards with dynamic borders
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <DynamicCard
            normalTitle="Dynamic"
            colorfulTitle="Card"
            buttonText="Explore More"
            description="This card features animated border elements that continuously move around the perimeter, creating a dynamic visual effect using React and Tailwind CSS."
          />
          
          <DynamicCard
            normalTitle="Product"
            colorfulTitle="Showcase"
            buttonText="View Details"
            description="Modern card design with animated borders that highlight the product. Perfect for e-commerce applications."
          />
          
          <DynamicCard
            normalTitle="Feature"
            colorfulTitle="Highlight"
            buttonText="Learn More"
            description="Elegant card with moving border animations that draw attention to key features and content."
          />
          
          <DynamicCard
            normalTitle="Interactive"
            colorfulTitle="Design"
            buttonText="See More"
            description="Engaging card design with animated borders that respond to user interactions and create a premium feel."
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicCardDemo;