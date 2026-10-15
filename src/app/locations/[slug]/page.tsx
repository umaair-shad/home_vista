'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { PropertyCard } from '@/components/PropertyCard';
import { LOCATIONS, ALL_PROPERTIES } from '@/data/mockData';
import { ChevronRight, MapPin, Building, DollarSign, ArrowLeft } from 'lucide-react';

export default function LocationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // Filter properties in this city
  const cityProperties = ALL_PROPERTIES.filter(
    (p) => p.city.toLowerCase() === location.name.toLowerCase()
  );

  return (
    <AppLayout>
      {/* Location Hero */}
      <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-gray-900">
        <Image
          src={location.image}
          alt={location.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center gap-2 text-xs text-emerald-300 mb-2">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/locations" className="hover:underline">Locations</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{location.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {location.name}, {location.state}
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-xl">
            {location.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-white/20 text-xs">
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-400" />
              <span><strong>{location.propertyCount}+</strong> Available Properties</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Median Market Price: <strong>{location.avgPrice}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* City Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Verified Properties in {location.name} ({cityProperties.length})
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Inspected listings ready for immediate private tours.
            </p>
          </div>

          <Link
            href="/properties"
            className="text-xs font-semibold text-[#232E38] hover:underline flex items-center gap-1"
          >
            <span>All Properties</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {cityProperties.length === 0 ? (
          <div className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200">
            <p className="text-sm text-gray-600 font-medium">
              New developments in {location.name} are currently undergoing title verification.
            </p>
            <Link
              href="/properties"
              className="inline-block mt-4 bg-[#232E38] text-white text-xs font-semibold px-4 py-2 rounded-lg"
            >
              Browse All Cities
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityProperties.map((prop) => (
              <Link key={prop.id} href={`/properties/${prop.slug}`}>
                <PropertyCard
                  property={prop}
                  isWishlisted={false}
                  onToggleWishlist={() => {}}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
