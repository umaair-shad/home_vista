'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PortalLayout } from '@/components/PortalLayout';
import { MessageSquare, Calendar, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

interface Inquiry {
  id: string;
  propertyTitle: string;
  propertySlug: string;
  propertyAddress: string;
  agentName: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  type: 'Tour Request' | 'Question / Pricing';
  notes: string;
}

export default function AccountInquiriesPage() {
  const [inquiries] = useState<Inquiry[]>([
    {
      id: 'INQ-101',
      propertyTitle: 'Beverly Hills Modern Luxury Villa',
      propertySlug: 'beverly-hills-modern-luxury-villa',
      propertyAddress: '1284 Crescent Dr, Beverly Hills, CA',
      agentName: 'Robert Sterling',
      date: 'Tomorrow, 2:00 PM PST',
      status: 'Confirmed',
      type: 'Tour Request',
      notes: 'In-person viewing confirmed. Agent Robert will meet at main gates with gate code.',
    },
    {
      id: 'INQ-102',
      propertyTitle: 'Waterfront Sunset Bay Residence',
      propertySlug: 'waterfront-sunset-bay-residence',
      propertyAddress: '742 Ocean Blvd, Miami, FL',
      agentName: 'Elena Rostova',
      date: 'Oct 18, 2026, 11:30 AM EST',
      status: 'Pending',
      type: 'Tour Request',
      notes: 'Waiting for seller verification on weekend access.',
    },
    {
      id: 'INQ-103',
      propertyTitle: 'Skyline Penthouse with Panoramic Views',
      propertySlug: 'skyline-penthouse-with-panoramic-views',
      propertyAddress: '432 Park Ave, New York, NY',
      agentName: 'Marcus Vance',
      date: 'Oct 12, 2026',
      status: 'Completed',
      type: 'Question / Pricing',
      notes: 'Provided HOA monthly disclosures and property tax history document.',
    },
  ]);

  return (
    <PortalLayout portalType="buyer" title="Inquiries & Tours">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Tours & Inquiries</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Track your scheduled in-person walkthroughs and direct agent correspondence.
          </p>
        </div>

        <div className="space-y-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-gray-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-gray-400 font-semibold">{inq.id}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {inq.type}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            inq.status === 'Confirmed'
                              ? 'bg-green-50 text-[#232E38]'
                              : inq.status === 'Pending'
                              ? 'bg-amber-50 text-amber-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {inq.status === 'Confirmed' && <CheckCircle2 className="w-3 h-3" />}
                          {inq.status === 'Pending' && <Clock className="w-3 h-3" />}
                          <span>{inq.status}</span>
                        </span>
                      </div>
                      <Link
                        href={`/properties/${inq.propertySlug}`}
                        className="text-sm font-bold text-gray-900 hover:text-[#232E38] transition-colors"
                      >
                        {inq.propertyTitle}
                      </Link>
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="flex items-center sm:justify-end gap-1 text-xs text-gray-600 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#232E38]" />
                        <span>{inq.date}</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Assigned Agent: {inq.agentName}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{inq.propertyAddress}</span>
                      </div>
                      <p className="text-xs text-gray-600 bg-gray-50 rounded-xl p-3 border border-gray-100 mt-2">
                        <strong className="text-gray-900 font-medium">Agent note: </strong>
                        {inq.notes}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <Link
                        href={`/properties/${inq.propertySlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#232E38] hover:underline"
                      >
                        <span>View Listing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PortalLayout>
      );
    }
