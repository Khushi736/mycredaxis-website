/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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
      className="fx-rewards py-16 sm:py-24 lg:py-28 bg-[#0A0A0B] text-white relative overflow-hidden"
     
    >
      {/* CRED-style subtle radial flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#4F6BFF]/12 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#20C7B5]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Same 4-column grid as Product Suite — edges line up with cards above */}
        <div className="rewards-spotlight-layout grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-start lg:items-stretch">
          <div
            className={`rewards-spotlight-copy min-w-0 flex flex-col space-y-4 sm:space-y-5 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="rewards-section-heading rewards-section-heading--single-line section-h2 font-extrabold text-white tracking-tight leading-[1.12]">
              Get Rewarded for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                Paying On Time.
              </span>
            </h2>

            <p className="rewards-section-lead text-slate-300">
              <span className="rewards-section-lead-line">
                Every on-time payment builds your credit health and earns you rewards, because
              </span>
              <span className="rewards-section-lead-line">
                staying on top of your money should pay you back, not just cost you effort.
              </span>
            </p>

            <div className="rewards-spotlight-principles flex flex-col gap-2.5 sm:gap-3 min-w-0 pt-1 sm:pt-0">
              <div className="rewards-spotlight-principle flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors hover:bg-white/[0.07]">
                <div className="w-6 h-6 rounded-lg bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="rewards-spotlight-principle-body min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">Recognition, Not Generic Points</h4>
                  <p className="rewards-spotlight-principle-desc text-slate-400 mt-0.5">
                    Every on-time payment builds credit health and earns you rewards.
                  </p>
                </div>
              </div>

              <div className="rewards-spotlight-principle flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors hover:bg-white/[0.07]">
                <div className="w-6 h-6 rounded-lg bg-[#4F6BFF]/20 text-[#4F6BFF] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="rewards-spotlight-principle-body min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    Dual Credit & Reward Acceleration
                  </h4>
                  <p className="rewards-spotlight-principle-desc text-slate-400 mt-0.5">
                    Rewards recognize financial discipline, not just spending.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rewards-spotlight-aside min-w-0 flex flex-col gap-3 sm:gap-4 lg:h-full transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="rewards-spotlight-card-wrap relative w-full flex flex-col">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4F6BFF]/30 to-[#20C7B5]/30 blur-xl opacity-75" />

              {/* The Dark Metal Card Frame — height matches principles stack */}
              <div className="rewards-metal-card relative rounded-3xl bg-gradient-to-br from-[#161720] via-[#0E0F16] to-[#0A0A0D] p-4 sm:p-6 border border-white/15 shadow-2xl flex flex-col justify-between h-full overflow-hidden group">
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
                  <div className="rewards-metal-card-title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
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

            <div className="rewards-spotlight-cta w-full shrink-0 flex justify-center">
              <button
                type="button"
                onClick={onDownload}
                className="inline-flex w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#0A0A0B] font-semibold text-xs transition-all shadow-sm cursor-pointer group active:scale-[0.98]"
              >
                <span>Download the App</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0A0A0B] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};