/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, UserCheck, Settings, Cpu, LineChart, PackageCheck } from 'lucide-react';

export const HowItWorksBlock: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal observer so user can clearly notice the animation when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Sign Up & Verify',
      desc: 'Digital KYC to get started with zero paper delays.',
      icon: UserCheck,
      color: '#4F6BFF',
    },
    {
      num: '02',
      title: 'Set Up',
      desc: 'Set up your mandate or wallet with simple 1-click bank authorization.',
      icon: Settings,
      color: '#20C7B5',
    },
    {
      num: '03',
      title: 'Process',
      desc: 'Payments and collections processed automatically on scheduled cycles.',
      icon: Cpu,
      color: '#4F6BFF',
    },
    {
      num: '04',
      title: 'Track',
      desc: 'Track everything in real time via live dashboards and mobile feeds.',
      icon: LineChart,
      color: '#20C7B5',
    },
    {
      num: '05',
      title: 'Deliver',
      desc: 'Get paid or get service — reliably, every cycle without friction.',
      icon: PackageCheck,
      color: '#0A0A0B',
    },
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Smooth Scroll Reveal */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3.5">
          
          {/* Title */}
          <h2 
            className={`font-extrabold text-2xl sm:text-4xl lg:whitespace-nowrap text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            Predictable, transparent, and consent-driven.
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            A cohesive 5-step operational architecture bridging individuals, merchants, and banking gateways.
          </p>
        </div>

        {/* Steps Grid: 2 Columns on Mobile/Tablet, 5 Columns on Large Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {steps.map((st, index) => {
            const Icon = st.icon;
            const isSelected = activeStep === index;
            const delay = 500 + index * 120;

            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(index)}
                className={`fintech-card rounded-2xl p-4 sm:p-5 cursor-pointer flex flex-col justify-between transition-all duration-700 transform group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  isSelected
                    ? 'border-[#4F6BFF] ring-2 ring-[#4F6BFF]/20 shadow-lg bg-white scale-[1.02]'
                    : 'border-slate-200/80 bg-[#F7F8FA]/60 hover:bg-white hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono font-bold text-[10px] sm:text-xs text-slate-400">
                      STEP {st.num}
                    </span>
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-xs"
                      style={{ backgroundColor: `${st.color}15`, color: st.color }}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                    {st.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                  <span>Phase {st.num}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                    style={{ backgroundColor: st.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Consent Banner */}
        <div 
          className={`mt-10 sm:mt-12 p-5 sm:p-6 rounded-3xl bg-[#0A0A0B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-95'
          }`}
          style={{ transitionDelay: '1150ms' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#20C7B5] shrink-0 transition-transform duration-500 hover:rotate-12">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
                Consent-First By Design
              </span>
              <p className="font-semibold text-xs sm:text-base text-white mt-0.5 leading-relaxed">
                Every mandate requires the customer's bank-authenticated approval — nothing is ever debited without consent.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#20C7B5] animate-pulse" />
            <span>Bank-Gateways Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
};