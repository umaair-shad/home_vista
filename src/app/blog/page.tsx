'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { ARTICLES } from '@/data/mockData';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All' || art.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featured = ARTICLES[0];

  return (
    <AppLayout>
      <PageHeader
        badge="Market Intelligence"
        title="Market Insights & Real Estate Journal"
        subtitle="Thought leadership, design innovation, investment strategy, and home buying guides authored by our licensed experts."
        breadcrumbs={[{ label: 'Real Estate Blog' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Hero Article */}
        {featured && (
          <div className="mb-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              <div className="lg:col-span-7 relative h-72 sm:h-96 bg-gray-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#232E38] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    Featured Analysis
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#232E38] transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                      <Image src={featured.author.avatar} alt={featured.author.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">{featured.author.name}</div>
                      <div className="text-[10.5px] text-gray-400">{featured.author.title}</div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#232E38] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Story &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Market Trends', 'Buyer Guide', 'Seller Advice', 'Architecture'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#232E38] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl p-2.5 pr-8 focus:outline-none focus:border-[#232E38]"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.slug}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-md text-[#232E38] font-bold text-[10.5px] px-2.5 py-1 rounded-full shadow-sm">
                    {art.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{art.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{art.readTime}</span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base group-hover:text-[#232E38] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-100">
                      <Image src={art.author.avatar} alt={art.author.name} fill className="object-cover" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{art.author.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[#232E38] group-hover:translate-x-1 transition-transform">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
