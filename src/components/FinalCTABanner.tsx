/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Download, Building2, Store, ArrowRight } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface FinalCTABannerProps {
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const FinalCTABanner: React.FC<FinalCTABannerProps> = ({
  onOpenDownload,
  onOpenContact,
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
      id="final-cta" 
      ref={sectionRef}
      className="py-10 sm:py-16 lg:py-24 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-2xl sm:rounded-3xl lg:rounded-[3rem] bg-[#0A0A0B] text-white p-5 sm:p-8 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 sm:right-1/4 w-[250px] sm:w-[500px] h-[150px] sm:h-[300px] bg-[#4F6BFF]/15 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 sm:left-1/4 w-[200px] sm:w-[400px] h-[120px] sm:h-[250px] bg-[#20C7B5]/15 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4 mb-8 sm:mb-12">
            
            {/* Logo Reveal */}
            <div 
              className={`flex justify-center mb-2 sm:mb-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <MyCredAxisLogo variant="dark" size="md" />
            </div>

            {/* Title Reveal */}
            <h2 
              className={`font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              One App. Every Way to Pay, Collect, and Grow.
            </h2>

            {/* Subtitle Reveal */}
            <p 
              className={`text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Whether you are managing your personal credit, automating business receivables, or financing retail devices, MyCredAxis is ready.
            </p>
          </div>

          {/* Three CTAs Side by Side Grid with Staggered Reveal */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* CTA 1: Individuals */}
            <div 
              className={`p-5 sm:p-6 rounded-xl sm:rounded-3xl bg-white/[0.05] border border-white/10 hover:border-[#4F6BFF]/50 transition-all duration-700 transform flex flex-col justify-between group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:-translate-y-1 hover:bg-white/[0.08]`}
              style={{ transitionDelay: '400ms' }}
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[#4F6BFF]/20 text-[#4F6BFF] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Download className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  For Individuals
                </span>
                <h3 className="font-bold text-base sm:text-xl text-white mt-1 transition-colors duration-300 group-hover:text-[#4F6BFF]">
                  Download the App
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1.5 sm:mt-2 leading-relaxed">
                  Track your credit score, schedule bill payments, and unlock tangible discipline rewards.
                </p>
              </div>

              <button
                onClick={onOpenDownload}
                className="mt-5 sm:mt-6 w-full py-3 px-4 rounded-xl bg-white text-[#0A0A0B] font-semibold text-xs hover:bg-slate-100 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <span>Get MyCredAxis App</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* CTA 2: Businesses */}
            <div 
              className={`p-5 sm:p-6 rounded-xl sm:rounded-3xl bg-white/[0.05] border border-white/10 hover:border-[#20C7B5]/50 transition-all duration-700 transform flex flex-col justify-between group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:-translate-y-1 hover:bg-white/[0.08]`}
              style={{ transitionDelay: '550ms' }}
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Building2 className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  For Businesses
                </span>
                <h3 className="font-bold text-base sm:text-xl text-white mt-1 transition-colors duration-300 group-hover:text-[#20C7B5]">
                  Automate Collections
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1.5 sm:mt-2 leading-relaxed">
                  Eliminate manual follow-ups, configure bank mandates, and secure recurring cash flows.
                </p>
              </div>

              <button
                onClick={() => onOpenContact('business')}
                className="mt-5 sm:mt-6 w-full py-3 px-4 rounded-xl bg-[#20C7B5] text-[#0A0A0B] font-bold text-xs hover:bg-[#1bb3a3] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group-hover:shadow-md"
              >
                <span>Talk to Collections Team</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* CTA 3: Partners */}
            <div 
              className={`p-5 sm:p-6 rounded-xl sm:rounded-3xl bg-white/[0.05] border border-white/10 hover:border-amber-400/50 transition-all duration-700 transform flex flex-col justify-between group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:-translate-y-1 hover:bg-white/[0.08]`}
              style={{ transitionDelay: '700ms' }}
            >
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Store className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Retailers & Distributors
                </span>
                <h3 className="font-bold text-base sm:text-xl text-white mt-1 transition-colors duration-300 group-hover:text-amber-400">
                  Become a Partner
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1.5 sm:mt-2 leading-relaxed">
                  Offer secured Master Key device financing to your customer base without building infrastructure.
                </p>
              </div>

              <button
                onClick={() => onOpenContact('partner')}
                className="mt-5 sm:mt-6 w-full py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10 shadow-sm group-hover:shadow-md group-hover:border-amber-400/30"
              >
                <span>Ask About Partnership</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};