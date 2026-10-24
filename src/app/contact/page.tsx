'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Buying a Property',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <AppLayout>
      <PageHeader
        badge="Direct Support & Advisory"
        title="Connect with HomeVista"
        subtitle="Our concierge advisors and certified brokers are available 7 days a week to assist with viewings, listings, and settlement."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Office Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#232E38] uppercase tracking-wider">
                Direct Channels
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">Get in Touch</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Reach out directly via phone or email for immediate property walkthroughs or listing reviews.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-xs flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Telephone Assistance</div>
                  <a href="tel:+18001234567" className="text-xs text-gray-600 hover:text-[#232E38] transition-colors block mt-0.5">
                    +1 (800) 123-4567 (Toll-Free)
                  </a>
                  <span className="text-[11px] text-gray-400">Mon-Sun, 8:00 AM - 9:00 PM EST</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-xs flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Email Inquiries</div>
                  <a href="mailto:info@homevista.com" className="text-xs text-gray-600 hover:text-[#232E38] transition-colors block mt-0.5">
                    info@homevista.com
                  </a>
                  <span className="text-[11px] text-gray-400">Guaranteed response within 2 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-xs flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Headquarters</div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    123 Dream Street, Suite 400<br />New York, NY 10001
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Regional Advisory Centers</h3>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div className="p-3 bg-white border border-gray-100 rounded-xl">
                  <strong className="text-gray-900 block">Miami, FL</strong>
                  Brickell Financial District
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl">
                  <strong className="text-gray-900 block">Austin, TX</strong>
                  Downtown Congress Ave
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl">
                  <strong className="text-gray-900 block">Chicago, IL</strong>
                  Magnificent Mile
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-xl">
                  <strong className="text-gray-900 block">Los Angeles, CA</strong>
                  Beverly Hills Wilshire
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us an Inquiry</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Fill out the form below and an assigned broker specialist will contact you promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-[#232E38] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Inquiry Received!</h3>
                  <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our concierge team has routed your request to the appropriate regional team. Expect a response at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Buying a Property',
                        message: '',
                      });
                    }}
                    className="mt-4 bg-[#232E38] text-white text-xs font-semibold px-4 py-2 rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jessica@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (800) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">Primary Interest</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl p-3 bg-white focus:outline-none focus:border-[#232E38]"
                      >
                        <option>Buying a Property</option>
                        <option>Renting a Home or Apartment</option>
                        <option>Listing & Selling a Property</option>
                        <option>General Concierge Inquiry</option>
                        <option>Agent Careers & Affiliation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">Message Details</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us what cities, bedrooms, or price ranges you are looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
