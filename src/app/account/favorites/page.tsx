'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { AccountNav } from '@/components/AccountNav';
import { mockProperties } from '@/data/mockData';
import { Trash2, ExternalLink, Bed, Bath, Maximize2, Heart } from 'lucide-react';

export default function AccountFavoritesPage() {
  const [favorites, setFavorites] = useState(mockProperties.slice(0, 4));

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Saved Properties</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Properties you have bookmarked for comparison, updates, and upcoming open houses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <AccountNav />
            </div>

            <div className="lg:col-span-3">
              {favorites.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">No Saved Properties</h3>
                  <p className="text-xs text-gray-500 mb-6">
                    You haven&apos;t saved any properties yet. Browse our verified listings and click the heart icon.
                  </p>
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#232E38] text-white text-xs font-bold rounded-xl"
                  >
                    Explore Properties
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map((prop) => (
                    <div
                      key={prop.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="relative h-48 w-full bg-gray-100">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-[#232E38]">
                          {prop.price}
                          {(prop.badgeType || prop.category) === 'rent' ? '/mo' : ''}
                        </div>
                        <button
                          onClick={() => handleRemove(prop.id)}
                          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-lg transition-colors"
                          title="Remove from favorites"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                              {prop.badge || 'Available'}
                            </span>
                            <span className="text-[11px] text-gray-400">{prop.propertyType || prop.type}</span>
                          </div>
                          <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{prop.title}</h3>
                          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{prop.location}</p>

                          <div className="flex items-center gap-4 text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1">
                              <Bed className="w-3.5 h-3.5 text-gray-400" />
                              <span>{prop.beds} Beds</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath className="w-3.5 h-3.5 text-gray-400" />
                              <span>{prop.baths} Baths</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                              <span>{prop.sqft}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between">
                          <Link
                            href={`/properties/${prop.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#232E38] hover:underline"
                          >
                            <span>View Full Details</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href={`/properties/${prop.slug}#inquiry`}
                            className="text-[11px] font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                          >
                            Book Tour
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
