import React from 'react';

export function About() {
  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">About Mmwafrika</h1>
        <p className="text-xl font-merienda text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
          Celebrating African heritage through authentic fashion
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-border">
            <h2 className="text-2xl font-bold font-sans mb-4">Our Story</h2>
            <p className="font-merienda text-foreground/90 mb-4">
              Mmwafrika was born from a deep appreciation for the rich textile traditions and vibrant cultures of Africa. 
              Our journey began with a simple mission: to bring authentic African-inspired fashion to the world while 
              supporting local artisans and preserving traditional craftsmanship.
            </p>
            <p className="font-merienda text-foreground/90 mb-4">
              Founded in 2020, we've partnered with skilled craftspeople across the African continent to create 
              contemporary pieces that honor ancestral techniques. Each item in our collection tells a story – of 
              heritage, of community, and of the incredible artistry that defines African fashion.
            </p>
            <p className="font-merienda text-foreground/90">
              Today, we're proud to offer a curated selection of clothing and accessories that blend traditional 
              methods with modern design, creating pieces that are both meaningful and stylish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/10 backdrop-blur-md rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold font-sans mb-4">Our Values</h3>
              <ul className="font-merienda text-foreground/90 space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Authenticity in design and craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Support for local African artisans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Sustainable and ethical production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Cultural preservation and celebration</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/10 backdrop-blur-md rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold font-sans mb-4">Our Impact</h3>
              <ul className="font-merienda text-foreground/90 space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>500+ artisans supported across 8 countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>10,000+ items sold worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Carbon-neutral shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Community development programs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card/10 backdrop-blur-md rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold font-sans mb-4">Craftsmanship</h2>
            <p className="font-merienda text-foreground/90 mb-4">
              Every piece in our collection is carefully crafted using traditional techniques passed down through 
              generations. From handwoven Kente cloth to intricate beadwork, we ensure that each item reflects 
              the skill and creativity of its maker.
            </p>
            <p className="font-merienda text-foreground/90">
              We work directly with artisan cooperatives, providing fair wages and supporting sustainable 
              practices that benefit both the makers and their communities. By choosing Mmwafrika, you're not 
              just purchasing fashion – you're investing in cultural preservation and economic empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}