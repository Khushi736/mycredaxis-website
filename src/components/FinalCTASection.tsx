/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { ArrowRight, Check, QrCode, Smartphone, Sparkles } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="final-cta" className="py-28 bg-[#F7F8FA] relative overflow-hidden border-t border-slate-200">
      {/* Soft background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#4F6BFF]/10 via-[#20C7B5]/10 to-[#4F6BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-14 text-center">
          
          {/* Logo Brand Lockup */}
          <div className="flex justify-center mb-6">
            <MyCredAxisLogo size="lg" variant="light" />
          </div>

          {/* Minimal Headline */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0A0A0B] tracking-tight max-w-2xl mx-auto leading-tight">
            Elevate your credit to a whole new axis.
          </h2>

          <p className="font-body text-base text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed">
            Join the waiting list for early access to the MyCredAxis mobile app and unlock the titanium credit tier.
          </p>

          {/* Form & QR Code Section */}
          <div className="mt-10 max-w-md mx-auto">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-emerald-800 flex items-center justify-center gap-2 text-sm font-semibold">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Priority access reserved! We will notify you shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter mobile number or email"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-[#0A0A0B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30 focus:border-[#4F6BFF] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Get Access</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
              </form>
            )}
          </div>

          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C7B5]" />
              iOS & Android Ready
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
              Zero Joining Fee
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0B]" />
              RBI Regulated Partner
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
