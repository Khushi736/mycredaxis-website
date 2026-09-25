/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Fingerprint,
  EyeOff,
  Server,
  CheckCircle2
} from 'lucide-react';

export const SecurityTrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: Lock,
      title: '256-Bit Military Encryption',
      desc: 'All credit score data, card statements, and banking tokens are encrypted in transit and at rest using banking-standard TLS 1.3 and AES-256 protocols.',
      accent: 'text-[#4F6BFF]',
      bg: 'bg-[#EEF2FF]',
    },
    {
      icon: FileCheck2,
      title: 'RBI Regulated Architecture',
      desc: 'Compliant with Reserve Bank of India (RBI) Account Aggregator guidelines. Data is fetched only upon explicit, revocable user authorization.',
      accent: 'text-[#20C7B5]',
      bg: 'bg-[#ECFDF5]',
    },
    {
      icon: EyeOff,
      title: 'Zero Data Monetization',
      desc: 'Your personal financial footprint is never sold, traded, or shared with third-party telemarketers or predatory lenders. Period.',
      accent: 'text-[#0A0A0B]',
      bg: 'bg-slate-100',
    },
    {
      icon: Fingerprint,
      title: 'Biometric & Hardware Keys',
      desc: 'Multi-factor authentication supporting Face ID, Touch ID, and hardware tokens for any mandate setup or liability disbursement.',
      accent: 'text-[#4F6BFF]',
      bg: 'bg-[#EEF2FF]',
    },
  ];

  return (
    <section id="security-trust" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              <span className="text-[#20C7B5]">Bank-Grade Security</span>
              <span aria-hidden="true">·</span>
              <span>Regulatory Compliance</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
              Security engineered into every credit byte.
            </h2>

            <p className="font-body text-base text-slate-600 leading-relaxed max-w-2xl">
              We treat credit data with the highest institutional gravity. Every system is continuously audited to exceed statutory banking and data residency guidelines.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Server className="w-4 h-4 text-[#4F6BFF]" />
                <span>ISO 27001 & SOC-2 Certified</span>
              </div>
              <p className="text-[11px] text-slate-500">Continuous third-party security audits</p>
            </div>
          </div>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="fintech-card rounded-3xl p-6 border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.accent} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-base text-[#0A0A0B]">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-body">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#20C7B5]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enforced by Default</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
