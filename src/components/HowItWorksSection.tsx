'use client';

import React from 'react';
import Link from 'next/link';
import { Search, CalendarCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discover & Filter',
    description:
      'Search thousands of broker-verified listings with interactive filters, high-resolution architectural galleries, and market pricing intelligence.',
    icon: Search,
    highlight: '100% verified properties',
  },
  {
    number: '02',
    title: 'Tour with an Expert',
    description:
      'Book instant in-person or live private HD video tours with dedicated local agents who represent your interests without high-pressure sales.',
    icon: CalendarCheck,
    highlight: 'Flexible 7-day tour scheduling',
  },
  {
    number: '03',
    title: 'Close with Confidence',
    description:
      'Navigate escrow, offer negotiations, and title settlement seamlessly with HomeVista transparent closing guidance and legal protections.',
    icon: ShieldCheck,
    highlight: 'Secure escrow & digital closing',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="bg-gradient-to-br from-[var(--section-dark)] via-[#073D37] to-[#08524A] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <span className="text-xs font-bold text-emerald-300 tracking-widest uppercase mb-1.5 block">
            The HomeVista Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            How HomeVista Works
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed">
            From initial search to unlocking your front door, our verified technology and licensed advisors ensure a seamless real estate experience.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-200 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <span className="text-[11.5px] font-semibold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Action */}
        <div className="text-center mt-10 relative z-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[var(--primary)] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-transform active:scale-95"
          >
            <span>Learn More About Our Verification Guarantee</span>
            <ArrowRight className="w-4 h-4 text-[var(--primary)]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
