'use client';

import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { X, Upload, CheckCircle2 } from 'lucide-react';

interface ListPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ModalSelectOption {
  value: string;
  label: string;
}

const typeOptions: ModalSelectOption[] = [
  { value: 'Apartment', label: 'Apartment' },
  { value: 'House', label: 'House' },
  { value: 'Villa', label: 'Villa' },
  { value: 'Condo', label: 'Condo' },
  { value: 'Townhouse', label: 'Townhouse' },
  { value: 'Land', label: 'Land' },
];

const purposeOptions: ModalSelectOption[] = [
  { value: 'sale', label: 'For Sale' },
  { value: 'rent', label: 'For Rent' },
];

const modalSelectStyles: StylesConfig<ModalSelectOption, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    borderColor: state.isFocused ? '#087443' : '#e5e7eb',
    boxShadow: state.isFocused ? '0 0 0 1px #087443' : 'none',
    minHeight: '38px',
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#087443',
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 99999,
    borderRadius: '8px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    fontSize: '12px',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#087443'
      : state.isFocused
      ? '#f0fdf4'
      : 'transparent',
    color: state.isSelected ? '#ffffff' : state.isFocused ? '#087443' : '#374151',
    cursor: 'pointer',
  }),
};

export const ListPropertyModal: React.FC<ListPropertyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'Apartment',
    purpose: 'sale',
    price: '',
    location: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-green-100 text-[#232E38] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Listing Submitted!</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-sm">
              Your property has been submitted for verification. Our review team will verify the listing within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">List Your Property</h3>
              <p className="text-xs text-gray-500 mt-0.5">Reach over 500,000 active buyers & tenants on HomeVista</p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Property Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Luxury 3-Bedroom Penthouse"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Type</label>
                  <Select<ModalSelectOption, false>
                    instanceId="list-property-type"
                    isSearchable={false}
                    options={typeOptions}
                    value={typeOptions.find((opt) => opt.value === formData.type)}
                    onChange={(option) => {
                      if (option) {
                        setFormData({ ...formData, type: option.value });
                      }
                    }}
                    styles={modalSelectStyles}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Listing Type</label>
                  <Select<ModalSelectOption, false>
                    instanceId="list-property-purpose"
                    isSearchable={false}
                    options={purposeOptions}
                    value={purposeOptions.find((opt) => opt.value === formData.purpose)}
                    onChange={(option) => {
                      if (option) {
                        setFormData({ ...formData, purpose: option.value });
                      }
                    }}
                    styles={modalSelectStyles}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Price ($)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1,250,000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#232E38]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-[#087443]"
                  />
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center cursor-pointer hover:border-[#087443] transition-colors">
                <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <span className="text-gray-600 font-medium">Click to upload photos (Max 10)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#087443] hover:bg-[#065e36] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Publish Listing
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
