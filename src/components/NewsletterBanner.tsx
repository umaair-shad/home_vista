'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage('Thank you for subscribing! You will receive our latest verified property updates.');
    setEmail('');
  };

  return (
    <section id="newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Container in Deep Green (#062F2B) matching reference screenshot */}
      <div className="bg-[#062F2B] rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-7 shadow-xl border border-emerald-900/60">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Interior Photograph */}
          <div className="relative w-full lg:w-72 h-44 sm:h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
              alt="Stylish modern living room interior"
              fill
              sizes="(max-width: 1024px) 100vw, 300px"
              className="object-cover"
            />
          </div>

          {/* Middle: Headline & Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get Exclusive Property Updates
            </h2>
            <p className="text-xs sm:text-[13px] text-emerald-100/80 mt-1.5 max-w-xl leading-relaxed">
              Subscribe to our newsletter and be the first to know about new listings and special offers.
            </p>
          </div>

          {/* Right: Input & Theme Green Subscribe Button */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                className="w-full sm:w-72 bg-white text-gray-800 text-xs sm:text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#087443] placeholder-gray-400"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#087443] hover:bg-[#065e36] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap active:scale-95 shadow-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {/* Validation / Demo Status Message */}
            {status === 'success' && (
              <div className="flex items-center gap-1.5 text-emerald-300 text-xs mt-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-1.5 text-rose-300 text-xs mt-2 font-medium">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
