'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { FAQS } from '@/data/mockData';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'General', 'Buying', 'Selling', 'Tours', 'Financing'];

  const filtered = FAQS.filter((f) => {
    const matchesCat = selectedCat === 'All' || f.category.toLowerCase() === selectedCat.toLowerCase();
    const matchesSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <AppLayout>
      <PageHeader
        badge="Knowledge Base"
        title="Frequently Asked Questions"
        subtitle="Find immediate answers regarding HomeVista verification standards, booking tours, financing pre-approval, and listing procedures."
        breadcrumbs={[{ label: 'Help & FAQ' }]}
      >
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs border border-white/20 rounded-xl p-3 pl-9 bg-white/10 text-white placeholder-gray-300 backdrop-blur-md shadow-xs focus:outline-none focus:bg-white/20"
          />
          <Search className="w-4 h-4 text-emerald-300 absolute left-3 top-3.5" />
        </div>
      </PageHeader>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                selectedCat.toLowerCase() === c.toLowerCase()
                  ? 'bg-[#232E38] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="p-8 bg-gray-50 rounded-2xl text-center text-xs text-gray-500">
              No questions found matching &quot;{search}&quot;. Try a different query or contact our concierge directly.
            </div>
          ) : (
            filtered.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#232E38]/40 bg-white shadow-sm ring-1 ring-[#232E38]/20'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#232E38]' : ''
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
            })
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-8 bg-green-50/70 border border-green-200 rounded-3xl text-center">
          <div className="w-12 h-12 rounded-full bg-white text-[#232E38] flex items-center justify-center mx-auto mb-3 shadow-xs">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-gray-900 text-base">Still need assistance?</h3>
          <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
            Our real estate support specialists and licensed advisors are available 7 days a week.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block bg-[#232E38] text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs"
            >
              Contact Support Concierge
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
