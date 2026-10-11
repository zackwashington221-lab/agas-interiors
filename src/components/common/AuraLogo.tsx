import React from 'react';
import { Link } from 'react-router-dom';

interface AgasLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
}

export const AuraLogo: React.FC<AgasLogoProps> = ({ className = '', size = 'md', light = false }) => {
  // Height sizing optimized for architectural clarity
  const heightClass = 
    size === 'sm' ? 'h-10 sm:h-12' :
    size === 'lg' ? 'h-16 sm:h-20' :
    size === 'xl' ? 'h-24 sm:h-28' :
    'h-12 sm:h-14 lg:h-16';

  return (
    <Link
      to="/"
      aria-label="AGAS Interiors — Home & Office Solutions"
      className={`group inline-flex items-center gap-3 leading-none transition-transform duration-300 hover:opacity-95 ${className}`}
    >
      {/* Light Mode / Dark Mode Adaptive Logo Graphic */}
      <div className={`relative ${heightClass} flex items-center justify-center shrink-0 py-1`}>
        {light ? (
          <img
            src="/img/brand/agas-logo-footer.png"
            alt="AGAS Interiors"
            className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-sm rounded-md"
          />
        ) : (
          <>
            {/* Light Mode: Navy / Blue Architectural Brand Mark */}
            <img
              src="/img/brand/agas-logo-light.png"
              alt="AGAS Interiors"
              className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 block mix-blend-multiply"
            />
            {/* Dark Mode: Crisp White Architectural Mark */}
            <img
              src="/img/brand/agas-logo-white-transparent.png"
              alt="AGAS Interiors"
              className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 hidden"
            />
          </>
        )}
      </div>
    </Link>
  );
};

export default AuraLogo;
