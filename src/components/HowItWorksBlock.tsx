/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, UserCheck, Settings, Cpu, LineChart, PackageCheck } from 'lucide-react';

export const HowItWorksBlock: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Sign Up & Verify',
      desc: 'Digital KYC to get started with zero paper delays.',
      icon: UserCheck,
      color: '#4F6BFF',
    },
    {
      num: '02',
      title: 'Set Up',
      desc: 'Set up your mandate or wallet with simple 1-click bank authorization.',
      icon: Settings,
      color: '#20C7B5',
    },
    {
      num: '03',
      title: 'Process',
      desc: 'Payments and collections processed automatically on scheduled cycles.',
      icon: Cpu,
      color: '#4F6BFF',
    },
    {
      num: '04',
      title: 'Track',
      desc: 'Track everything in real time via live dashboards and mobile feeds.',
      icon: LineChart,
      color: '#20C7B5',
    },
    {
      num: '05',
      title: 'Deliver',
      desc: 'Get paid or get service — reliably, every cycle without friction.',
      icon: PackageCheck,
      color: '#0A0A0B',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span className="text-[#4F6BFF]">End-to-End Cycle</span>
            <span aria-hidden="true">·</span>
            <span>How It Works</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Predictable, transparent, and consent-driven.
          </h2>

          <p className="font-body text-base text-slate-600">
            A cohesive 5-step operational architecture bridging individuals, merchants, and banking gateways.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((st, index) => {
            const Icon = st.icon;
            const isSelected = activeStep === index;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(index)}
                className={`fintech-card rounded-2xl p-5 cursor-pointer flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'border-[#4F6BFF] ring-2 ring-[#4F6BFF]/20 shadow-md bg-white'
                    : 'border-slate-200/80 bg-[#F7F8FA]/60 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-bold text-xs text-slate-400">
                      STEP {st.num}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${st.color}15`, color: st.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#0A0A0B]">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {st.num}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: st.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Consent Banner (Wise/FireAI Bold Trust statement) */}
        <div className="mt-12 p-6 rounded-3xl bg-[#0A0A0B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#20C7B5] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
                Consent-First By Design
              </span>
              <p className="font-display font-semibold text-sm sm:text-base text-white mt-0.5">
                Every mandate requires the customer's bank-authenticated approval — nothing is ever debited without consent.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#20C7B5]" />
            <span>Bank-Gateways Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
