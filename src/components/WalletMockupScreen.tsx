/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ChevronLeft,
  HelpCircle,
  Wallet,
  Plus,
  Gauge,
  CreditCard,
  Lock,
  ArrowDownLeft,
  ArrowUpRight,
} from 'lucide-react';

type Txn = {
  id: string;
  direction: 'credit' | 'debit';
  title: string;
  subtitle: string;
  meta: string;
  amount: string;
};

const TRANSACTIONS: Txn[] = [
  {
    id: '1',
    direction: 'credit',
    title: 'Added to Wallet',
    subtitle: 'Won ₹5 · 5 Rupees',
    meta: 'TXN178705405661 · 18 Aug 2026, 05:24 PM',
    amount: '5.00',
  },
  {
    id: '2',
    direction: 'debit',
    title: 'EMI AutoPay',
    subtitle: 'HDFC Personal Loan · Mandate',
    meta: 'TXN178801234567 · 15 Aug 2026, 09:12 AM',
    amount: '2,450.00',
  },
  {
    id: '3',
    direction: 'credit',
    title: 'Wallet Top-up',
    subtitle: 'UPI · Bank authenticated',
    meta: 'TXN178702998112 · 14 Aug 2026, 06:40 PM',
    amount: '500.00',
  },
  {
    id: '4',
    direction: 'debit',
    title: 'Electricity Bill',
    subtitle: 'BBPS · State Board',
    meta: 'TXN178690011223 · 12 Aug 2026, 11:05 AM',
    amount: '849.00',
  },
  {
    id: '5',
    direction: 'credit',
    title: 'On-time Payment Reward',
    subtitle: 'MyCredAxis Rewards',
    meta: 'TXN178688877665 · 10 Aug 2026, 08:00 PM',
    amount: '25.00',
  },
  {
    id: '6',
    direction: 'debit',
    title: 'Wallet Transfer Out',
    subtitle: 'To linked savings account',
    meta: 'TXN178675544332 · 08 Aug 2026, 02:18 PM',
    amount: '200.00',
  },
];

export const WalletMockupScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-0 h-full bg-[#F7F8FA]">
      {/* Wallet sub-header */}
      <div className="px-4 py-2.5 flex items-center justify-between bg-white border-b border-slate-100 shrink-0">
        <button type="button" className="p-1 -ml-1 text-slate-700" aria-label="Back">
          <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
        </button>
        <span className="font-bold text-[15px] text-[#0A0A0B] tracking-tight">Wallet</span>
        <button type="button" className="p-1 -mr-1 text-slate-500" aria-label="Help">
          <HelpCircle className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-3.5 pb-2">
        {/* Balance card */}
        <div className="relative rounded-2xl bg-[#0A0A0B] text-white p-4 overflow-hidden shadow-lg border border-white/10">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='120' viewBox='0 0 280 120'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-opacity='0.12' d='M0 80 Q70 20 140 60 T280 40'/%3E%3Cpath fill='none' stroke='%23ffffff' stroke-opacity='0.08' d='M0 100 Q90 50 180 90 T280 70'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
              backgroundPosition: 'right top',
            }}
          />
          <div className="relative z-10 flex items-start justify-between gap-2">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Available Balance</p>
              <p className="font-display font-extrabold text-[2rem] leading-tight tracking-tight mt-0.5">
                ₹5.00
              </p>
              <span className="inline-flex mt-2 px-2.5 py-0.5 rounded-md bg-[#059669] text-[10px] font-bold tracking-wide text-white">
                ACTIVE
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-white/90" />
            </div>
          </div>
          <div className="relative z-10 mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
            <div>
              <p className="text-[10px] text-slate-400">Hold Balance</p>
              <p className="text-sm font-semibold mt-0.5">₹0.00</p>
            </div>
            <div className="border-l border-white/10">
              <p className="text-[10px] text-slate-400">Total Balance</p>
              <p className="text-sm font-semibold mt-0.5">₹5.00</p>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Add Money', icon: Plus, wrap: 'bg-[#ECFDF5] text-[#059669] border-[#D1FAE5]' },
            { label: 'Credit Report', icon: Gauge, wrap: 'bg-[#EEF2FF] text-[#4F6BFF] border-[#E0E7FF]' },
            { label: 'AutoPay', icon: CreditCard, wrap: 'bg-[#F0FDFA] text-[#0D9488] border-[#CCFBF1]' },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.label}
                className="flex flex-col items-center gap-1.5 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs"
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border ${action.wrap}`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="text-[10px] font-semibold text-slate-800 text-center leading-tight px-1">
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Transaction history — expanded */}
        <div>
          <h3 className="font-bold text-[13px] text-[#0A0A0B] mb-2.5">Transaction History</h3>
          <div className="space-y-2">
            {TRANSACTIONS.map((txn) => {
              const isCredit = txn.direction === 'credit';
              const Icon = isCredit ? ArrowDownLeft : ArrowUpRight;
              return (
                <div
                  key={txn.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                      isCredit
                        ? 'bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]'
                        : 'bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-[12px] text-[#0A0A0B] leading-snug">{txn.title}</p>
                      <p
                        className={`font-extrabold text-[13px] shrink-0 tabular-nums ${
                          isCredit ? 'text-[#059669]' : 'text-[#DC2626]'
                        }`}
                      >
                        {isCredit ? '+' : '−'} ₹{txn.amount}
                      </p>
                    </div>
                    <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">{txn.subtitle}</p>
                    <p className="text-[9px] text-slate-400 mt-1 leading-snug truncate">{txn.meta}</p>
                    <span
                      className={`inline-flex mt-1.5 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                        isCredit ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {isCredit ? 'Credit' : 'Debit'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Secure wallet */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
          <div className="w-10 h-10 rounded-full bg-[#059669] flex items-center justify-center shrink-0">
            <Lock className="w-4 h-4 text-white" strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-[12px] text-[#0A0A0B]">100% Secure Wallet</p>
            <p className="text-[10px] text-slate-500 leading-snug mt-0.5">
              Your money is protected with industry-standard security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
