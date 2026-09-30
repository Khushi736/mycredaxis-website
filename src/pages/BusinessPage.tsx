/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
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
    'Built-in recovery via Master Key for financed devices and equipment',
    'Easier scaling as your customer base grows',
  ];

  return (
    <div 
      ref={sectionRef}
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#F7F8FA]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* 1. Hero Section for Business with Rich Background Glow */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
        {/* Soft decorative color spread */}
        <div className="absolute top-0 right-10 w-[350px] h-[350px] bg-[#4F6BFF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#20C7B5]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-5 sm:space-y-6 relative z-10">

          {/* Title */}
          <h1 
            className={`font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Get Paid On Time, Every Time.
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Automate collections, reduce manual follow-up, and get full visibility into your cash flow — without adding headcount.
          </p>

          {/* CTA */}
          <div 
            className={`pt-1 flex flex-wrap items-center gap-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <button
              onClick={() => onOpenContact('business')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer w-full sm:w-auto justify-center group active:scale-98"
            >
              <span>Talk to Our Team / Request a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#20C7B5] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Institutional Compliance Badges */}
          <div 
            className={`pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              RBI-Compliant Framework
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#4F6BFF]" />
              PCI DSS Certified
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              NPCI Compliant
            </span>
          </div>

        </div>
      </section>

      {/* 2. The Problem (Fixed layout overlap & added subtle background spread) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-rose-500/5 via-indigo-500/5 to-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="p-6 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center shadow-sm">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-rose-600 font-bold block">
                The Industry Problem
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight leading-snug">
                Manual collection is draining your margins.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-base text-slate-700 leading-relaxed">
                Manual payment collection is slow, costly, and error-prone — late payments, missed installments, reminder calls, and reconciliation delays all eat into your margins and your team's time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What MyCredAxis Does for Your Business */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] relative">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#4F6BFF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              What MyCredAxis does for your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                >
                  <div>
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {cap.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Live B2B Capability</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#4F6BFF] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits List */}
          <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <h3 className="font-bold text-lg sm:text-xl text-[#0A0A0B] mb-4 sm:mb-5">
              Key Business Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Merchant Flow) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
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
                className="p-5 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between transition-all hover:shadow-md hover:border-slate-300"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#4F6BFF]">STAGE {step.num}</span>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B] mt-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{step.desc}</p>
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

      {/* 6. Contact CTA with subtle gradient background */}
      <section className="py-16 sm:py-20 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#4F6BFF]/5 to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-6 space-y-4 relative z-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight">
            Automate your collections today.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Talk to our team about automating your collections.
          </p>
          <button
            onClick={() => onOpenContact('business')}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer mt-2 group active:scale-98"
          >
            <Building2 className="w-4 h-4 text-[#20C7B5]" />
            <span>Talk to Our Team</span>
          </button>
        </div>
      </section>

    </div>
  );
};