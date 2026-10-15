import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const UtilityBar: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 text-[12px] text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Contact Info (Left) */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href="mailto:info@homevista.com"
            className="flex items-center gap-1.5 hover:text-[#087443] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087443]" />
            <span>info@homevista.com</span>
          </a>

          <a
            href="tel:+18001234567"
            className="flex items-center gap-1.5 hover:text-[#087443] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087443]" />
            <span>+1 (800) 123-4567</span>
          </a>

          <div className="flex items-center gap-1.5 hidden sm:flex text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>123 Dream Street, New York, NY 10001</span>
          </div>
        </div>

        {/* Social Links (Right) */}
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-[11px]">Follow us:</span>
          <div className="flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow HomeVista on Facebook"
              className="text-gray-600 hover:text-[#087443] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow HomeVista on Instagram"
              className="text-gray-600 hover:text-[#087443] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow HomeVista on LinkedIn"
              className="text-gray-600 hover:text-[#087443] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow HomeVista on Twitter"
              className="text-gray-600 hover:text-[#087443] transition-colors"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
