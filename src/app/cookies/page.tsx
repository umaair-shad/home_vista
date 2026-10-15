'use client';

import React from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { ChevronRight } from 'lucide-react';

export default function CookiesPage() {
  return (
    <AppLayout>
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-[#232E38]">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold">Cookie Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172522] tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Last Updated: October 15, 2026
          </p>
        </div>
      </div>

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
