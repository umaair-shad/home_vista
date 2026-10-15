'use client';

import React, { useState } from 'react';
import { UtilityBar } from './UtilityBar';
import { MainNavbar } from './MainNavbar';
import { SiteFooter } from './SiteFooter';
import { WishlistDrawer } from './WishlistDrawer';
import { PropertyDetailModal } from './PropertyDetailModal';
import { ALL_PROPERTIES } from '@/data/mockData';
import { PropertyItem } from '@/types';

interface AppLayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>(['1', '6']);
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleToggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectProperty = (property: PropertyItem) => {
    setSelectedProperty(property);
    setIsDetailModalOpen(true);
  };

  const wishlistedProperties = ALL_PROPERTIES.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172522]">
      <UtilityBar />
      <MainNavbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <main className="flex-1">{children}</main>

      <SiteFooter />

      {/* Shared Global Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistedProperties={wishlistedProperties}
        onRemoveFromWishlist={handleToggleWishlist}
        onSelectProperty={handleSelectProperty}
      />

      {/* Shared Global Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isDetailModalOpen}
        isWishlisted={selectedProperty ? wishlistIds.includes(selectedProperty.id) : false}
        onClose={() => setIsDetailModalOpen(false)}
        onToggleWishlist={handleToggleWishlist}
      />
    </div>
  );
};
