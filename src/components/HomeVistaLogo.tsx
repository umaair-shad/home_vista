import React from 'react';

interface HomeVistaLogoProps {
  variant?: 'light' | 'dark';
}

export const HomeVistaLogo: React.FC<HomeVistaLogoProps> = ({ variant = 'dark' }) => {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center gap-2.5 select-none cursor-pointer">
      {/* Green Outlined House Emblem */}
      <div className="w-8 h-8 rounded-lg border-[2px] border-[#087443] flex items-center justify-center p-1 bg-white/5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#087443"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight text-lg ${
            isLight ? 'text-white' : 'text-[#172522]'
          }`}
        >
          HomeVista
        </span>
        <span
          className={`text-[9.5px] font-medium tracking-wide mt-0.5 ${
            isLight ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          Find. Buy. Live Better.
        </span>
      </div>
    </div>
  );
};
