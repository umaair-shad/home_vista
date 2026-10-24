'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { PropertyCard } from '@/components/PropertyCard';
import { ALL_PROPERTIES } from '@/data/mockData';
import { ChevronRight, Key, Sparkles } from 'lucide-react';

export default function RentPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [wishlistIds, setWishlistIds] = useState<string[]>(['2', '5']);

  const forRentProperties = ALL_PROPERTIES.filter((p) => p.badgeType === 'rent');

  const filtered = forRentProperties.filter((p) => {
    if (selectedType !== 'All' && p.propertyType !== selectedType) return false;
    if (selectedCity !== 'All' && p.city !== selectedCity) return false;
    return true;
  });

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <AppLayout>
      {/* Hero Header */}
      <div className="hero-gradient-dark py-12 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-emerald-300 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">Properties for Rent</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Verified Rentals
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
              Premium Apartments & Rental Homes
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed">
              Find move-in ready luxury apartments, brownstones, and suburban rental townhouses with honest landlord verification and digital lease agreements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2">Category:</span>
            {['All', 'Apartment', 'Townhouse', 'Condo'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedType === type
                    ? 'bg-[#232E38] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type === 'All' ? 'All Types' : `${type}s`}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">Destination:</span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="text-xs font-semibold border border-gray-200 rounded-lg p-2 bg-white text-gray-800 focus:outline-none focus:border-[#232E38]"
            >
              <option value="All">All Cities</option>
              <option value="New York">New York, NY</option>
              <option value="Chicago">Chicago, IL</option>
              <option value="Austin">Austin, TX</option>
              <option value="Miami">Miami, FL</option>
            </select>
          </div>
        </div>

        {/* Listings Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Available Rental Properties ({filtered.length})
          </h2>
          <span className="text-xs text-gray-500">No hidden tenant broker fees</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prop) => (
            <Link key={prop.id} href={`/properties/${prop.slug}`}>
              <PropertyCard
                property={prop}
                isWishlisted={wishlistIds.includes(prop.id)}
                onToggleWishlist={toggleWishlist}
                onClick={() => {}}
              />
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
