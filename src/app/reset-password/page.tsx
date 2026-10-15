'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppLayout } from '@/components/AppLayout';
import { HomeVistaLogo } from '@/components/HomeVistaLogo';
import { Lock, ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => router.push('/login'), 1500);
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
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Set New Password</h1>
            <p className="text-xs text-gray-500 mt-1">
              Enter your reset verification code and choose a secure new password.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {error}
            </div>
          )}

          {success ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-green-50 text-[#232E38] rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-gray-900 mb-1">Password Updated!</h2>
              <p className="text-xs text-gray-600 mb-4">
                Your password has been changed successfully. Redirecting you to sign in...
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#232E38] text-white text-xs font-bold rounded-xl"
              >
                Sign In Now
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Verification Code</label>
                <input
                  type="text"
                  required
                  placeholder="6-digit code from email"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:border-[#232E38] tracking-widest font-mono text-center text-sm"
                  maxLength={8}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">New Password</label>
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

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Repeat new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl p-3 pl-9 focus:outline-none focus:border-[#232E38]"
                  />
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#232E38] hover:bg-[#141A20] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50 mt-2"
              >
                <span>{loading ? 'Updating Password...' : 'Reset Password'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
