'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/PortalLayout';
import { ShieldCheck, Bell, CreditCard, Building, CheckCircle2, Lock } from 'lucide-react';

export default function DashboardSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [autoSyncMLS, setAutoSyncMLS] = useState(true);
  const [payoutBank, setPayoutBank] = useState('Chase Bank (Ending in •••• 4821)');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <PortalLayout portalType="owner" title="Portal Settings">
      <div className="max-w-4xl space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Owner Portal & Brokerage Settings
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Configure automated tour notifications, syndicate broadcast settings, and escrow payout accounts.
          </p>
        </div>

        {saved && (
          <div className="p-4 bg-green-50 border border-green-200 text-[#087443] text-xs font-semibold rounded-2xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Settings and preferences successfully saved!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Notification Preferences */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-100">
              <Bell className="w-4 h-4 text-[#087443]" />
              <h2 className="text-sm font-bold text-gray-900">Inquiry & Tour Alert Preferences</h2>
            </div>

            <div className="space-y-4 text-xs">
              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100">
                <div>
                  <span className="font-bold text-gray-900 block">Instant Email Notifications</span>
                  <span className="text-gray-500">Receive real-time emails when a qualified buyer requests a private tour.</span>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 text-[#087443] rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100">
                <div>
                  <span className="font-bold text-gray-900 block">SMS Text Message Pushes</span>
                  <span className="text-gray-500">Direct mobile alerts for urgent buyer offers and escrow deadlines.</span>
                </div>
                <input
                  type="checkbox"
                  checked={smsAlerts}
                  onChange={(e) => setSmsAlerts(e.target.checked)}
                  className="w-4 h-4 text-[#087443] rounded"
                />
              </label>
            </div>
          </div>

          {/* MLS Syndicate Sync */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-100">
              <Building className="w-4 h-4 text-[#087443]" />
              <h2 className="text-sm font-bold text-gray-900">MLS Syndication & Broadcast Feeds</h2>
            </div>

            <div className="space-y-4 text-xs">
              <label className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-gray-100">
                <div>
                  <span className="font-bold text-gray-900 block">Automated National MLS Sync</span>
                  <span className="text-gray-500">Automatically broadcast new and updated listings to Zillow, Realtor.com, and Redfin.</span>
                </div>
                <input
                  type="checkbox"
                  checked={autoSyncMLS}
                  onChange={(e) => setAutoSyncMLS(e.target.checked)}
                  className="w-4 h-4 text-[#087443] rounded"
                />
              </label>
            </div>
          </div>

          {/* Escrow Payout Accounts */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-gray-100">
              <CreditCard className="w-4 h-4 text-[#087443]" />
              <h2 className="text-sm font-bold text-gray-900">Escrow Settlement & Payout Routing</h2>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Connected Trust / Bank Account</label>
                <input
                  type="text"
                  value={payoutBank}
                  onChange={(e) => setPayoutBank(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#087443]"
                />
              </div>
              <p className="text-[11px] text-gray-400">
                Direct wire and escrow settlement funds are insured up to $2,500,000 via certified FDIC title partners.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-[#087443] hover:bg-[#065e36] text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
          >
            Save All Preferences
          </button>
        </form>
      </div>
    </PortalLayout>
  );
}
