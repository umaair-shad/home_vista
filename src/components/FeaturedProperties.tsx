'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { PropertyItem } from '@/types';
import { PropertyCard } from './PropertyCard';

interface FeaturedPropertiesProps {
  properties: PropertyItem[];
  wishlistIds: string[];
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: PropertyItem) => void;
  onViewAllClick: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  wishlistIds,
  onToggleWishlist,
  onSelectProperty,
  onViewAllClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Header Row (Exact Reference Spec) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#172522] tracking-tight">
          Featured Properties
        </h2>
        <button
          type="button"
          onClick={onViewAllClick}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#232E38] hover:text-[#141A20] transition-colors group cursor-pointer"
        >
          <span>View All Properties</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 5 Cards Row Container matching screenshot layout */}
      <div className="relative group/carousel">
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto lg:overflow-visible pb-2 scrollbar-none"
        >
          {properties.slice(0, 5).map((item) => (
            <PropertyCard
              key={item.id}
              property={item}
              isWishlisted={wishlistIds.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
              onClick={onSelectProperty}
            />
          ))}
        </div>

        {/* Floating Right Navigation Arrow (matching screenshot) */}
        <button
          type="button"
          onClick={scrollRight}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#232E38] hover:border-[#232E38] transition-all z-20 hidden md:flex cursor-pointer"
          aria-label="Next properties"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Floating Left Navigation Arrow */}
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#232E38] hover:border-[#232E38] transition-all z-20 hidden md:flex cursor-pointer"
          aria-label="Previous properties"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
