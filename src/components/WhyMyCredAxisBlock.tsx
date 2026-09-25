/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, KeyRound, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyMyCredAxisBlock: React.FC = () => {
  const differentiators = [
    {
      icon: Layers,
      title: 'A Full Financial Layer, Not Just Collections',
      desc: 'Credit score visibility, an integrated payment wallet, and secured device financing unified inside one interoperable platform.',
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      icon: KeyRound,
      title: 'Built-In Recovery Mechanism (Super Key)',
      desc: 'Secured device financing infrastructure that most collection-only tools do not offer, safeguarding lender and merchant capital.',
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      icon: ShieldCheck,
      title: 'Consent-First by Design',
      desc: 'Every recurring mandate, bureau pull, and financing arrangement is strictly bank-authenticated by the customer. Zero ambiguity.',
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
  ];

  return (
    <section className="py-24 bg-[#F7F8FA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#4F6BFF]">Core Differentiators</span>
            <span aria-hidden="true">·</span>
            <span>Why MyCredAxis</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Engineered differently from day one.
          </h2>

          <p className="font-body text-base text-slate-600 mt-2">
            Designed to bridge the gap between consumer trust and enterprise collection certainty.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="fintech-card rounded-3xl p-7 bg-white border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${diff.bg} flex items-center justify-center mb-6`}
                    style={{ color: diff.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0A0A0B] leading-snug">
                    {diff.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 font-body leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#20C7B5]" />
                  <span>Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
