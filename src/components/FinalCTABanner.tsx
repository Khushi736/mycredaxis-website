/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Building2, Store, ArrowRight } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface FinalCTABannerProps {
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const FinalCTABanner: React.FC<FinalCTABannerProps> = ({
  onOpenDownload,
  onOpenContact,
}) => {
  return (
    <section id="final-cta" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-[#0A0A0B] text-white p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#4F6BFF]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-[#20C7B5]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="flex justify-center mb-2">
              <MyCredAxisLogo variant="dark" size="md" />
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              One App. Every Way to Pay, Collect, and Grow.
            </h2>

            <p className="font-body text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Whether you are managing your personal credit, automating business receivables, or financing retail devices, MyCredAxis is ready.
            </p>
          </div>

          {/* Three CTAs Side by Side Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CTA 1: Individuals */}
            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#4F6BFF]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#4F6BFF]/20 text-[#4F6BFF] flex items-center justify-center mb-4">
                  <Download className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                  For Individuals
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-1">
                  Download the App
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-body leading-relaxed">
                  Track your credit score, schedule bill payments, and unlock tangible discipline rewards.
                </p>
              </div>

              <button
                onClick={onOpenDownload}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-white text-[#0A0A0B] font-semibold text-xs hover:bg-slate-100 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get MyCredAxis App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CTA 2: Businesses */}
            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#20C7B5]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                  For Businesses
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-1">
                  Automate Collections
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-body leading-relaxed">
                  Eliminate manual follow-ups, configure bank mandates, and secure recurring cash flows.
                </p>
              </div>

              <button
                onClick={() => onOpenContact('business')}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-[#20C7B5] text-[#0A0A0B] font-bold text-xs hover:bg-[#1bb3a3] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Talk to Collections Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CTA 3: Partners */}
            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-amber-400/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                  Retailers & Distributors
                </span>
                <h3 className="font-display font-bold text-lg text-white mt-1">
                  Become a Partner
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-body leading-relaxed">
                  Offer secured Super Key device financing to your customer base without building infrastructure.
                </p>
              </div>

              <button
                onClick={() => onOpenContact('partner')}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-white/15 text-white font-semibold text-xs hover:bg-white/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <span>Ask About Partnership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
