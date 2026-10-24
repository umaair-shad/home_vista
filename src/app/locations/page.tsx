'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { LOCATIONS } from '@/data/mockData';
import { MapPin, ArrowRight } from 'lucide-react';

export default function LocationsPage() {
  return (
    <AppLayout>
      <PageHeader
        badge="Prime Destinations"
        title="Premier Real Estate Destinations"
        subtitle="Explore verified homes across America's most dynamic cities, scenic coastal enclaves, and mountain retreats."
        breadcrumbs={[{ label: 'Locations' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations/${loc.slug}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {loc.propertyCount} Properties
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-xs text-emerald-300 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.state}</span>
                  </div>
                  <h2 className="text-2xl font-bold mt-0.5">{loc.name}</h2>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {loc.description}
                  </p>
                  <div className="mt-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-600">
                    <span className="font-semibold text-gray-800">Popular for:</span> {loc.popularFor}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    Average: <strong className="text-gray-900">{loc.avgPrice}</strong>
                  </span>
                  <span className="font-bold text-[#232E38] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Listings &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
