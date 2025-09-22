'use client';

import React, { useEffect, useRef } from 'react';

export function FloatingBackgroundElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const createFloatingElement = () => {
      const element = document.createElement('div');
      element.className = 'floating-element absolute rounded-full opacity-10';
      
      // Random properties
      const size = Math.random() * 100 + 50; // 50-150px
      const left = Math.random() * 100; // 0-100%
      const top = Math.random() * 100; // 0-100%
      const hue = Math.random() > 0.5 ? 174 : Math.random() > 0.5 ? 177 : 167;
      const saturation = Math.random() * 30 + 40;
      const lightness = Math.random() * 30 + 35;
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      const animationDuration = Math.random() * 20 + 20; // 20-40s
      const animationDelay = Math.random() * 5; // 0-5s
      const shape = Math.random() > 0.7 ? 'square' : 'circle';
      
      // Apply styles
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${left}%`;
      element.style.top = `${top}%`;
      element.style.backgroundColor = color;
      element.style.borderRadius = shape === 'circle' ? '50%' : '20%';
      element.style.animation = `float ${animationDuration}s infinite ease-in-out ${animationDelay}s`;
      element.style.zIndex = '-1';
      
      return element;
    };

    // Add floating elements
    const elementCount = 8;
    for (let i = 0; i < elementCount; i++) {
      const element = createFloatingElement();
      container.appendChild(element);
    }

    // Clean up
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none -z-10" />;
}