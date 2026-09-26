/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Zap,
  Droplets,
  Flame,
  Smartphone,
  Tv,
  Shield,
  CalendarCheck,
  FileWarning,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const UtilitySpotlight: React.FC = () => {
  const utilityCategories = [
    { name: 'Loan & Card EMIs', icon: CalendarCheck, status: 'Live Today', isLive: true, color: '#4F6BFF' },
    { name: 'Wallet Payments', icon: Smartphone, status: 'Live Today', isLive: true, color: '#20C7B5' },
    { name: 'Electricity Bills', icon: Zap, status: 'Coming Soon (BBPS)', isLive: false, color: '#F59E0B' },
    { name: 'Water Utilities', icon: Droplets, status: 'Coming Soon (BBPS)', isLive: false, color: '#3B82F6' },
    { name: 'Piped Gas & Cylinders', icon: Flame, status: 'Coming Soon (BBPS)', isLive: false, color: '#EF4444' },
    { name: 'Telecom & Fiber Recharges', icon: Smartphone, status: 'Coming Soon (BBPS)', isLive: false, color: '#8B5CF6' },
    { name: 'DTH Subscriptions', icon: Tv, status: 'Coming Soon (BBPS)', isLive: false, color: '#06B6D4' },
    { name: 'Insurance Premiums', icon: Shield, status: 'Coming Soon (BBPS)', isLive: false, color: '#10B981' },
    { name: 'Traffic Challans', icon: FileWarning, status: 'Coming Soon (BBPS)', isLive: false, color: '#F97316' },
  ];

  return (
    <section id="utility-spotlight" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#4F6BFF]">Everyday Utility</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Coverage</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Every Bill. Every EMI. One App.
          </h2>

          <p className="font-body text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Electricity, water, gas, telecom, DTH, insurance, EMIs, traffic challans — MyCredAxis is built to be the one app you open for all of it, not just some of it.
          </p>
        </div>

        {/* Categories Grid - Responsive: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {utilityCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="fintech-card rounded-2xl p-5 border-slate-200/90 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {item.isLive ? (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <Clock className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-[#0A0A0B]">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-500 mt-1 block font-body">
                    {item.isLive ? 'Full auto-tracking and scheduled clearance' : 'Integration via BBPS currently in rollout'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on Roadmap Compliance */}
        <div className="mt-6 sm:mt-8 p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <span>
            <strong>Coming Soon:</strong> BBPS bill payments and traffic challans are not yet available in the app.
          </span>
          <span className="text-[#4F6BFF] font-semibold whitespace-nowrap">
            Zero ambiguity in release states
          </span>
        </div>

      </div>
    </section>
  );
};