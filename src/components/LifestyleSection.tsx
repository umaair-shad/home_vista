'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Waves, Building2, Trees, Sparkles, ArrowRight } from 'lucide-react';

const LIFESTYLES = [
  {
    id: 'waterfront',
    title: 'Luxury Waterfront',
    subtitle: 'Private docks, coastal breezes & marina estates',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
    icon: Waves,
    count: '148 properties',
    href: '/properties?lifestyle=Waterfront',
  },
  {
    id: 'urban',
    title: 'Urban High-Rise Living',
    subtitle: 'Skyline penthouses & historic metropolitan lofts',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    icon: Building2,
    count: '312 properties',
    href: '/properties?lifestyle=Urban',
  },
  {
    id: 'suburban',
    title: 'Suburban Family Havens',
    subtitle: 'Top school districts, leafy lawns & safe cul-de-sacs',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
    icon: Trees,
    count: '425 properties',
    href: '/properties?lifestyle=Suburban',
  },
  {
    id: 'luxury',
    title: 'Exclusive Architectural Estates',
    subtitle: 'Gated privacy, bespoke infinity pools & wine cellars',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    icon: Sparkles,
    count: '94 properties',
    href: '/properties?lifestyle=Luxury',
  },
];

export const LifestyleSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-[#087443] tracking-widest uppercase mb-1 block">
            Curated Living
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#172522] tracking-tight">
            Find Properties by Lifestyle
          </h2>
        </div>
        <Link
          href="/properties"
          className="mt-2 sm:mt-0 text-xs sm:text-sm font-semibold text-[#087443] hover:text-[#065e36] flex items-center gap-1 group cursor-pointer"
        >
          <span>Explore All Curations</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LIFESTYLES.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between p-5 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-[#087443] group-hover:border-[#087443] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {item.count}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-300 mt-3 group-hover:translate-x-1 transition-transform">
                  <span>Browse Listings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
