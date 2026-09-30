/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal observer for smooth entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <div 
      ref={sectionRef}
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* 1. Hero Section for Individuals (Balanced Layout & Scaled Down Mockup) */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-12 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-10 w-[250px] h-[250px] bg-[#4F6BFF]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          
          {/* Left Content Column: Given more width (col-span-7) to balance the smaller phone */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:pr-6">
            <h1 
              className={`font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Pay Smarter. Get Rewarded.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] block sm:inline mt-1 sm:mt-0">
                Bank Simpler.
              </span>
            </h1>

            <p 
              className={`text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Check your credit, manage your wallet, and pay every bill & EMI — all from one app that recognizes you for staying on top of your money.
            </p>

            {/* Primary Download CTAs */}
            <div 
              className={`pt-1 flex flex-wrap items-center gap-3.5 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button
                onClick={onOpenDownload}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer group active:scale-98"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
              </button>
            </div>

            {/* Compliance Badges */}
            <div 
              className={`pt-3 border-t border-slate-200 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5]" />
                RBI-Compliant
              </span>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" />
                PCI DSS Certified
              </span>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                NPCI Compliant
              </span>
            </div>
          </div>

          {/* Right Phone Mockup Column: Given less width (col-span-5) & Scaled down */}
          <div 
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            {/* Reduced scale values to make it noticeably smaller, with more negative margin to crop whitespace */}
            <div className="scale-[0.60] sm:scale-[0.65] lg:scale-[0.70] origin-center -my-12 sm:-my-16 lg:-my-24">
              <SmartphoneMockup perspective="isometric" interactive={false} />
            </div>
          </div>

        </div>
      </section>

      {/* 2. What You Can Do (4 Grid Cards) */}
      <section className="py-16 sm:py-20 bg-[#F7F8FA] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
              What you can do with MyCredAxis.
            </h2>
          </div>

          {/* Grid Layout: 2 Columns on Mobile, 4 on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const delay = 200 + i * 100;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white border border-slate-200/90 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                  style={{ animationFillMode: 'both', animationDelay: `${delay}ms` }}
                >
                  <div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${cap.bg} flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {cap.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 text-[9px] sm:text-[11px] font-mono font-medium text-slate-400">
                    MyCredAxis
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Get Rewarded for Paying On Time */}
      <section className="py-20 sm:py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#4F6BFF]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-4 mb-10">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight lg:whitespace-nowrap">
              Get Rewarded for Paying On Time.
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Good financial habits deserve more than a pat on the back. Every on-time payment through MyCredAxis works toward your credit health and your rewards — at the same time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors">
              <span className="text-[10px] sm:text-xs font-mono text-[#20C7B5] font-semibold">01 · REPUTATION</span>
              <h4 className="font-bold text-sm sm:text-base text-white mt-1.5 sm:mt-2">Credit Health</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1 sm:mt-2 leading-relaxed">
                Every on-time payment works toward your credit health.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors">
              <span className="text-[10px] sm:text-xs font-mono text-[#4F6BFF] font-semibold">02 · REWARDS</span>
              <h4 className="font-bold text-sm sm:text-base text-white mt-1.5 sm:mt-2">Rewards</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1 sm:mt-2 leading-relaxed">
                Get recognized for staying on top of your payments.
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors">
              <span className="text-[10px] sm:text-xs font-mono text-amber-400 font-semibold">03 · DISCIPLINE</span>
              <h4 className="font-bold text-sm sm:text-base text-white mt-1.5 sm:mt-2">Good Habits</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1 sm:mt-2 leading-relaxed">
                Rewards recognize on-time payments, not just spending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Individual Flow) */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-extrabold text-2xl sm:text-4xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
              Five simple steps to financial peace.
            </h2>
          </div>

          <div className="space-y-3.5 max-w-3xl">
            {[
              { num: '01', title: 'Sign up & verify with digital KYC', desc: 'Complete digital KYC to get started.' },
              { num: '02', title: 'Set up your wallet or payment mandate', desc: 'Link your primary bank account with bank-authenticated consent.' },
              { num: '03', title: 'Pay bills, EMIs, and manage credit', desc: 'Manage your payments and credit in one app.' },
              { num: '04', title: 'Track everything in real time', desc: 'See what is due and what is already paid.' },
              { num: '05', title: 'Get rewarded for staying on schedule', desc: 'Get recognized for paying on time.' },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3 sm:gap-4 transition-all hover:shadow-md hover:border-slate-300"
              >
                <span className="font-extrabold text-base sm:text-lg text-[#4F6BFF] shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0A0A0B]">{step.title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 max-w-3xl text-[11px] sm:text-xs text-slate-700 flex items-start sm:items-center gap-3 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#20C7B5] shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">
              <strong>Bank Consent Guarantee:</strong> Every payment mandate needs your bank-authenticated approval first. Nothing moves without your consent.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Coming Soon for You */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-10">
            <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
              Coming soon for you.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 transition-colors hover:border-amber-300">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B]">Bill Payments via BBPS</h4>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                Electricity, water, gas, telecom, DTH, insurance, and even traffic challans, in one place.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 transition-colors hover:border-amber-300">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B]">Cash Without a Card</h4>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                [Biometric ID Redacted]-based biometric cash withdrawal (AePS).
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 p-4 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 transition-colors hover:border-amber-300">
              <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full mb-3">
                <Clock className="w-3 h-3" /> Coming Soon
              </span>
              <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B]">Cash-to-Bank Transfer</h4>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                Deposit cash at a partner shop for transfer to a bank account in India via DMT/IMPS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Your Data, Your Consent Banner */}
      <section className="py-16 sm:py-20 bg-[#0A0A0B] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-[#20C7B5] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-xl sm:text-2xl text-white lg:whitespace-nowrap">
            Your data, your consent.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
      <section className="py-16 sm:py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] lg:whitespace-nowrap">
            Ready to experience MyCredAxis?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Download the MyCredAxis app and manage your credit, wallet, and payments in one place.
          </p>
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer mt-2"
          >
            <Download className="w-4 h-4 text-[#20C7B5]" />
            <span>Download MyCredAxis App</span>
          </button>
        </div>
      </section>

    </div>
  );
};