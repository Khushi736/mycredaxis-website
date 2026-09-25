/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Link2,
  ListFilter,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ProcessFlowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Fast Bureau Linkage',
      subtitle: 'Zero-Impact Credit Pull',
      description:
        'Connect via secure mobile OTP. Immediate real-time sync across CIBIL, Experian, and Equifax with 100% zero score damage.',
      icon: Link2,
      accent: '#4F6BFF',
      tag: '60 Seconds Setup',
    },
    {
      step: '02',
      title: 'Centralize Liabilities',
      subtitle: 'Automated Account Discovery',
      description:
        'Smart account parsers identify active credit cards, utility providers, and bank loan EMIs, mapping them to a calendar.',
      icon: ListFilter,
      accent: '#20C7B5',
      tag: 'Auto-Discovered',
    },
    {
      step: '03',
      title: 'Precision AutoPay Routing',
      subtitle: 'Smart Liquidity Protection',
      description:
        'Set automated rules. The engine checks salary deposit timing and balances to ensure zero bounces and zero late fees.',
      icon: ShieldCheck,
      accent: '#4F6BFF',
      tag: 'Zero Overdrafts',
    },
    {
      step: '04',
      title: 'Privilege Yield Compounding',
      subtitle: 'Discipline Converted To Gold',
      description:
        'Earn member tokens for every single on-time settlement, redeemable for physical gold coins, travel flights, or billing discounts.',
      icon: Award,
      accent: '#F59E0B',
      tag: 'Tier Growth',
    },
  ];

  return (
    <section id="process-flow" className="py-24 bg-[#F7F8FA] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span className="text-[#4F6BFF]">Seamless Onboarding</span>
            <span aria-hidden="true">·</span>
            <span>4-Step Flow</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            How MyCredAxis synchronizes your financial life.
          </h2>

          <p className="font-body text-base text-slate-600 leading-relaxed">
            A frictionless, streamlined progression designed for instant clarity and total peace of mind.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`fintech-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? 'border-[#4F6BFF] ring-2 ring-[#4F6BFF]/20 shadow-md bg-white'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-display font-black text-2xl text-slate-300">
                      {item.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        color: item.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#0A0A0B] mt-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Unboxed Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {item.tag}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Connector Bar for Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-12 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5 text-[#4F6BFF]">
            <CheckCircle2 className="w-4 h-4" /> Instant KYC Verify
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="flex items-center gap-1.5 text-[#20C7B5]">
            <CheckCircle2 className="w-4 h-4" /> Bureau Auto-Sync
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="flex items-center gap-1.5 text-slate-800">
            <CheckCircle2 className="w-4 h-4" /> 1-Click Mandate Authorization
          </span>
        </div>

      </div>
    </section>
  );
};
