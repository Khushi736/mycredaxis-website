/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
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

  const reasons = [
    {
      icon: KeyRound,
      title: 'Offer Secured Device Financing (Master Key)',
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
    <div 
      ref={sectionRef}
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#F7F8FA]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* 1. Hero Section for Partners with Rich Background Glow */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
        {/* Soft decorative color spread */}
        <div className="absolute top-0 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#4F6BFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl space-y-5 sm:space-y-6 relative z-10">

          {/* Title (Forced to single line on desktop) */}
          <h1 
            className={`font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#0A0A0B] tracking-tight lg:whitespace-nowrap transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Grow Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">
              With MyCredAxis.
            </span>
          </h1>

          <p 
            className={`text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Offer device financing and payment collection to your own customers — under the MyCredAxis platform, without building your own infrastructure.
          </p>

          <div 
            className={`pt-1 flex flex-wrap items-center gap-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <button
              onClick={() => onOpenContact('partner')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer w-full sm:w-auto justify-center group active:scale-98"
            >
              <span>Ask About Becoming a Partner</span>
              <ArrowRight className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Compliance Badges */}
          <div 
            className={`pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              Master Key Secured Protocol
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-[#4F6BFF]" />
              Bank-Authenticated E-Mandates
            </span>
          </div>
        </div>
      </section>

      {/* 2. Why Partner With MyCredAxis */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-amber-500/5 via-[#4F6BFF]/5 to-[#20C7B5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-10 sm:mb-14 px-2 sm:px-0">
            <h2 className="font-extrabold text-2xl sm:text-4xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
              Why partner with MyCredAxis.
            </h2>
          </div>

          {/* Responsive Grid: 2 columns on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const delay = 200 + i * 150;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/90 bg-white flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                  style={{ animationFillMode: 'both', animationDelay: `${delay}ms` }}
                >
                  <div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${r.bg} flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: r.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {r.title}
                    </h3>

                    <p className="mt-2 text-[10px] sm:text-sm text-slate-600 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[9px] sm:text-xs font-semibold text-[#20C7B5]">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Included in Partner Stack</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. How Partnership Works */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-slate-200/80 relative">
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#4F6BFF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl mb-10 sm:mb-14 px-2 sm:px-0">
            <h2 className="font-extrabold text-2xl sm:text-4xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
              How partnership works.
            </h2>
          </div>

          {/* Responsive Grid: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {steps.map((st, idx) => {
              const delay = 300 + idx * 100;
              return (
                <div
                  key={st.num}
                  className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 group"
                  style={{ animationFillMode: 'both', animationDelay: `${delay}ms` }}
                >
                  <div>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-amber-500 transition-colors">
                      PHASE {st.num}
                    </span>
                    <h4 className="font-bold text-xs sm:text-base text-[#0A0A0B] mt-2 group-hover:text-[#4F6BFF] transition-colors">
                      {st.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-slate-100 text-[9px] sm:text-[11px] font-mono text-[#4F6BFF]">
                    Step {st.num} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Partner FAQ */}
      <FAQSection
        items={PARTNER_FAQS}
        title="Frequently Asked Questions for Partners"
        subtitle="Answers to common questions about partnership terms and support."
      />

      {/* 5. Contact CTA with ambient glow */}
      <section className="py-16 sm:py-20 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-6 space-y-4 relative z-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap">
            Ready to expand your customer financing?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Terms are discussed directly with our partnerships team. Contact us for current details.
          </p>
          <button
            onClick={() => onOpenContact('partner')}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer mt-2 group active:scale-98"
          >
            <Store className="w-4 h-4 text-amber-400" />
            <span>Ask About Becoming a Partner</span>
          </button>
        </div>
      </section>

    </div>
  );
};