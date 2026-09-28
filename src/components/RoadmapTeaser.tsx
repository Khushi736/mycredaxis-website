/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, CheckCircle2, Clock, Wallet, Banknote, Receipt } from 'lucide-react';

export const RoadmapTeaser: React.FC = () => {
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
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div 
            className={`flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-3 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-[#4F6BFF]">Product Horizon</span>
            <span aria-hidden="true">·</span>
            <span>What's Next</span>
          </div>

          <h2 
            className={`font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We're building toward more ways to pay, collect, and move money.
          </h2>

          <p 
            className={`text-sm sm:text-base text-slate-600 mt-2 sm:mt-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Wallet top-up is live today. Bill payments and cash and money movement services are coming soon.
          </p>
        </div>

        {/* Roadmap Items Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          
          {/* Card 1: Wallet Top-Up (Live Today) */}
          <div 
            className={`fintech-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300`}
            style={{ transitionDelay: '400ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 sm:px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Live Today
                </span>
              </div>

              <h3 className="font-bold text-lg sm:text-xl text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                Wallet Top-Up
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Add funds seamlessly via UPI, credit & debit cards, and net banking into one single centralized balance for bills, EMIs, and peer transactions.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-xs font-medium text-slate-500">
              Status: Operational & Live in App
            </div>
          </div>

          {/* Card 2: Bill Payments via BBPS (Coming Soon) */}
          <div 
            className={`fintech-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300`}
            style={{ transitionDelay: '550ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Receipt className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 sm:px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Coming Soon
                </span>
              </div>

              <h3 className="font-bold text-lg sm:text-xl text-[#0A0A0B] transition-colors duration-300 group-hover:text-amber-600">
                Bill Payments via BBPS
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Electricity, water, gas, telecom, DTH, insurance, and traffic challans, all unified in one place under Bharat Bill Payment System standards.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-xs font-medium text-slate-500">
              Status: Coming Soon
            </div>
          </div>

          {/* Card 3: Cash & Money Movement Services (Coming Soon) */}
          <div 
            className={`fintech-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white group transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300`}
            style={{ transitionDelay: '700ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-50 text-[#20C7B5] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Banknote className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 sm:px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Coming Soon
                </span>
              </div>

              <h3 className="font-bold text-lg sm:text-xl text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#20C7B5]">
                Cash & Money Movement
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Card-free cash withdrawal (AePS biometric), cash-to-bank transfer (DMT/IMPS), and Micro ATM cash distribution network.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-xs font-medium text-slate-500">
              Status: Coming Soon
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};