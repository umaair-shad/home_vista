'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { DashboardNav } from '@/components/DashboardNav';
import { mockProperties } from '@/data/mockData';
import {
  Building2,
  Users,
  Eye,
  TrendingUp,
  PlusCircle,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export default function DashboardOverviewPage() {
  const activeListings = mockProperties.slice(0, 3);

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-100 text-[#232E38] text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Owner Portal
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                Property Portfolio Overview
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Monitor live listing impressions, schedule buyer viewings, and manage listings.
              </p>
            </div>

            <Link
              href="/dashboard/properties/new"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#232E38] hover:bg-[#141A20] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Property</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <DashboardNav />
            </div>

            <div className="lg:col-span-3 space-y-8">
              {/* Performance Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-semibold text-gray-500">Active Listings</span>
                    <Building2 className="w-4 h-4 text-[#232E38]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <p className="text-[10px] text-green-600 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+2 this month</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-semibold text-gray-500">Total Views</span>
                    <Eye className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">14,290</div>
                  <p className="text-[10px] text-green-600 font-medium flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>+18.4% vs last week</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-semibold text-gray-500">Buyer Inquiries</span>
                    <Users className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">32</div>
                  <p className="text-[10px] text-amber-600 font-medium flex items-center gap-1 mt-1">
                    <span>5 pending response</span>
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-semibold text-gray-500">Tours Completed</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">19</div>
                  <p className="text-[10px] text-gray-400 font-medium mt-1">
                    <span>4 upcoming this week</span>
                  </p>
                </div>
              </div>

              {/* Active Listings Table Preview */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Active Listings</h2>
                    <p className="text-xs text-gray-500">Quick management of your published inventory</p>
                  </div>
                  <Link
                    href="/dashboard/properties"
                    className="text-xs font-semibold text-[#232E38] hover:underline flex items-center gap-1"
                  >
                    <span>View all listings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-4">
                  {activeListings.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-green-50 text-[#232E38] font-bold text-[10px] rounded">
                              Live on MLS
                            </span>
                            <span className="text-[10px] text-gray-400">{item.propertyType || item.type || 'Villa'}</span>
                          </div>
                          <h3 className="text-xs font-bold text-gray-900 mt-1 line-clamp-1">{item.title}</h3>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{item.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                        <div className="text-left sm:text-right">
                          <p className="text-xs font-bold text-gray-900">{item.price}</p>
                          <p className="text-[10px] text-gray-400">1,480 views</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/dashboard/properties/${item.id}/edit`}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors"
                          >
                            Edit
                          </Link>
                          <Link
                            href={`/properties/${item.slug}`}
                            className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors"
                            title="View Public Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiries & Quick Action Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="text-xs font-bold text-gray-900 mb-1">Recent Inquiries Received</h3>
                  <p className="text-xs text-gray-500 mb-4">Buyers requesting tours and pricing disclosures.</p>
                  <div className="space-y-3 text-xs mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">Dr. Robert Chen</p>
                        <p className="text-gray-500 text-[11px]">Requested private tour for Beverly Hills Villa</p>
                      </div>
                      <span className="text-[10px] text-[#232E38] font-bold">New</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">Amanda Brooks</p>
                        <p className="text-gray-500 text-[11px]">Asked for HOA bylaws document</p>
                      </div>
                      <span className="text-[10px] text-gray-400">Yesterday</span>
                    </div>
                  </div>
                  <Link
                    href="/dashboard/inquiries"
                    className="text-xs font-bold text-[#232E38] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View all inquiries</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-[#182128] to-[#232E38] rounded-2xl p-6 text-white flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded-full uppercase tracking-wider inline-block mb-3">
                      Seller Concierge
                    </span>
                    <h3 className="text-base font-bold mb-1">Need Professional 3D & Drone Photography?</h3>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Listings with high-definition virtual tours receive 400% more buyer inquiries. Request our vetted media team.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-block bg-white text-[#182128] hover:bg-gray-100 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                    >
                      Book Media Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
