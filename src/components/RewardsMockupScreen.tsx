/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ChevronLeft,
  HelpCircle,
  Gauge,
  Wallet,
  Gamepad2,
  Gift,
  Layers,
  CircleDot,
  Sparkles,
  ArrowDownLeft,
  ArrowUpRight,
} from 'lucide-react';

type RewardEntry = {
  id: string;
  kind: 'credit' | 'debit';
  title: string;
  via: string;
  wonAt: string;
  status: string;
  value: string;
  valueLabel: string;
  badge?: string;
  badgeTone: 'cash' | 'coins' | 'points';
};

const REWARD_HISTORY: RewardEntry[] = [
  {
    id: '1',
    kind: 'credit',
    title: '5 Rupees',
    via: 'By Shuffle Cards',
    wonAt: 'Won on 18 Aug 2026, 05:24 PM',
    status: 'Claimed',
    value: '₹5',
    valueLabel: 'CASH',
    badgeTone: 'cash',
  },
  {
    id: '2',
    kind: 'debit',
    title: 'Credit Report',
    via: 'Redeemed with points',
    wonAt: '18 Aug 2026, 04:10 PM',
    status: 'Completed',
    value: '−500',
    valueLabel: 'POINTS',
    badgeTone: 'points',
  },
  {
    id: '3',
    kind: 'credit',
    title: 'Spin & Win',
    via: 'Daily spin reward',
    wonAt: '17 Aug 2026, 09:15 AM',
    status: 'Claimed',
    value: '+250',
    valueLabel: 'COINS',
    badgeTone: 'coins',
  },
  {
    id: '4',
    kind: 'debit',
    title: 'AutoPay Unlock',
    via: 'UPI mandate activation',
    wonAt: '16 Aug 2026, 06:42 PM',
    status: 'Completed',
    value: '−1,200',
    valueLabel: 'POINTS',
    badgeTone: 'points',
  },
];

const PLAY_GAMES = [
  { name: 'Spin & Win', sub: '10 Spins Available', accent: 'text-[#7C3AED]' },
  { name: 'Scratch Cards', sub: '1 Scratch Available', accent: 'text-[#EA580C]' },
  { name: 'Shuffle', sub: '10 Shuffle Available', accent: 'text-[#DC2626]' },
  { name: 'Bubble Slice', sub: '10 Game Available', accent: 'text-[#2563EB]' },
];

const badgeClass = (tone: RewardEntry['badgeTone']) => {
  if (tone === 'cash') return 'bg-[#EDE9FE] text-[#6D28D9]';
  if (tone === 'coins') return 'bg-amber-50 text-amber-800';
  return 'bg-slate-100 text-slate-600';
};

export const RewardsMockupScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-0 h-full bg-white">
      <div className="px-4 pt-1 pb-2 shrink-0 border-b border-slate-100/80 bg-white">
        <div className="flex items-center gap-1">
          <button type="button" className="p-1 -ml-1 text-slate-800" aria-label="Back">
            <ChevronLeft className="w-5 h-5" strokeWidth={2.25} />
          </button>
          <h2 className="font-bold text-[15px] text-[#0A0A0B] tracking-tight">All Rewards</h2>
        </div>
        <p className="text-[10px] text-slate-500 leading-snug mt-1 pl-0.5">
          Play games, earn points and unlock exciting rewards!
        </p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-3.5 pb-2">
        {/* Points balance */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] border border-slate-200/90 p-3.5 overflow-hidden shadow-sm">
          <div
            className="absolute inset-0 opacity-50 pointer-events-none"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='80'%3E%3Cpath fill='none' stroke='%2394a3b8' stroke-opacity='0.2' d='M0 50 Q50 20 100 45 T200 30'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover',
            }}
          />
          <div className="relative flex items-start justify-between gap-2">
            <div>
              <p className="font-display font-extrabold text-[1.65rem] leading-none text-[#4F6BFF] tabular-nums tracking-tight">
                995,300
              </p>
              <p className="text-[10px] text-slate-500 font-medium mt-1">Your Points Balance</p>
            </div>
            <div className="relative w-14 h-14 shrink-0" aria-hidden>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] opacity-90 shadow-md flex items-center justify-center">
                <Gift className="w-7 h-7 text-white/95" strokeWidth={1.75} />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-xs" />
              <span className="absolute bottom-0 -left-1 w-3 h-3 rounded-full bg-amber-300 border border-white" />
            </div>
          </div>
        </div>

        {/* Use your points */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-[12px] text-[#0A0A0B]">Use Your Points</h3>
            <button type="button" className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-slate-500">
              How it works?
              <HelpCircle className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center mb-2">
                <Gauge className="w-5 h-5 text-[#4F6BFF]" strokeWidth={2} />
              </div>
              <p className="font-bold text-[11px] text-[#0A0A0B]">Check Credit</p>
              <p className="text-[9px] text-slate-500 mt-0.5 leading-snug">
                Check your credit report instantly
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#ECFDF5] flex items-center justify-center mb-2">
                <Wallet className="w-5 h-5 text-[#059669]" strokeWidth={2} />
              </div>
              <p className="font-bold text-[11px] text-[#0A0A0B]">Enable AutoPay</p>
              <p className="text-[9px] text-slate-500 mt-0.5 leading-snug">
                Activate UPI mandate with coins
              </p>
            </div>
          </div>
        </div>

        {/* Play & Win */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Gamepad2 className="w-3.5 h-3.5 text-[#7C3AED]" />
              <h3 className="font-bold text-[12px] text-[#0A0A0B]">Play &amp; Win</h3>
            </div>
            <span className="text-[9px] font-semibold text-[#4F6BFF]">View All</span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5 -mx-0.5 px-0.5">
            {PLAY_GAMES.map((game, i) => {
              const icons = [CircleDot, Sparkles, Layers, Gamepad2];
              const Icon = icons[i] ?? Gamepad2;
              return (
                <div
                  key={game.name}
                  className="flex-shrink-0 w-[4.65rem] rounded-xl border border-slate-200/90 bg-white p-2 text-center shadow-xs"
                >
                  <div className="w-9 h-9 mx-auto rounded-full bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 flex items-center justify-center mb-1.5">
                    <Icon className={`w-4 h-4 ${game.accent}`} strokeWidth={2} />
                  </div>
                  <p className="text-[8px] font-bold text-[#0A0A0B] leading-tight">{game.name}</p>
                  <p className={`text-[7px] font-semibold mt-0.5 leading-tight ${game.accent}`}>
                    {game.sub}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reward history */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-[12px] text-[#0A0A0B]">Reward History</h3>
            <span className="text-[9px] font-semibold text-[#4F6BFF]">View All</span>
          </div>
          <div className="space-y-2">
            {REWARD_HISTORY.map((entry) => {
              const isCredit = entry.kind === 'credit';
              const DirIcon = isCredit ? ArrowDownLeft : ArrowUpRight;
              return (
                <div
                  key={entry.id}
                  className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-xs"
                >
                  <div className="flex gap-2.5">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                        isCredit
                          ? 'bg-[#F5F3FF] border-[#DDD6FE] text-[#7C3AED]'
                          : 'bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]'
                      }`}
                    >
                      <DirIcon className="w-4 h-4" strokeWidth={2.25} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-bold text-[11px] text-[#0A0A0B]">{entry.title}</p>
                          <div className="flex flex-wrap items-center gap-1 mt-1">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[7px] font-bold uppercase tracking-wide ${badgeClass(entry.badgeTone)}`}
                            >
                              {entry.valueLabel}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 rounded text-[7px] font-bold ${
                                isCredit
                                  ? 'bg-[#ECFDF5] text-[#059669]'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {entry.status}
                            </span>
                          </div>
                        </div>
                        <p
                          className={`font-extrabold text-[13px] shrink-0 tabular-nums ${
                            isCredit ? 'text-[#059669]' : 'text-[#DC2626]'
                          }`}
                        >
                          {entry.value}
                        </p>
                      </div>
                      <p className="text-[9px] text-[#EA580C] font-medium mt-1">{entry.via}</p>
                      <p className="text-[8px] text-slate-400 mt-0.5 leading-snug">{entry.wonAt}</p>
                      {isCredit && (
                        <p className="text-[8px] text-slate-400 mt-0.5">
                          Claimed on 18 Aug 2026, 05:24 PM
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer promo */}
        <div className="relative rounded-2xl bg-gradient-to-r from-[#EDE9FE] via-[#F5F3FF] to-[#E0E7FF] border border-[#DDD6FE]/80 p-3 overflow-hidden">
          <div className="relative z-10 max-w-[70%]">
            <p className="font-bold text-[11px] text-[#5B21B6]">Play More, Earn More!</p>
            <p className="text-[9px] text-[#6D28D9]/80 mt-0.5 leading-snug">
              Play games daily to win cash, coins and exclusive rewards
            </p>
          </div>
          <Gift
            className="absolute right-2 bottom-2 w-8 h-8 text-[#7C3AED]/40"
            strokeWidth={1.5}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
};
