import React from 'react';

interface DynamicCardProps {
  normalTitle: string;
  colorfulTitle: string;
  buttonText: string;
  description: string;
  className?: string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
  normalTitle,
  colorfulTitle,
  buttonText,
  description,
  className = ''
}) => {
  return (
    <div className={`relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(35,70,69,0.5)] ${className}`}>
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
        <h3 className="text-2xl font-bold font-sans mb-3">
          {normalTitle}{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            {colorfulTitle}
          </span>
        </h3>
        
        <p className="text-foreground/80 font-merienda mb-6">
          {description}
        </p>
        
        <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#234645] transition-all duration-300 font-merienda">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicCard;