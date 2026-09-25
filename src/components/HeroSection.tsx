/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SmartphoneMockup } from './SmartphoneMockup';
import { PageRoute } from '../types';
import cardImage from '../assets/images/hero_human_user_1790143123211.jpg';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Download,
  Building2,
  Users,
  Sparkles,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenDownload,
  onOpenContact,
}) => {
  const [visualMode, setVisualMode] = useState<'composite' | 'app-only' | 'human-only'>('composite');

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F7F8FA]">
      {/* Subtle geometric dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Soft Ambient Radial Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#4F6BFF]/10 via-[#20C7B5]/6 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Wise-Style Quick Audience Router Banner */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium">Explore by audience:</span>
          <button
            onClick={() => onNavigate('individuals')}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>For Individuals</span>
            <ChevronRight className="w-3 h-3 text-[#4F6BFF]" />
          </button>
          <button
            onClick={() => onNavigate('business')}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>For Businesses</span>
            <ChevronRight className="w-3 h-3 text-[#20C7B5]" />
          </button>
          <button
            onClick={() => onNavigate('partners')}
            className="px-3 py-1 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>For Partners</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">

            {/* Audience-First Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wider uppercase">
              <span className="text-[#4F6BFF]">All-in-One Platform</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Credit & Collections</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[#20C7B5]">By Bisani Brother</span>
            </div>

            {/* Official Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#0A0A0B]">
              Your Credit. Your Payments.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5]">
                One App That Rewards You for Both.
              </span>
            </h1>

            {/* Official Subhead */}
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              MyCredAxis brings collections, credit visibility, a wallet, and secured device financing into a single platform — pay every bill and EMI in one place, and get recognized for doing it on time.
            </p>

            {/* Dual CTAs (Wise / FireAI pattern) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary Individual CTA */}
              <button
                onClick={onOpenDownload}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-black/10 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
                <span className="text-xs text-slate-400 font-normal hidden sm:inline">(Individuals)</span>
              </button>

              {/* Business & Partner CTA */}
              <button
                onClick={() => onOpenContact('business')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 active:scale-98 text-[#0A0A0B] font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#4F6BFF]" />
                <span>Talk to Our Team</span>
                <span className="text-xs text-slate-400 font-normal hidden sm:inline">(Businesses & Partners)</span>
              </button>
            </div>

            {/* Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C7B5]" />
                Consent-First Architecture
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                Bank-Authenticated Mandates
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0B]" />
                Zero Stored Credentials
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual with Human Element & Live App Mockup */}
          <div className="lg:col-span-6 relative flex flex-col items-center">

            {/* Visual Presentation Mode Switcher */}
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-full border border-slate-200 shadow-xs mb-4 text-xs z-20">
              <button
                onClick={() => setVisualMode('composite')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${visualMode === 'composite'
                    ? 'bg-[#0A0A0B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Human + App
              </button>
              <button
                onClick={() => setVisualMode('human-only')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${visualMode === 'human-only'
                    ? 'bg-[#0A0A0B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Human Portrait
              </button>
              <button
                onClick={() => setVisualMode('app-only')}
                className={`px-3 py-1 rounded-full font-medium transition-all ${visualMode === 'app-only'
                    ? 'bg-[#0A0A0B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                App Interface Only
              </button>
            </div>

            {/* Visual Display Container */}
            <div className="relative w-full flex items-center justify-center min-h-[580px]">

              {/* COMPOSITE MODE: Human Element on Left/Back + Smartphone on Foreground */}
              {visualMode === 'composite' && (
                <div className="relative w-full max-w-[560px] flex items-center justify-center">

                  {/* Human Element Editorial Portrait Card */}
                  <div className="absolute -left-2 sm:left-2 bottom-4 sm:bottom-8 w-[240px] sm:w-[280px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 z-10 group">
                    "<img src={cardImage} alt="Card image"
                      alt="MyCredAxis member experiencing seamless credit management"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-transparent to-black/20" />

                    {/* Floating Floating Stat Badge */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#20C7B5] mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20C7B5] animate-pulse" />
                        <span>REWARDS UNLOCKED</span>
                      </div>
                      <p className="font-display font-bold text-xs leading-snug">
                        "Pay on time. Build healthier credit habits."
                      </p>
                      <span className="text-[10px] text-slate-300 mt-1 block">
                        MyCredAxis
                      </span>
                    </div>
                  </div>

                  {/* Smartphone UI Mockup in 3D Angle */}
                  <div className="relative z-20 sm:translate-x-16 -translate-y-2">
                    <SmartphoneMockup perspective="isometric" interactive={false} />
                  </div>

                </div>
              )}

              {/* HUMAN ONLY MODE */}
              {visualMode === 'human-only' && (
                <div className="relative w-full max-w-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src="<img src={cardImage} alt=" Card image" />"
                  alt="MyCredAxis user holding smartphone"
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/30 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#20C7B5]">
                      Confidence in Every Transaction
                    </span>
                    <h3 className="font-display font-bold text-2xl mt-1 text-white">
                      Your credit and payments, together in one app.
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 font-body leading-relaxed">
                      Manage credit, payments, and rewards in one place.
                    </p>
                  </div>
                </div>
              )}

              {/* APP ONLY MODE */}
              {visualMode === 'app-only' && (
                <div className="relative z-10">
                  <SmartphoneMockup perspective="isometric" interactive={true} />
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
