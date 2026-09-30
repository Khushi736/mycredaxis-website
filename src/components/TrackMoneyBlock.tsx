/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { SmartphoneMockup } from './SmartphoneMockup';
import { Eye, Bell, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const TrackMoneyBlock: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
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

  return (
    <section 
      id="track-money" 
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F7F8FA] relative border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          {/* Left Column: Real App Mockup Showcase (Scaled Down & Balanced) */}
          <div 
            className={`lg:col-span-5 flex justify-center order-2 lg:order-1 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="scale-[0.70] sm:scale-[0.75] origin-center -my-12 sm:-my-16 lg:-my-20">
              <SmartphoneMockup perspective="flat" interactive={false} />
            </div>
          </div>

          {/* Right Column: Framing Copy & Feature Breakdown (Given more width to balance the phone) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-2 lg:pl-6">
            
            <h2 
              className={`font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0A0A0B] tracking-tight leading-[1.15] transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              See exactly where your money goes.
            </h2>

            <p 
              className={`text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Every payment, every EMI, every wallet transaction — tracked in real time, so you're never guessing what's due or what's already paid.
            </p>

            {/* Core Visibility Pillars */}
            <div 
              className={`space-y-3 sm:space-y-4 pt-2 max-w-xl transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1.5 transition-all hover:shadow-md hover:border-slate-300 group">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#0A0A0B]">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#20C7B5] group-hover:scale-110 transition-transform" />
                  <span>Continuous Credit Telemetry</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-6 sm:pl-7">
                  Monitor your score status without bureau penalties, understand utilization ratios, and receive proactive advice before taking on new debt.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1.5 transition-all hover:shadow-md hover:border-slate-300 group">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#0A0A0B]">
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#4F6BFF] group-hover:scale-110 transition-transform" />
                  <span>Smart Pre-Debit Alerts</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-6 sm:pl-7">
                  Timely notifications arrive days prior to any recurring mandate debit, verifying sufficient account balance to safeguard you from bounce fees.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className={`pt-3 sm:pt-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                onClick={onDownload}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer group"
              >
                <span>Get Real-Time Visibility</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};