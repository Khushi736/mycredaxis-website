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
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#4F6BFF]">Core Product Suite</span>
            <span aria-hidden="true">·</span>
            <span>Simple Money, Smarter Moves</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Simple money, smarter moves.
          </h2>

          <p className="font-body text-base text-slate-600 mt-2">
            Collections, credit visibility, wallet, and secured device financing in one platform.
          </p>
        </div>

        {/* 4 Clean Cards Grid (Jupiter Pattern: one-line benefit, not a paragraph) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                onClick={() => onNavigate(prod.targetRoute)}
                className="fintech-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer border-slate-200/90 hover:border-slate-300 group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${prod.bgAccent} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}
                    style={{ color: prod.accent }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#0A0A0B]">
                    {prod.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 font-body leading-relaxed">
                    {prod.benefit}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#4F6BFF] transition-colors">
                  <span>{prod.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
