/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Layers, KeyRound, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyMyCredAxisBlock: React.FC = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      icon: Layers,
      title: 'A Full Financial Layer, Not Just Collections',
      desc: 'Credit score visibility, an integrated payment wallet, and secured device financing unified inside one interoperable platform.',
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      icon: KeyRound,
      title: 'Built-In Recovery Mechanism (Master Key)',
      desc: 'Secured device financing infrastructure that most collection-only tools do not offer, safeguarding lender and merchant capital.',
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      icon: ShieldCheck,
      title: 'Consent-First by Design',
      desc: 'Every recurring mandate, bureau pull, and financing arrangement is strictly bank-authenticated by the customer. Zero ambiguity.',
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          {/* <div 
            className={`flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-[#4F6BFF]">Core Differentiators</span>
            <span aria-hidden="true">·</span>
            <span>Why MyCredAxis</span>
          </div> */}

          <h2 
            className={`font-extrabold text-3xl sm:text-4xl lg:whitespace-nowrap lg:text-5xl text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Engineered differently from day one.
          </h2>

          <p 
            className={`text-sm sm:text-base text-slate-600 mt-2 sm:mt-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Designed to bridge the gap between consumer trust and enterprise collection certainty.
          </p>
        </div>

        {/* 3 Pillars Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            const delay = 400 + idx * 150; // Staggered reveal for each card

            return (
              <div
                key={idx}
                className={`fintech-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 flex flex-col justify-between group transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div>
                  {/* Icon Container with Hover Animation */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${diff.bg} flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    style={{ color: diff.color }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#0A0A0B] leading-snug transition-colors duration-300 group-hover:text-[#4F6BFF]">
                    {diff.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5] transition-transform duration-300 group-hover:scale-125" />
                  <span>Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};