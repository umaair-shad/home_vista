'use client';

import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { MapPin, Search } from 'lucide-react';
import { SearchFilters } from '@/types';

interface PropertySearchProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SelectOption {
  value: string;
  label: string;
}

const propertyTypeOptions: SelectOption[] = [
  { value: 'Any Type', label: 'Any Type' },
  { value: 'Apartments', label: 'Apartments' },
  { value: 'Houses', label: 'Houses' },
  { value: 'Villas', label: 'Villas' },
  { value: 'Condos', label: 'Condos' },
  { value: 'Townhouses', label: 'Townhouses' },
  { value: 'Land', label: 'Land' },
];

const priceRangeOptions: SelectOption[] = [
  { value: '$0 - $5,000,000+', label: '$0 - $5,000,000+' },
  { value: '$0 - $500,000', label: '$0 - $500,000' },
  { value: '$500,000 - $1,500,000', label: '$500,000 - $1,500,000' },
  { value: '$1,500,000 - $3,000,000', label: '$1,500,000 - $3,000,000' },
  { value: '$3,000,000+', label: '$3,000,000+' },
];

const bedsOptions: SelectOption[] = [
  { value: 'Any', label: 'Any' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4+', label: '4+' },
];

const bathsOptions: SelectOption[] = [
  { value: 'Any', label: 'Any' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4+', label: '4+' },
];

const customSelectStyles: StylesConfig<SelectOption, false> = {
  control: (base) => ({
    ...base,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    minHeight: '28px',
    height: '28px',
    cursor: 'pointer',
    padding: 0,
    '&:hover': {
      border: 'none',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    fontSize: '13px',
    fontWeight: '500',
    color: '#1f2937',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#1f2937',
    margin: 0,
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
    color: '#9ca3af',
    '&:hover': {
      color: '#4b5563',
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    borderRadius: '12px',
    border: '1px solid #f3f4f6',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    padding: '4px',
  }),
  option: (base, state) => ({
    ...base,
    fontSize: '13px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: state.isSelected
      ? '#087443'
      : state.isFocused
      ? '#f0fdf4'
      : 'transparent',
    color: state.isSelected ? '#ffffff' : state.isFocused ? '#087443' : '#1f2937',
    fontWeight: state.isSelected ? '600' : '500',
    '&:active': {
      backgroundColor: '#087443',
      color: '#ffffff',
    },
  }),
};

export const PropertySearch: React.FC<PropertySearchProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: 'Any Type',
    priceRange: '$0 - $5,000,000+',
    beds: 'Any',
    baths: 'Any',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-10 mb-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 p-3 lg:p-4 transition-all"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-3 lg:gap-0 lg:divide-x lg:divide-gray-100 items-center">
          {/* 1. Location */}
          <div className="lg:col-span-3 px-3 py-1 flex flex-col justify-center">
            <label
              htmlFor="search-location"
              className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5"
            >
              Location
            </label>
            <div className="relative flex items-center">
              <input
                id="search-location"
                type="text"
                placeholder="Enter location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full text-xs sm:text-sm font-medium text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none pr-6"
              />
              <MapPin className="w-3.5 h-3.5 text-gray-400 absolute right-0 pointer-events-none" />
            </div>
          </div>

          {/* 2. Property Type (react-select) */}
          <div className="lg:col-span-2 px-3 py-1 flex flex-col justify-center">
            <label
              htmlFor="search-property-type"
              className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5"
            >
              Property Type
            </label>
            <div className="w-full">
              <Select<SelectOption, false>
                instanceId="property-type-select"
                isSearchable={false}
                options={propertyTypeOptions}
                value={propertyTypeOptions.find((opt) => opt.value === filters.propertyType)}
                onChange={(option) => {
                  if (option) {
                    setFilters({ ...filters, propertyType: option.value });
                  }
                }}
                styles={customSelectStyles}
              />
            </div>
          </div>

          {/* 3. Price Range (react-select) */}
          <div className="lg:col-span-3 px-3 py-1 flex flex-col justify-center">
            <label
              htmlFor="search-price"
              className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5"
            >
              Price Range
            </label>
            <div className="w-full">
              <Select<SelectOption, false>
                instanceId="price-range-select"
                isSearchable={false}
                options={priceRangeOptions}
                value={priceRangeOptions.find((opt) => opt.value === filters.priceRange)}
                onChange={(option) => {
                  if (option) {
                    setFilters({ ...filters, priceRange: option.value });
                  }
                }}
                styles={customSelectStyles}
              />
            </div>
          </div>

          {/* 4. Beds (react-select) */}
          <div className="lg:col-span-1 px-3 py-1 flex flex-col justify-center">
            <label
              htmlFor="search-beds"
              className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5"
            >
              Beds
            </label>
            <div className="w-full">
              <Select<SelectOption, false>
                instanceId="beds-select"
                isSearchable={false}
                options={bedsOptions}
                value={bedsOptions.find((opt) => opt.value === filters.beds)}
                onChange={(option) => {
                  if (option) {
                    setFilters({ ...filters, beds: option.value });
                  }
                }}
                styles={customSelectStyles}
              />
            </div>
          </div>

          {/* 5. Baths (react-select) */}
          <div className="lg:col-span-1 px-3 py-1 flex flex-col justify-center">
            <label
              htmlFor="search-baths"
              className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5"
            >
              Baths
            </label>
            <div className="w-full">
              <Select<SelectOption, false>
                instanceId="baths-select"
                isSearchable={false}
                options={bathsOptions}
                value={bathsOptions.find((opt) => opt.value === filters.baths)}
                onChange={(option) => {
                  if (option) {
                    setFilters({ ...filters, baths: option.value });
                  }
                }}
                styles={customSelectStyles}
              />
            </div>
          </div>

          {/* 6. Green Search Button */}
          <div className="lg:col-span-2 px-2 py-1">
            <button
              type="submit"
              className="w-full bg-[#087443] hover:bg-[#065e36] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Search Properties</span>
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
