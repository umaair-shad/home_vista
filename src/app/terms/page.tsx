'use client';

import React from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <AppLayout>
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-[#232E38]">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Terms & Conditions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172522] tracking-tight">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Last Updated: October 15, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-emerald max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
        <p>
          Welcome to HomeVista. By browsing our website, searching property databases, booking tours, or submitting real estate listings, you agree to comply with and be bound by the following Terms & Conditions.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Equal Housing Opportunity</h2>
        <p>
          HomeVista strictly adheres to Title VIII of the Civil Rights Act of 1968 (Fair Housing Act). We do not discriminate on the basis of race, color, religion, sex, disability, familial status, or national origin. All verified listings are subject to equal housing opportunity.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. Property Listing Verification</h2>
        <p>
          While HomeVista conducts rigorous multi-point verification on all submitted listings, property square footage, boundary lot acreage, tax evaluations, and school district borders should be independently validated during formal physical inspection and title escrow review.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. User Conduct & Inquiries</h2>
        <p>
          Users agree to submit truthful, accurate contact information when requesting property tours or broker consultations. Automated scraping, malicious data harvesting, or automated posting of unauthorized listings is strictly prohibited.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Intellectual Property</h2>
        <p>
          All proprietary trademarks, architectural photography, graphic elements, and curated editorial analysis displayed on HomeVista are protected by international copyright laws.
        </p>
      </div>
    </AppLayout>
  );
}
