'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { HomeVistaLogo } from '@/components/HomeVistaLogo';
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'buyer' | 'owner' | 'agent'>('buyer');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDemoNotice(true);
      setTimeout(() => {
        if (role === 'owner') {
          router.push('/dashboard');
        } else {
          router.push('/account');
        }
      }, 1000);
    }, 800);
  };

  return (
    <AppLayout>
      <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <HomeVistaLogo variant="dark" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Create an Account</h1>
            <p className="text-xs text-gray-500 mt-1">Join HomeVista to save dream homes and schedule instant tours</p>
          </div>

          {demoNotice && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-[#232E38] text-xs rounded-xl text-center font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Registration successful! Redirecting to your dashboard...</span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-xl mb-6 text-center text-xs font-semibold text-gray-600">
            <button
              type="button"
              onClick={() => setRole('buyer')}
              className={`py-2 rounded-lg transition-all ${
                role === 'buyer' ? 'bg-white text-[#232E38] shadow-sm' : 'hover:text-gray-900'
              }`}
            >
              Buyer / Renter
            </button>
            <button
              type="button"
              onClick={() => setRole('owner')}
              className={`py-2 rounded-lg transition-all ${
                role === 'owner' ? 'bg-white text-[#232E38] shadow-sm' : 'hover:text-gray-900'
              }`}
            >
              Property Owner
            </button>
            <button
              type="button"
              onClick={() => setRole('agent')}
              className={`py-2 rounded-lg transition-all ${
                role === 'agent' ? 'bg-white text-[#232E38] shadow-sm' : 'hover:text-gray-900'
              }`}
            >
              Agent
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

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

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Phone Number (Optional)</label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                />
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 pl-9 pr-9 focus:outline-none focus:border-[#232E38]"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1 text-gray-600 leading-tight">
              <input type="checkbox" required className="mt-0.5 rounded text-[#232E38] focus:ring-[#232E38]" />
              <span>
                I agree to the{' '}
                <Link href="/terms" className="text-[#232E38] underline font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy-policy" className="text-[#232E38] underline font-medium">
                  Privacy Policy
                </Link>
                .
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50 mt-2"
            >
              <span>{loading ? 'Creating Account...' : 'Get Started Free'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 mt-6 pt-6 border-t border-gray-100">
            Already have an account?{' '}
            <Link href="/login" className="text-[#232E38] font-bold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
