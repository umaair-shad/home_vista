'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';

export default function CookiesPage() {
  return (
    <AppLayout>
      <PageHeader
        badge="Transparency"
        title="Cookie Policy & Tracking Preferences"
        subtitle="Last Updated: October 15, 2026 • Learn how we use local storage and cookies to provide a personalized experience."
        breadcrumbs={[{ label: 'Cookie Policy' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-emerald max-w-none text-xs sm:text-sm text-gray-700 leading-relaxed space-y-6">
        <p>
          HomeVista utilizes cookies and browser local storage mechanisms to deliver a responsive, personalized browsing experience, maintain your saved property wishlists, and ensure portal security.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">1. Essential Technical Cookies</h2>
        <p>
          These cookies are vital for the core operation of our real estate application, enabling search filter persistence, session management, and secure account authentication.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">2. Functional & Preference Cookies</h2>
        <p>
          We use preference storage to remember your wishlist favorites, currency display preferences, and recent search locations so you don&apos;t have to re-enter them on return visits.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">3. Analytics & Performance Cookies</h2>
        <p>
          Anonymous telemetry helps us understand which property types and neighborhood guides provide the highest utility to homebuyers and tenants, allowing continuous platform refinement.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-6">4. Managing Your Preferences</h2>
        <p>
          You may modify your browser settings at any time to block or delete cookies. Please note that disabling essential cookies may impact interactive features such as saved wishlist favorites and tour scheduling.
        </p>
      </div>
    </AppLayout>
  );
}
