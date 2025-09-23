'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import LiquidEther from './LiquidEtherBackground';

export function DynamicBackground() {
  const { theme } = useTheme();

  // Always render LiquidEther as the application background. It is implemented
  // as a full-screen, transparent WebGL layer so it won't interfere with UI.
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <LiquidEther theme={(theme as 'light' | 'dark') || 'dark'} className="w-full h-full" />
    </div>
  );
}