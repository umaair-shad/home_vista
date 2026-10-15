'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { PropertyItem } from '@/types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProperties: PropertyItem[];
  onRemoveFromWishlist: (id: string, e: React.MouseEvent) => void;
  onSelectProperty: (property: PropertyItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistedProperties,
  onRemoveFromWishlist,
  onSelectProperty,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Saved Properties</h3>
            <p className="text-xs text-gray-500">
              {wishlistedProperties.length} {wishlistedProperties.length === 1 ? 'property' : 'properties'} saved
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3">
          {wishlistedProperties.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-4">
              <p className="text-sm font-medium text-gray-600">Your wishlist is empty</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Click the heart icon on any property card to save it for easy access later.
              </p>
            </div>
          ) : (
            wishlistedProperties.map((prop) => (
              <div
                key={prop.id}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-gray-200 transition-all bg-gray-50/50"
              >
                <div
                  className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                >
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => {
                    onSelectProperty(prop);
                    onClose();
                  }}
                >
                  <h4 className="text-xs font-bold text-gray-900 truncate hover:text-[#087443]">
                    {prop.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate">{prop.location}</p>
                  <p className="text-xs font-bold text-[#087443] mt-1">{prop.price}</p>
                </div>
                <button
                  type="button"
                  onClick={(e) => onRemoveFromWishlist(prop.id, e)}
                  className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {wishlistedProperties.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                alert('Schedule bulk tour request sent to HomeVista concierge team!');
                onClose();
              }}
              className="w-full bg-[#087443] hover:bg-[#065e36] text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <span>Schedule Tour for All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
