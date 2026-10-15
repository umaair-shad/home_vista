export interface PropertyTypeItem {
  id: string;
  name: string;
  slug: string;
  count: string;
  iconType: 'apartment' | 'house' | 'villa' | 'condo' | 'townhouse' | 'land';
  image: string;
  description: string;
}

export interface PropertyItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  state: string;
  address: string;
  zipCode: string;
  price: string;
  priceNumeric: number;
  badge: 'For Sale' | 'For Rent';
  badgeType: 'sale' | 'rent';
  propertyType: 'Apartment' | 'House' | 'Villa' | 'Condo' | 'Townhouse' | 'Land';
  beds: number;
  baths: number | string;
  sqft: string;
  sqftNumeric: number;
  yearBuilt: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  isExclusive?: boolean;
  isRecentlyAdded?: boolean;
  lifestyle?: 'Waterfront' | 'Urban' | 'Suburban' | 'Luxury' | 'Mountain';
  agentId: string;
  status?: string;
  category?: 'sale' | 'rent';
  type?: string;
}

export interface AgentItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  agency: string;
  phone: string;
  email: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  experienceYears: number;
  propertiesCount: number;
  specialties: string[];
  languages: string[];
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  state: string;
  propertyCount: number;
  avgPrice: string;
  image: string;
  description: string;
  popularFor: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
  propertyTitle?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconType: 'verified' | 'price' | 'agents' | 'process';
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  purpose?: 'all' | 'sale' | 'rent';
  priceRange: string;
  minPrice?: number;
  maxPrice?: number;
  beds: string;
  baths: string;
  sortBy?: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'sqft';
}

export interface InquiryItem {
  id: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  propertyPrice: string;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  tourDate?: string;
  message: string;
  status: 'pending' | 'responded' | 'closed';
  createdAt: string;
}

export interface SavedSearchItem {
  id: string;
  title: string;
  filters: Partial<SearchFilters>;
  createdAt: string;
  notifyEmail: boolean;
}
