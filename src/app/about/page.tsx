'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { ChevronRight, ShieldCheck, Award, Heart, Users, Target, ArrowRight } from 'lucide-react';
import { AGENTS } from '@/data/mockData';

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-[#232E38]">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172522] tracking-tight">
            About HomeVista
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl">
            Redefining luxury and residential real estate through verifiable trust, transparent escrow, and exceptional human advisory.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#232E38]">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Real Estate Founded on Transparency & Joy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Founded in 2020, HomeVista was born from a fundamental frustration with legacy real estate portals: inaccurate pricing, misleading photography, and high-pressure sales brokers.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We set out to create a verified sanctuary for property seekers. Every listing on HomeVista undergoes licensed escrow title review and physical verification, ensuring that when you find a home you love, the details are 100% genuine.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="HomeVista architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#F8FAF9] rounded-3xl border border-gray-200 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#232E38]">$1.8B+</div>
            <div className="text-xs text-gray-600 mt-1 font-medium">Real Estate Closed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">10,000+</div>
            <div className="text-xs text-gray-600 mt-1 font-medium">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#232E38]">99.4%</div>
            <div className="text-xs text-gray-600 mt-1 font-medium">Verified Accuracy</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">14 Cities</div>
            <div className="text-xs text-gray-600 mt-1 font-medium">Active Brokerages</div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Our Guiding Values</h2>
            <p className="text-xs text-gray-500 mt-1">The standards that guide every transaction and client relationship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Uncompromising Verification</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We never publish speculative or unverified properties. If it is on HomeVista, it is ready for immediate transaction.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Fiduciary Client Advocacy</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our advisors represent your financial best interest, providing candid counsel and strategic negotiation leverage.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#232E38] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Find Joy. Live Better.</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                A home is where family thrives. We treat each search as an honored milestone in our clients&apos; lives.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Team Spotlight */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Leadership & Advisory</h2>
            <p className="text-xs text-gray-500 mt-1">Seasoned real estate executives guiding our nationwide network.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => (
              <div key={agent.id} className="text-center p-4 bg-white border border-gray-100 rounded-2xl shadow-xs">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-3 bg-gray-100">
                  <Image src={agent.avatar} alt={agent.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{agent.name}</h3>
                <p className="text-xs text-[#232E38] font-medium mt-0.5">{agent.title}</p>
                <p className="text-[11px] text-gray-400 mt-1">{agent.agency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
