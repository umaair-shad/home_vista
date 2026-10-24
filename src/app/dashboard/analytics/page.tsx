'use client';

import React from 'react';
import Link from 'next/link';
import { PortalLayout } from '@/components/PortalLayout';
import {
  TrendingUp,
  Eye,
  Users,
  Building2,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Share2,
  Download,
} from 'lucide-react';

export default function DashboardAnalyticsPage() {
  return (
    <PortalLayout portalType="owner" title="Performance Analytics">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Listing Performance & Insights
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Real-time syndicate impressions, buyer demographics, and conversion analytics.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => alert('Exporting Analytics CSV Report...')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-semibold text-gray-500">Total Listing Impressions</span>
              <Eye className="w-4 h-4 text-[#087443]" />
            </div>
            <div className="text-2xl font-bold text-gray-900">42,890</div>
            <div className="flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+24.8% vs last month</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-semibold text-gray-500">Buyer Inquiries</span>
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">148</div>
            <div className="flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+12.4% inquiry rate</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-semibold text-gray-500">Tours Completed</span>
              <Calendar className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">38</div>
            <div className="flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>94% attendance rate</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-gray-400 mb-2">
              <span className="text-xs font-semibold text-gray-500">Avg. Days on Market</span>
              <Building2 className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">22 Days</div>
            <div className="flex items-center gap-1 text-[11px] text-green-600 font-semibold mt-1">
              <ArrowDownRight className="w-3.5 h-3.5" />
              <span>18 days faster than MLS</span>
            </div>
          </div>
        </div>

        {/* Traffic Channels & Regional Demand Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <h2 className="text-base font-bold text-gray-900 mb-1">Top Buyer Influx by City</h2>
            <p className="text-xs text-gray-500 mb-6">Geographic source of verified inquiries across your properties.</p>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-gray-700 mb-1">
                  <span>Los Angeles & Beverly Hills, CA</span>
                  <span className="text-[#087443]">38% (16,298 views)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#087443] h-2 rounded-full w-[38%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-gray-700 mb-1">
                  <span>New York & Manhattan, NY</span>
                  <span className="text-[#087443]">28% (12,009 views)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#087443] h-2 rounded-full w-[28%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-gray-700 mb-1">
                  <span>Miami & Palm Beach, FL</span>
                  <span className="text-[#087443]">21% (9,006 views)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#087443] h-2 rounded-full w-[21%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-gray-700 mb-1">
                  <span>Austin & Westlake Hills, TX</span>
                  <span className="text-[#087443]">13% (5,575 views)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#087443] h-2 rounded-full w-[13%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <h2 className="text-base font-bold text-gray-900 mb-1">Listing Conversion Funnel</h2>
            <p className="text-xs text-gray-500 mb-6">From initial syndicate impression to closed escrow offer.</p>
            <div className="space-y-3.5 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-gray-900">Total Digital Impressions</span>
                  <p className="text-[11px] text-gray-500">Search impressions on HomeVista, MLS & Syndicates</p>
                </div>
                <span className="text-sm font-extrabold text-gray-900">42,890</span>
              </div>

              <div className="p-3 bg-green-50/60 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#087443]">Detailed Gallery & 3D Tour Views</span>
                  <p className="text-[11px] text-gray-600">Buyers who spent &gt; 2 mins exploring virtual tours</p>
                </div>
                <span className="text-sm font-extrabold text-[#087443]">8,420 (19.6%)</span>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#087443]">Tour Requests & Contact Forms</span>
                  <p className="text-[11px] text-gray-600">Direct bookings for private showing</p>
                </div>
                <span className="text-sm font-extrabold text-[#087443]">148 (1.7%)</span>
              </div>

              <div className="p-3 card-gradient-dark rounded-xl text-white flex items-center justify-between">
                <div>
                  <span className="font-bold">Offers Submitted & Pending Escrow</span>
                  <p className="text-[11px] text-emerald-200">Binding purchase agreements in escrow review</p>
                </div>
                <span className="text-sm font-extrabold">6 Offers ($18.4M)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
