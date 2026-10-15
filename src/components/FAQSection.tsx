'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '@/data/mockData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 bg-green-50 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172522] tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Everything you need to know about purchasing, touring, and listing on HomeVista.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-primary/40 bg-white shadow-sm ring-1 ring-primary/20'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm sm:text-base focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* View full FAQ Link */}
      <div className="text-center mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          <span>Have more questions? Visit our comprehensive Help & FAQ center</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
