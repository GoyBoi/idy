import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

// Accept either a product object or individual props for backward compatibility
interface ProductCardProps {
  product?: Product;
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  id, 
  name, 
  description, 
  price, 
  image 
}) => {
  // Use product object if provided, otherwise use individual props
  const item = product || { id, name, description, price, image } as Product;
  
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full">
        <img 
          src={item.image?.startsWith('/') ? item.image : `/${item.image}`} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mt-2">{item.name}</h3>
        <p className="text-lg font-bold mt-1">${item.price?.toFixed(2)}</p>
        <Button 
          variant="outline" 
          className="mt-3 w-full"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;