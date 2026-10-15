'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { PropertyCard } from '@/components/PropertyCard';
import { ALL_PROPERTIES } from '@/data/mockData';
import { PropertyItem } from '@/types';
import {
  Search,
  Filter,
  Grid,
  List,
  SlidersHorizontal,
  X,
  MapPin,
  BedDouble,
  Bath,
  Square,
  Heart,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import Select from 'react-select';

function PropertiesContent() {
  const searchParams = useSearchParams();

  // URL initialized query params
  const initialType = searchParams.get('type') || 'All';
  const initialPurpose = searchParams.get('purpose') || 'All';
  const initialLocation = searchParams.get('location') || '';
  const initialLifestyle = searchParams.get('lifestyle') || '';

  // Local filter states
  const [searchTerm, setSearchTerm] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedPurpose, setSelectedPurpose] = useState<string>(initialPurpose);
  const [selectedBeds, setSelectedBeds] = useState<string>('Any');
  const [selectedBaths, setSelectedBaths] = useState<string>('Any');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['1', '6']);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter and sort calculation
  const filteredProperties = useMemo(() => {
    let result = [...ALL_PROPERTIES];

    // Search term (location or title)
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q) ||
          p.address.toLowerCase().includes(q)
      );
    }

    // Property Type
    if (selectedType !== 'All') {
      result = result.filter(
        (p) => p.propertyType.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Purpose (Sale / Rent)
    if (selectedPurpose !== 'All') {
      const matchType = selectedPurpose.toLowerCase();
      result = result.filter((p) => p.badgeType === matchType);
    }

    // Lifestyle filter if set in URL
    if (initialLifestyle) {
      result = result.filter((p) => p.lifestyle === initialLifestyle);
    }

    // Beds
    if (selectedBeds !== 'Any') {
      const minBeds = parseInt(selectedBeds, 10);
      result = result.filter((p) => p.beds >= minBeds);
    }

    // Baths
    if (selectedBaths !== 'Any') {
      const minBaths = parseFloat(selectedBaths);
      result = result.filter((p) => {
        const b = typeof p.baths === 'number' ? p.baths : parseFloat(p.baths);
        return b >= minBaths;
      });
    }

    // Price range
    if (selectedPriceRange === 'under-1m') {
      result = result.filter((p) => p.priceNumeric < 1000000);
    } else if (selectedPriceRange === '1m-2m') {
      result = result.filter((p) => p.priceNumeric >= 1000000 && p.priceNumeric <= 2000000);
    } else if (selectedPriceRange === '2m-plus') {
      result = result.filter((p) => p.priceNumeric > 2000000);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    } else if (sortBy === 'sqft') {
      result.sort((a, b) => b.sqftNumeric - a.sqftNumeric);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.yearBuilt - a.yearBuilt);
    }

    return result;
  }, [searchTerm, selectedType, selectedPurpose, initialLifestyle, selectedBeds, selectedBaths, selectedPriceRange, sortBy]);

  const displayedListings = filteredProperties.slice(0, visibleCount);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSelectedPurpose('All');
    setSelectedBeds('Any');
    setSelectedBaths('Any');
    setSelectedPriceRange('All');
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedType !== 'All' ||
    selectedPurpose !== 'All' ||
    selectedBeds !== 'Any' ||
    selectedBaths !== 'Any' ||
    selectedPriceRange !== 'All';

  return (
    <AppLayout>
      {/* Breadcrumb Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-[#232E38] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Properties</span>
            {initialLifestyle && (
              <>
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <span className="text-[#232E38] font-semibold">{initialLifestyle}</span>
              </>
            )}
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172522] tracking-tight">
                {initialLifestyle ? `${initialLifestyle} Collection` : 'All Verified Properties'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Showing {filteredProperties.length} verified listings across top destinations
              </p>
            </div>

            {/* Sale / Rent Switcher Pills */}
            <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-xl shadow-sm text-xs font-semibold">
              {['All', 'Sale', 'Rent'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedPurpose(tab)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedPurpose.toLowerCase() === tab.toLowerCase()
                      ? 'bg-[#232E38] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'All' ? 'All Types' : tab === 'Sale' ? 'For Sale' : 'For Rent'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                  <SlidersHorizontal className="w-4 h-4 text-[#232E38]" />
                  <span>Filter Properties</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#232E38] hover:underline font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Keyword / Location Search */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Search Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City, state, or address..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded-xl p-2.5 pr-8 focus:outline-none focus:border-[#232E38]"
                  />
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3" />
                </div>
              </div>

              {/* Property Type Radio List */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Property Category
                </label>
                <div className="space-y-1.5 text-xs">
                  {['All', 'House', 'Villa', 'Apartment', 'Condo', 'Townhouse', 'Land'].map((type) => (
                    <label
                      key={type}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className={selectedType === type ? 'font-bold text-[#232E38]' : 'text-gray-700'}>
                        {type === 'All' ? 'All Categories' : `${type}s`}
                      </span>
                      <input
                        type="radio"
                        name="propertyType"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="text-[#232E38] focus:ring-[#232E38]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Price Range
                </label>
                <div className="space-y-1.5 text-xs">
                  {[
                    { label: 'Any Price', val: 'All' },
                    { label: 'Under $1,000,000', val: 'under-1m' },
                    { label: '$1,000,000 - $2,000,000', val: '1m-2m' },
                    { label: '$2,000,000+', val: '2m-plus' },
                  ].map((p) => (
                    <label
                      key={p.val}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className={selectedPriceRange === p.val ? 'font-bold text-[#232E38]' : 'text-gray-700'}>
                        {p.label}
                      </span>
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === p.val}
                        onChange={() => setSelectedPriceRange(p.val)}
                        className="text-[#232E38] focus:ring-[#232E38]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Min Beds
                  </label>
                  <select
                    value={selectedBeds}
                    onChange={(e) => setSelectedBeds(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-[#232E38]"
                  >
                    <option value="Any">Any Beds</option>
                    <option value="1">1+ Beds</option>
                    <option value="2">2+ Beds</option>
                    <option value="3">3+ Beds</option>
                    <option value="4">4+ Beds</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Min Baths
                  </label>
                  <select
                    value={selectedBaths}
                    onChange={(e) => setSelectedBaths(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-[#232E38]"
                  >
                    <option value="Any">Any Baths</option>
                    <option value="1">1+ Baths</option>
                    <option value="2">2+ Baths</option>
                    <option value="3">3+ Baths</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Main Area (9 cols on lg) */}
          <main className="lg:col-span-9">
            {/* Top Toolbar */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-3">
              {/* Mobile Filter Trigger */}
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
              </button>

              <div className="text-xs text-gray-500 font-medium">
                Showing <strong className="text-gray-900">{displayedListings.length}</strong> of{' '}
                <strong className="text-gray-900">{filteredProperties.length}</strong> properties
              </div>

              {/* Sorting and View Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 hidden sm:inline">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs font-semibold border border-gray-200 rounded-lg p-2 bg-white text-gray-700 focus:outline-none focus:border-[#232E38]"
                  >
                    <option value="featured">Featured First</option>
                    <option value="newest">Newest Built</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="sqft">Square Footage</option>
                  </select>
                </div>

                {/* Grid / List View Toggle */}
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${
                      viewMode === 'grid' ? 'bg-[#232E38] text-white' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${
                      viewMode === 'list' ? 'bg-[#232E38] text-white' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-gray-400">Active:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] border border-green-200 text-xs px-2.5 py-1 rounded-full font-medium">
                    &quot;{searchTerm}&quot;
                    <button onClick={() => setSearchTerm('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedType !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] border border-green-200 text-xs px-2.5 py-1 rounded-full font-medium">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedPurpose !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] border border-green-200 text-xs px-2.5 py-1 rounded-full font-medium">
                    Purpose: For {selectedPurpose}
                    <button onClick={() => setSelectedPurpose('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedPriceRange !== 'All' && (
                  <span className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] border border-green-200 text-xs px-2.5 py-1 rounded-full font-medium">
                    Price: {selectedPriceRange}
                    <button onClick={() => setSelectedPriceRange('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-gray-500 hover:text-gray-800 underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Property Cards Layout */}
            {filteredProperties.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">No matching properties found</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
                  We couldn&apos;t find any verified listings matching your specific criteria. Try expanding your search or clearing active filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-5 inline-flex items-center gap-2 bg-[#232E38] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {displayedListings.map((prop) => (
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
            ) : (
              /* List View Mode */
              <div className="space-y-4">
                {displayedListings.map((prop) => {
                  const isWishlisted = wishlistIds.includes(prop.id);
                  return (
                    <Link
                      key={prop.id}
                      href={`/properties/${prop.slug}`}
                      className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 group"
                    >
                      <div className="relative w-full md:w-72 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              prop.badgeType === 'sale' ? 'bg-[#EBF5FF] text-[#0284C7]' : 'bg-[#FFF7ED] text-[#D97706]'
                            }`}
                          >
                            {prop.badge}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => toggleWishlist(prop.id, e)}
                          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>

                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                            <MapPin className="w-3.5 h-3.5 text-gray-400" />
                            <span>{prop.address}, {prop.location}</span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#232E38] transition-colors">
                            {prop.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                            {prop.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between">
                          <div className="text-xl font-extrabold text-[#232E38]">
                            {prop.price}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-600 font-medium">
                            <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />{prop.beds} Beds</span>
                            <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />{prop.baths} Baths</span>
                            <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" />{prop.sqft}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Load More Button */}
            {displayedListings.length < filteredProperties.length && (
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
                >
                  <span>Load More Properties ({filteredProperties.length - displayedListings.length} remaining)</span>
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </AppLayout>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <AppLayout>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[#232E38] animate-ping" />
              <span>Loading properties...</span>
            </div>
          </div>
        </AppLayout>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}
