'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { PropertyCard } from '@/components/PropertyCard';
import { ALL_PROPERTIES, AGENTS } from '@/data/mockData';
import {
  MapPin,
  BedDouble,
  Bath,
  Square,
  Calendar,
  ShieldCheck,
  Check,
  Heart,
  Share2,
  Calculator,
  ChevronRight,
  Phone,
  Mail,
  Send,
  X,
  Sparkles,
} from 'lucide-react';

export default function PropertyDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const property = ALL_PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const agent = AGENTS.find((a) => a.id === property.agentId) || AGENTS[0];
  const similarProperties = ALL_PROPERTIES.filter(
    (p) => p.id !== property.id && (p.propertyType === property.propertyType || p.city === property.city)
  ).slice(0, 3);

  // Gallery state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Inquiry form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDate, setInquiryDate] = useState('2026-10-20');
  const [inquiryType, setInquiryType] = useState<'in-person' | 'video'>('in-person');
  const [inquiryMessage, setInquiryMessage] = useState(
    `Hello ${agent.name}, I would like to schedule a tour and receive additional verified documents for ${property.title}.`
  );
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'success'>('idle');

  // Mortgage Calculator state
  const [homePrice, setHomePrice] = useState(property.priceNumeric);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  const calculatedMonthly = React.useMemo(() => {
    const principal = homePrice * (1 - downPaymentPercent / 100);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;
    const monthlyPrincipalInterest =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const monthlyTaxes = (homePrice * 0.012) / 12;
    const monthlyInsurance = 150;
    const totalMonthly = monthlyPrincipalInterest + monthlyTaxes + monthlyInsurance;

    return isNaN(totalMonthly) ? 0 : Math.round(totalMonthly);
  }, [homePrice, downPaymentPercent, loanTermYears, interestRate]);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;
    setInquiryStatus('success');
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <AppLayout>
      {/* Breadcrumb Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#232E38]">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href="/properties" className="hover:text-[#232E38]">Properties</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href={`/properties?type=${property.propertyType}`} className="hover:text-[#232E38]">{property.propertyType}</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title, Address & Actions Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  property.badgeType === 'sale' ? 'bg-[#EBF5FF] text-[#0284C7]' : 'bg-[#FFF7ED] text-[#D97706]'
                }`}
              >
                {property.badge}
              </span>
              <span className="inline-flex items-center gap-1 bg-green-50 text-[#232E38] text-xs font-semibold px-2.5 py-0.5 rounded-full border border-green-200">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified by HomeVista</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172522] tracking-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 text-[#232E38]" />
              <span>{property.address}, {property.location} {property.zipCode}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-left lg:text-right">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#232E38]">
                {property.price}
              </div>
              <div className="text-xs text-gray-500">
                Est. ${calculatedMonthly.toLocaleString()}/mo mortgage
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-xl border transition-all flex items-center justify-center ${
                  isWishlisted
                    ? 'bg-red-50 border-red-200 text-red-500'
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                aria-label="Save property"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all flex items-center justify-center relative"
                aria-label="Share property"
              >
                <Share2 className="w-4 h-4" />
                {shareCopied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery Showcase */}
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-[420px] sm:h-[480px]">
            {/* Primary Display */}
            <div
              className="lg:col-span-8 relative rounded-2xl overflow-hidden cursor-pointer group bg-gray-100"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={property.gallery[activeImageIndex] || property.image}
                alt={property.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <span>View Fullscreen Gallery ({property.gallery.length} photos)</span>
              </div>
            </div>

            {/* Thumbnail Column */}
            <div className="hidden lg:grid lg:col-span-4 grid-rows-3 gap-3">
              {property.gallery.slice(0, 3).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                    activeImageIndex === idx ? 'ring-3 ring-[#232E38]' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${property.title} photo ${idx + 1}`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-4">
          {/* Left Details Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Facts Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-sm">
                  <BedDouble className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Bedrooms</div>
                  <div className="text-sm font-bold text-gray-900">{property.beds} Beds</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-sm">
                  <Bath className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Bathrooms</div>
                  <div className="text-sm font-bold text-gray-900">{property.baths} Baths</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-sm">
                  <Square className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Property Area</div>
                  <div className="text-sm font-bold text-gray-900">{property.sqft}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#232E38] flex items-center justify-center border border-gray-200 shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Year Built</div>
                  <div className="text-sm font-bold text-gray-900">{property.yearBuilt}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About this Property</h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 p-2.5 bg-white border border-gray-100 rounded-xl shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-[#232E38] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-[#F8FAF9] rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-[#232E38]" />
                <h3 className="font-bold text-gray-900 text-lg">Interactive Mortgage Estimator</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Calculate estimated monthly payments including principal, property taxes, and home insurance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Home Price ($)</label>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full text-xs font-semibold border border-gray-200 bg-white rounded-lg p-2.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Down Payment ({downPaymentPercent}%)</label>
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full text-xs font-semibold border border-gray-200 bg-white rounded-lg p-2.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Interest Rate ({interestRate}%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full text-xs font-semibold border border-gray-200 bg-white rounded-lg p-2.5"
                  />
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">Estimated Total Payment</span>
                  <div className="text-2xl font-extrabold text-[#232E38]">
                    ${calculatedMonthly.toLocaleString()}<span className="text-xs text-gray-500 font-normal"> / month</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert('HomeVista Financing: Connecting you with certified mortgage lenders offering pre-approval incentives.')}
                  className="bg-[#232E38] hover:bg-[#141A20] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  Get Pre-Approved
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Agent & Schedule Tour Form (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm sticky top-24">
              {/* Agent Mini Profile */}
              <div className="flex items-center gap-3.5 pb-5 border-b border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link href={`/agents/${agent.slug}`} className="hover:text-[#232E38] transition-colors">
                    <h3 className="font-bold text-gray-900 text-sm">{agent.name}</h3>
                  </Link>
                  <p className="text-xs text-gray-500">{agent.title}</p>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-0.5">
                    <span>{agent.phone}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry / Tour Form */}
              <div className="pt-5">
                <h4 className="font-bold text-gray-900 text-sm mb-3">Schedule a Tour / Contact Agent</h4>

                {inquiryStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-[#232E38] flex items-center justify-center mx-auto mb-2">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-gray-900 text-sm">Request Sent!</div>
                    <p className="text-xs text-gray-600 mt-1">
                      {agent.name} will contact you at {inquiryEmail} within 2 hours with the tour confirmation and listing disclosure.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSendInquiry} className="space-y-3 text-xs">
                    {/* Tour Type Tab */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setInquiryType('in-person')}
                        className={`py-1.5 rounded-md font-semibold transition-all ${
                          inquiryType === 'in-person' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500'
                        }`}
                      >
                        In-Person Tour
                      </button>
                      <button
                        type="button"
                        onClick={() => setInquiryType('video')}
                        className={`py-1.5 rounded-md font-semibold transition-all ${
                          inquiryType === 'video' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500'
                        }`}
                      >
                        Video Walkthrough
                      </button>
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-1 font-medium">Preferred Date</label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-1 font-medium">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-1 font-medium">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-1 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-1 font-medium">Message</label>
                      <textarea
                        rows={3}
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Guided Tour</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="pt-12 mt-12 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Similar Verified Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((sim) => (
                <Link key={sim.id} href={`/properties/${sim.slug}`}>
                  <PropertyCard
                    property={sim}
                    isWishlisted={false}
                    onToggleWishlist={() => {}}
                    onClick={() => {}}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 sm:p-8">
          <div className="flex items-center justify-between text-white pb-4">
            <span className="font-bold text-sm">
              Photo {activeImageIndex + 1} of {property.gallery.length} &bull; {property.title}
            </span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full max-h-[80vh] my-auto">
            <Image
              src={property.gallery[activeImageIndex]}
              alt={property.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-2 pt-4 overflow-x-auto">
            {property.gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 ${
                  activeImageIndex === i ? 'ring-2 ring-emerald-400' : 'opacity-50'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </AppLayout>
  );
}
