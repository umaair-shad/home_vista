'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { PageHeader } from '@/components/PageHeader';
import { PropertyCard } from '@/components/PropertyCard';
import { AGENTS, ALL_PROPERTIES } from '@/data/mockData';
import {
  ChevronRight,
  Star,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  Send,
  CheckCircle2,
  Globe,
  Building,
} from 'lucide-react';

export default function AgentProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;

  const agent = AGENTS.find((a) => a.slug === slug);

  if (!agent) {
    notFound();
  }

  const agentProperties = ALL_PROPERTIES.filter((p) => p.agentId === agent.id);

  const [messageName, setMessageName] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageText, setMessageText] = useState(
    `Hello ${agent.name}, I am interested in consulting with you about your active listings and buying representation.`
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageName || !messageEmail) return;
    setSubmitted(true);
  };

  return (
    <AppLayout>
      <PageHeader
        badge="Certified Broker Advisor"
        title={agent.name}
        subtitle={`${agent.title} • ${agent.agency} • ${agent.experienceYears} Years Experience • ${agent.propertiesCount} Active Listings`}
        breadcrumbs={[
          { label: 'Agents', href: '/agents' },
          { label: agent.name }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Agent Profile Left Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 bg-gray-100 ring-4 ring-green-50 shadow-md">
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              <div className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] text-xs font-bold px-3 py-1 rounded-full mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified HomeVista Advisor</span>
              </div>

              <h1 className="text-2xl font-bold text-gray-900">{agent.name}</h1>
              <p className="text-xs text-gray-500 mt-1">{agent.title}</p>
              <p className="text-xs font-semibold text-[#232E38] mt-0.5">{agent.agency}</p>

              <div className="flex items-center justify-center gap-1.5 mt-3 text-sm">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-bold text-gray-900">{agent.rating}</span>
                <span className="text-gray-500">({agent.reviewCount} client reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{agent.experienceYears} Years</div>
                  <div className="text-[11px] text-gray-500">Experience</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{agent.propertiesCount}+</div>
                  <div className="text-[11px] text-gray-500">Closed Deals</div>
                </div>
              </div>

              <div className="space-y-2 pt-6 mt-6 border-t border-gray-100 text-left text-xs">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-3.5 h-3.5 text-[#232E38]" />
                  <a href={`tel:${agent.phone}`} className="hover:underline">{agent.phone}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-[#232E38]" />
                  <a href={`mailto:${agent.email}`} className="hover:underline">{agent.email}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-3.5 h-3.5 text-[#232E38]" />
                  <span>Languages: {agent.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="bg-[#F8FAF9] rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Send a Message to {agent.name.split(' ')[0]}</h3>

              {submitted ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#232E38] mx-auto mb-2" />
                  <div className="text-xs font-bold text-gray-900">Message Delivered!</div>
                  <p className="text-[11px] text-gray-600 mt-1">
                    {agent.name} will reply directly to {messageEmail}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Henderson"
                      value={messageName}
                      onChange={(e) => setMessageName(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2.5 bg-white focus:outline-none focus:border-[#232E38]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={messageEmail}
                      onChange={(e) => setMessageEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2.5 bg-white focus:outline-none focus:border-[#232E38]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1 font-medium">Your Message</label>
                    <textarea
                      rows={4}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg p-2.5 bg-white focus:outline-none focus:border-[#232E38]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-2.5 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Agent Biography & Active Listings (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About {agent.name}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {agent.bio}
              </p>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Core Specialties & Advisory Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-green-50 text-[#232E38] border border-green-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Listings */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Featured Listings Represented ({agentProperties.length})
                </h2>
                <span className="text-xs text-gray-500">Exclusively managed by {agent.name}</span>
              </div>

              {agentProperties.length === 0 ? (
                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center text-xs text-gray-500">
                  {agent.name} current listings are currently under pending contract or private off-market review.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {agentProperties.map((prop) => (
                    <Link key={prop.id} href={`/properties/${prop.slug}`}>
                      <PropertyCard
                        property={prop}
                        isWishlisted={false}
                        onToggleWishlist={() => {}}
                        onClick={() => {}}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
