'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { HomeVistaLogo } from '@/components/HomeVistaLogo';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoNotice, setDemoNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDemoNotice(true);
      // Route to account dashboard
      setTimeout(() => router.push('/account'), 1000);
    }, 800);
  };

  return (
    <AppLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/60">
        <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-block mb-3">
              <HomeVistaLogo variant="dark" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome Back</h1>
            <p className="text-xs text-gray-500 mt-1">Sign in to manage your saved properties and tour requests</p>
          </div>

          {demoNotice && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-[#232E38] text-xs rounded-xl text-center font-medium">
              Demo Authentication: Signing in and redirecting to your Account Portal...
            </div>
          )}

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

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-gray-700 font-semibold">Password</label>
                <Link href="/forgot-password" className="text-[#232E38] hover:underline font-semibold text-[11px]">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
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

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" defaultChecked className="rounded text-[#232E38] focus:ring-[#232E38]" />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 mt-6 pt-6 border-t border-gray-100">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="text-[#232E38] font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
