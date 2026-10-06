/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { SmartphoneMockup } from './SmartphoneMockup';
import { PageRoute } from '../types';
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
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-16 overflow-x-clip overflow-y-visible bg-[#F7F8FA]"
     
    >
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="fx-orb left-[8%] top-16 h-40 w-40 bg-[#4F6BFF]/20" />
      <div className="fx-orb right-[18%] bottom-10 h-48 w-48 bg-[#20C7B5]/15 [animation-delay:1.4s]" />

      <div className="site-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          <div className="home-hero-copy lg:col-span-7 flex w-full min-w-0 flex-col items-start text-left space-y-4 sm:space-y-5 z-10 overflow-visible">

            <h1
              className={`hero-headline font-semibold text-[#0A0A0B] transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {/* Phone: two clean lines (same copy) */}
              <span className="home-hero-title-mobile max-sm:block sm:hidden">
                <span
                  className="hero-line block text-[#0A0A0B]"
                  style={{ transitionDelay: isVisible ? '120ms' : undefined }}
                >
                  Your Credit.
                </span>
                <span
                  className="hero-line hero-accent block text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5]"
                  style={{ transitionDelay: isVisible ? '220ms' : undefined }}
                >
                  Your Payments. One App That Rewards You for Both.
                </span>
              </span>
              {/* sm+: original staggered desktop lines */}
              <span className="home-hero-title-desktop hidden sm:block">
                <span
                  className="hero-line block text-[#0A0A0B]"
                  style={{ transitionDelay: isVisible ? '120ms' : undefined }}
                >
                  Your Credit.
                </span>
                <span
                  className="hero-line hero-accent block text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5]"
                  style={{ transitionDelay: isVisible ? '220ms' : undefined }}
                >
                  Your Payments.&nbsp;One App
                </span>
                <span
                  className="hero-line hero-accent block text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5]"
                  style={{ transitionDelay: isVisible ? '320ms' : undefined }}
                >
                  That Rewards You&nbsp;for Both.
                </span>
              </span>
            </h1>

            {/* Official Subhead */}
            <p 
              className={`home-hero-sub text-sm sm:text-lg text-slate-600 leading-relaxed max-w-xl transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              MyCredAxis brings collections, credit visibility, a wallet, and secured device financing into a single platform — pay every bill and EMI in one place, and get recognized for doing it on time.
            </p>

            {/* Dual CTAs */}
            <div 
              className={`home-hero-ctas flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {/* Primary Individual CTA */}
              <button
                onClick={onOpenDownload}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 hover:-translate-y-0.5 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-black/10 hover:shadow-lg cursor-pointer w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
              </button>

              {/* Business & Partner CTA */}
              <button
                onClick={() => onOpenContact('business')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 hover:-translate-y-0.5 active:scale-98 text-[#0A0A0B] font-semibold text-xs sm:text-sm border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all cursor-pointer w-full sm:w-auto justify-center"
              >
                <Building2 className="w-4 h-4 text-[#4F6BFF]" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            {/* Unboxed Metadata */}
            <ul
              className={`home-hero-trust w-full transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <li className="home-hero-trust-item">
                <span className="home-hero-trust-dot bg-[#20C7B5]" aria-hidden />
                Consent-First Architecture
              </li>
              <li className="home-hero-trust-item">
                <span className="home-hero-trust-dot bg-[#4F6BFF]" aria-hidden />
                Bank-Authenticated Mandates
              </li>
              <li className="home-hero-trust-item">
                <span className="home-hero-trust-dot bg-[#0A0A0B]" aria-hidden />
                Zero Stored Credentials
              </li>
            </ul>

          </div>

          <div className="home-hero-visual lg:col-span-5 relative flex items-center justify-center mt-4 sm:mt-6 lg:mt-0">
            <div className="relative mx-auto h-[430px] w-[230px] sm:h-[520px] sm:w-[280px]">
              <div className="hero-glow absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] bg-gradient-to-tr from-[#4F6BFF]/35 via-[#20C7B5]/20 to-transparent rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: '350ms' }}
                >
                  <div className="hero-float">
                    <div className="origin-center scale-[0.58] sm:scale-[0.7] drop-shadow-2xl">
                      <SmartphoneMockup perspective="isometric" interactive={false} />
                    </div>
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