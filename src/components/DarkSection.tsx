/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MyCredAxisEmblem } from './MyCredAxisLogo';
import {
  Sparkles,
  Shield,
  Award,
  Crown,
  Lock,
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const DarkSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'black' | 'titanium' | 'sovereign'>('black');

  const tiers = {
    black: {
      name: 'Axis Black',
      scoreRequired: '750+',
      annualBenefit: '₹24,000+',
      cardBg: 'from-[#14151B] via-[#0E0F14] to-[#08080A]',
      accent: '#4F6BFF',
      perks: [
        'Zero-fee international markup routing',
        'Direct 24K digital gold cashback on utility bills',
        'Real-time automated dispute resolution with bureaus',
      ],
    },
    titanium: {
      name: 'Axis Titanium',
      scoreRequired: '780+',
      annualBenefit: '₹48,000+',
      cardBg: 'from-[#1B2236] via-[#101524] to-[#0A0D18]',
      accent: '#20C7B5',
      perks: [
        'Unlimited domestic & international lounge key',
        'Guaranteed zero overdraft penalty buffer (₹1,00,000)',
        'Dedicated private wealth concierge desk',
      ],
    },
    sovereign: {
      name: 'Axis Sovereign',
      scoreRequired: '820+',
      annualBenefit: '₹96,000+',
      cardBg: 'from-[#251F14] via-[#16130B] to-[#0A0A0B]',
      accent: '#F59E0B',
      perks: [
        'Bespoke credit lines at repo-linked sovereign rates',
        'Global fine dining allocations & priority events',
        'Inherited family credit shield & identity telemetry',
      ],
    },
  };

  const current = tiers[activeTier];

  return (
    <section id="dark-section" className="py-28 bg-[#0A0A0B] text-white relative overflow-hidden">
      {/* CRED-style subtle cosmic ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F6BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#20C7B5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
            <span className="text-[#20C7B5]">Prestige Tier</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>CRED-Inspired Dark Aesthetic</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-[#4F6BFF]">By Bisani Brother</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            For those who hold credit to a higher standard.
          </h2>

          <p className="font-body text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A bespoke private sanctuary for high-discipline borrowers. Uncompromised privacy, real yield on liability payments, and an unmatched suite of privileges.
          </p>

          {/* Tier Selector Buttons */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              {(['black', 'titanium', 'sovereign'] as const).map((tierKey) => (
                <button
                  key={tierKey}
                  onClick={() => setActiveTier(tierKey)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTier === tierKey
                      ? 'bg-white text-[#0A0A0B] shadow-md font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tiers[tierKey].name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Visual Centerpiece: Titanium Card + Feature Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 3D Titanium Metal Card Simulation */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group">
              {/* Subtle metallic reflection glow */}
              <div
                className="absolute -inset-1 rounded-[32px] opacity-75 blur-xl transition-all duration-700"
                style={{ backgroundColor: `${current.accent}25` }}
              />

              {/* The Physical Card Body */}
              <div
                className={`relative w-[340px] sm:w-[420px] h-[250px] sm:h-[270px] rounded-3xl bg-gradient-to-br ${current.cardBg} p-7 border border-white/15 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-500`}
              >
                {/* Diagonal Metal Sheen Highlight */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent transform rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

                {/* Top Card Row */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <MyCredAxisEmblem size={34} />
                    <span className="font-display font-bold text-sm tracking-wider text-white">
                      MyCred<span style={{ color: current.accent }}>Axis</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-slate-300">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>EMV CHIP 256</span>
                  </div>
                </div>

                {/* Middle Card Area: Smart Monogram & Chip */}
                <div className="relative z-10 my-auto flex items-center justify-between">
                  <div className="w-12 h-9 rounded-md bg-gradient-to-r from-amber-200/80 to-amber-400/80 border border-amber-300 flex items-center justify-center p-1 shadow-xs">
                    <div className="w-full h-full border border-amber-800/20 rounded-xs grid grid-cols-3 gap-0.5" />
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      Tier Requirement
                    </span>
                    <span
                      className="font-display font-extrabold text-xl tracking-tight"
                      style={{ color: current.accent }}
                    >
                      Score {current.scoreRequired}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Row */}
                <div className="flex items-end justify-between relative z-10 pt-2 border-t border-white/10">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">
                      Cardholder Member
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
                      R. BISANI · AXIS VAULT
                    </span>
                  </div>

                  <span className="font-display font-extrabold text-sm uppercase tracking-widest text-white/90">
                    {current.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Yield Privilege Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#20C7B5]">
                Member Privileges · {current.name}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Estimated Annual Member Value: <span style={{ color: current.accent }}>{current.annualBenefit}</span>
              </h3>
            </div>

            {/* Perks List */}
            <div className="space-y-3.5">
              {current.perks.map((perk, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${current.accent}20`, color: current.accent }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium leading-relaxed">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Unboxed Stats (Zero-Pill Discipline) */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-white font-bold text-base block font-display">99.98%</span>
                <span>Mandate Success</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="text-white font-bold text-base block font-display">₹0</span>
                <span>Late Fee Penalties</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <span className="text-white font-bold text-base block font-display">4.9/5</span>
                <span>Member Trust</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
