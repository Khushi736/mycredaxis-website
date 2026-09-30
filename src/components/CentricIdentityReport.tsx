/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Zap, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2, 
  Fingerprint, 
  Lock, 
  ExternalLink, 
  ArrowRight 
} from 'lucide-react';

import { CIRModal } from './CIRModal';

interface CentricIdentityReportProps {
  onOpenContact?: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const CentricIdentityReport: React.FC<CentricIdentityReportProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCirModalOpen, setIsCirModalOpen] = useState(false);
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

  return (
    <>
      <section 
        id="centric-identity-report" 
        ref={sectionRef}
        className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Background Gradient */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-l from-[#4F6BFF]/6 via-[#20C7B5]/4 to-transparent rounded-full blur-[80px] sm:blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Header Section */}
          <div className="max-w-3xl mb-12 sm:mb-16 lg:whitespace-nowrap">
            <h2 
              className={`font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Centric Identity Report — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5]">Instant, Consolidated Trust</span>
            </h2>
            
            <p 
              className={`text-sm sm:text-base lg:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              A comprehensive digital identity verification report that aggregates multi-source data points to power friction-free onboarding,
              <br /> fraud prevention, and credit readiness.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            
            {/* Left Column: 4 Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5">
              {/* Card 1 */}
              <div 
                className={`rounded-2xl p-4 sm:p-6 bg-white border border-slate-200/90 hover:border-slate-300 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-md transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 w-fit">
                      4-in-1 Pipeline
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] tracking-tight">Multi-Source Aggregation</h3>
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    Combines PAN, [Biometric ID Redacted], bank statement insights, and bureau history into one verifiable identity profile.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 text-[9px] sm:text-[11px] font-semibold text-[#4F6BFF]">
                  <span>Standardized API Schema</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20C7B5]" />
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className={`rounded-2xl p-4 sm:p-6 bg-white border border-slate-200/90 hover:border-slate-300 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-md transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 w-fit">
                      &lt; 8s Turnaround
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] tracking-tight">Friction-Free Onboarding</h3>
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    Enables instant KYC verification for individuals and merchants with minimal manual input.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 text-[9px] sm:text-[11px] font-semibold text-[#4F6BFF]">
                  <span>Standardized API Schema</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20C7B5]" />
                </div>
              </div>

              {/* Card 3 */}
              <div 
                className={`rounded-2xl p-4 sm:p-6 bg-white border border-slate-200/90 hover:border-slate-300 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-md transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EFF6FF] text-[#4F6BFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 w-fit">
                      Zero-Mismatch Engine
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] tracking-tight">Fraud Prevention</h3>
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    Detects synthetic identities, mismatched records, and high-risk flags before onboarding is completed.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 text-[9px] sm:text-[11px] font-semibold text-[#4F6BFF]">
                  <span>Standardized API Schema</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20C7B5]" />
                </div>
              </div>

              {/* Card 4 */}
              <div 
                className={`rounded-2xl p-4 sm:p-6 bg-white border border-slate-200/90 hover:border-slate-300 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 hover:shadow-md transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 w-fit">
                      Pre-Underwritten
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[#0A0A0B] tracking-tight">Credit Readiness</h3>
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    Surfaces identity strength and financial discipline indicators to support underwriting and credit decisions.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5 text-[9px] sm:text-[11px] font-semibold text-[#4F6BFF]">
                  <span>Standardized API Schema</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#20C7B5]" />
                </div>
              </div>
            </div>

            {/* Right Column: Simulated CIR Profile Card */}
            <div 
              className={`lg:col-span-5 flex flex-col items-center mt-6 lg:mt-0 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              {/* Toggle Simulator */}
              {/* <div className="flex items-center gap-1 bg-[#F7F8FA] p-1 rounded-full border border-slate-200 shadow-xs mb-3 text-xs w-full max-w-[420px] justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 pl-3">Simulated CIR Profile:</span>
                <div className="flex items-center gap-1">
                  <button className="px-2.5 sm:px-3 py-1 rounded-full font-medium text-[10px] sm:text-xs transition-all cursor-pointer bg-[#0A0A0B] text-white shadow-xs">
                    Individual KYC
                  </button>
                  <button className="px-2.5 sm:px-3 py-1 rounded-full font-medium text-[10px] sm:text-xs transition-all cursor-pointer text-slate-600 hover:text-slate-900">
                    Merchant Entity
                  </button>
                </div>
              </div> */}

              {/* Dark CIR Report Card */}
              <div className="w-full max-w-[420px] rounded-3xl bg-gradient-to-br from-[#0A0A0B] via-[#12131C] to-[#0A0A0B] text-white p-5 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#4F6BFF]/20 rounded-full blur-2xl pointer-events-none transition-transform duration-1000 group-hover:scale-150" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center font-black text-xs sm:text-sm">
                      CIR
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#20C7B5] block">CENTRIC IDENTITY REPORT</span>
                      <span className="text-[11px] sm:text-xs font-semibold text-white">Aarav Sharma · ID Matched</span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    TRUSTED
                  </span>
                </div>

                <div className="py-4 sm:py-5 relative z-10">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Consolidated Trust Index</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#20C7B5]">98.4</span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-mono">/ 100</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#20C7B5] block uppercase">Risk Classification</span>
                      <span className="text-[11px] sm:text-xs font-bold text-white mt-1 block">Grade AAA (Prime)</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] h-full rounded-full w-[98%] transition-all duration-1000" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-2.5 pt-2 border-t border-white/10 relative z-10 text-[11px] sm:text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                      <Fingerprint className="w-3.5 h-3.5 text-[#4F6BFF]" /> PAN &amp; ID XML Match
                    </span>
                    <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] font-semibold">100% Valid</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#20C7B5]" /> Synthetic Identity Shield
                    </span>
                    <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] font-semibold">Clean / No Flags</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                      <TrendingUp className="w-3.5 h-3.5 text-[#4F6BFF]" /> Bureau Repayment Streak
                    </span>
                    <span className="text-[#20C7B5] font-mono text-[10px] sm:text-[11px] font-semibold">0 Delinquencies</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                      <Lock className="w-3.5 h-3.5 text-slate-400" /> Consent Handshake Token
                    </span>
                    <span className="text-slate-400 font-mono text-[9px] sm:text-[10px]">AUTH_SHA256</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 relative z-10">
                  {/* Both this button and the bottom button open the modal */}
                  <button 
                    onClick={() => setIsCirModalOpen(true)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A0A0B] text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn"
                  >
                    <span>Inspect Full CIR Spec</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A0A0B] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div 
            className={`mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-slate-100 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 font-medium text-center sm:text-left">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#20C7B5]" />
              <span>Powering instant onboarding for consumers, merchants, and NBFC partners.</span>
            </div>
            
            {/* Added onClick handler to trigger CIRModal here too */}
            <button 
              onClick={() => setIsCirModalOpen(true)}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#4F6BFF] hover:bg-[#3D56E8] active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#4F6BFF]/20 cursor-pointer"
            >
              <span>Learn More About Centric Identity Report</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* Render the CIR Modal component outside the layout flow */}
      <CIRModal 
        isOpen={isCirModalOpen} 
        onClose={() => setIsCirModalOpen(false)} 
        onOpenContact={handleOpenContact}
      />
    </>
  );
};