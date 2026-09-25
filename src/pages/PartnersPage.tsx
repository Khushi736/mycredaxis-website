/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { PARTNER_FAQS } from '../data/faqData';
import {
  Store,
  KeyRound,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileCheck2
} from 'lucide-react';

interface PartnersPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenContact }) => {
  const reasons = [
    {
      icon: KeyRound,
      title: 'Offer Secured Device Financing (Super Key)',
      desc: 'Offer customers secured device financing with a built-in recovery mechanism.',
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      icon: Coins,
      title: 'Collect Payments Digitally',
      desc: 'Collect payments from your customers digitally under the MyCredAxis platform.',
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      icon: TrendingUp,
      title: 'No Infrastructure to Build',
      desc: 'Offer financing and collections without building your own infrastructure.',
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Apply to Become a Partner',
      desc: 'Contact us to apply to become a partner.',
    },
    {
      num: '02',
      title: 'Review & Verification',
      desc: 'Our team reviews your business and use case.',
    },
    {
      num: '03',
      title: 'Platform Onboarding',
      desc: 'Onboard onto the MyCredAxis platform.',
    },
    {
      num: '04',
      title: 'Start Offering Financing',
      desc: 'Start offering financing and collections to your customers.',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Hero Section for Partners */}
      <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Store className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700">Retail & Distribution Partners</span>
            <span aria-hidden="true">·</span>
            <span>Channel Expansion</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] text-[#0A0A0B] tracking-tight">
            Grow Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">
              With MyCredAxis.
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Offer device financing and payment collection to your own customers — under the MyCredAxis platform, without building your own infrastructure.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenContact('partner')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Ask About Becoming a Partner</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Compliance Badges */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              Super Key Secured Protocol
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-[#4F6BFF]" />
              Bank-Authenticated E-Mandates
            </span>
          </div>
        </div>
      </section>

      {/* 2. Why Partner With MyCredAxis */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              Partner Advantages
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              Why partner with MyCredAxis.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-3xl p-7 border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${r.bg} flex items-center justify-center mb-6`}
                      style={{ color: r.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0A0A0B]">
                      {r.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 font-body leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#20C7B5]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Included in Partner Stack</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. How Partnership Works (4 General Steps) */}
      <section className="py-24 bg-[#F7F8FA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              Onboarding Path
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              How partnership works.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    PHASE {st.num}
                  </span>
                  <h4 className="font-display font-bold text-base text-[#0A0A0B] mt-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-body mt-2 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#4F6BFF]">
                  Step {st.num} of 4
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Partner FAQ */}
      <FAQSection
        items={PARTNER_FAQS}
        title="Frequently Asked Questions for Partners"
        subtitle="Answers to common questions about partnership terms and support."
      />

      {/* 5. Contact CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-[#0A0A0B]">
            Ready to expand your customer financing?
          </h2>
          <p className="text-sm text-slate-600 font-body">
            Terms are discussed directly with our partnerships team. Contact us for current details.
          </p>
          <button
            onClick={() => onOpenContact('partner')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer mt-2"
          >
            <Store className="w-4 h-4 text-amber-400" />
            <span>Ask About Becoming a Partner</span>
          </button>
        </div>
      </section>

    </div>
  );
};
