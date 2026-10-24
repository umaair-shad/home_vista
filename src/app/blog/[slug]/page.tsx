'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { ARTICLES } from '@/data/mockData';
import { ChevronRight, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <AppLayout>
      <PageHeader
        badge={article.category}
        title={article.title}
        subtitle={`Authored by ${article.author.name} • ${article.date} • ${article.readTime} read`}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: article.title }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">

          {/* Author info row */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{article.author.name}</div>
                <div className="text-gray-400">{article.author.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-[420px] rounded-2xl overflow-hidden mb-10 bg-gray-100 shadow-md">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Article Markdown-like Content */}
        <div className="prose prose-emerald max-w-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-6">
          <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="whitespace-pre-line leading-relaxed">
            {article.content}
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 my-8">
            <h3 className="font-bold text-gray-900 text-base mb-1">Key Takeaway for Homeowners</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Real estate value is driven by verified accuracy, intelligent timing, and licensed representation. Consult with a dedicated HomeVista advisor before finalizing major listing or purchasing decisions.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-8 mt-8 border-t border-gray-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gray-500 mr-2">Tags:</span>
          {article.tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Articles */}
        <div className="pt-12 mt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Related Insights</h3>
            <Link href="/blog" className="text-xs font-semibold text-[#232E38] hover:underline flex items-center gap-1">
              <span>All Articles</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="p-4 bg-white border border-gray-200 rounded-2xl shadow-xs hover:shadow-md transition-all group"
              >
                <span className="text-[10.5px] font-bold text-[#232E38]">{rel.category}</span>
                <h4 className="font-bold text-gray-900 text-sm mt-1 group-hover:text-[#232E38] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <div className="text-[11px] text-gray-400 mt-2">{rel.readTime} &bull; {rel.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </AppLayout>
  );
}
