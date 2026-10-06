/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileCheck2, Cpu } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust-strip" className="fx-trust bg-white border-y border-slate-200/90 py-4.5 relative z-10">
      <div className="site-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-y-3 sm:gap-x-6 text-xs font-semibold text-slate-700">
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Trust & Compliance:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="fx-chip flex items-center gap-1.5 text-slate-800 transition-colors duration-300 hover:text-[#0A0A0B]">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              <span>RBI-Compliant</span>
            </div>

            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>

            <div className="fx-chip flex items-center gap-1.5 text-slate-800 transition-colors duration-300 hover:text-[#0A0A0B]">
              <Lock className="w-4 h-4 text-[#4F6BFF]" />
              <span>PCI DSS Certified</span>
            </div>

            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>

            <div className="fx-chip flex items-center gap-1.5 text-slate-800 transition-colors duration-300 hover:text-[#0A0A0B]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>NPCI Compliant</span>
            </div>

            <span aria-hidden="true" className="text-slate-300 hidden md:inline">·</span>

            <div className="fx-chip flex items-center gap-1.5 text-slate-800 transition-colors duration-300 hover:text-[#0A0A0B]">
              <FileCheck2 className="w-4 h-4 text-slate-700" />
              <span>Bank-Authenticated Consent</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
