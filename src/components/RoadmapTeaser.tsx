/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, CheckCircle2, Clock, Wallet, Banknote, Receipt } from 'lucide-react';

export const RoadmapTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-[#4F6BFF]">Product Horizon</span>
            <span aria-hidden="true">·</span>
            <span>What's Next</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            We're building toward more ways to pay, collect, and move money.
          </h2>

          <p className="font-body text-base text-slate-600 mt-2">
            Wallet top-up is live today. Bill payments and cash and money movement services are coming soon.
          </p>
        </div>

        {/* Roadmap Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Wallet Top-Up (Live Today) */}
          <div className="fintech-card rounded-3xl p-7 border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center">
                  <Wallet className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Live Today
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A0A0B]">
                Wallet Top-Up
              </h3>

              <p className="text-sm text-slate-600 mt-2 font-body leading-relaxed">
                Add funds seamlessly via UPI, credit & debit cards, and net banking into one single centralized balance for bills, EMIs, and peer transactions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
              Status: Operational & Live in App
            </div>
          </div>

          {/* Card 2: Bill Payments via BBPS (Coming Soon) */}
          <div className="fintech-card rounded-3xl p-7 border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Receipt className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  Coming Soon
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A0A0B]">
                Bill Payments via BBPS
              </h3>

              <p className="text-sm text-slate-600 mt-2 font-body leading-relaxed">
                Electricity, water, gas, telecom, DTH, insurance, and traffic challans, all unified in one place under Bharat Bill Payment System standards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
              Status: Coming Soon
            </div>
          </div>

          {/* Card 3: Cash & Money Movement Services (Coming Soon) */}
          <div className="fintech-card rounded-3xl p-7 border-slate-200/90 flex flex-col justify-between relative overflow-hidden bg-white">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#20C7B5] flex items-center justify-center">
                  <Banknote className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  Coming Soon
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[#0A0A0B]">
                Cash & Money Movement
              </h3>

              <p className="text-sm text-slate-600 mt-2 font-body leading-relaxed">
                Card-free cash withdrawal (AePS biometric), cash-to-bank transfer (DMT/IMPS), and Micro ATM cash distribution network.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
              Status: Coming Soon
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
