import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  children,
}) => {
  return (
    <div className="hero-gradient-dark py-12 px-4 border-b border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-emerald-300 mb-3">
          <Link href="/" className="hover:underline hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-emerald-400/70 shrink-0" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold truncate max-w-xs sm:max-w-md">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content & Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            {badge && (
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {children && (
            <div className="shrink-0">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
