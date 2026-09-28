/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { SmartphoneMockup } from './SmartphoneMockup';
import { PageRoute } from '../types';
import cardImage from '../assets/images/hero_human_user_1790143123211.jpg';
import {
  Download,
  Building2,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
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

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F7F8FA]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* Custom Keyframes for Smooth Floating Animation */}
      <style>{`
        @keyframes float-device {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float-device 6s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle geometric dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5 sm:space-y-6 z-10">

            {/* Official Headline with Smooth Scroll Reveal */}
            <h1 
              className={`font-extrabold text-3xl sm:text-5xl lg:text-[54px] leading-[1.15] tracking-tight text-[#0A0A0B] transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Your Credit. Your Payments.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5]">
                One App That Rewards You for Both.
              </span>
            </h1>

            {/* Official Subhead */}
            <p 
              className={`text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              MyCredAxis brings collections, credit visibility, a wallet, and secured device financing into a single platform — pay every bill and EMI in one place, and get recognized for doing it on time.
            </p>

            {/* Dual CTAs */}
            <div 
              className={`flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Primary Individual CTA */}
              <button
                onClick={onOpenDownload}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-black/10 cursor-pointer w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
              </button>

              {/* Business & Partner CTA */}
              <button
                onClick={() => onOpenContact('business')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 active:scale-98 text-[#0A0A0B] font-semibold text-xs sm:text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer w-full sm:w-auto justify-center"
              >
                <Building2 className="w-4 h-4 text-[#4F6BFF]" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            {/* Unboxed Metadata */}
            <div 
              className={`pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-medium transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C7B5]" />
                Consent-First Architecture
              </span>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                Bank-Authenticated Mandates
              </span>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0B]" />
                Zero Stored Credentials
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Human Element & Live App Mockup */}
          <div className="lg:col-span-6 relative flex flex-col items-center mt-8 lg:mt-0">
            
            <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[450px] lg:min-h-[550px] z-10">

              {/* Glowing Ambient Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[#4F6BFF]/30 via-[#20C7B5]/15 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

              {/* Human Element Editorial Portrait Card */}
              <div 
                className={`absolute left-2 sm:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-[130px] sm:w-[200px] lg:w-[240px] h-[200px] sm:h-[300px] lg:h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/60 z-10 group transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-[-50%] scale-100' : 'opacity-0 translate-y-[-40%] scale-95'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <img 
                  src={cardImage} 
                  alt="MyCredAxis member experiencing seamless credit management"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-transparent to-black/20" />
                {/* Floating Stat Badge */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                  <div className="flex items-center gap-1.5 text-[7px] sm:text-[10px] font-mono text-[#20C7B5] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20C7B5] animate-pulse" />
                    <span>REWARDS UNLOCKED</span>
                  </div>
                  <p className="font-bold text-[8px] sm:text-xs leading-snug">
                    "Pay on time. Build healthier credit habits."
                  </p>
                  <span className="text-[7px] sm:text-[10px] text-slate-300 mt-1 block">
                    MyCredAxis
                  </span>
                </div>
              </div>

              {/* Smartphone UI Mockup */}
              <div 
                className={`absolute -right-2 sm:right-2 lg:right-6 top-1/2 -translate-y-1/2 z-25 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                {/* Float Animation Wrapper */}
                <div className="animate-float">
                  <div className="scale-[0.48] sm:scale-[0.70] lg:scale-[0.75] origin-center">
                    <SmartphoneMockup perspective="isometric" interactive={false} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};