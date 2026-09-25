/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Bell,
  User,
  FileText,
  Calendar,
  RotateCw,
  Gift,
  Gauge,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Home,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Eye
} from 'lucide-react';
import { MyCredAxisEmblem } from './MyCredAxisLogo';

interface SmartphoneMockupProps {
  perspective?: 'isometric' | 'flat';
  interactive?: boolean;
  className?: string;
}

export const SmartphoneMockup: React.FC<SmartphoneMockupProps> = ({
  perspective = 'isometric',
  interactive = true,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'payments' | 'credit' | 'rewards'>('home');
  const [creditScore, setCreditScore] = useState<number>(780);
  const [viewAngle, setViewAngle] = useState<'isometric' | 'flat'>(perspective);

  // Score status calculation
  const getScoreStatus = (score: number) => {
    if (score >= 750) return { label: 'Good', color: '#20C7B5', message: 'Eligible for 0-foreclosure privilege loans' };
    if (score >= 700) return { label: 'Fair', color: '#4F6BFF', message: 'Moderate rating, instant boost available' };
    return { label: 'Building', color: '#F59E0B', message: 'AutoPay mandate can boost +35 pts' };
  };

  const status = getScoreStatus(creditScore);

  // SVG arc calculation for score gauge (0 to 180 degrees)
  const scorePercent = Math.min(Math.max((creditScore - 300) / 600, 0), 1);
  const strokeDashoffset = 251.2 * (1 - scorePercent * 0.85);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Interactive Perspective Control Badge (Subtle top pill for design preview) */}
      {interactive && (
        <div className="flex items-center gap-2 mb-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-xs">
          <span className="text-slate-400 font-medium">UI Mockup View:</span>
          <button
            onClick={() => setViewAngle('isometric')}
            className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
              viewAngle === 'isometric'
                ? 'bg-[#0A0A0B] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3D Angled Perspective
          </button>
          <button
            onClick={() => setViewAngle('flat')}
            className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
              viewAngle === 'flat'
                ? 'bg-[#0A0A0B] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Direct Flat View
          </button>
        </div>
      )}

      {/* 3D Transform Container */}
      <div
        className="transition-transform duration-700 ease-out"
        style={
          viewAngle === 'isometric'
            ? {
                transform: 'perspective(1200px) rotateY(-18deg) rotateX(10deg) rotateZ(3deg) scale(0.95)',
                transformStyle: 'preserve-3d',
              }
            : {
                transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)',
              }
        }
      >
        {/* Phone Body Frame */}
        <div className="relative w-[340px] sm:w-[370px] h-[730px] rounded-[52px] bg-[#1a1c22] p-[10px] shadow-[0_30px_90px_-15px_rgba(10,10,11,0.35),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-slate-800">
          
          {/* Subtle Outer Metal Bezel Highlights */}
          <div className="absolute inset-0 rounded-[52px] pointer-events-none border border-white/20" />
          
          {/* Hardware Buttons on left/right side */}
          <div className="absolute -left-[3px] top-[115px] w-[3px] h-[26px] bg-[#2a2d36] rounded-l-xs" />
          <div className="absolute -left-[3px] top-[155px] w-[3px] h-[45px] bg-[#2a2d36] rounded-l-xs" />
          <div className="absolute -left-[3px] top-[210px] w-[3px] h-[45px] bg-[#2a2d36] rounded-l-xs" />
          <div className="absolute -right-[3px] top-[140px] w-[3px] h-[65px] bg-[#2a2d36] rounded-r-xs" />

          {/* Screen Glass Area */}
          <div className="relative w-full h-full rounded-[42px] bg-white overflow-hidden flex flex-col select-none text-[#0A0A0B] shadow-inner">
            
            {/* Status Bar */}
            <div className="pt-3 px-6 pb-2 flex items-center justify-between text-xs font-semibold text-slate-800 shrink-0">
              <span>9:41</span>
              {/* Dynamic Island */}
              <div className="w-[100px] h-[26px] bg-black rounded-full flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400/20 border border-teal-500/40" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="text-[10px]">5G</span>
                {/* Signal Bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <div className="w-0.5 h-1 bg-slate-800 rounded-xs" />
                  <div className="w-0.5 h-1.5 bg-slate-800 rounded-xs" />
                  <div className="w-0.5 h-2.5 bg-slate-800 rounded-xs" />
                  <div className="w-0.5 h-3 bg-slate-800 rounded-xs" />
                </div>
                {/* Battery */}
                <div className="w-5 h-2.5 rounded-xs border border-slate-700 p-0.5 flex items-center">
                  <div className="w-full h-full bg-slate-800 rounded-xs" />
                </div>
              </div>
            </div>

            {/* Mobile App Navigation Header */}
            <div className="px-5 py-2.5 flex items-center justify-between border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-2">
                <MyCredAxisEmblem size={26} />
                <span className="font-display font-bold text-sm tracking-tight text-[#0A0A0B]">
                  MyCred<span className="text-[#4F6BFF]">Axis</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="relative p-1.5 text-slate-600 hover:text-slate-900">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#20C7B5] rounded-full ring-2 ring-white" />
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                  <User className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* App Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 no-scrollbar">
              
              {/* Credit Score Card (Replicating exact card from uploaded mockup) */}
              <div className="relative bg-[#0D1527] rounded-2xl p-4 text-white shadow-md border border-slate-800/80 overflow-hidden">
                {/* Subtle internal gradient aura */}
                <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-[#4F6BFF]/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-10 -top-10 w-36 h-36 bg-[#20C7B5]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  {/* Gauge Arc Graphic */}
                  <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Track Arc */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#1E293B"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="62.8"
                        strokeLinecap="round"
                      />
                      {/* Active Glowing Value Arc */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#scoreGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4F6BFF" />
                          <stop offset="100%" stopColor="#20C7B5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Centered Score & Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-display font-extrabold text-2xl tracking-tight leading-none text-white">
                        {creditScore}
                      </span>
                      <span className="text-[11px] font-semibold text-[#20C7B5] mt-0.5">
                        {status.label}
                      </span>
                    </div>
                  </div>

                  {/* Score Details & CTA */}
                  <div className="flex flex-col items-start pl-3">
                    <span className="text-xs text-slate-300 font-medium">Your Credit Score</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">Updated 2 days ago</span>
                    
                    <button
                      onClick={() => setCreditScore(creditScore === 780 ? 815 : 780)}
                      className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 active:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors"
                    >
                      <span>View Report</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#20C7B5]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Quick Category Circles */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {/* Bills */}
                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] border border-[#E0E7FF] flex items-center justify-center text-[#4F6BFF] group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">Bills</span>
                </div>

                {/* EMIs */}
                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center text-[#059669] group-hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">EMIs</span>
                </div>

                {/* AutoPay */}
                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0D9488] group-hover:scale-105 transition-transform">
                    <RotateCw className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">AutoPay</span>
                </div>

                {/* Rewards */}
                <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#EDE9FE] flex items-center justify-center text-[#7C3AED] group-hover:scale-105 transition-transform">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">Rewards</span>
                </div>
              </div>

              {/* Promo Banner: "Track. Pay. Stay Ahead." */}
              <div className="relative rounded-2xl bg-gradient-to-r from-[#EFF6FF] via-[#F0F9FF] to-[#E0F2FE] p-3.5 border border-[#BFDBFE]/60 flex items-center justify-between overflow-hidden shadow-xs">
                <div className="relative z-10 max-w-[190px]">
                  <h4 className="font-display font-bold text-xs text-[#1E3A8A] leading-snug">
                    Track. Pay. Stay Ahead.
                  </h4>
                  <p className="text-[10px] text-slate-600 mt-0.5 leading-relaxed">
                    All your financial needs, in one place.
                  </p>
                  <div className="mt-2 w-6 h-6 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-xs">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 3D Wallet & Coin Graphic Illustration */}
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                  <div className="w-14 h-11 bg-gradient-to-tr from-[#1E3A8A] to-[#3B82F6] rounded-xl shadow-md transform -rotate-6 flex flex-col justify-end p-1.5 border border-white/40">
                    <div className="w-full h-1 bg-white/20 rounded-full mb-1" />
                    <div className="w-3 h-2 bg-[#F59E0B] rounded-xs self-end shadow-xs" />
                  </div>
                  {/* Floating Gold Coin */}
                  <div className="absolute top-1 left-2 w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border border-amber-200 shadow-sm flex items-center justify-center text-[9px] font-bold text-amber-900">
                    ₹
                  </div>
                </div>
              </div>

              {/* Quick Actions Header & 6 Grid Tiles */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-xs text-slate-900">Quick Actions</span>
                  <span className="text-[10px] font-medium text-[#4F6BFF] cursor-pointer">Manage</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {/* Tile 1: Check Credit Score */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#4F6BFF]">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      Check Credit Score
                    </span>
                  </div>

                  {/* Tile 2: Pay Bills */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#20C7B5]">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      Pay Bills
                    </span>
                  </div>

                  {/* Tile 3: EMI Payments */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#4F6BFF]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      EMI Payments
                    </span>
                  </div>

                  {/* Tile 4: AutoPay Mandates */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#059669]">
                      <RotateCw className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      AutoPay Mandates
                    </span>
                  </div>

                  {/* Tile 5: KYC Update */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#6366F1]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      KYC Update
                    </span>
                  </div>

                  {/* Tile 6: View Rewards */}
                  <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-2 flex flex-col items-center text-center gap-1.5 hover:bg-white hover:shadow-xs transition-all cursor-pointer">
                    <div className="p-1.5 text-[#8B5CF6]">
                      <Gift className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 leading-tight">
                      View Rewards
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Tab Bar */}
            <div className="bg-white border-t border-slate-100 px-3 py-2 flex items-center justify-around shrink-0">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-0.5 text-[10px] ${
                  activeTab === 'home' ? 'text-[#4F6BFF] font-bold' : 'text-slate-500 font-medium'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>

              <button
                onClick={() => setActiveTab('payments')}
                className={`flex flex-col items-center gap-0.5 text-[10px] ${
                  activeTab === 'payments' ? 'text-[#4F6BFF] font-bold' : 'text-slate-500 font-medium'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span>Payments</span>
              </button>

              <button
                onClick={() => setActiveTab('credit')}
                className={`flex flex-col items-center gap-0.5 text-[10px] ${
                  activeTab === 'credit' ? 'text-[#4F6BFF] font-bold' : 'text-slate-500 font-medium'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span>Credit</span>
              </button>

              <button
                onClick={() => setActiveTab('rewards')}
                className={`flex flex-col items-center gap-0.5 text-[10px] ${
                  activeTab === 'rewards' ? 'text-[#4F6BFF] font-bold' : 'text-slate-500 font-medium'
                }`}
              >
                <Gift className="w-4 h-4" />
                <span>Rewards</span>
              </button>

              <div className="flex flex-col items-center gap-0.5 text-[10px] text-slate-400">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                    <div className="w-1 h-1 bg-slate-400 rounded-full" />
                  </div>
                </div>
                <span>More</span>
              </div>
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="pb-1.5 pt-1 flex justify-center bg-white">
              <div className="w-32 h-1 bg-slate-300 rounded-full" />
            </div>

          </div>
        </div>
      </div>

      {/* Floating Ambient Glow under the phone */}
      <div className="w-72 h-10 bg-gradient-to-r from-[#4F6BFF]/20 via-[#20C7B5]/25 to-[#4F6BFF]/20 rounded-full blur-xl -mt-4 -z-10 pointer-events-none" />
    </div>
  );
};
