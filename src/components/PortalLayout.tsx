'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  Inbox,
  UserCheck,
  User,
  Heart,
  Search,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ArrowLeft,
  Bell,
  Calendar,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { HomeVistaLogo } from './HomeVistaLogo';

interface PortalLayoutProps {
  children: React.ReactNode;
  portalType?: 'owner' | 'buyer';
  title?: string;
  subtitle?: string;
}

export function PortalLayout({
  children,
  portalType,
  title,
  subtitle,
}: PortalLayoutProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Auto detect portal type if not passed
  const isOwner = portalType
    ? portalType === 'owner'
    : pathname.startsWith('/dashboard');

  const ownerLinks = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'My Listings', href: '/dashboard/properties', icon: Building2, badge: '8' },
    { label: 'Add Property', href: '/dashboard/properties/new', icon: PlusCircle },
    { label: 'Inquiries', href: '/dashboard/inquiries', icon: Inbox, badge: '32' },
    { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { label: 'Owner Profile', href: '/dashboard/profile', icon: UserCheck },
    { label: 'Portal Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const buyerLinks = [
    { label: 'Overview', href: '/account', icon: LayoutDashboard },
    { label: 'My Profile', href: '/account/profile', icon: User },
    { label: 'Saved Homes', href: '/account/favorites', icon: Heart, badge: '4' },
    { label: 'Saved Searches', href: '/account/saved-searches', icon: Search, badge: '2' },
    { label: 'Inquiries & Tours', href: '/account/inquiries', icon: MessageSquare, badge: '3' },
    { label: 'Scheduled Tours', href: '/account/tours', icon: Calendar },
    { label: 'Account Settings', href: '/account/settings', icon: Settings },
  ];

  const currentLinks = isOwner ? ownerLinks : buyerLinks;

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col lg:flex-row text-[#172522]">
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Fixed & Non-scrolling with page content */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-[#071F1C] text-gray-200 border-r border-[#0d2a26] flex flex-col justify-between transition-all duration-300 h-screen overflow-y-auto ${
          mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        {/* Top Header / Clean Logo */}
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 overflow-hidden transition-all group"
              title="Return to HomeVista Homepage"
            >
              {collapsed ? (
                <div className="w-10 h-10 rounded-xl bg-[#087443] flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                  HV
                </div>
              ) : (
                <HomeVistaLogo variant="light" />
              )}
            </Link>

            {/* Mobile close button */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5">
            {currentLinks.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href ||
                (item.href !== '/dashboard' &&
                  item.href !== '/account' &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? 'bg-[#087443] text-white shadow-sm'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  } ${collapsed ? 'justify-center px-0' : 'justify-between'}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-emerald-400'}`} />
                    {!collapsed && <span>{item.label}</span>}
                  </div>

                  {!collapsed && item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-black/25 text-white'
                          : 'bg-white/10 text-emerald-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Area - Logout logo and icon only, no name */}
        <div className="p-3 border-t border-white/10 shrink-0">
          <div
            className={`flex items-center p-2 rounded-xl bg-white/5 border border-white/5 ${
              collapsed ? 'justify-center' : 'justify-between'
            }`}
          >
            {/* User Icon Only (No name) */}
            <div
              className="w-8 h-8 rounded-full bg-[#087443] text-white flex items-center justify-center shrink-0 shadow-xs"
              title={isOwner ? 'Owner Profile' : 'Buyer Profile'}
            >
              <User className="w-4 h-4" />
            </div>

            {/* Logout logo & icon only (No name) */}
            <Link
              href="/login"
              title="Sign Out"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-red-400 hover:bg-white/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {!collapsed && <span>Log Out</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Right Content Layout - Placed beside fixed sidebar */}
      <div
        className={`flex-1 min-w-0 flex flex-col min-h-screen transition-all duration-300 ${
          collapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        {/* Dashboard Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-2">
            {/* Mobile Sidebar Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-[#087443] transition-colors cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Collapse Toggle */}
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-[#087443] transition-colors cursor-pointer"
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Action CTA */}
            {isOwner ? (
              <Link
                href="/dashboard/properties/new"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#087443] hover:bg-[#065e36] text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Property</span>
              </Link>
            ) : (
              <Link
                href="/properties"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#087443] hover:bg-[#065e36] text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Explore Homes</span>
              </Link>
            )}

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-xl text-gray-600 hover:text-[#087443] hover:bg-gray-100 transition-colors"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50 text-xs animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                    <span className="font-bold text-gray-900">Notifications</span>
                    <span className="text-[10px] text-[#087443] font-semibold">2 New</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-2 rounded-xl bg-green-50/70 border border-green-100">
                      <p className="font-semibold text-gray-900">Inquiry Confirmed</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        {isOwner
                          ? 'Dr. Robert Chen booked a tour for Beverly Hills Villa.'
                          : 'Agent Robert Sterling confirmed your tour for tomorrow.'}
                      </p>
                    </div>
                    <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                      <p className="font-semibold text-gray-900">Market Price Update</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">
                        New sales benchmarks published for Los Angeles and Austin.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Icon */}
            <Link
              href={isOwner ? '/dashboard/profile' : '/account/profile'}
              title="My Profile"
              className="p-1 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#087443] text-white flex items-center justify-center shrink-0 shadow-xs">
                <User className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* Modern Portal Sub-Footer */}
        <footer className="border-t border-gray-200/70 bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} HomeVista Portal. All rights reserved.</span>
            <Link href="/" className="hover:text-[#087443] transition-colors">
              Public Site
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#087443] transition-colors">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Design by</span>
            <a
              href="https://www.linkedin.com/company/shaddeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#087443] transition-colors font-medium hover:underline"
            >
              Shad Developers
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
