import React from 'react';

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
            <div key={collection.id} className="group relative">
              <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(35,70,69,0.5)]">
                {/* Animated border elements */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl border border-transparent">
                    {/* Top border animation */}
                    <div className="absolute -top-px left-0 h-px w-1/3 bg-gradient-to-r from-teal-500 via-transparent to-transparent animate-move-right"></div>
                    {/* Right border animation */}
                    <div className="absolute -right-px top-0 w-px h-1/3 bg-gradient-to-b from-teal-500 via-transparent to-transparent animate-move-down"></div>
                    {/* Bottom border animation */}
                    <div className="absolute -bottom-px right-0 h-px w-1/3 bg-gradient-to-l from-teal-500 via-transparent to-transparent animate-move-left"></div>
                    {/* Left border animation */}
                    <div className="absolute -left-px bottom-0 w-px h-1/3 bg-gradient-to-t from-teal-500 via-transparent to-transparent animate-move-up"></div>
                  </div>
                </div>

                <div className="relative z-10">
                  {/* Collection image */}
                  <div className="aspect-video w-full mx-auto mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={`${collection.name} - ${collection.description}`} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  
                  {/* Collection info */}
                  <h2 className="text-2xl font-bold font-sans mb-2 text-center">
                    <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                      {collection.name}
                    </span>
                  </h2>
                  
                  <p className="text-foreground/80 font-merienda mb-4 text-center">
                    {collection.description}
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    <span className="text-sm text-foreground/70 font-merienda bg-black/30 px-3 py-1 rounded-full">
                      {collection.itemCount} items
                    </span>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#234645] transition-all duration-300 font-merienda">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}