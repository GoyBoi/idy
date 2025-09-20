import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function Collections() {
  const collections = [
    {
      id: 1,
      name: "Traditional Heritage",
      description: "Authentic designs inspired by African heritage",
      image: "/assets/images/Large/1000016728.webp",
      itemCount: 24
    },
    {
      id: 2,
      name: "Modern Fusion",
      description: "Contemporary styles with African influences",
      image: "/assets/images/Medium/1000006833.webp",
      itemCount: 18
    },
    {
      id: 3,
      name: "Summer Vibes",
      description: "Light and breezy seasonal pieces",
      image: "/assets/images/Large/1000016808.webp",
      itemCount: 15
    },
    {
      id: 4,
      name: "Formal Elegance",
      description: "Sophisticated pieces for special occasions",
      image: "/assets/images/Medium/1000006827.webp",
      itemCount: 12
    }
  ];

  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Our Collections</h1>
        <p className="text-xl font-merienda text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
          Explore our carefully curated collections, each telling a unique story
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="p-6 rounded-xl bg-card/10 backdrop-blur-md shadow-lg border border-border transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
              <div className="aspect-video w-full mx-auto mb-6">
                <img 
                  src={collection.image} 
                  alt={`${collection.name} - ${collection.description}`} 
                  className="object-cover rounded-lg w-full h-full" 
                />
              </div>
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-2xl font-bold text-foreground font-sans mb-2">{collection.name}</CardTitle>
                <CardDescription className="text-lg text-foreground/80 font-merienda mb-4">{collection.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mb-4 text-center">
                <span className="text-sm text-foreground/70 font-merienda">{collection.itemCount} items</span>
              </CardContent>
              <CardFooter className="p-0 flex justify-center">
                <button className="px-6 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda">
                  Explore Collection
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}