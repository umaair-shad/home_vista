'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/PortalLayout';
import { Bell, Shield, Key, CheckCircle2 } from 'lucide-react';

export default function AccountSettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <PortalLayout portalType="buyer" title="Account Settings">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Account Settings</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Configure your notifications, privacy parameters, and two-factor security options.
          </p>
        </div>

        <div className="space-y-6">
              {saved && (
                <div className="p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your account preferences have been saved successfully!</span>
                </div>
              )}

              {/* Notification Preferences */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-green-50 text-[#232E38] flex items-center justify-center">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-900">Notification Channels</h2>
                    <p className="text-xs text-gray-500">Choose how HomeVista reaches you with listing updates</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-900">Instant Property Alerts</p>
                      <p className="text-gray-500 text-[11px]">Receive an email immediately when a home matching your saved search is listed.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={emailAlerts}
                      onChange={(e) => setEmailAlerts(e.target.checked)}
                      className="rounded text-[#232E38] focus:ring-[#232E38] h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-900">SMS Tour Reminders</p>
                      <p className="text-gray-500 text-[11px]">Receive text message reminders 2 hours prior to scheduled tours.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={smsAlerts}
                      onChange={(e) => setSmsAlerts(e.target.checked)}
                      className="rounded text-[#232E38] focus:ring-[#232E38] h-4 w-4"
                    />
                  </label>

                  <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-900">Market Insights & Trends</p>
                      <p className="text-gray-500 text-[11px]">Weekly newsletter regarding mortgage rates, market shifts, and neighborhood spotlights.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={marketingEmails}
                      onChange={(e) => setMarketingEmails(e.target.checked)}
                      className="rounded text-[#232E38] focus:ring-[#232E38] h-4 w-4"
                    />
                  </label>
                </div>
              </div>

              {/* Security & Authentication */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-gray-900">Security & Credentials</h2>
                    <p className="text-xs text-gray-500">Protect your profile with multi-factor authentication</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-semibold text-gray-900">Two-Factor Authentication (2FA)</p>
                      <p className="text-gray-500 text-[11px]">Require a one-time passcode whenever logging in from an unrecognized device.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={twoFactor}
                      onChange={(e) => setTwoFactor(e.target.checked)}
                      className="rounded text-[#232E38] focus:ring-[#232E38] h-4 w-4"
                    />
                  </label>

                  <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="font-semibold text-gray-900 text-xs">Account Password</p>
                        <p className="text-[11px] text-gray-500">Last changed 42 days ago</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert('Password change request sent to registered email.')}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold hover:border-gray-300"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-[#087443] hover:bg-[#065e36] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
                >
                  Save All Preferences
                </button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
