/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  Layers, 
  Zap, 
  ShieldAlert, 
  TrendingUp, 
  ArrowRight,
} from 'lucide-react';
import { CirProfileMockupCard } from './CirProfileMockupCard';

interface CentricIdentityReportProps {
  onOpenContact?: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const CentricIdentityReport: React.FC<CentricIdentityReportProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal observer for smooth entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Safe fallback if onOpenContact isn't passed
  const handleOpenContact = (type?: 'individual' | 'business' | 'partner' | 'general') => {
    if (onOpenContact) {
      onOpenContact(type);
    } else {
      console.log('Contact modal requested:', type);
    }
  };

  const openCirInquiryForm = () => {
    handleOpenContact('general');
  };

  return (
    <>
      <section 
        id="centric-identity-report" 
        ref={sectionRef}
        className="fx-report py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-x-clip"
       
      >
        {/* Background Gradient */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-l from-[#4F6BFF]/6 via-[#20C7B5]/4 to-transparent rounded-full blur-[80px] sm:blur-3xl pointer-events-none" />
        
        <div className="site-container relative z-10">
          
          {/* Header Section — full container width */}
          <div className="w-full mb-12 sm:mb-16">
            <h2
              className={`w-full max-w-none font-semibold text-[clamp(1.75rem,3.2vw+0.5rem,2.75rem)] leading-[1.18] text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="block w-full cir-section-headline">
                Centric Identity Report —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">
                  Instant, Consolidated Trust
                </span>
              </span>
            </h2>

            <p
              className={`w-full max-w-none text-sm sm:text-base lg:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              A comprehensive digital identity verification report that aggregates multi-source data points to power friction-free onboarding, fraud prevention, and credit readiness.
            </p>
          </div>

          {/* Content grid: feature cards (left) + CIR mockup (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch lg:items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 auto-rows-fr min-w-0">
              {/* Card 1 */}
              <div
                className={`fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group transition-all duration-500 hover:-translate-y-1 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                  Multi-Source Aggregation
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Combines PAN, [Biometric ID Redacted], bank statement insights, and bureau history into one verifiable identity profile.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className={`fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group transition-all duration-500 hover:-translate-y-1 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                  Friction-Free Onboarding
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enables instant KYC verification for individuals and merchants with minimal manual input.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className={`fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group transition-all duration-500 hover:-translate-y-1 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#4F6BFF] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                  Fraud Prevention
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Detects synthetic identities, mismatched records, and high-risk flags before onboarding is completed.
                </p>
              </div>

              {/* Card 4 */}
              <div
                className={`fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group transition-all duration-500 hover:-translate-y-1 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                  Credit Readiness
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Surfaces identity strength and financial discipline indicators to support underwriting and credit decisions.
                </p>
              </div>
            </div>

            <div
              className={`lg:col-span-5 flex flex-col items-center mt-6 lg:mt-0 min-w-0 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <CirProfileMockupCard
                className="w-full max-w-[420px] lg:max-w-none"
                onInspectClick={openCirInquiryForm}
              />
            </div>
          </div>

          {/* Footer CTA */}
          <div
            className={`mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-100 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium text-center sm:text-left max-w-xl">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#20C7B5] shrink-0" aria-hidden />
              <span>Powering instant onboarding for consumers, merchants, and NBFC partners.</span>
            </div>

            <button
              type="button"
              onClick={openCirInquiryForm}
              className="w-full sm:w-auto shrink-0 group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#4F6BFF] hover:bg-[#3D56E8] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#4F6BFF]/20 cursor-pointer text-center"
            >
              <span className="text-balance leading-snug">Learn More About Centric Identity Report</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};