'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { PROPERTY_TYPES, ALL_PROPERTIES } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

export default function PropertyTypesPage() {
  return (
    <AppLayout>
      <PageHeader
        badge="Architectural Styles"
        title="Explore All Property Categories"
        subtitle="Browse through our curated portfolio of residential styles, from high-rise metropolitan condominiums to sprawling coastal villas."
        breadcrumbs={[{ label: 'Property Types' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTY_TYPES.map((item) => {
            const countInMock = ALL_PROPERTIES.filter(
              (p) => p.propertyType.toLowerCase() === item.name.toLowerCase().slice(0, -1)
            ).length;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#232E38] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      {item.count}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#232E38] transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/properties?type=${item.name.slice(0, -1)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#F8FAF9] hover:bg-[#232E38] text-gray-800 hover:text-white border border-gray-200 hover:border-[#232E38] py-2.5 rounded-xl text-xs font-semibold transition-all group/btn"
                  >
                    <span>View {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
