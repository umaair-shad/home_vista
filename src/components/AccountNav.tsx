'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  Heart,
  Search,
  MessageSquare,
  Settings,
  LogOut,
  Building,
} from 'lucide-react';

interface AccountNavProps {
  className?: string;
}

export function AccountNav({ className = '' }: AccountNavProps) {
  const pathname = usePathname();

  const links = [
    { label: 'Overview', href: '/account', icon: LayoutDashboard },
    { label: 'My Profile', href: '/account/profile', icon: User },
    { label: 'Saved Properties', href: '/account/favorites', icon: Heart },
    { label: 'Saved Searches', href: '/account/saved-searches', icon: Search },
    { label: 'Inquiries & Tours', href: '/account/inquiries', icon: MessageSquare },
    { label: 'Settings', href: '/account/settings', icon: Settings },
  ];

  return (
    <aside className={`bg-white rounded-2xl border border-gray-200 p-4 shadow-sm ${className}`}>
      {/* User Info Header */}
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full bg-[#232E38]/10 text-[#232E38] flex items-center justify-center font-bold text-base">
          SJ
        </div>
        <div className="overflow-hidden">
          <h2 className="text-sm font-bold text-gray-900 truncate">Sarah Jenkins</h2>
          <p className="text-[11px] text-gray-500 truncate">sarah.j@example.com</p>
          <span className="inline-block px-2 py-0.5 mt-1 bg-green-50 text-[#232E38] font-semibold text-[10px] rounded-full">
            Buyer / Member
          </span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="space-y-1">
        {links.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#232E38] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Switch to owner portal */}
      <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors"
        >
          <Building className="w-4 h-4 text-[#232E38]" />
          <span>Switch to Owner Portal</span>
        </Link>
        <Link
          href="/login"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-[11px] font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
