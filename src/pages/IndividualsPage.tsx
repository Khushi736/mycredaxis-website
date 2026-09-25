/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SmartphoneMockup } from '../components/SmartphoneMockup';
import { FAQSection } from '../components/FAQSection';
import { INDIVIDUAL_FAQS } from '../data/faqData';
import {
  Download,
  Gauge,
  Wallet,
  CalendarCheck,
  Award,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowRight,
  Clock,
  CheckCircle2,
  Check
} from 'lucide-react';

interface IndividualsPageProps {
  onOpenDownload: () => void;
}

export const IndividualsPage: React.FC<IndividualsPageProps> = ({ onOpenDownload }) => {
  const capabilities = [
    {
      title: 'Check your credit',
      desc: "See your score and what's affecting it, whenever you want, with consent.",
      icon: Gauge,
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
    {
      title: 'Manage your wallet',
      desc: 'One balance for bills, EMIs, and everyday payments.',
      icon: Wallet,
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      title: 'Pay every bill & EMI',
      desc: 'Keep bills and EMIs together and track your payments in one place.',
      icon: CalendarCheck,
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      title: 'Earn rewards',
      desc: 'Get recognized for paying on time, not just for spending. Good financial habits deserve tangible returns.',
      icon: Award,
      color: '#8B5CF6',
      bg: 'bg-[#F5F3FF]',
    },
  ];

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Hero Section for Individuals */}
      <section className="pt-8 pb-16 lg:pt-14 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="text-[#4F6BFF]">For Individuals</span>
              <span aria-hidden="true">·</span>
              <span>Credit, payments, and rewards</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#0A0A0B] tracking-tight">
              Pay Smarter. Get Rewarded.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">
                Bank Simpler.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Check your credit, manage your wallet, and pay every bill & EMI — all from one app that recognizes you for staying on top of your money.
            </p>

            {/* Primary Download CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
              </button>
            </div>

            {/* Compliance Badges (No placeholder numbers per prompt rule) */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
                RBI-Compliant
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

          {/* Phone Mockup Featured Front & Center (CRED style opening) */}
          <div className="lg:col-span-6 flex justify-center">
            <SmartphoneMockup perspective="isometric" interactive={true} />
          </div>

        </div>
      </section>

      {/* 2. What You Can Do (4 Grid Cards) */}
      <section className="py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              Daily Capabilities
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              What you can do with MyCredAxis.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-3xl p-6 border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${cap.bg} flex items-center justify-center mb-5`}
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

                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono font-medium text-slate-400">
                    MyCredAxis
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Get Rewarded for Paying On Time (CRED-Style Dedicated Block) */}
      <section className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Privilege Ethos</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Get Rewarded for Paying On Time.
            </h2>

            <p className="font-body text-base text-slate-300 leading-relaxed">
              Good financial habits deserve more than a pat on the back. Every on-time payment through MyCredAxis works toward your credit health and your rewards — at the same time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono text-[#20C7B5] font-semibold">01 · REPUTATION</span>
              <h4 className="font-display font-bold text-base text-white mt-2">Credit Health</h4>
              <p className="text-xs text-slate-400 mt-2 font-body leading-relaxed">
                Every on-time payment works toward your credit health.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono text-[#4F6BFF] font-semibold">02 · REWARDS</span>
              <h4 className="font-display font-bold text-base text-white mt-2">Rewards for Paying on Time</h4>
              <p className="text-xs text-slate-400 mt-2 font-body leading-relaxed">
                Get recognized for staying on top of your payments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
              <span className="text-xs font-mono text-amber-400 font-semibold">03 · FINANCIAL DISCIPLINE</span>
              <h4 className="font-display font-bold text-base text-white mt-2">Good Habits, Recognized</h4>
              <p className="text-xs text-slate-400 mt-2 font-body leading-relaxed">
                Rewards recognize on-time payments, not just spending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Individual Flow) */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#4F6BFF] uppercase tracking-wider block mb-2">
              Individual Flow
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              Five simple steps to financial peace of mind.
            </h2>
          </div>

          <div className="space-y-3.5 max-w-3xl">
            {[
              { num: '01', title: 'Sign up & verify with digital KYC', desc: 'Complete digital KYC to get started.' },
              { num: '02', title: 'Set up your wallet or payment mandate', desc: 'Link your primary bank account with bank-authenticated consent.' },
              { num: '03', title: 'Pay bills, EMIs, and manage credit', desc: 'Manage your payments and credit in one app.' },
              { num: '04', title: 'Track everything in real time', desc: 'See what is due and what is already paid.' },
              { num: '05', title: 'Get rewarded for staying on schedule', desc: 'Get recognized for paying on time.' },
            ].map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4"
              >
                <span className="font-display font-extrabold text-lg text-[#4F6BFF] shrink-0">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0A0A0B]">{step.title}</h4>
                  <p className="text-xs text-slate-600 font-body mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 max-w-3xl text-xs text-slate-700 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#20C7B5] shrink-0" />
            <span>
              <strong>Bank Consent Guarantee:</strong> Every payment mandate needs your bank-authenticated approval first. Nothing moves without your consent.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Coming Soon for You */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block mb-2">
              Expansion Horizon
            </span>
            <h2 className="font-display font-extrabold text-3xl text-[#0A0A0B] tracking-tight">
              Coming soon for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-display font-bold text-base text-[#0A0A0B]">Bill Payments via BBPS</h4>
              <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                Electricity, water, gas, telecom, DTH, insurance, and even traffic challans, in one place.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-display font-bold text-base text-[#0A0A0B]">Cash Without a Card</h4>
              <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                Aadhaar-based biometric cash withdrawal (AePS).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-display font-bold text-base text-[#0A0A0B]">Cash-to-Bank Transfer</h4>
              <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                Deposit cash at a partner shop for transfer to a bank account in India via DMT/IMPS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Your Data, Your Consent Banner */}
      <section className="py-16 bg-[#0A0A0B] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-[#20C7B5] flex items-center justify-center mx-auto mb-2">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-2xl text-white">
            Your data, your consent.
          </h3>
          <p className="text-sm text-slate-300 font-body max-w-2xl mx-auto leading-relaxed">
            We never store your banking credentials, and nothing is ever debited without your explicit, bank-verified approval. Your credit checks are consent-based — we only look when you ask us to.
          </p>
        </div>
      </section>

      {/* 7. Individual FAQ */}
      <FAQSection
        items={INDIVIDUAL_FAQS}
        title="Frequently Asked Questions for Individuals"
        subtitle="Clear guidance on checking credit scores, wallet balances, and rewards."
      />

      {/* 8. Download CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-display font-extrabold text-3xl text-[#0A0A0B]">
            Ready to experience MyCredAxis?
          </h2>
          <p className="text-sm text-slate-600 font-body">
            Download the MyCredAxis app and manage your credit, wallet, and payments in one place.
          </p>
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-md cursor-pointer mt-2"
          >
            <Download className="w-4 h-4 text-[#20C7B5]" />
            <span>Download MyCredAxis App</span>
          </button>
        </div>
      </section>

    </div>
  );
};
