/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronLeft, RotateCw } from 'lucide-react';

/** Shows country + first half of number; second half visually blurred for privacy */
const MaskedPhone: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`inline-flex items-baseline tabular-nums ${className}`}>
    <span>+91 63921</span>
    <span className="blur-[4px] opacity-75 select-none pointer-events-none" aria-hidden>
      01598
    </span>
  </span>
);

type Installment = {
  id: string;
  amount: string;
  due: string;
  label: string;
  status: string;
  tone: 'created' | 'success' | 'failed';
};

const INSTALLMENTS: Installment[] = [
  { id: '1', amount: '₹25', due: 'Due 2026-09-09', label: 'Installment - 1', status: 'CREATED', tone: 'created' },
  {
    id: '2',
    amount: '₹25',
    due: 'Due 2026-09-10',
    label: 'Installment - 2',
    status: 'SETTLEMENT SUCCESS',
    tone: 'success',
  },
  {
    id: '3',
    amount: '₹25',
    due: 'Due 2026-09-11',
    label: 'Installment - 3',
    status: 'SETTLEMENT SUCCESS',
    tone: 'success',
  },
  {
    id: '4',
    amount: '₹25',
    due: 'Due 2026-09-12',
    label: 'Installment - 4',
    status: 'COLLECTION FAILED',
    tone: 'failed',
  },
];

const statusPill = (tone: Installment['tone']) => {
  if (tone === 'created') return 'bg-amber-100 text-amber-950 border-amber-200/90';
  if (tone === 'success') return 'bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]';
  return 'bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]';
};

export const MandateDetailsMockupScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-0 h-full bg-[#F0FDF4]/40">
      <div className="px-4 py-2.5 flex items-center justify-between shrink-0 bg-white border-b border-slate-100">
        <button type="button" className="p-1 -ml-1 text-slate-800" aria-label="Back">
          <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
        </button>
        <span className="font-bold text-[14px] text-[#0A0A0B] tracking-tight">Mandate details</span>
        <button type="button" className="p-1 -mr-1 text-slate-600" aria-label="Refresh">
          <RotateCw className="w-4 h-4" strokeWidth={2.25} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-3 pb-2">
        {/* Summary */}
        <div className="rounded-2xl bg-[#DCFCE7]/90 border border-[#BBF7D0] p-3.5 shadow-sm">
          <p className="font-display font-extrabold text-[1.75rem] leading-none text-[#15803D] tabular-nums">
            ₹25
          </p>
          <p className="text-[10px] text-[#166534]/80 font-medium mt-1">₹25 × 4 = ₹100</p>
          <p className="font-bold text-[12px] text-[#0A0A0B] mt-2.5">Shailendra Chauhan</p>
          <p className="text-[10px] text-slate-600 mt-0.5 flex flex-wrap items-center gap-x-1">
            <MaskedPhone />
            <span className="text-slate-400">·</span>
            <span className="font-medium text-slate-700">rent</span>
          </p>
        </div>

        {/* Details */}
        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Details</p>
          <div className="rounded-xl bg-white border border-slate-200/90 overflow-hidden divide-y divide-slate-100 shadow-xs">
            {[
              {
                label: 'Customer',
                value: (
                  <span className="text-right block">
                    <span className="block font-semibold text-[#0A0A0B] text-[10px]">Shailendra Chauhan</span>
                    <MaskedPhone className="text-[9px] text-slate-500 justify-end" />
                  </span>
                ),
              },
              { label: 'Purpose', value: <span className="text-[10px] font-medium text-slate-700">rent</span> },
              {
                label: 'Collection',
                value: (
                  <span className="text-[9px] text-slate-600 text-right leading-snug max-w-[11rem] ml-auto block">
                    Daily · 4 installments · starts 09 Sep 2026
                  </span>
                ),
              },
              {
                label: 'Period',
                value: (
                  <span className="text-[9px] text-slate-600 tabular-nums">09 Sep 2026 → 12 Sep 2026</span>
                ),
              },
              {
                label: 'Customer bank',
                value: (
                  <span className="text-[9px] text-slate-600 font-mono tabular-nums">NESF XXXXXXXXXXX53457</span>
                ),
              },
            ].map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-3 px-3 py-2.5">
                <span className="text-[10px] text-slate-500 shrink-0">{row.label}</span>
                <div className="text-right min-w-0">{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Installments */}
        <div>
          <h3 className="font-bold text-[12px] text-[#0A0A0B] mb-2 px-0.5">Installments</h3>
          <div className="rounded-t-2xl bg-white border border-slate-200/90 p-2.5 space-y-2 shadow-sm">
            {INSTALLMENTS.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-[#FAFAFA] px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="font-bold text-[13px] text-[#0A0A0B] tabular-nums">{item.amount}</p>
                  <p className="text-[9px] text-slate-500 mt-0.5">{item.due}</p>
                  <p className="text-[8px] text-slate-400 mt-0.5">{item.label}</p>
                </div>
                <span
                  className={`shrink-0 max-w-[5.5rem] text-center px-1.5 py-1 rounded-md border text-[7px] font-bold leading-tight uppercase tracking-wide ${statusPill(item.tone)}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
