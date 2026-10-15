'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#172522] tracking-tight">
          What Our Clients Say
        </h2>

        {/* Carousel Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-[#087443] hover:border-[#087443] transition-colors shadow-sm cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-[#087443] hover:border-[#087443] transition-colors shadow-sm cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3 Testimonial Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Green Quotation Mark */}
              <div className="text-[#087443] mb-3">
                <Quote className="w-7 h-7 fill-[#087443]/15 text-[#087443]" />
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>
            </div>

            {/* Bottom Row: User Avatar & Info + Stars */}
            <div className="flex items-center justify-between pt-5 mt-4 border-t border-gray-100">
              {/* Avatar + Name */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 ring-1 ring-gray-200 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-xs sm:text-[13px]">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Gold Star Ratings (5 Stars) */}
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
