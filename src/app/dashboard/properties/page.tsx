'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortalLayout } from '@/components/PortalLayout';
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
    <PortalLayout portalType="owner" title="My Listings">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">My Properties</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Manage, edit, and monitor your listed residential and commercial inventory.
            </p>
          </div>

          <Link
            href="/dashboard/properties/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#087443] hover:bg-[#065e36] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add New Property</span>
          </Link>
        </div>

        {notification && (
          <div className="p-4 bg-green-50 border border-green-200 text-[#087443] text-xs font-semibold rounded-2xl flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search by title, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl p-2.5 pr-8 focus:outline-none focus:border-[#087443]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-gray-500 font-semibold hidden sm:inline">Status:</span>
            {(['all', 'sale', 'rent'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setStatusFilter(filter)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg capitalize transition-all ${
                  statusFilter === filter
                    ? 'bg-[#087443] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'All Listings' : `For ${filter}`}
              </button>
            ))}
          </div>
        </div>

        {/* Properties List */}
        <div className="space-y-4">
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <p className="text-sm font-semibold text-gray-700">No properties found</p>
              <p className="text-xs text-gray-500 mt-1">Try adjusting your search query or status filter.</p>
            </div>
          ) : (
            filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={prop.image}
                      alt={prop.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded capitalize">
                      {prop.badgeType || 'sale'}
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">
                      {prop.propertyType || prop.type || 'Villa'} &bull; {prop.city || 'Los Angeles'}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 truncate mt-0.5">{prop.title}</h3>
                    <p className="text-xs text-gray-500 truncate">{prop.location}</p>

                    <div className="flex items-center gap-3 text-[11px] text-gray-600 mt-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-gray-400" />
                        {prop.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-gray-400" />
                        {prop.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                        {prop.sqft}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <div className="text-left md:text-right">
                    <p className="text-base font-extrabold text-[#087443]">{prop.price}</p>
                    <span className="inline-block px-2 py-0.5 bg-green-50 text-[#087443] text-[10px] font-bold rounded mt-0.5">
                      Published
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Link
                      href={`/properties/${prop.slug}`}
                      className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Public Page"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/dashboard/properties/${prop.id}/edit`}
                      className="p-2 text-gray-400 hover:text-[#087443] hover:bg-emerald-50 rounded-lg transition-colors"
                      title="Edit Details"
                    >
                      <Edit3 className="w-4 h-4" />
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
    </PortalLayout>
  );
}
