'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Inbox,
  UserCheck,
  User,
  LogOut,
  ChevronRight,
} from 'lucide-react';

interface DashboardNavProps {
  className?: string;
}

export function DashboardNav({ className = '' }: DashboardNavProps) {
  const pathname = usePathname();

  const links = [
    { label: 'Dashboard Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'My Listings', href: '/dashboard/properties', icon: Building2 },
    { label: 'Add New Property', href: '/dashboard/properties/new', icon: PlusCircle },
    { label: 'Received Inquiries', href: '/dashboard/inquiries', icon: Inbox },
    { label: 'Owner Profile', href: '/dashboard/profile', icon: UserCheck },
  ];

  return (
    <aside className={`bg-white rounded-2xl border border-gray-200 p-4 shadow-sm ${className}`}>
      {/* Owner Badge */}
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-base shadow-inner">
          HV
        </div>
        <div className="overflow-hidden">
          <h2 className="text-sm font-bold text-gray-900 truncate">Vanguard Realty Group</h2>
          <p className="text-[11px] text-gray-500 truncate">Licensed Owner / Host</p>
          <span className="inline-block px-2 py-0.5 mt-1 bg-emerald-50 text-[#232E38] font-semibold text-[10px] rounded-full">
            Verified Partner
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="space-y-1">
        {links.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-[#182128] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-300" />}
            </Link>
          );
        })}
      </nav>

      {/* Switch to Buyer View */}
      <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
        <Link
          href="/account"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <User className="w-4 h-4 text-gray-500" />
          <span>Switch to Buyer Account</span>
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
