'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Phone, Mail, ArrowRight, Award } from 'lucide-react';
import { AGENTS } from '@/data/mockData';

export const FeaturedAgents: React.FC = () => {
  return (
    <section id="agents" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
            Verified Professionals
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#172522] tracking-tight">
            Meet Our Top Real Estate Advisors
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Experienced, client-rated brokers dedicated to navigating your next purchase or sale.
          </p>
        </div>
        <Link
          href="/agents"
          className="mt-2 sm:mt-0 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1 group"
        >
          <span>View All Agents</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AGENTS.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between group"
          >
            <div>
              {/* Agent Image & Experience Badge */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#F59E0B]" />
                  <span>{agent.experienceYears}y exp</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-[11.5px] text-gray-600 mb-1">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-bold text-gray-900">{agent.rating}</span>
                <span className="text-gray-400">({agent.reviewCount} reviews)</span>
              </div>

              {/* Name & Title */}
              <Link href={`/agents/${agent.slug}`} className="hover:text-[#232E38] transition-colors">
                <h3 className="font-bold text-gray-900 text-base leading-snug">
                  {agent.name}
                </h3>
              </Link>
              <p className="text-xs text-gray-500 mt-0.5">{agent.title}</p>

              {/* Specialties Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {agent.specialties.slice(0, 2).map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 text-gray-600 text-[10.5px] font-medium px-2 py-0.5 rounded-md border border-gray-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Actions Footer */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2">
              <a
                href={`tel:${agent.phone}`}
                className="flex-1 bg-green-50 hover:bg-primary text-primary hover:text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
              <Link
                href={`/agents/${agent.slug}`}
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
