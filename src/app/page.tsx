'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UtilityBar } from '@/components/UtilityBar';
import { MainNavbar } from '@/components/MainNavbar';
import { HeroSection } from '@/components/HeroSection';
import { PropertySearch } from '@/components/PropertySearch';
import { PropertyTypes } from '@/components/PropertyTypes';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { PopularLocations } from '@/components/PopularLocations';
import { LifestyleSection } from '@/components/LifestyleSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FeaturedAgents } from '@/components/FeaturedAgents';
import { Testimonials } from '@/components/Testimonials';
import { MarketInsights } from '@/components/MarketInsights';
import { FAQSection } from '@/components/FAQSection';
import { CallToActionBanner } from '@/components/CallToActionBanner';
import { NewsletterBanner } from '@/components/NewsletterBanner';
import { SiteFooter } from '@/components/SiteFooter';
import { PropertyDetailModal } from '@/components/PropertyDetailModal';
import { ListPropertyModal } from '@/components/ListPropertyModal';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { FEATURED_PROPERTIES, ALL_PROPERTIES } from '@/data/mockData';
import { PropertyItem, SearchFilters } from '@/types';

export default function HomePage() {
  const router = useRouter();
  const [wishlistIds, setWishlistIds] = useState<string[]>(['1', '6']);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isListPropertyOpen, setIsListPropertyOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [displayedProperties, setDisplayedProperties] = useState<PropertyItem[]>(FEATURED_PROPERTIES);
  const [searchNotification, setSearchNotification] = useState<string | null>(null);

  // Toggle wishlist state
  const handleToggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Property selection
  const handleSelectProperty = (property: PropertyItem) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  // Modern House card click from Hero overlay
  const handleHeroModernHouseClick = () => {
    const modernHouse = ALL_PROPERTIES.find((p) => p.id === '6') || ALL_PROPERTIES[0];
    handleSelectProperty(modernHouse);
  };

  // Property type selection filter
  const handleSelectType = (typeName: string) => {
    setSelectedType((prev) => (prev === typeName ? null : typeName));
    if (selectedType === typeName) {
      setDisplayedProperties(FEATURED_PROPERTIES);
      setSearchNotification(null);
    } else {
      const matches = ALL_PROPERTIES.filter(
        (p) =>
          p.propertyType.toLowerCase() === typeName.toLowerCase().slice(0, -1) ||
          p.propertyType.toLowerCase() === typeName.toLowerCase() ||
          p.title.toLowerCase().includes(typeName.toLowerCase().slice(0, 4))
      );
      if (matches.length > 0) {
        setDisplayedProperties(matches);
        setSearchNotification(`Showing ${matches.length} verified listings for "${typeName}"`);
      } else {
        setDisplayedProperties(FEATURED_PROPERTIES);
        setSearchNotification(`Showing all verified properties for "${typeName}" (320+ listings)`);
      }
    }
  };

  // Search filter submission
  const handleSearch = (filters: SearchFilters) => {
    const params = new URLSearchParams();
    if (filters.location) params.set('location', filters.location);
    if (filters.propertyType && filters.propertyType !== 'Any Type') params.set('type', filters.propertyType);
    if (filters.priceRange && filters.priceRange !== '$0 - $5,000,000+') params.set('price', filters.priceRange);
    if (filters.beds && filters.beds !== 'Any') params.set('beds', filters.beds);
    if (filters.baths && filters.baths !== 'Any') params.set('baths', filters.baths);

    router.push(`/properties?${params.toString()}`);
  };

  // Wishlisted properties list
  const wishlistedProperties = ALL_PROPERTIES.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172522]">
      {/* 1. Top Slim Utility Bar */}
      <UtilityBar />

      {/* 2. Primary Navigation Bar */}
      <MainNavbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenListProperty={() => setIsListPropertyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('featured');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onModernHouseClick={handleHeroModernHouseClick}
        />

        {/* 4. Floating Property Search Panel */}
        <PropertySearch onSearch={handleSearch} />

        {/* Search Feedback Notification Banner */}
        {searchNotification && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm py-2 px-4 rounded-xl flex items-center justify-between">
              <span>{searchNotification}</span>
              <button
                onClick={() => {
                  setSearchNotification(null);
                  setDisplayedProperties(FEATURED_PROPERTIES);
                  setSelectedType(null);
                }}
                className="text-xs font-semibold underline hover:text-emerald-950 ml-3"
              >
                Reset view
              </button>
            </div>
          </div>
        )}

        {/* 5. Explore Property Types */}
        <PropertyTypes
          selectedType={selectedType}
          onSelectType={handleSelectType}
        />

        {/* 6. Featured Properties */}
        <FeaturedProperties
          properties={displayedProperties}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectProperty={handleSelectProperty}
          onViewAllClick={() => router.push('/properties')}
        />

        {/* 7. Popular Locations */}
        <PopularLocations />

        {/* 8. Lifestyle Collections */}
        <LifestyleSection />

        {/* 9. Why Choose HomeVista? */}
        <WhyChooseUs />

        {/* 10. How It Works Section */}
        <HowItWorksSection />

        {/* 11. Featured Real Estate Agents */}
        <FeaturedAgents />

        {/* 12. Client Testimonials */}
        <Testimonials />

        {/* 13. Market Insights & Articles */}
        <MarketInsights />

        {/* 14. Frequently Asked Questions */}
        <FAQSection />

        {/* 15. Final High-Impact CTA */}
        <CallToActionBanner />

        {/* 16. Newsletter Banner */}
        <NewsletterBanner />
      </main>

      {/* 17. Multi-column Dark Footer */}
      <SiteFooter />

      {/* Interactive Modals & Drawers */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isDetailModalOpen}
        isWishlisted={selectedProperty ? wishlistIds.includes(selectedProperty.id) : false}
        onClose={() => setIsDetailModalOpen(false)}
        onToggleWishlist={handleToggleWishlist}
      />

      <ListPropertyModal
        isOpen={isListPropertyOpen}
        onClose={() => setIsListPropertyOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistedProperties={wishlistedProperties}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProperty={handleSelectProperty}
      />
    </div>
  );
}
