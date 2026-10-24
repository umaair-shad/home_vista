'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import {
  ChevronRight,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Camera,
  Users,
  CheckCircle2,
  DollarSign,
  ArrowRight,
} from 'lucide-react';

export default function SellPage() {
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('House');
  const [beds, setBeds] = useState('3');
  const [baths, setBaths] = useState('2');
  const [sqft, setSqft] = useState('2200');
  const [condition, setCondition] = useState('Excellent');
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    const baseSqft = Number(sqft) || 2000;
    const ratePerSqft = condition === 'Excellent' ? 450 : condition === 'Good' ? 380 : 310;
    const val = baseSqft * ratePerSqft + Number(beds) * 25000;
    setEstimatedValue(val);
  };

  return (
    <AppLayout>
      {/* Hero Header */}
      <div className="hero-gradient-dark py-14 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-emerald-300 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">Sell Your Property</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Maximum Value Guarantee
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 leading-tight">
              Sell Your Home Faster & for Top Market Dollar
            </h1>
            <p className="text-xs sm:text-sm text-gray-200 mt-3 leading-relaxed">
              Leverage HomeVista nationwide buyer network, bespoke 3D virtual staging, and dedicated elite broker representation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Instant Home Valuation Estimator Tool */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-10 -mt-16 relative z-10 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-[#232E38] uppercase tracking-wider">
                Instant Valuation Tool
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Estimate Your Property Market Value
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Get an instant estimate based on recent verified comparable neighborhood sales.
              </p>
            </div>

            <form onSubmit={calculateEstimate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Property Street Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1504 Westlake Hills Blvd, Austin, TX"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 bg-white"
                  >
                    <option>House</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Bedrooms</label>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 bg-white"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Square Feet</label>
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 bg-white"
                  >
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Needs Work</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
              >
                Calculate Estimated Valuation
              </button>
            </form>

            {estimatedValue && (
              <div className="mt-6 p-6 bg-green-50/80 border border-green-200 rounded-2xl text-center animate-in fade-in zoom-in-95 duration-200">
                <span className="text-xs text-gray-500 font-medium">Estimated Home Value Range</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#232E38] my-1">
                  ${(estimatedValue * 0.96).toLocaleString(undefined, { maximumFractionDigits: 0 })} – ${(estimatedValue * 1.05).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <p className="text-xs text-gray-600 max-w-md mx-auto mt-2">
                  Based on current market demand in this zip code. A licensed HomeVista valuation specialist can provide a complimentary on-site appraisal.
                </p>
                <div className="mt-4">
                  <Link
                    href="/dashboard/properties/new"
                    className="inline-flex items-center gap-1.5 bg-[#232E38] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm"
                  >
                    <span>Proceed to List Your Property</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Why Sell with HomeVista */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172522]">
              The HomeVista Seller Advantage
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              We pair cutting-edge digital reach with world-class broker representation to sell your property faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Cinematic Media & 3D Staging</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Complimentary HDR architectural photography, 4K drone cinematography, and immersive virtual tours for every exclusive listing.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">500,000+ Active Monthly Buyers</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Direct syndicate exposure to affluent domestic and international high-net-worth buyers actively seeking luxury properties.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Record Days-on-Market Speed</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our listings sell an average of 18 days faster than traditional MLS averages, maximizing net proceeds for owners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
