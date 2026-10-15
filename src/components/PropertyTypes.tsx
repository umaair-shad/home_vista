'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROPERTY_TYPES } from '@/data/mockData';

interface PropertyTypesProps {
  selectedType: string | null;
  onSelectType: (typeName: string) => void;
}

export const PropertyTypes: React.FC<PropertyTypesProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <section id="property-types" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Row (Exact Reference Spec) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#172522] tracking-tight">
          Explore Property Types
        </h2>
        <Link
          href="/property-types"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#232E38] hover:text-[#141A20] transition-colors group cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 6 Grid Cards with Crisp Architectural Photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {PROPERTY_TYPES.map((item) => {
          const isSelected = selectedType === item.name;

          return (
            <div
              key={item.id}
              onClick={() => onSelectType(item.name)}
              className={`bg-white rounded-2xl border p-4 sm:p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-200 group ${
                isSelected
                  ? 'border-[#232E38] ring-2 ring-[#232E38]/30 shadow-md bg-green-50/20 -translate-y-1'
                  : 'border-gray-200 hover:border-[#232E38]/40 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Property Type Image */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-100 group-hover:ring-2 group-hover:ring-[#232E38]/40 group-hover:scale-105 transition-all duration-300 flex-shrink-0 bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              {/* Title & Listing Count */}
              <h3 className="text-sm font-bold text-gray-900 mt-3 group-hover:text-[#232E38] transition-colors">
                {item.name}
              </h3>
              <p className="text-[11.5px] text-gray-500 mt-0.5 font-medium">
                {item.count}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
