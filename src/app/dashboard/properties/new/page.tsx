'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Select, { StylesConfig } from 'react-select';
import { AppLayout } from '@/components/AppLayout';
import { DashboardNav } from '@/components/DashboardNav';
import {
  Building2,
  DollarSign,
  MapPin,
  CheckCircle2,
  ArrowRight,
  UploadCloud,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';

interface SelectOption {
  value: string;
  label: string;
}

const typeOptions: SelectOption[] = [
  { value: 'Villas', label: 'Villas' },
  { value: 'Apartments', label: 'Apartments' },
  { value: 'Houses', label: 'Houses' },
  { value: 'Condos', label: 'Condos' },
  { value: 'Townhouses', label: 'Townhouses' },
  { value: 'Land', label: 'Land' },
];

const categoryOptions: SelectOption[] = [
  { value: 'sale', label: 'For Sale' },
  { value: 'rent', label: 'For Rent' },
];

const selectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    borderRadius: '0.75rem',
    borderColor: state.isFocused ? '#232E38' : '#e5e7eb',
    boxShadow: state.isFocused ? '0 0 0 1px #232E38' : 'none',
    '&:hover': {
      borderColor: '#232E38',
    },
    padding: '2px 4px',
    fontSize: '0.875rem',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#232E38'
      : state.isFocused
      ? '#f0fdf4'
      : 'white',
    color: state.isSelected ? 'white' : '#1f2937',
    fontSize: '0.875rem',
    cursor: 'pointer',
  }),
};

export default function NewPropertyPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<SelectOption>(categoryOptions[0]);
  const [propertyType, setPropertyType] = useState<SelectOption>(typeOptions[0]);
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [beds, setBeds] = useState('3');
  const [baths, setBaths] = useState('2');
  const [sqft, setSqft] = useState('2400');
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  );
  const [description, setDescription] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Swimming Pool',
    'Private Garden',
    'Security System',
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableFeatures = [
    'Swimming Pool',
    'Private Garden',
    'Security System',
    '2-Car Garage',
    'Smart Home Automation',
    'Ocean View',
    'Fitness Studio / Gym',
    'Wine Cellar',
    'Rooftop Terrace',
    'High Ceilings',
  ];

  const toggleFeature = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/properties');
      }, 1200);
    }, 1000);
  };

  return (
    <AppLayout>
      <div className="bg-gray-50/60 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/dashboard/properties"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to properties</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Add New Property</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Publish a new residential or commercial property listing to HomeVista and partner networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <DashboardNav />
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-[#232E38] text-xs font-semibold rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Property listing published successfully! Redirecting to inventory...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  {/* Basic Info */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      1. General Property Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Listing Title</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Contemporary Oceanfront Sanctuary"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Listing Purpose</label>
                          <Select
                            instanceId="new-prop-category"
                            options={categoryOptions}
                            value={category}
                            onChange={(opt) => opt && setCategory(opt)}
                            styles={selectStyles}
                            isSearchable={false}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Property Type</label>
                          <Select
                            instanceId="new-prop-type"
                            options={typeOptions}
                            value={propertyType}
                            onChange={(opt) => opt && setPropertyType(opt)}
                            styles={selectStyles}
                            isSearchable={false}
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Asking Price ($ USD)</label>
                          <div className="relative">
                            <input
                              type="number"
                              required
                              placeholder="1250000"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="w-full border border-gray-200 rounded-xl p-3 pl-8 text-sm focus:outline-none focus:border-[#232E38]"
                            />
                            <DollarSign className="w-4 h-4 text-gray-400 absolute left-2.5 top-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location & Specs */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      2. Location & Dimensions
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Full Street Address & City</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. 742 Evergreen Terrace, Los Angeles, CA"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 pl-9 text-sm focus:outline-none focus:border-[#232E38]"
                          />
                          <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Bedrooms</label>
                          <input
                            type="number"
                            required
                            min="0"
                            value={beds}
                            onChange={(e) => setBeds(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Bathrooms</label>
                          <input
                            type="number"
                            required
                            min="0"
                            step="0.5"
                            value={baths}
                            onChange={(e) => setBaths(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Square Footage</label>
                          <input
                            type="number"
                            required
                            min="100"
                            value={sqft}
                            onChange={(e) => setSqft(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Media & Photography */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      3. Photography & Media
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Primary Cover Photo URL</label>
                        <input
                          type="url"
                          required
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                        />
                      </div>

                      <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-gray-300 transition-colors">
                        <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs font-semibold text-gray-700">Drag & drop high-res property photos here</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">Supports JPG, PNG, WebP up to 25MB each</p>
                      </div>
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      4. Description & Amenities
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-1">Detailed Description</label>
                        <textarea
                          rows={4}
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Highlight the architectural pedigree, light exposure, recent renovations, neighborhood attractions..."
                          className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Amenities & Key Features</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {availableFeatures.map((feat) => {
                            const isSelected = selectedFeatures.includes(feat);
                            return (
                              <button
                                key={feat}
                                type="button"
                                onClick={() => toggleFeature(feat)}
                                className={`text-left p-2.5 rounded-xl border text-xs font-medium transition-all ${
                                  isSelected
                                    ? 'bg-emerald-50 border-emerald-300 text-[#232E38]'
                                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                              >
                                {feat}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                    <Link
                      href="/dashboard/properties"
                      className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-xl"
                    >
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-2.5 bg-[#232E38] hover:bg-[#141A20] text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
                    >
                      <span>{submitting ? 'Publishing...' : 'Publish Listing'}</span>
                      <ArrowRight className="w-4 h-4" />
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
