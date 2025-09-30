import React from 'react';
import { Background } from '../components/Background';

export default function BackgroundShowcase() {
  return (
    <div className="min-h-screen flex flex-col">
      <Background />
      <div className="flex-grow flex flex-col items-center justify-center p-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">Background Showcase</h1>
          <p className="mb-4 text-lg text-center">
            This page showcases our simplified canvas-based background implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black/20 rounded-lg p-4 border border-white/10">
              <h2 className="text-xl font-semibold mb-2">Simplicity</h2>
              <p>We've replaced the complex WebGL implementation with a simple canvas-based approach.</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 border border-white/10">
              <h2 className="text-xl font-semibold mb-2">Performance</h2>
              <p>The new implementation is significantly lighter and performs better on all devices.</p>
            </div>
            <div className="bg-black/20 rounded-lg p-4 border border-white/10">
              <h2 className="text-xl font-semibold mb-2">Maintainability</h2>
              <p>Easier to understand, modify, and extend without complex dependencies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}