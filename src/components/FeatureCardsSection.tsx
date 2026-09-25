/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Gauge,
  CreditCard,
  RotateCw,
  Gift,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Check,
  Zap,
  CalendarCheck,
  Sparkles
} from 'lucide-react';

export const FeatureCardsSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      id: 'credit-radar',
      icon: Gauge,
      badgeColor: '#4F6BFF',
      accentColor: 'text-[#4F6BFF]',
      bgAccent: 'bg-[#EEF2FF]',
      title: 'Real-Time Credit Intelligence',
      subtitle: 'Continuous Bureau Telemetry',
      description:
        'Live credit score telemetry across all four bureaus. Intelligent predictive simulations show exactly how paying down specific balances influences your score.',
      metrics: '780+ Target Score · 24/7 Delinquency Guard',
      interactiveDetails: {
        score: '780 Good',
        change: '+14 pts this cycle',
        factor1: 'Credit Utilization: 11% (Optimal)',
        factor2: 'On-Time Payment Track: 100%',
        factor3: 'Active Inquiries: 0 in 90 days',
      },
    },
    {
      id: 'bill-hub',
      icon: CreditCard,
      badgeColor: '#20C7B5',
      accentColor: 'text-[#20C7B5]',
      bgAccent: 'bg-[#ECFDF5]',
      title: 'Unified Bill & EMI Hub',
      subtitle: 'Single Streamlined Schedule',
      description:
        'Consolidate every credit card due date, home loan EMI, and utility bill into a single synchronized visual timeline. Never juggle multiple banking portals.',
      metrics: '1-Tap Settlement · Zero Due-Date Overlap',
      interactiveDetails: {
        score: '3 Upcoming Bills',
        change: '₹34,850 Total Due',
        factor1: 'Axis Magnate Card: Due in 4 days',
        factor2: 'HDFC Home Loan EMI: Due in 9 days',
        factor3: 'Electricity & Fiber: Due in 12 days',
      },
    },
    {
      id: 'autopay',
      icon: RotateCw,
      badgeColor: '#4F6BFF',
      accentColor: 'text-[#4F6BFF]',
      bgAccent: 'bg-[#F0FDFA]',
      title: 'Zero-Failure AutoPay Mandates',
      subtitle: 'Intelligent Liquidity Routing',
      description:
        'Smart e-mandates that verify liquidity across your linked accounts before triggering deductions, preventing bounce charges and safeguarding your score.',
      metrics: '99.98% Mandate Success · Instant Fallback',
      interactiveDetails: {
        score: 'Smart Mandates Active',
        change: '4 Auto-Scheduled',
        factor1: 'Liquidity Pre-Check: Active',
        factor2: 'Auto-Routing: Primary Account',
        factor3: 'Bounce Protection: Guaranteed',
      },
    },
    {
      id: 'rewards',
      icon: Gift,
      badgeColor: '#8B5CF6',
      accentColor: 'text-[#8B5CF6]',
      bgAccent: 'bg-[#F5F3FF]',
      title: 'Curated Privilege Rewards',
      subtitle: 'Discipline Converted to Value',
      description:
        'Every punctual payment unlocks member coin allocations redeemable for 24K digital gold, partner flight vouchers, and premium concierge access.',
      metrics: '24K Digital Gold · Zero Expiry Coins',
      interactiveDetails: {
        score: '12,450 Axis Coins',
        change: '≈ ₹2,490 Digital Gold',
        factor1: 'Gold Stash Allocation: Ready',
        factor2: 'Airport Lounge Pass: Unlocked',
        factor3: 'Fine Dining Privilege: Active',
      },
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            <span className="text-[#4F6BFF]">Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Services</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight leading-tight">
            Designed for total financial clarity, engineered for reliability.
          </h2>

          <p className="mt-4 font-body text-base text-slate-600 leading-relaxed">
            Taking PhonePe’s utility breadth and Jupiter’s digital-first polish, MyCredAxis organizes your entire credit universe into four focused operational quadrants.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedFeature === idx;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedFeature(idx)}
                className={`fintech-card rounded-3xl p-8 cursor-pointer relative overflow-hidden transition-all duration-300 ${
                  isSelected
                    ? 'ring-2 ring-[#4F6BFF] border-transparent shadow-lg'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {/* Header of the Card */}
                <div className="flex items-start justify-between">
                  <div className={`w-13 h-13 rounded-2xl ${item.bgAccent} flex items-center justify-center ${item.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#0A0A0B] mt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-body">
                  {item.description}
                </p>

                {/* Metadata Line */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 font-medium">
                    {item.metrics}
                  </span>

                  <span className={`inline-flex items-center gap-1 font-semibold text-xs ${
                    isSelected ? 'text-[#4F6BFF]' : 'text-slate-400 group-hover:text-slate-700'
                  }`}>
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Deep Dive Panel */}
        <div className="mt-12 bg-[#F7F8FA] rounded-3xl border border-slate-200/90 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Capability Inspector</span>
              </div>
              <h4 className="font-display font-bold text-xl text-[#0A0A0B] mt-1">
                {features[selectedFeature].title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">Switch focus:</span>
              <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
                {features.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFeature(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedFeature === i
                        ? 'bg-[#0A0A0B] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Inspector Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Live Status</span>
              <div className="font-display font-extrabold text-2xl text-[#0A0A0B] mt-1">
                {features[selectedFeature].interactiveDetails.score}
              </div>
              <span className="text-xs font-semibold text-[#20C7B5] mt-1 block">
                {features[selectedFeature].interactiveDetails.change}
              </span>
            </div>

            <div className="md:col-span-2 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-2.5">
              <span className="text-xs text-slate-500 font-medium block">Key Operating Parameters</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-[#F7F8FA] p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-[#20C7B5] shrink-0" />
                  <span>{features[selectedFeature].interactiveDetails.factor1}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-[#F7F8FA] p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-[#4F6BFF] shrink-0" />
                  <span>{features[selectedFeature].interactiveDetails.factor2}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-[#F7F8FA] p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{features[selectedFeature].interactiveDetails.factor3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
