'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/AppLayout';
import { HomeVistaLogo } from '@/components/HomeVistaLogo';
import { Mail, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <AppLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <HomeVistaLogo variant="dark" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Reset Password</h1>
            <p className="text-xs text-gray-500 mt-1">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-50 text-[#232E38] rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-gray-900 mb-1">Check your inbox</h2>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                We sent a password reset link to <strong className="text-gray-900">{email}</strong>. Please check your spam folder if you do not see it within a few minutes.
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/reset-password"
                  className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Enter Reset Code / New Password</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/login"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Sign In</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                  />
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
              >
                <span>{loading ? 'Sending link...' : 'Send Reset Link'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-4">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to login</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
