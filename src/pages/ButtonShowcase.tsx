import React from 'react';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';

export default function ButtonShowcase() {
  return (
    <div className="p-5 bg-background text-foreground min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Button Showcase</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Default Button</h2>
          <Button variant="default">Default Button</Button>
        </div>
        
        {/* Destructive Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Destructive Button</h2>
          <Button variant="destructive">Destructive Button</Button>
        </div>
        
        {/* Outline Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Outline Button</h2>
          <Button variant="outline">Outline Button</Button>
        </div>
        
        {/* Secondary Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Secondary Button</h2>
          <Button variant="secondary">Secondary Button</Button>
        </div>
        
        {/* Ghost Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Ghost Button</h2>
          <Button variant="ghost">Ghost Button</Button>
        </div>
        
        {/* Link Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Link Button</h2>
          <Button variant="link">Link Button</Button>
        </div>
        
        {/* Icon Button */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Icon Button</h2>
          <Button variant="destructive" size="icon">
            <TrashIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
          </Button>
        </div>
        
        {/* Button with Icon and Text */}
        <div className="p-4 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-3">Button with Icon</h2>
          <Button variant="destructive">
            <TrashIcon className="-ms-1 opacity-60" size={16} aria-hidden="true" />
            <span className="ml-2">Delete Item</span>
          </Button>
        </div>
      </div>
    </div>
  );
}