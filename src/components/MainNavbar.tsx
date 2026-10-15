'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Heart, User, Menu, X, PlusCircle } from 'lucide-react';
import { HomeVistaLogo } from './HomeVistaLogo';

interface MainNavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenListProperty?: () => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const isCurrent = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex-shrink-0">
            <HomeVistaLogo variant="dark" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13.5px] font-medium text-gray-700">
            {/* Home */}
            <div className="relative py-2">
              <Link
                href="/"
                className={`flex items-center gap-1 transition-colors ${
                  isCurrent('/') ? 'text-[#087443] font-semibold' : 'hover:text-[#087443]'
                }`}
              >
                Home
              </Link>
              {isCurrent('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#087443] rounded-full" />
              )}
            </div>

            {/* Buy Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('buy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/buy"
                className={`flex items-center gap-1 transition-colors py-1 ${
                  isCurrent('/buy') ? 'text-[#087443] font-semibold' : 'hover:text-[#087443]'
                }`}
                onClick={() => toggleDropdown('buy')}
              >
                <span>Buy</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087443]" />
              </Link>

              {activeDropdown === 'buy' && (
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/buy?type=Villa" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Villas for Sale
                  </Link>
                  <Link href="/buy?type=House" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Family Houses
                  </Link>
                  <Link href="/buy?type=Condo" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Downtown Condos
                  </Link>
                  <Link href="/buy?type=Land" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Land Parcels
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/buy" className="block px-4 py-1.5 text-[11px] font-bold text-[#087443] hover:underline">
                    All Properties for Sale &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Rent Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('rent')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/rent"
                className={`flex items-center gap-1 transition-colors py-1 ${
                  isCurrent('/rent') ? 'text-[#087443] font-semibold' : 'hover:text-[#087443]'
                }`}
                onClick={() => toggleDropdown('rent')}
              >
                <span>Rent</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087443]" />
              </Link>

              {activeDropdown === 'rent' && (
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/rent?type=Apartment" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Apartments for Rent
                  </Link>
                  <Link href="/rent?type=Townhouse" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Townhouses for Rent
                  </Link>
                  <Link href="/rent?type=Condo" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Luxury Penthouses
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/rent" className="block px-4 py-1.5 text-[11px] font-bold text-[#087443] hover:underline">
                    All Rental Properties &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Sell */}
            <Link
              href="/sell"
              className={`hover:text-[#087443] transition-colors py-2 ${
                isCurrent('/sell') ? 'text-[#087443] font-semibold' : ''
              }`}
            >
              Sell
            </Link>

            {/* Agents */}
            <Link
              href="/agents"
              className={`hover:text-[#087443] transition-colors py-2 ${
                isCurrent('/agents') ? 'text-[#087443] font-semibold' : ''
              }`}
            >
              Agents
            </Link>

            {/* Pages Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('pages')}
                className="flex items-center gap-1 hover:text-[#087443] transition-colors py-1 cursor-pointer"
                aria-expanded={activeDropdown === 'pages'}
              >
                <span>Pages</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087443]" />
              </button>

              {activeDropdown === 'pages' && (
                <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-xl shadow-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link href="/properties" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    All Properties Search
                  </Link>
                  <Link href="/locations" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Popular Locations
                  </Link>
                  <Link href="/property-types" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Property Types
                  </Link>
                  <Link href="/how-it-works" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    How It Works
                  </Link>
                  <Link href="/about" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    About HomeVista
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#087443] text-xs font-medium">
                    Help & FAQ
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  <Link href="/dashboard" className="block px-4 py-1.5 text-[11px] font-bold text-[#087443] hover:underline">
                    Owner Dashboard &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className={`hover:text-[#087443] transition-colors py-2 ${
                isCurrent('/blog') ? 'text-[#087443] font-semibold' : ''
              }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`hover:text-[#087443] transition-colors py-2 ${
                isCurrent('/contact') ? 'text-[#087443] font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons & CTA Button (Matching Reference Screenshot) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Wishlist Button */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 text-gray-700 hover:text-[#087443] hover:bg-emerald-50/50 rounded-full transition-colors cursor-pointer"
              aria-label="View saved properties"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#087443] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* User Profile / Account Button */}
            <Link
              href="/account"
              className="p-2 text-gray-700 hover:text-[#087443] hover:bg-emerald-50/50 rounded-full transition-colors"
              aria-label="User account profile"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </Link>

            {/* List Your Property CTA Button (Theme Green #087443) */}
            <Link
              href="/sell"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#087443] hover:bg-[#065e36] text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>List Your Property</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#087443] hover:bg-emerald-50/50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 px-2 space-y-2 bg-white">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#087443] bg-emerald-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/buy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Buy Properties
            </Link>
            <Link
              href="/rent"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Rent Properties
            </Link>
            <Link
              href="/sell"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Sell Your Home
            </Link>
            <Link
              href="/agents"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Agents Directory
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Explore Locations
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              How It Works
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Blog & Insights
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-700 hover:text-[#087443] hover:bg-emerald-50/60 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-900 border-t border-gray-100 pt-3"
            >
              My Account
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-900"
            >
              Owner Dashboard
            </Link>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/sell"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#087443] hover:bg-[#065e36] text-white py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>List Your Property</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
