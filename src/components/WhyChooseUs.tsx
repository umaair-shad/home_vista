import React from 'react';
import { ShieldCheck, CircleDollarSign, Headphones, FileCheck } from 'lucide-react';
import { BENEFITS } from '@/data/mockData';
import { BenefitItem } from '@/types';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconType: BenefitItem['iconType']) => {
    switch (iconType) {
      case 'verified':
        return <ShieldCheck className="w-8 h-8 text-[#087443] stroke-[1.8]" />;
      case 'price':
        return <CircleDollarSign className="w-8 h-8 text-[#087443] stroke-[1.8]" />;
      case 'agents':
        return <Headphones className="w-8 h-8 text-[#087443] stroke-[1.8]" />;
      case 'process':
        return <FileCheck className="w-8 h-8 text-[#087443] stroke-[1.8]" />;
    }
  };

  return (
    <section id="why-choose" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-[#F8FAF9] rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
        <h2 className="text-xl sm:text-2xl font-bold text-[#172522] tracking-tight text-center mb-8">
          Why Choose HomeVista?
        </h2>

        {/* 4 Feature Items in Desktop Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BENEFITS.map((item) => (
            <div key={item.id} className="flex items-start gap-3.5">
              <div className="flex-shrink-0 pt-0.5">
                {getIcon(item.iconType)}
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-900 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
