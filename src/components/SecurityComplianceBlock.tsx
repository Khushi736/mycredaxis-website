/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, FileCheck2, Cpu, History } from 'lucide-react';
import { PageRoute } from '../types';

export const SecurityComplianceBlock: React.FC<{ onNavigateToSecurity?: () => void }> = ({
  onNavigateToSecurity,
}) => {
  return (
    <section id="security-compliance" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#20C7B5]">Compliance & Architecture</span>
            <span aria-hidden="true">·</span>
            <span>FireAI Security Pattern</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            Trust, built into every layer.
          </h2>
        </div>

        {/* 1. Compliance Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#0A0A0B] block">
                RBI-Compliant
              </span>
              <span className="text-xs text-slate-500">RBI-Compliant</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#0A0A0B] block">
                PCI DSS Certified
              </span>
              <span className="text-xs text-slate-500">Highest Payment Card Security</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#0A0A0B] block">
                NPCI Compliant
              </span>
              <span className="text-xs text-slate-500">NPCI Compliant</span>
            </div>
          </div>
        </div>

        {/* 2. Large Bannered Trust Statement (FireAI Pattern) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0B] text-white border border-slate-800 shadow-2xl relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F6BFF]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
              <Lock className="w-4 h-4" />
              <span>Non-Negotiable Trust Guarantee</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug">
              Sensitive banking credentials are never stored — and every financing arrangement requires verified customer consent.
            </h3>

            <p className="text-sm text-slate-400 font-body leading-relaxed max-w-2xl">
              We operate exclusively through tokenized, bank-authorized protocols. Your login passwords, debit card PINs, and raw CVVs never pass through or touch our storage infrastructure.
            </p>
          </div>
        </div>

        {/* 3. Platform Controls List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#4F6BFF] mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A0A0B]">
              Encrypted Communication
            </h4>
            <p className="text-xs text-slate-600 mt-1 font-body leading-relaxed">
              Every data packet is secured with TLS 1.3 in-transit and 256-bit AES encryption at rest across sovereign server nodes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#20C7B5] mb-3">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A0A0B]">
              Secure Authentication
            </h4>
            <p className="text-xs text-slate-600 mt-1 font-body leading-relaxed">
              Multi-factor authentication and device-binding protocols ensure only authorized users can initiate mandate or wallet actions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
            <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-900 mb-3">
              <History className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A0A0B]">
              Full Audit Trail
            </h4>
            <p className="text-xs text-slate-600 mt-1 font-body leading-relaxed">
              Comprehensive immutable transaction logs for audit readiness, real-time reconciliation, and dispute prevention.
            </p>
          </div>
        </div>

        {onNavigateToSecurity && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={onNavigateToSecurity}
              className="text-xs font-semibold text-[#4F6BFF] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore full Security Architecture & Certifications</span>
              <span>→</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
