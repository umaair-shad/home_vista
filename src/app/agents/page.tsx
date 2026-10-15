'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { AGENTS } from '@/data/mockData';
import { ChevronRight, Star, Phone, Mail, Award, Search, ShieldCheck } from 'lucide-react';

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const filteredAgents = AGENTS.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === 'All' ||
      agent.specialties.some((s) => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));

    return matchesSearch && matchesSpecialty;
  });

  return (
    <AppLayout>
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-[#232E38]">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Agents Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172522] tracking-tight">
            Our Elite Real Estate Advisors
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl">
            Connect with certified, client-rated brokers committed to white-glove negotiation, market intelligence, and fiduciary transparency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search agent by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl p-2.5 pr-8 focus:outline-none focus:border-[#232E38]"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3" />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-500">Specialty:</span>
            {['All', 'Waterfront', 'Condos', 'Estates', 'Architectural'].map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  selectedSpecialty === spec
                    ? 'bg-[#232E38] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#F59E0B]" />
                    <span>{agent.experienceYears}y exp</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="font-bold text-gray-900">{agent.rating}</span>
                  <span className="text-gray-400">({agent.reviewCount} reviews)</span>
                </div>

                <Link href={`/agents/${agent.slug}`} className="hover:text-[#232E38] transition-colors">
                  <h2 className="font-bold text-gray-900 text-base leading-snug">
                    {agent.name}
                  </h2>
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">{agent.title}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{agent.agency}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {agent.specialties.map((s, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-md border border-gray-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2">
                <a
                  href={`tel:${agent.phone}`}
                  className="flex-1 bg-green-50 hover:bg-[#232E38] text-[#232E38] hover:text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>
                <Link
                  href={`/agents/${agent.slug}`}
                  className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  <span>Bio & Listings</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
