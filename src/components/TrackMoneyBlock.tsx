/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SmartphoneMockup } from './SmartphoneMockup';
import { Eye, Bell, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

export const TrackMoneyBlock: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {
  return (
    <section id="track-money" className="py-24 bg-[#F7F8FA] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Real App Mockup Showcase */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <SmartphoneMockup perspective="flat" interactive={true} />
          </div>

          {/* Right Column: Framing Copy & Feature Breakdown */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <Eye className="w-4 h-4 text-[#4F6BFF]" />
              <span className="text-[#4F6BFF]">Visibility & Control</span>
              <span aria-hidden="true">·</span>
              <span>Jupiter-Style Money Tracking</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight leading-tight">
              See exactly where your money goes.
            </h2>

            <p className="font-body text-base text-slate-600 leading-relaxed">
              Every payment, every EMI, every wallet transaction — tracked in real time, so you're never guessing what's due or what's already paid.
            </p>

            {/* Core Visibility Pillars */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-[#0A0A0B]">
                  <TrendingUp className="w-4 h-4 text-[#20C7B5]" />
                  <span>Continuous Credit Telemetry</span>
                </div>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  Monitor your score status without bureau penalties, understand utilization ratios, and receive proactive advice before taking on new debt.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-[#0A0A0B]">
                  <Bell className="w-4 h-4 text-[#4F6BFF]" />
                  <span>Smart Pre-Debit Alerts</span>
                </div>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  Timely notifications arrive days prior to any recurring mandate debit, verifying sufficient account balance to safeguard you from bounce fees.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onDownload}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>Get Real-Time Visibility</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
