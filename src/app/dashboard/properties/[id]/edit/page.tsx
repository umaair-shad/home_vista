'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Select, { StylesConfig } from 'react-select';
import { AppLayout } from '@/components/AppLayout';
import { DashboardNav } from '@/components/DashboardNav';
import { mockProperties } from '@/data/mockData';
import {
  DollarSign,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Trash2,
} from 'lucide-react';

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

export default function EditPropertyPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const foundProperty = mockProperties.find((p) => p.id === id) || mockProperties[0];

  const [title, setTitle] = useState(foundProperty.title);
  const [category, setCategory] = useState<SelectOption>(
    categoryOptions.find((c) => c.value === foundProperty.category) || categoryOptions[0]
  );
  const [propertyType, setPropertyType] = useState<SelectOption>(
    typeOptions.find((t) => t.value === foundProperty.type) || typeOptions[0]
  );
  const [price, setPrice] = useState(foundProperty.price.toString());
  const [location, setLocation] = useState(foundProperty.location);
  const [beds, setBeds] = useState(foundProperty.beds.toString());
  const [baths, setBaths] = useState(foundProperty.baths.toString());
  const [sqft, setSqft] = useState(foundProperty.sqft.toString());
  const [imageUrl, setImageUrl] = useState(foundProperty.image);
  const [description, setDescription] = useState(
    'Meticulously designed residence with top-tier materials, expansive floor-to-ceiling glass, custom chef kitchen, and private grounds.'
  );
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (foundProperty) {
      setTitle(foundProperty.title);
      setPrice(foundProperty.price.toString());
      setLocation(foundProperty.location);
      setBeds(foundProperty.beds.toString());
      setBaths(foundProperty.baths.toString());
      setSqft(foundProperty.sqft.toString());
      setImageUrl(foundProperty.image);
    }
  }, [foundProperty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSuccess(true);
      setTimeout(() => {
        router.push('/dashboard/properties');
      }, 1000);
    }, 800);
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
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-gray-400">Editing Listing ID</span>
              <span className="text-xs font-mono font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                #{id}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Edit Property Listing
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Update pricing, imagery, or description for &quot;{title}&quot;.
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
                    <span>Listing updated successfully! Redirecting...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
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
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1">Listing Purpose</label>
                          <Select
                            instanceId="edit-prop-category"
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
                            instanceId="edit-prop-type"
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

                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      3. Photography URL
                    </h2>
                    <input
                      type="url"
                      required
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                    />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-gray-900 pb-2 border-b border-gray-100 mb-4">
                      4. Description
                    </h2>
                    <textarea
                      rows={4}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:border-[#232E38]"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this listing?')) {
                          router.push('/dashboard/properties');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl text-xs font-semibold transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Listing</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <Link
                        href="/dashboard/properties"
                        className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-xl"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2.5 bg-[#232E38] hover:bg-[#141A20] text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
                      >
                        <span>{saving ? 'Saving...' : 'Update Listing'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
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
