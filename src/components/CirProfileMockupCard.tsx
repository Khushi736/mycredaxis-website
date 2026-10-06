/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Fingerprint,
  Lock,
  ExternalLink,
} from 'lucide-react';

export interface CirProfileMockupCardProps {
  onInspectClick?: () => void;
  className?: string;
  /** Slightly tighter padding when nested in page-end CTA panels */
  variant?: 'default' | 'embedded';
  /** Stretch to match a sibling column height (e.g. Why Centric duo layout) */
  columnFill?: boolean;
}

export const CirProfileMockupCard: React.FC<CirProfileMockupCardProps> = ({
  onInspectClick,
  className = '',
  variant = 'default',
  columnFill = false,
}) => {
  const padding = variant === 'embedded' ? 'p-4 sm:p-5' : 'p-5 sm:p-6';

  const variantClass = variant === 'embedded' ? 'cir-mockup-card--embedded' : 'cir-mockup-card--default';

  return (
    <div
      className={`cir-mockup-card ${variantClass} ${columnFill ? 'cir-mockup-card--column-fill' : ''} w-full max-w-[420px] mx-auto lg:mx-0 lg:max-w-none rounded-3xl bg-gradient-to-br from-[#0A0A0B] via-[#12131C] to-[#0A0A0B] text-white ${padding} border border-slate-800 shadow-2xl relative overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#4F6BFF]/20 rounded-full blur-2xl pointer-events-none transition-transform duration-1000 group-hover:scale-150" />

      <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#20C7B5]/20 text-[#20C7B5] flex items-center justify-center font-black text-xs sm:text-sm">
            CIR
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#20C7B5] block">
              CENTRIC IDENTITY REPORT
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-white">Aarav Sharma · ID Matched</span>
          </div>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          TRUSTED
        </span>
      </div>

      <div className="py-4 sm:py-5 relative z-10">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Consolidated Trust Index
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#20C7B5]">
                98.4
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">/ 100</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#20C7B5] block uppercase">
              Risk Classification
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-white mt-1 block">Grade AAA (Prime)</span>
          </div>
        </div>

        <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
          <div className="bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] h-full rounded-full w-[98%] transition-all duration-1000" />
        </div>
      </div>

      <div
        className={`cir-mockup-card__rows space-y-2 sm:space-y-2.5 pt-2 border-t border-white/10 relative z-10 text-[11px] sm:text-xs ${
          columnFill ? 'flex-1 flex flex-col justify-center min-h-0' : ''
        }`}
      >
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
          <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <Fingerprint className="w-3.5 h-3.5 text-[#4F6BFF]" /> PAN &amp; ID XML Match
          </span>
          <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] font-semibold">100% Valid</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
          <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#20C7B5]" /> Synthetic Identity Shield
          </span>
          <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px] font-semibold">Clean / No Flags</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
          <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <TrendingUp className="w-3.5 h-3.5 text-[#4F6BFF]" /> Bureau Repayment Streak
          </span>
          <span className="text-[#20C7B5] font-mono text-[10px] sm:text-[11px] font-semibold">0 Delinquencies</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04]">
          <span className="text-slate-300 flex items-center gap-1.5 text-[10px] sm:text-[11px]">
            <Lock className="w-3.5 h-3.5 text-slate-400" /> Consent Handshake Token
          </span>
          <span className="text-slate-400 font-mono text-[9px] sm:text-[10px]">AUTH_SHA256</span>
        </div>
      </div>

      <div
        className={`cir-mockup-card__footer mt-4 sm:mt-5 pt-3 border-t border-white/10 relative z-10 ${
          columnFill ? 'mt-auto shrink-0' : ''
        }`}
      >
        <button
          type="button"
          onClick={onInspectClick}
          className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A0A0B] text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn"
        >
          <span>Inspect Full CIR Spec</span>
          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0A0A0B] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
