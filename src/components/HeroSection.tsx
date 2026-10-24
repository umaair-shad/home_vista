'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Play, Home, ChevronDown, X, Check } from 'lucide-react';
import { HERO_AVATARS } from '@/data/mockData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onModernHouseClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onModernHouseClick,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative bg-white pt-6 pb-8 lg:pt-12 lg:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Actions, Social Proof */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Main Headings (Exact Reference Typography) */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#172522] tracking-tight leading-[1.15]">
                Find Your Dream Home
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#087443] tracking-tight leading-[1.15]">
                Live Your Best Life
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Explore thousands of verified properties and find a place you&apos;ll love to call home.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 bg-[#087443] hover:bg-[#065e36] text-white text-sm font-semibold px-5 py-3 rounded-lg shadow-sm hover:shadow transition-all group active:scale-95 cursor-pointer"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-semibold px-4 py-3 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50">
                  <Play className="w-2.5 h-2.5 fill-gray-700 text-gray-700 translate-x-[1px]" />
                </div>
                <span>How It Works</span>
              </button>
            </div>

            {/* Social Proof Row (Exact Reference Design) */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                {HERO_AVATARS.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="inline-block relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={avatar}
                      alt="Verified HomeVista client"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                {/* Plus circle */}
                <div className="w-8 h-8 rounded-full bg-[#087443] ring-2 ring-white flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>

              <div className="text-xs sm:text-[13px] font-medium text-gray-700">
                <span>Trusted by </span>
                <span className="font-semibold text-gray-900">10,000+</span>
                <span> happy clients</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Architecture Photograph & Overlay Card */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                alt="Modern luxury architecture with glass walls and illuminated interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
              />

              {/* Subtle ambient lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Floating Property Information Card (Exact Reference Spec) */}
              <div
                onClick={onModernHouseClick}
                className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-white/60 shadow-xl rounded-2xl p-3 sm:p-4 flex items-center gap-3.5 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all group z-10"
              >
                {/* Green Circle House Icon */}
                <div className="w-10 h-10 rounded-full bg-[#087443] flex items-center justify-center flex-shrink-0 text-white shadow-sm group-hover:bg-[#065e36] transition-colors">
                  <Home className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Details */}
                <div className="flex flex-col text-left">
                  <span className="font-bold text-gray-900 text-sm leading-tight group-hover:text-[#087443] transition-colors">
                    Modern House
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-0.5">
                    <span>Beverly Hills, CA</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                  <span className="font-extrabold text-[#087443] text-sm mt-1">
                    $2,450,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Demo */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-50 text-[#087443] flex items-center justify-center">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">How HomeVista Works</h3>
                <p className="text-xs text-gray-500">Fast, verified real estate matching</p>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 mb-6">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#087443] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-gray-900">Explore Properties:</strong> Browse thousands of verified listings tailored to your preferences.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#087443] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-gray-900">Schedule Tours:</strong> Request private in-person or live video walkthroughs in one click.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#087443] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-gray-900">Close With Confidence:</strong> Partner with licensed advisors and complete transparent transactions.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowVideoModal(false);
                onExploreClick();
              }}
              className="w-full bg-[#087443] hover:bg-[#065e36] text-white py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Browse Listings
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
