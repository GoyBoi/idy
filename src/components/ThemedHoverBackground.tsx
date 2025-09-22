'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { HoverBackground } from '@/components/ui/hover-background';

interface ThemedHoverBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ThemedHoverBackground({ children, className }: ThemedHoverBackgroundProps) {
  const { theme } = useTheme();
  
  // Define colors based on current theme
  const lightThemeColors = {
    background: 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
    objects: [
      'bg-teal-500/20',
      'bg-teal-600/20',
      'bg-gray-400/20',
      'bg-gray-500/20',
    ],
    glow: 'shadow-teal-400/50',
  };
  
  const darkThemeColors = {
    background: 'bg-gradient-to-br from-gray-900 via-gray-950 to-black',
    objects: [
      'bg-teal-500/30',
      'bg-teal-400/30',
      'bg-gray-700/30',
      'bg-gray-600/30',
    ],
    glow: 'shadow-teal-400/70',
  };
  
  const colors = theme === 'dark' ? darkThemeColors : lightThemeColors;
  
  return (
    <HoverBackground
      className={className}
      colors={colors}
      objectCount={6}
    >
      {children}
    </HoverBackground>
  );
}