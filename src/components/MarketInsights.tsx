'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ARTICLES } from '@/data/mockData';

export const MarketInsights: React.FC = () => {
  const displayArticles = ARTICLES.slice(0, 3);

  return (
    <section id="insights" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-[#087443] tracking-widest uppercase mb-1 block">
            Market Intelligence
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#172522] tracking-tight">
            Latest Real Estate Insights & News
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Expert analysis, renovation strategies, and market trends authored by top advisors.
          </p>
        </div>
        <Link
          href="/blog"
          className="mt-2 sm:mt-0 text-xs sm:text-sm font-semibold text-[#087443] hover:text-[#065e36] flex items-center gap-1 group cursor-pointer"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayArticles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Article Image & Category Badge */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-md text-[#087443] font-bold text-[10.5px] px-2.5 py-1 rounded-full shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Date & Read time */}
                <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#087443] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">
                    {article.author.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#087443] group-hover:translate-x-1 transition-transform">
                  Read &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
