'use client';

import React from 'react';
import Image from 'next/image';
import { X, MapPin, BedDouble, Bath, Square, Heart, Check, Phone, Calendar } from 'lucide-react';
import { PropertyItem } from '@/types';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  isOpen: boolean;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (id: string, e: React.MouseEvent) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  isOpen,
  isWishlisted,
  onClose,
  onToggleWishlist,
}) => {
  if (!isOpen || !property) return null;

  const isForSale = property.badgeType === 'sale';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative w-full h-64 sm:h-72 bg-gray-100">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="700px"
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
                isForSale
                  ? 'bg-[#EBF5FF] text-[#0284C7]'
                  : 'bg-[#FFF7ED] text-[#D97706]'
              }`}
            >
              {property.badge}
            </span>
          </div>

          <button
            onClick={(e) => onToggleWishlist(property.id, e)}
            className={`absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isWishlisted
                ? 'bg-red-50 text-red-500'
                : 'bg-white/90 hover:bg-white text-gray-700'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-700'
              }`}
            />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{property.title}</h2>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#087443]">
              {property.price}
            </div>
          </div>

          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-3 my-5 p-3.5 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <div className="flex flex-col items-center">
              <BedDouble className="w-4 h-4 text-gray-500 mb-1" />
              <span className="text-xs font-bold text-gray-900">{property.beds} Bedrooms</span>
              <span className="text-[10px] text-gray-500">Spacious suites</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="w-4 h-4 text-gray-500 mb-1" />
              <span className="text-xs font-bold text-gray-900">{property.baths} Bathrooms</span>
              <span className="text-[10px] text-gray-500">Luxury fixtures</span>
            </div>
            <div className="flex flex-col items-center">
              <Square className="w-4 h-4 text-gray-500 mb-1" />
              <span className="text-xs font-bold text-gray-900">{property.sqft}</span>
              <span className="text-[10px] text-gray-500">Total area</span>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Verified Highlights
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087443]" />
                <span>Smart Climate Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087443]" />
                <span>Private Terrace & Garden</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087443]" />
                <span>Dedicated Parking Bay</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#087443]" />
                <span>24/7 Concierge & Security</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => alert(`Tour scheduled for ${property.title}! A verified HomeVista agent will contact you.`)}
              className="w-full sm:flex-1 bg-[#087443] hover:bg-[#065e36] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Tour</span>
            </button>
            <button
              onClick={() => alert('HomeVista Agent: Direct call connected at +1 (800) 123-4567')}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
