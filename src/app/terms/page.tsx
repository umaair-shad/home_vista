'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';

export default function TermsPage() {
  return (
    <AppLayout>
      <PageHeader
        badge="Legal & Compliance"
        title="Terms & Conditions of Service"
        subtitle="Last Updated: October 15, 2026 • Please read our terms and standards carefully."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

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
