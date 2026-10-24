'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortalLayout } from '@/components/PortalLayout';
import { mockProperties } from '@/data/mockData';
import { Heart, Search, MessageSquare, ArrowRight, Bell, Calendar, Home } from 'lucide-react';

export default function AccountOverviewPage() {
  const favoriteProperties = mockProperties.slice(0, 3);

  return (
    <PortalLayout portalType="buyer" title="Buyer Portal Overview">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-[#087443] text-[10px] font-bold rounded-full uppercase tracking-wider">
              Buyer Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
            Welcome back, Sarah
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Track your saved homes, active inquiries, and scheduled tours.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Saved Properties</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
              <Link href="/account/favorites" className="text-[11px] text-[#087443] font-semibold hover:underline mt-1 inline-block">
                View all saved
              </Link>
            </div>
            <div className="w-10 h-10 rounded-xl bg-green-50 text-[#087443] flex items-center justify-center">
              <Heart className="w-5 h-5 fill-[#087443]" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Saved Searches</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
              <Link href="/account/saved-searches" className="text-[11px] text-[#087443] font-semibold hover:underline mt-1 inline-block">
                Manage alerts
              </Link>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Active Inquiries</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
              <Link href="/account/inquiries" className="text-[11px] text-[#087443] font-semibold hover:underline mt-1 inline-block">
                View responses
              </Link>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Scheduled Tours Banner */}
        <div className="card-gradient-dark rounded-2xl p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-white/20 text-[10px] uppercase tracking-wider rounded font-semibold mb-1">
                Upcoming In-Person Tour
              </span>
              <h2 className="text-base font-bold">Beverly Hills Modern Luxury Villa</h2>
              <p className="text-xs text-emerald-100">Tomorrow at 2:00 PM PST with Agent Robert Sterling</p>
            </div>
          </div>
          <Link
            href="/account/tours"
            className="inline-flex items-center justify-center px-4 py-2 bg-white text-[#071F1C] hover:bg-gray-100 font-bold text-xs rounded-xl shrink-0 transition-all shadow-sm"
          >
            Manage Tour
          </Link>
        </div>

        {/* Saved Properties Preview */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-gray-900">Recently Saved Homes</h2>
              <p className="text-xs text-gray-500">Properties you added to your wishlist</p>
            </div>
            <Link
              href="/account/favorites"
              className="text-xs font-semibold text-[#087443] hover:underline flex items-center gap-1"
            >
              <span>See All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {favoriteProperties.map((prop) => (
              <Link
                key={prop.id}
                href={`/properties/${prop.slug}`}
                className="group border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-36 w-full bg-gray-100">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-medium">
                    {prop.price}
                  </span>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#087443] line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-1">{prop.location}</p>
                  </div>
                  <div className="text-[10px] text-gray-600 mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
                    <span>{prop.beds} beds • {prop.baths} baths</span>
                    <span className="text-[#087443] font-semibold">{prop.propertyType || prop.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Next Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#087443] flex items-center justify-center">
                <Home className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-gray-900">Explore New Listings</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Over 450 new verified listings were posted in California and Florida this week.
            </p>
            <Link
              href="/properties"
              className="text-xs font-bold text-[#087443] hover:underline inline-flex items-center gap-1"
            >
              <span>Browse Properties</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Bell className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-gray-900">Price Drop Alerts</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Receive instant notifications whenever homes in your favorite neighborhoods lower their asking prices.
            </p>
            <Link
              href="/account/saved-searches"
              className="text-xs font-bold text-[#087443] hover:underline inline-flex items-center gap-1"
            >
              <span>Configure Alerts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
