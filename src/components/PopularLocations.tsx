'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { LOCATIONS } from '@/data/mockData';

export const PopularLocations: React.FC = () => {
  return (
    <section id="locations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#172522] tracking-tight">
            Explore Popular Locations
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Discover verified properties in premier metropolitan and coastal destinations.
          </p>
        </div>
        <Link
          href="/locations"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#087443] hover:text-[#065e36] transition-colors group cursor-pointer"
        >
          <span>All Locations</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid of Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCATIONS.map((loc) => (
          <Link
            key={loc.id}
            href={`/locations/${loc.slug}`}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Background Image */}
            <Image
              src={loc.image}
              alt={loc.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Location Tag (Top Left) */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {loc.propertyCount} Properties
              </span>
            </div>

            {/* Card Content (Bottom) */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{loc.state}</span>
              </div>
              <h3 className="text-xl font-bold mt-0.5 group-hover:text-emerald-300 transition-colors">
                {loc.name}
              </h3>
              <p className="text-xs text-gray-200 mt-1 line-clamp-1">
                {loc.popularFor}
              </p>
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/20 text-xs text-gray-300">
                <span>Avg. Price: <strong className="text-white">{loc.avgPrice}</strong></span>
                <span className="text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Explore &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
