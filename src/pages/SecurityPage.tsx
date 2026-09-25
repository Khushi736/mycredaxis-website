/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, FileCheck2, Cpu, History, AlertTriangle, Key } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { ALL_FAQS } from '../data/faqData';

export const SecurityPage: React.FC = () => {
  const securityFaqs = ALL_FAQS.filter((f) => f.category === 'security');

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Header */}
      <section className="pt-8 pb-16 lg:pt-14 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
            <span className="text-[#20C7B5]">Security & Trust Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Consent First</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#0A0A0B] tracking-tight">
            Trust, built into every single layer.
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Sensitive banking credentials are never stored. Every mandate and financing arrangement requires verified customer consent.
          </p>
        </div>
      </section>

      {/* 2. Core Certifications */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#20C7B5] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A0A0B]">RBI Compliant</h3>
                <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                  MyCredAxis follows an RBI-compliant approach to payments and customer consent.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                RBI-Compliant
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A0A0B]">PCI DSS Certified</h3>
                <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                  MyCredAxis is PCI DSS Certified.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                PCI DSS Certified
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A0A0B]">NPCI Compliant</h3>
                <p className="text-xs text-slate-600 mt-2 font-body leading-relaxed">
                  MyCredAxis follows NPCI compliance requirements.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                NPCI Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Bold Non-Negotiable Statement */}
      <section className="py-20 bg-[#0A0A0B] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
            <Key className="w-4 h-4" />
            <span>Zero Credential Retention Architecture</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white max-w-3xl mx-auto leading-tight">
            Sensitive banking credentials are never stored — and every financing arrangement requires verified customer consent.
          </h2>
          <p className="text-sm text-slate-400 font-body max-w-2xl mx-auto leading-relaxed">
            Every mandate requires the customer's bank-authenticated approval. Nothing is debited without consent.
          </p>
        </div>
      </section>

      {/* 4. Security FAQs */}
      <FAQSection
        items={securityFaqs}
        title="Security & Trust Questions"
        subtitle="Learn how MyCredAxis approaches security, compliance, and customer consent."
      />

    </div>
  );
};
