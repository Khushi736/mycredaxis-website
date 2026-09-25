/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Landmark,
  Network,
  Repeat,
  GraduationCap,
  HeartPulse,
  Users2,
  Building,
  ShoppingCart
} from 'lucide-react';

export const IndustryGrid: React.FC = () => {
  const industries = [
    { name: 'NBFCs & Fintechs', icon: Landmark, desc: 'Automate loan EMI collections and recurring credit installments.' },
    { name: 'Dealer & Distributor Networks', icon: Network, desc: 'Streamline trade receivables and secured inventory cycles.' },
    { name: 'Subscription Businesses', icon: Repeat, desc: 'Zero-churn recurring billing with multi-account mandate fallbacks.' },
    { name: 'Educational Institutions', icon: GraduationCap, desc: 'Term fee collections and student loan installment management.' },
    { name: 'Healthcare Providers', icon: HeartPulse, desc: 'Treatment financing installments and hospital recurring retainers.' },
    { name: 'Membership Organizations', icon: Users2, desc: 'Annual club dues, gym memberships, and association subscriptions.' },
    { name: 'Utility & Service Companies', icon: Building, desc: 'Scheduled recurring infrastructure and municipal service collections.' },
    { name: 'E-commerce Platforms', icon: ShoppingCart, desc: 'Device financing, Buy-Now-Pay-Later checkout, and customer wallets.' },
  ];

  return (
    <section className="py-24 bg-[#F7F8FA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#4F6BFF]">Cross-Sector Applicability</span>
            <span aria-hidden="true">·</span>
            <span>Ecosystem Reach</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Built for every industry.
          </h2>

          <p className="font-body text-base text-slate-600 mt-2">
            From consumer electronics retailers to high-growth NBFCs, MyCredAxis adapts to diverse transactional flows.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="fintech-card rounded-2xl p-5 bg-white border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#4F6BFF]" />
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#0A0A0B]">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 font-body leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                  Ready Integration
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
