'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortalLayout } from '@/components/PortalLayout';
import { Calendar, Clock, MapPin, User, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { mockProperties } from '@/data/mockData';

export default function AccountToursPage() {
  const upcomingTours = [
    {
      id: 'tour-1',
      property: mockProperties[0],
      date: 'Tomorrow, Oct 25',
      time: '2:00 PM - 3:00 PM PST',
      agent: 'Robert Sterling',
      agentPhone: '+1 (800) 123-4567',
      status: 'Confirmed',
      type: 'Private In-Person Tour',
    },
    {
      id: 'tour-2',
      property: mockProperties[1],
      date: 'Saturday, Oct 28',
      time: '11:00 AM - 11:45 AM PST',
      agent: 'Sarah Jenkins',
      agentPhone: '+1 (800) 123-4568',
      status: 'Awaiting Agent Confirmation',
      type: 'Live HD Video Walkthrough',
    },
  ];

  return (
    <PortalLayout portalType="buyer" title="Scheduled Tours">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              My Scheduled Property Tours
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Track upcoming escorted walkthroughs and private video appointments.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#087443] hover:bg-[#065e36] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
          >
            <span>Browse More Properties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tours List */}
        <div className="space-y-4">
          {upcomingTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={tour.property.image}
                    alt={tour.property.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold rounded">
                    {tour.property.price}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tour.status === 'Confirmed'
                          ? 'bg-green-50 text-[#087443] border border-green-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                    >
                      {tour.status}
                    </span>
                    <span className="text-[11px] text-gray-400">{tour.type}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug">
                    {tour.property.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{tour.property.location}</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 mt-2.5 pt-2 border-t border-gray-50">
                    <span className="flex items-center gap-1 font-semibold text-gray-800">
                      <Calendar className="w-3.5 h-3.5 text-[#087443]" />
                      {tour.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.time}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <User className="w-3.5 h-3.5" />
                      Advisor: <strong>{tour.agent}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                <a
                  href={`tel:${tour.agentPhone}`}
                  className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Agent</span>
                </a>
                <button
                  type="button"
                  onClick={() => alert('Tour reschedule request submitted to concierge team.')}
                  className="px-3.5 py-2 rounded-xl bg-[#087443] hover:bg-[#065e36] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
