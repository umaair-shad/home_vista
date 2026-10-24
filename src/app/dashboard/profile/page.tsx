'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/PortalLayout';
import { Building2, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, DollarSign } from 'lucide-react';

export default function DashboardProfilePage() {
  const [orgName, setOrgName] = useState('Vanguard Realty Group');
  const [licenseNumber, setLicenseNumber] = useState('CA-DRE #02194881');
  const [contactName, setContactName] = useState('Michael Sterling');
  const [email, setEmail] = useState('partners@vanguardrealty.com');
  const [phone, setPhone] = useState('+1 (310) 902-8800');
  const [payoutBank, setPayoutBank] = useState('JPMorgan Chase Bank, N.A. (Ending in 4419)');
  const [taxId, setTaxId] = useState('XX-XXX8921');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <PortalLayout portalType="owner" title="Owner Profile">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Owner & Agency Profile</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Manage your verified real-estate organization credentials, representative contacts, and escrow routing.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
                {saved && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Owner credentials and payout settings saved successfully!</span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-inner">
                    VR
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-gray-900">{orgName}</h2>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-[#232E38] bg-emerald-50 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified Brokerage</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{licenseNumber}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                      Organization & Licensing
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Company / Entity Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                          />
                          <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Real Estate License #</label>
                        <input
                          type="text"
                          required
                          value={licenseNumber}
                          onChange={(e) => setLicenseNumber(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                      Primary Contact Representative
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Managing Broker Name</label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Business Email</label>
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

                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Direct Phone</label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                          />
                          <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                      Escrow & Payout Routing
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Direct Deposit Account</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={payoutBank}
                            onChange={(e) => setPayoutBank(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                          />
                          <DollarSign className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Federal EIN / Tax ID</label>
                        <input
                          type="text"
                          required
                          value={taxId}
                          onChange={(e) => setTaxId(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#087443] hover:bg-[#065e36] text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
                    >
                      Save Organization Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </PortalLayout>
        );
      }
