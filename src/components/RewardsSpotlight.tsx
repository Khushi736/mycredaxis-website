/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { MyCredAxisEmblem } from './MyCredAxisLogo';

export const RewardsSpotlight: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  return (
    <section id="rewards-spotlight" className="py-24 bg-[#0A0A0B] text-white relative overflow-hidden">
      {/* CRED-style subtle radial flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F6BFF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#20C7B5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Disciplined Framing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#20C7B5]" />
              <span className="text-[#20C7B5]">Privilege Recognition</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Discipline-First</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Get Rewarded for Paying On Time.
            </h2>

            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Every on-time payment builds your credit health and earns you rewards — because staying on top of your money should pay you back, not just cost you effort.
            </p>

            {/* Principles of the Reward Philosophy */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-6 h-6 rounded-lg bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Recognition, Not Generic Points</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-body">
                    Every on-time payment builds your credit health and earns you rewards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-6 h-6 rounded-lg bg-[#4F6BFF]/20 text-[#4F6BFF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Dual Credit & Reward Acceleration</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-body">
                    Rewards recognize financial discipline, not just spending.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0A0A0B] font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                    <span>Download the App</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0B]" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Metallic Reward Card Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#4F6BFF]/30 to-[#20C7B5]/30 blur-xl opacity-75" />

              {/* The Dark Metal Card Frame */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#161720] via-[#0E0F16] to-[#0A0A0D] p-7 border border-white/15 shadow-2xl flex flex-col justify-between h-[300px] overflow-hidden">
                {/* Diagonal Highlight */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent transform rotate-45 pointer-events-none" />

                {/* Top Row */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2.5">
                    <MyCredAxisEmblem size={32} />
                    <span className="font-display font-bold text-sm tracking-wider text-white">
                      MyCred<span className="text-[#20C7B5]">Axis</span>
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#20C7B5] px-2.5 py-1 rounded-full bg-[#20C7B5]/10 border border-[#20C7B5]/20">
                    Discipline Tier
                  </span>
                </div>

                {/* Center Content */}
                <div className="relative z-10 my-auto space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    On-time payments
                  </span>
                  <div className="font-display font-extrabold text-2xl text-white">
                    Credit health and rewards
                  </div>
                  <p className="text-xs text-slate-400 font-body">
                    Staying on top of your money should pay you back.
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
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
