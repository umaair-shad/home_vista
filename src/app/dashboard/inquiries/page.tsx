'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { DashboardNav } from '@/components/DashboardNav';
import {
  Inbox,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface OwnerInquiry {
  id: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  propertyTitle: string;
  propertySlug: string;
  date: string;
  status: 'New' | 'Replied' | 'Tour Scheduled';
  type: 'Tour Request' | 'Price Inquiry' | 'Financing Question';
  message: string;
}

export default function DashboardInquiriesPage() {
  const [inquiries, setInquiries] = useState<OwnerInquiry[]>([
    {
      id: 'INQ-901',
      leadName: 'Dr. Robert Chen',
      leadEmail: 'robert.chen@stanfordalumni.org',
      leadPhone: '+1 (415) 890-2341',
      propertyTitle: 'Beverly Hills Modern Luxury Villa',
      propertySlug: 'beverly-hills-modern-luxury-villa',
      date: 'Today at 10:45 AM',
      status: 'New',
      type: 'Tour Request',
      message: 'Hello, I am interested in scheduling a private tour this Saturday afternoon. I have pre-approval letter ready from Chase Wealth Management.',
    },
    {
      id: 'INQ-902',
      leadName: 'Amanda Brooks',
      leadEmail: 'amanda.brooks@designstudio.co',
      leadPhone: '+1 (305) 441-9922',
      propertyTitle: 'Waterfront Sunset Bay Residence',
      propertySlug: 'waterfront-sunset-bay-residence',
      date: 'Yesterday at 3:15 PM',
      status: 'Replied',
      type: 'Price Inquiry',
      message: 'Could you share the HOA financial reserve study and recent exterior flood mitigation documentation?',
    },
    {
      id: 'INQ-903',
      leadName: 'Jameson Thorne',
      leadEmail: 'j.thorne@capitalholdings.com',
      leadPhone: '+1 (212) 678-0011',
      propertyTitle: 'Skyline Penthouse with Panoramic Views',
      propertySlug: 'skyline-penthouse-with-panoramic-views',
      date: 'Oct 13, 2026',
      status: 'Tour Scheduled',
      type: 'Tour Request',
      message: 'Confirmed with private chauffeur arrival at 3:00 PM Thursday. Please ensure concierge has names listed.',
    },
  ]);

  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendReply = (inqId: string) => {
    if (!replyText.trim()) return;
    setInquiries((prev) =>
      prev.map((item) => (item.id === inqId ? { ...item, status: 'Replied' } : item))
    );
    setFeedback(`Reply sent to buyer.`);
    setActiveReplyId(null);
    setReplyText('');
    setTimeout(() => setFeedback(''), 3000);
  };

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Received Inquiries</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Review and answer prospective buyer questions, tour appointments, and direct offers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <DashboardNav />
            </div>

            <div className="lg:col-span-3 space-y-4">
              {feedback && (
                <div className="p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{feedback}</span>
                </div>
              )}

              {inquiries.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-gray-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-gray-400 font-semibold">{item.id}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                          {item.type}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            item.status === 'New'
                              ? 'bg-emerald-50 text-[#232E38]'
                              : item.status === 'Tour Scheduled'
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {item.status === 'New' && <span className="w-1.5 h-1.5 rounded-full bg-[#232E38] animate-pulse" />}
                          {item.status === 'Tour Scheduled' && <Calendar className="w-3 h-3" />}
                          {item.status === 'Replied' && <CheckCircle2 className="w-3 h-3" />}
                          <span>{item.status}</span>
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{item.leadName}</h3>
                      <Link
                        href={`/properties/${item.propertySlug}`}
                        className="text-xs text-[#232E38] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
                      >
                        <span>Regarding: {item.propertyTitle}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="text-left sm:text-right text-xs text-gray-500">
                      <div className="flex items-center sm:justify-end gap-1 font-medium text-gray-600">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-3 mt-1.5 text-[11px]">
                        <a href={`mailto:${item.leadEmail}`} className="hover:text-[#232E38] flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          <span>{item.leadEmail}</span>
                        </a>
                        <a href={`tel:${item.leadPhone}`} className="hover:text-[#232E38] flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>{item.leadPhone}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-gray-700 bg-gray-50/80 p-4 rounded-xl border border-gray-100 leading-relaxed">
                      &quot;{item.message}&quot;
                    </p>

                    {activeReplyId === item.id ? (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                        <textarea
                          rows={3}
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={`Write a response to ${item.leadName}...`}
                          className="w-full border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-[#232E38]"
                        />
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveReplyId(null)}
                            className="px-4 py-2 border border-gray-200 text-xs font-semibold rounded-xl hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSendReply(item.id)}
                            className="px-5 py-2 bg-[#232E38] hover:bg-[#141A20] text-white text-xs font-bold rounded-xl shadow-sm"
                          >
                            Send Email Response
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveReplyId(item.id);
                            setReplyText(`Hi ${item.leadName}, thank you for reaching out about ${item.propertyTitle}. `);
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-semibold rounded-xl transition-all shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#232E38]" />
                          <span>Reply to Inquiry</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
