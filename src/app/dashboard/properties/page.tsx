'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { DashboardNav } from '@/components/DashboardNav';
import { mockProperties } from '@/data/mockData';
import {
  PlusCircle,
  Search,
  ExternalLink,
  Edit3,
  Trash2,
  CheckCircle2,
  Bed,
  Bath,
  Maximize2,
} from 'lucide-react';

export default function DashboardPropertiesPage() {
  const [properties, setProperties] = useState(mockProperties);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'sale' | 'rent'>('all');
  const [notification, setNotification] = useState('');

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
      setNotification(`Property "${title}" has been removed.`);
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      p.badgeType === statusFilter ||
      p.category === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">My Properties</h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage, edit, and monitor your listed residential and commercial inventory.
              </p>
            </div>

            <Link
              href="/dashboard/properties/new"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#232E38] hover:bg-[#141A20] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Listing</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <DashboardNav />
            </div>

            <div className="lg:col-span-3 space-y-6">
              {notification && (
                <div className="p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{notification}</span>
                </div>
              )}

              {/* Filters bar */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    placeholder="Search by title or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl p-2.5 pl-9 text-xs focus:outline-none focus:border-[#232E38]"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs text-gray-500 font-medium">Filter:</span>
                  <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setStatusFilter('all')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        statusFilter === 'all' ? 'bg-white text-[#232E38] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      All ({properties.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatusFilter('sale')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        statusFilter === 'sale' ? 'bg-white text-[#232E38] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      For Sale
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatusFilter('rent')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        statusFilter === 'rent' ? 'bg-white text-[#232E38] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      For Rent
                    </button>
                  </div>
                </div>
              </div>

              {/* Listings grid/list */}
              <div className="space-y-4">
                {filteredProperties.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">No matching listings found</h3>
                    <p className="text-xs text-gray-500">Try adjusting your search criteria or add a new property.</p>
                  </div>
                ) : (
                  filteredProperties.map((prop) => (
                    <div
                      key={prop.id}
                      className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-sm hover:border-gray-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                        <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                          <Image
                            src={prop.image}
                            alt={prop.title}
                            fill
                            className="object-cover"
                          />
                          <span className="absolute bottom-1.5 left-1.5 bg-black/70 backdrop-blur-md text-white text-[9px] px-1.5 py-0.5 rounded font-medium">
                            {(prop.badgeType || prop.category) === 'rent' ? 'Rent' : 'Sale'}
                          </span>
                        </div>

                        <div className="overflow-hidden">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-[#232E38] bg-emerald-50 px-2 py-0.5 rounded">
                              {prop.badge || 'Available'}
                            </span>
                            <span className="text-[10px] text-gray-400">{prop.propertyType || prop.type}</span>
                          </div>
                          <h3 className="text-sm font-bold text-gray-900 truncate">{prop.title}</h3>
                          <p className="text-xs text-gray-500 truncate">{prop.location}</p>

                          <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-2">
                            <span className="flex items-center gap-1">
                              <Bed className="w-3 h-3 text-gray-400" />
                              {prop.beds} beds
                            </span>
                            <span className="flex items-center gap-1">
                              <Bath className="w-3 h-3 text-gray-400" />
                              {prop.baths} baths
                            </span>
                            <span className="flex items-center gap-1">
                              <Maximize2 className="w-3 h-3 text-gray-400" />
                              {prop.sqft}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                        <div className="text-left sm:text-right">
                          <div className="text-sm font-bold text-[#232E38]">
                            {prop.price}
                            {(prop.badgeType || prop.category) === 'rent' ? '/mo' : ''}
                          </div>
                          <span className="text-[10px] text-gray-400">Published live</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/dashboard/properties/${prop.id}/edit`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </Link>
                          <Link
                            href={`/properties/${prop.slug}`}
                            className="p-2 text-gray-400 hover:text-gray-700 transition-colors"
                            title="View Public Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(prop.id, prop.title)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Listing"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
