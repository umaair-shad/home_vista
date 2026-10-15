'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, PlusCircle } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-[#F8FAF9] border border-gray-200/80 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#087443]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#087443] tracking-widest uppercase mb-2 block">
            Begin Your Real Estate Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172522] tracking-tight leading-tight">
            Ready to Find Your Dream Home or Sell with Maximum Return?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Join over 10,000+ satisfied clients who trust HomeVista for verified listings, transparent negotiations, and dedicated 24/7 broker guidance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#087443] hover:bg-[#065e36] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Browse All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/sell"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-[#087443]" />
              <span>List & Value Your Property</span>
            </Link>
          </div>

          {/* Numbers / Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-gray-200 max-w-lg mx-auto text-center">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#172522]">5,000+</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Verified Listings</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#087443]">$1.8B+</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Closed Volume</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#172522]">99.4%</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
