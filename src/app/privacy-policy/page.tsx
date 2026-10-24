'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <PageHeader
        badge="Data Governance"
        title="Privacy Policy & Security"
        subtitle="Last Updated: October 15, 2026 • Discover how we collect, verify, and protect your information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-emerald max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
        <p>
          At <strong>HomeVista</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), protecting your privacy and confidential financial data is central to our fiduciary commitment. This Privacy Policy details how we collect, verify, use, and protect your personal information when you access our web application, search listings, schedule property tours, or list real estate.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Information We Collect</h2>
        <p>
          We collect personal details you voluntarily provide, including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Contact Information:</strong> Name, verified email address, telephone number, and postal address.</li>
          <li><strong>Property Inquiries:</strong> Tour dates, communication messages, mortgage qualification preferences, and saved property wishlists.</li>
          <li><strong>Owner & Seller Submissions:</strong> Property deeds, architectural photography, asking pricing, and utility disclosures.</li>
          <li><strong>Technical Metadata:</strong> Device identifiers, browser type, IP address, and cookie preferences used solely for platform security and site optimization.</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. How We Utilize Your Data</h2>
        <p>
          Your information is utilized solely to facilitate verified real estate transactions:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Connecting you with the licensed, dedicated advisor representing your selected property.</li>
          <li>Confirming scheduled in-person and private video walkthrough appointments.</li>
          <li>Delivering verified market intelligence newsletters (only upon explicit opt-in).</li>
          <li>Preventing fraudulent listing submissions and ensuring escrow safety.</li>
        </ul>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. No Sale of Personal Data</h2>
        <p>
          HomeVista strictly does <strong>not</strong> sell, rent, or trade your personal information or contact details to third-party advertisers, data brokers, or external telemarketers.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Data Security & Retention</h2>
        <p>
          We employ industry-standard TLS 1.3 encryption for data in transit and AES-256 encryption for stored data. Access to client records is restricted to authorized real estate advisors and compliance personnel.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">5. Your Privacy Rights</h2>
        <p>
          Under applicable state and federal privacy statutes, you may request access to, correction of, or deletion of your personal records by writing to <a href="mailto:privacy@homevista.com" className="text-[#232E38] font-semibold">privacy@homevista.com</a>.
        </p>
      </div>
    </AppLayout>
  );
}
