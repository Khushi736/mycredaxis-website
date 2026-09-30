/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { MyCredAxisEmblem } from './MyCredAxisLogo';

export const RewardsSpotlight: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
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
      id="rewards-spotlight" 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 bg-[#0A0A0B] text-white relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* CRED-style subtle radial flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#4F6BFF]/12 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#20C7B5]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Disciplined Framing with Scroll Reveal */}
          <div 
            className={`lg:col-span-6 space-y-5 sm:space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Fully responsive pre-title */}
            {/* <div className="inline-flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#20C7B5] shrink-0" />
                <span className="text-[#20C7B5]">Privilege Recognition</span>
              </div>
              <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
              <span>Discipline-First</span>
            </div> */}

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight lg:whitespace-nowrap">
              Get Rewarded for Paying On Time.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
              Every on-time payment builds your credit health and earns you rewards — because staying on top of your money should pay you back, not just cost you effort.
            </p>

            {/* Principles of the Reward Philosophy */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors hover:bg-white/[0.07]">
                <div className="w-6 h-6 rounded-lg bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Recognition, Not Generic Points</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Every on-time payment builds your credit health and earns you rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors hover:bg-white/[0.07]">
                <div className="w-6 h-6 rounded-lg bg-[#4F6BFF]/20 text-[#4F6BFF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Dual Credit & Reward Acceleration</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Rewards recognize financial discipline, not just spending.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0A0A0B] font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer group active:scale-98"
              >
                <span>Download the App</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0B] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Metallic Reward Card Visual with Staggered Reveal */}
          <div 
            className={`lg:col-span-6 flex justify-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4F6BFF]/30 to-[#20C7B5]/30 blur-xl opacity-75" />

              {/* The Dark Metal Card Frame */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#161720] via-[#0E0F16] to-[#0A0A0D] p-5 sm:p-7 border border-white/15 shadow-2xl flex flex-col justify-between h-[250px] sm:h-[300px] overflow-hidden group">
                {/* Diagonal Highlight */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent transform rotate-45 pointer-events-none transition-transform duration-1000 group-hover:translate-x-10" />

                {/* Top Row */}
                <div className="flex items-center justify-between relative z-10 gap-2">
                  <div className="flex items-center gap-2 shrink-0">
                    <MyCredAxisEmblem size={24} />
                    <span className="font-bold text-xs sm:text-sm tracking-wider text-white">
                      MyCred<span className="text-[#20C7B5]">Axis</span>
                    </span>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#20C7B5] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#20C7B5]/10 border border-[#20C7B5]/20 whitespace-nowrap shrink-0">
                    Discipline Tier
                  </span>
                </div>

                {/* Center Content */}
                <div className="relative z-10 my-auto space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    On-time payments
                  </span>
                  <div className="font-extrabold text-lg sm:text-2xl text-white">
                    Credit health and rewards
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400">
                    Staying on top of your money should pay you back.
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-slate-400 font-mono">
                  <span>MEMBER PRIVILEGE</span>
                  <span className="text-white font-semibold">BY BISANI BROTHER</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};