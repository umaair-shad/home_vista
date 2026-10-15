'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Heart, BedDouble, Bath, Square } from 'lucide-react';
import { PropertyItem } from '@/types';

interface PropertyCardProps {
  property: PropertyItem;
  isWishlisted: boolean;
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
  onClick: (property: PropertyItem) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isWishlisted,
  onToggleWishlist,
  onClick,
}) => {
  const isForSale = property.badgeType === 'sale';

  return (
    <div
      onClick={() => onClick(property)}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col cursor-pointer group"
    >
      {/* Property Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge (Top-Left, Matching Screenshot) */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full shadow-sm ${
              isForSale
                ? 'bg-[#EBF5FF] text-[#0284C7]'
                : 'bg-[#FFF7ED] text-[#D97706]'
            }`}
          >
            {property.badge}
          </span>
        </div>

        {/* Wishlist Heart (Top-Right) */}
        <button
          type="button"
          onClick={(e) => onToggleWishlist(property.id, e)}
          className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isWishlisted
              ? 'bg-red-50 text-red-500 shadow'
              : 'bg-black/30 hover:bg-black/50 text-white backdrop-blur-[2px]'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-white'
            }`}
          />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3 className="font-semibold text-gray-900 text-[13.5px] line-clamp-1 group-hover:text-[#232E38] transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-[11.5px] text-gray-500 mt-1">
            <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Price */}
          <div className="text-[15px] font-bold text-[#232E38] mt-2">
            {property.price}
          </div>
        </div>

        {/* Details Meta Row */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 text-[11px] text-gray-600 font-medium">
          <div className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5 text-gray-400" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5 text-gray-400" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-3.5 h-3.5 text-gray-400" />
            <span>{property.sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
