/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Landmark,
  Network,
  Repeat,
  GraduationCap,
  HeartPulse,
  Users2,
  Building,
  ShoppingCart
} from 'lucide-react';

export const IndustryGrid: React.FC = () => {
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

  const industries = [
    { name: 'NBFCs & Fintechs', icon: Landmark, desc: 'Automate loan EMI collections and recurring credit installments.' },
    { name: 'Dealer & Distributor Networks', icon: Network, desc: 'Streamline trade receivables and secured inventory cycles.' },
    { name: 'Subscription Businesses', icon: Repeat, desc: 'Zero-churn recurring billing with multi-account mandate fallbacks.' },
    { name: 'Educational Institutions', icon: GraduationCap, desc: 'Term fee collections and student loan installment management.' },
    { name: 'Healthcare Providers', icon: HeartPulse, desc: 'Treatment financing installments and hospital recurring retainers.' },
    { name: 'Membership Organizations', icon: Users2, desc: 'Annual club dues, gym memberships, and association subscriptions.' },
    { name: 'Utility & Service Companies', icon: Building, desc: 'Scheduled recurring infrastructure and municipal service collections.' },
    { name: 'E-commerce Platforms', icon: ShoppingCart, desc: 'Device financing, Buy-Now-Pay-Later checkout, and customer wallets.' },
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
          {/* Mobile par vertical stack, Desktop par horizontal with dot */}
          <div 
            className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-[#4F6BFF]">Cross-Sector Applicability</span>
            <span aria-hidden="true" className="hidden sm:block">·</span>
            <span>Ecosystem Reach</span>
          </div>

          <h2 
            className={`font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Built for every industry.
          </h2>

          <p 
            className={`text-sm sm:text-base text-slate-600 mt-2 sm:mt-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            From consumer electronics retailers to high-growth NBFCs, MyCredAxis adapts to diverse transactional flows.
          </p>
        </div>

        {/* 8 Industries Grid with Staggered Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const delay = 400 + i * 100; // Staggered reveal for each card

            return (
              <div
                key={i}
                className={`fintech-card rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col justify-between group transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4F6BFF] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 text-[10px] sm:text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                  <span>Ready Integration</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-[#4F6BFF]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};