import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { HomeVistaLogo } from './HomeVistaLogo';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const SiteFooter: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#071F1C] text-gray-300 pt-14 pb-8 border-t border-[#0d2a26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-gray-800/80">
          {/* Column 1: Brand (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <HomeVistaLogo variant="light" />
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and renters with verified premium real estate worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#087443] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/buy" className="hover:text-emerald-400 transition-colors">
                  Buy Properties
                </Link>
              </li>
              <li>
                <Link href="/rent" className="hover:text-emerald-400 transition-colors">
                  Rent Properties
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-emerald-400 transition-colors">
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-emerald-400 transition-colors">
                  Find Agents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors">
                  Real Estate Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Property Types (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Property Types
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/properties?type=Apartment" className="hover:text-emerald-400 transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=House" className="hover:text-emerald-400 transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Villa" className="hover:text-emerald-400 transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Condo" className="hover:text-emerald-400 transition-colors">
                  Condos
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Townhouse" className="hover:text-emerald-400 transition-colors">
                  Townhouses
                </Link>
              </li>
              <li>
                <Link href="/properties?type=Land" className="hover:text-emerald-400 transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-emerald-400 transition-colors">
                  Popular Locations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors">
                  FAQ & Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#087443] flex-shrink-0 mt-0.5" />
                <span>123 Dream Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#087443] flex-shrink-0" />
                <a href="tel:+18001234567" className="hover:text-emerald-400 transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#087443] flex-shrink-0" />
                <a href="mailto:info@homevista.com" className="hover:text-emerald-400 transition-colors">
                  info@homevista.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div className="flex items-center gap-4">
            <span>&copy; 2024 HomeVista. All rights reserved.</span>
            <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>for your dream home</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
