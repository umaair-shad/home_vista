'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import {
  Search,
  CalendarCheck,
  ShieldCheck,
  Award,
  Key,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'renters' | 'sellers'>('buyers');

  return (
    <AppLayout>
      <PageHeader
        badge="The HomeVista Advantage"
        title="How HomeVista Works"
        subtitle="A transparent, modern platform engineered to eliminate friction from real estate transactions with licensed escrow security."
        breadcrumbs={[{ label: 'How It Works' }]}
      >
        {/* Role Switcher Tabs */}
        <div className="inline-flex p-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xs text-xs font-semibold">
          <button
            onClick={() => setActiveTab('buyers')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'buyers'
                ? 'bg-white text-[#071F1C] font-bold shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            For Buyers
          </button>
          <button
            onClick={() => setActiveTab('renters')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'renters'
                ? 'bg-white text-[#071F1C] font-bold shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            For Renters
          </button>
          <button
            onClick={() => setActiveTab('sellers')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'sellers'
                ? 'bg-white text-[#071F1C] font-bold shadow-sm'
                : 'text-gray-200 hover:text-white hover:bg-white/10'
            }`}
          >
            For Sellers
          </button>
        </div>
      </PageHeader>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {activeTab === 'buyers' && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <Search className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Discover Curated & Verified Inventory</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Every property on HomeVista includes verified square footage, verified ownership title records, and professional photography. No misleading floorplans or expired ghost listings.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Seamless Tour Scheduling with Elite Brokers</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Select your preferred time window directly on the listing page. Choose between an escorted on-site walkthrough or a private live video tour with a top-rated HomeVista advisor.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Guaranteed Escrow Protection & Closing Support</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Submit transparent digital offers with clear contingency terms. Our closing concierge tracks escrow milestones, title insurance, and final walkthrough verification until keys are in hand.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'renters' && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <Key className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Transparent Pricing with Zero Hidden Broker Fees</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Browse verified luxury apartments and townhomes with transparent monthly lease terms, deposit requirements, and amenity inclusions upfront.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Fast-Track Digital Rental Applications</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Apply online securely once and share your verified application packet with multiple property managers, expediting approvals within 24 hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sellers' && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Comprehensive Pre-Listing Valuation</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Receive an automated valuation report supported by on-site comparative market analysis from an experienced local broker.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#087443] flex items-center justify-center flex-shrink-0 border border-green-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Omni-Channel Luxury Syndicate Marketing</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Your home is showcased across our verified buyer portal, international real estate syndicates, high-engagement social media campaigns, and private buyer networks.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-14 pt-10 border-t border-gray-200 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-[#232E38] hover:bg-[#141A20] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Explore Verified Properties Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
