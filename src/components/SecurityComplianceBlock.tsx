/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Lock, CheckCircle2, FileCheck2, Cpu, History } from 'lucide-react';
import { PageRoute } from '../types';

export const SecurityComplianceBlock: React.FC<{ onNavigateToSecurity?: () => void }> = ({
  onNavigateToSecurity,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after animating once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="security-compliance" 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          {/* Pre-title: Mobile par vertical stack, Desktop par horizontal with dot */}
          <div 
            className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-[#20C7B5]">Compliance & Architecture</span>
            <span aria-hidden="true" className="hidden sm:block">·</span>
            <span>FireAI Security Pattern</span>
          </div>

          <h2 
            className={`font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Trust, built into every layer.
          </h2>
        </div>

        {/* 1. Compliance Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Badge 1 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:border-slate-300 hover:shadow-md hover:-translate-y-1`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base text-[#0A0A0B] block transition-colors group-hover:text-[#20C7B5]">
                RBI-Compliant
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500">RBI-Compliant</span>
            </div>
          </div>

          {/* Badge 2 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:border-slate-300 hover:shadow-md hover:-translate-y-1`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base text-[#0A0A0B] block transition-colors group-hover:text-[#4F6BFF]">
                PCI DSS Certified
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500">Highest Payment Card Security</span>
            </div>
          </div>

          {/* Badge 3 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:border-slate-300 hover:shadow-md hover:-translate-y-1`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base text-[#0A0A0B] block transition-colors group-hover:text-emerald-600">
                NPCI Compliant
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500">NPCI Compliant</span>
            </div>
          </div>
        </div>

        {/* 2. Large Bannered Trust Statement */}
        <div 
          className={`p-6 sm:p-8 md:p-10 rounded-[2rem] bg-[#0A0A0B] text-white border border-slate-800 shadow-2xl relative overflow-hidden mb-8 sm:mb-10 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#4F6BFF]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#20C7B5]">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Non-Negotiable Trust Guarantee</span>
            </div>

            <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl text-white leading-snug">
              Sensitive banking credentials are never stored — and every financing arrangement requires verified customer consent.
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl pt-2">
              We operate exclusively through tokenized, bank-authorized protocols. Your login passwords, debit card PINs, and raw CVVs never pass through or touch our storage infrastructure.
            </p>
          </div>
        </div>

        {/* 3. Platform Controls List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Control 1 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:shadow-lg hover:border-slate-300 hover:-translate-y-1`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#4F6BFF] mb-3 transition-transform duration-300 group-hover:scale-110">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors group-hover:text-[#4F6BFF]">
              Encrypted Communication
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
              Every data packet is secured with TLS 1.3 in-transit and 256-bit AES encryption at rest across sovereign server nodes.
            </p>
          </div>

          {/* Control 2 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:shadow-lg hover:border-slate-300 hover:-translate-y-1`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#20C7B5] mb-3 transition-transform duration-300 group-hover:scale-110">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors group-hover:text-[#20C7B5]">
              Secure Authentication
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
              Multi-factor authentication and device-binding protocols ensure only authorized users can initiate mandate or wallet actions.
            </p>
          </div>

          {/* Control 3 */}
          <div 
            className={`p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200 group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:shadow-lg hover:border-slate-300 hover:-translate-y-1`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-900 mb-3 transition-transform duration-300 group-hover:scale-110">
              <History className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors group-hover:text-slate-900">
              Full Audit Trail
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
              Comprehensive immutable transaction logs for audit readiness, real-time reconciliation, and dispute prevention.
            </p>
          </div>
        </div>

        {/* Explore link */}
        {onNavigateToSecurity && (
          <div 
            className={`mt-8 sm:mt-10 flex justify-center md:justify-end transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <button
              onClick={onNavigateToSecurity}
              className="text-xs sm:text-sm font-semibold text-[#4F6BFF] hover:text-[#3854E0] flex items-center gap-1.5 cursor-pointer group transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-[#3854E0] transition-colors pb-0.5">
                Explore full Security Architecture & Certifications
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};