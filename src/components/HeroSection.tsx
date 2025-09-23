import React from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Background with gradient and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60">
        {/* Decorative pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"></div>
      </div>
      
      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold font-sans text-white text-center px-4 mb-6 drop-shadow-2xl [text-shadow:_0_4px_8px_rgba(0,0,0,0.7)] [-webkit-text-stroke:_1px_black]">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-merienda text-white mb-8 max-w-2xl mx-auto drop-shadow-lg [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] [-webkit-text-stroke:_0.5px_black]">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <GradientButton 
            size="lg"
            className="px-8 py-3 rounded-lg font-bold text-white font-merienda shadow-xl"
            onClick={onPrimaryClick}
          >
            {primaryButtonText}
          </GradientButton>
          {secondaryButtonText && onSecondaryClick && (
            <GradientButton 
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-lg font-bold text-white font-merienda border-2 border-white bg-transparent hover:bg-white/10 shadow-xl"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </GradientButton>
          )}
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-teal-400/20 blur-xl animate-pulse"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-teal-300/20 blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}

// Default export for use in Home page
export default function DefaultHeroSection() {
  const navigate = useNavigate();
  
  return (
    <HeroSection
      title="Discover Unique African Fashion"
      subtitle="Explore our curated collection of authentic African-inspired clothing and accessories"
      primaryButtonText="Shop Collection"
      secondaryButtonText="View Collections"
      onPrimaryClick={() => navigate('/shop')}
      onSecondaryClick={() => navigate('/collections')}
    />
  );
}