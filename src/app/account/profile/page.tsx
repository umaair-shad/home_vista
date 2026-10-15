'use client';

import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { AccountNav } from '@/components/AccountNav';
import { User, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function AccountProfilePage() {
  const [name, setName] = useState('Sarah Jenkins');
  const [email, setEmail] = useState('sarah.j@example.com');
  const [phone, setPhone] = useState('+1 (310) 555-0199');
  const [location, setLocation] = useState('Los Angeles, CA');
  const [bio, setBio] = useState('First-time luxury home buyer looking for modern architecture in coastal California.');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Personal Profile</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Update your contact details and how agents reach out regarding property tours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <AccountNav />
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                {saved && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Profile preferences updated successfully!</span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-[#232E38] text-white flex items-center justify-center font-bold text-xl">
                    SJ
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">{name}</h2>
                    <p className="text-xs text-gray-500">Member since January 2024</p>
                    <button
                      type="button"
                      className="mt-2 text-xs font-semibold text-[#232E38] hover:underline"
                    >
                      Change profile picture
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Full Legal Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                        />
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Preferred City / Region</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                        />
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Buyer Notes & Requirements</label>
                    <textarea
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                      placeholder="Tell agents what you are searching for..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#232E38] hover:bg-[#141A20] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
