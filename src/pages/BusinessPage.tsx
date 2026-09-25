/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { BUSINESS_FAQS } from '../data/faqData';
import {
  Building2,
  TrendingDown,
  RotateCw,
  BarChart3,
  UserCheck,
  MessageSquare,
  ShieldCheck,
  KeyRound,
  ArrowRight,
  CheckCircle2,
  Lock,
  Send
} from 'lucide-react';

interface BusinessPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onOpenContact }) => {
  const capabilities = [
    {
      title: 'Automated Collections',
      desc: 'Bank-authorized recurring payments for EMIs, subscriptions, and dealer receivables via e-NACH and UPI Autopay.',
      icon: RotateCw,
      color: '#4F6BFF',
    },
    {
      title: 'Real-Time MIS & Analytics',
      desc: 'Get visibility into collections and cash flow through real-time dashboards.',
      icon: BarChart3,
      color: '#20C7B5',
    },
    {
      title: 'Merchant & Dealer Onboarding',
      desc: 'Quick digital KYC to onboard merchants and dealers.',
      icon: UserCheck,
      color: '#0A0A0B',
    },
    {
      title: 'Smart Payment Reminders',
      desc: 'Automated reminders through WhatsApp, SMS, email, and IVR before a payment is late.',
      icon: MessageSquare,
      color: '#8B5CF6',
    },
  ];

  const benefits = [
    'Lower collection cost',
    'Predictable cash inflow',
    'Built-in recovery via Super Key for financed devices and equipment',
    'Easier scaling as your customer base grows',
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Hero Section for Business */}
      <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[#4F6BFF]" />
            <span className="text-[#4F6BFF]">B2B Collections Platform</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Cash Flow</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] text-[#0A0A0B] tracking-tight">
            Get Paid On Time,{'\n'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">
              Every Time.
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Automate collections, reduce manual follow-up, and get full visibility into your cash flow — without adding headcount.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenContact('business')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Talk to Our Team / Request a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#20C7B5]" />
            </button>
          </div>

          {/* Institutional Compliance Badges */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              RBI-Compliant Framework
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#4F6BFF]" />
              PCI DSS Certified
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              NPCI Compliant
            </span>
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-600 font-bold">
                The Industry Problem
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A0A0B]">
                Manual collection is draining your margins.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body text-sm sm:text-base text-slate-700 leading-relaxed">
                Manual payment collection is slow, costly, and error-prone — late payments, missed installments, reminder calls, and reconciliation delays all eat into your margins and your team's time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What MyCredAxis Does for Your Business */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              B2B Suite
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              What MyCredAxis does for your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-3xl p-6 bg-white border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-5"
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0A0A0B]">
                      {cap.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 font-body leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                    Live B2B Capability
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits List */}
          <div className="mt-14 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
            <h3 className="font-display font-bold text-xl text-[#0A0A0B] mb-5">
              Key Business Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium font-body">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Merchant Flow) */}
      <section className="py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              Merchant Workflow
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              From onboarding to predictable receivables.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Onboard', desc: 'Complete merchant onboarding.' },
              { num: '02', title: 'Set Up Mandates', desc: 'Set up bank-authorized payment mandates.' },
              { num: '03', title: 'Process Payments', desc: 'Payments and collections are processed automatically.' },
              { num: '04', title: 'Track in Real Time', desc: 'Track collections in real time.' },
              { num: '05', title: 'Get Paid Reliably', desc: 'Get paid reliably every cycle.' },
            ].map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#4F6BFF]">STAGE {step.num}</span>
                  <h4 className="font-display font-bold text-base text-[#0A0A0B] mt-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 font-body mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business FAQ */}
      <FAQSection
        items={BUSINESS_FAQS}
        title="Frequently Asked Questions for Businesses"
        subtitle="Answers to common questions about collections, onboarding, and pricing."
      />

      {/* 6. Contact CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-[#0A0A0B]">
            Automate your collections today.
          </h2>
          <p className="text-sm text-slate-600 font-body">
            Talk to our team about automating your collections.
          </p>
          <button
            onClick={() => onOpenContact('business')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer mt-2"
          >
            <Building2 className="w-4 h-4 text-[#20C7B5]" />
            <span>Talk to Our Team</span>
          </button>
        </div>
      </section>

    </div>
  );
};
