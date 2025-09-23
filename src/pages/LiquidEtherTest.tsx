import React from 'react';
import LiquidEther from '@/components/LiquidEtherBackground';

export function LiquidEtherTest() {
  return (
    <div className="h-screen w-screen">
      <LiquidEther className="w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Liquid Ether Test</h1>
        <p>This page tests the Liquid Ether background component.</p>
      </div>
    </div>
  );
}

export default LiquidEtherTest;