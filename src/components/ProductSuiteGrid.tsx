/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RotateCw, Gauge, Wallet, KeyRound, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ProductSuiteGridProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductSuiteGrid: React.FC<ProductSuiteGridProps> = ({ onNavigate }) => {
  const products = [
    {
      id: 'collections',
      title: 'Collections',
      benefit: 'Automated, bank-authorized recurring payments for EMIs, subscriptions, and dealer receivables.',
      icon: RotateCw,
      accent: '#4F6BFF',
      bgAccent: 'bg-[#EEF2FF]',
      actionText: 'For Businesses',
      targetRoute: 'business' as PageRoute,
    },
    {
      id: 'credit',
      title: 'Credit',
      benefit: 'Check your credit health, consent-based, whenever you want.',
      icon: Gauge,
      accent: '#20C7B5',
      bgAccent: 'bg-[#ECFDF5]',
      actionText: 'For Individuals',
      targetRoute: 'individuals' as PageRoute,
    },
    {
      id: 'wallet',
      title: 'Wallet',
      benefit: 'One balance for bills, EMIs, and everyday payments.',
      icon: Wallet,
      accent: '#4F6BFF',
      bgAccent: 'bg-[#EFF6FF]',
      actionText: 'Explore Wallet',
      targetRoute: 'individuals' as PageRoute,
    },
    {
      id: 'super-key',
      title: 'Super Key',
      benefit: 'Secured device financing, with built-in recovery if payments stop.',
      icon: KeyRound,
      accent: '#0A0A0B',
      bgAccent: 'bg-slate-100',
      actionText: 'For Partners & Merchants',
      targetRoute: 'partners' as PageRoute,
    },
  ];

  return (
    <section id="product-suite" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          {/* Pre-heading fixed for mobile wrapping */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 sm:mb-2">
            <span className="text-[#4F6BFF] whitespace-nowrap">Core Product Suite</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="whitespace-nowrap">Simple Money, Smarter Moves</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Simple money, smarter moves.
          </h2>

          <p className="font-body text-base text-slate-600 mt-2">
            Collections, credit visibility, wallet, and secured device financing in one platform.
          </p>
        </div>

        {/* 4 Clean Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                onClick={() => onNavigate(prod.targetRoute)}
                className="fintech-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer border-slate-200/90 hover:border-slate-300 group"
              >
                <div>
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl ${prod.bgAccent} flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 transition-transform`}
                    style={{ color: prod.accent }}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-xl text-[#0A0A0B]">
                    {prod.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-slate-600 font-body leading-[1.3] sm:leading-relaxed">
                    {prod.benefit}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-xs font-semibold text-slate-500 group-hover:text-[#4F6BFF] transition-colors">
                  <span className="truncate pr-1">{prod.actionText}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};