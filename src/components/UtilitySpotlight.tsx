/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Zap,
  Droplets,
  Flame,
  Smartphone,
  Tv,
  Shield,
  CalendarCheck,
  FileWarning,
  Clock,
  CheckCircle2
} from 'lucide-react';

export const UtilitySpotlight: React.FC = () => {
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

  const utilityCategories = [
    { name: 'Loan & Card EMIs', icon: CalendarCheck, status: 'Live Today', isLive: true, color: '#4F6BFF' },
    { name: 'Wallet Payments', icon: Smartphone, status: 'Live Today', isLive: true, color: '#20C7B5' },
    { name: 'Electricity Bills', icon: Zap, status: 'Coming Soon (BBPS)', isLive: false, color: '#F59E0B' },
    { name: 'Water Utilities', icon: Droplets, status: 'Coming Soon (BBPS)', isLive: false, color: '#3B82F6' },
    { name: 'Piped Gas & Cylinders', icon: Flame, status: 'Coming Soon (BBPS)', isLive: false, color: '#EF4444' },
    { name: 'Telecom & Fiber Recharges', icon: Smartphone, status: 'Coming Soon (BBPS)', isLive: false, color: '#8B5CF6' },
    { name: 'DTH Subscriptions', icon: Tv, status: 'Coming Soon (BBPS)', isLive: false, color: '#06B6D4' },
    { name: 'Insurance Premiums', icon: Shield, status: 'Coming Soon (BBPS)', isLive: false, color: '#10B981' },
    { name: 'Traffic Challans', icon: FileWarning, status: 'Coming Soon (BBPS)', isLive: false, color: '#F97316' },
  ];

  return (
    <section 
      id="utility-spotlight" 
      ref={sectionRef}
      className="fx-utility py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden"
     
    >
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="w-full mb-10 sm:mb-14">
          <h2
            className={`font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0B] tracking-tight leading-tight transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            Every Bill. Every EMI.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] utility-heading-accent">
              One App.
            </span>
          </h2>

          <p
            className={`utility-subline text-xs sm:text-sm lg:text-base text-slate-600 mt-3 sm:mt-4 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '220ms' }}
          >
            Electricity, water, gas, telecom, DTH, insurance, EMIs, traffic challans — MyCredAxis is built to be the one app you open for all of it, not just some of it.
          </p>
        </div>

        {/* Categories Grid - 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {utilityCategories.map((item, idx) => {
            const Icon = item.icon;
            const delay = 200 + idx * 50;
            return (
              <div
                key={idx}
                className={`utility-card fintech-card group rounded-2xl p-5 sm:p-6 border border-slate-200/90 bg-white flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${item.isLive ? 'hover:border-emerald-200/80' : ''}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="utility-card-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {item.isLive ? (
                    <span className="utility-live-badge inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full whitespace-nowrap shadow-xs">
                      <Clock className="w-3 h-3 shrink-0" />
                      {item.status}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                    {item.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-slate-500 mt-1 block leading-relaxed">
                    {item.isLive ? 'Full auto-tracking and scheduled clearance' : 'Integration via BBPS currently in rollout'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on Roadmap Compliance */}
        <div
          className={`mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="lg:col-span-3 p-4 sm:p-5 rounded-2xl bg-[#F7F8FA] border border-slate-200 text-xs sm:text-sm text-slate-600 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 items-center">
            <span className="lg:col-span-2">
              <strong>Coming Soon:</strong> BBPS bill payments and traffic challans are not yet available in the app.
            </span>
            <span className="utility-footer-note text-[#4F6BFF] font-semibold lg:text-right">
              Zero ambiguity in release states
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};