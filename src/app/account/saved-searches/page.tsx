'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PortalLayout } from '@/components/PortalLayout';
import { Search, Bell, Trash2, ArrowRight } from 'lucide-react';

interface SavedSearch {
  id: string;
  name: string;
  location: string;
  type: string;
  priceRange: string;
  frequency: string;
  newMatches: number;
}

export default function AccountSavedSearchesPage() {
  const [searches, setSearches] = useState<SavedSearch[]>([
    {
      id: '1',
      name: 'Luxury Villas in Los Angeles',
      location: 'Los Angeles, CA',
      type: 'Villas',
      priceRange: '$1,000,000 - $3,000,000',
      frequency: 'Daily Email',
      newMatches: 4,
    },
    {
      id: '2',
      name: 'Modern Downtown Condos',
      location: 'Miami, FL',
      type: 'Condos',
      priceRange: 'Up to $800,000',
      frequency: 'Instant Alert',
      newMatches: 2,
    },
  ]);

  const handleRemove = (id: string) => {
    setSearches((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <PortalLayout portalType="buyer" title="Saved Searches">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Saved Searches & Alerts</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Get notified immediately when new listings matching your exact criteria hit the market.
          </p>
        </div>

        <div className="space-y-6">
              {searches.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">No Saved Searches</h3>
                  <p className="text-xs text-gray-500 mb-6">
                    Filter properties on our search page and click &quot;Save this search&quot; to configure instant alerts.
                  </p>
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#232E38] text-white text-xs font-bold rounded-xl"
                  >
                    Start a Search
                  </Link>
                </div>
              ) : (
                searches.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-gray-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-gray-900">{item.name}</h3>
                        {item.newMatches > 0 && (
                          <span className="px-2 py-0.5 bg-emerald-100 text-[#232E38] text-[10px] font-bold rounded-full">
                            {item.newMatches} new listings
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {item.location} &bull; {item.type} &bull; {item.priceRange}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#232E38] font-medium pt-1">
                        <Bell className="w-3.5 h-3.5" />
                        <span>Frequency: {item.frequency}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 sm:pt-0">
                      <Link
                        href={`/properties?location=${encodeURIComponent(item.location)}`}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-[#232E38] hover:bg-[#141A20] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                      >
                        <span>View Results</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Delete saved search"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}

              <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                <h4 className="text-xs font-bold text-[#232E38] uppercase tracking-wider mb-1">How alerts work</h4>
                <p className="text-xs text-emerald-950 leading-relaxed">
                  Our system crawls MLS and private partner databases every 15 minutes. When a property matches your criteria, you will receive an email digest or an SMS alert according to your notification settings.
                </p>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
