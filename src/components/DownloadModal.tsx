/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, QrCode, Smartphone, Check, ArrowRight, Apple, Play } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <MyCredAxisLogo size="sm" />
          </div>
          <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B]">
            Get the MyCredAxis App
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-body">
            Download the MyCredAxis app and get started with digital KYC.
          </p>
        </div>

        {/* QR Code and App Badges */}
        <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col sm:flex-row items-center gap-6 justify-center">
          
          {/* QR Code Mockup */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center">
            <div className="w-28 h-28 bg-[#0A0A0B] rounded-lg p-2 flex items-center justify-center">
              <QrCode className="w-24 h-24 text-white" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5 font-bold">
              SCAN WITH PHONE
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2.5 w-full sm:w-auto">
            {/* Apple Store Button */}
            <div className="px-4 py-2.5 rounded-xl bg-[#0A0A0B] text-white flex items-center gap-3 cursor-pointer hover:bg-slate-900 transition-colors shadow-xs">
              <Apple className="w-5 h-5 fill-current" />
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-tight">
                  Download on the
                </span>
                <span className="text-xs font-bold leading-tight">App Store</span>
              </div>
            </div>

            {/* Google Play Button */}
            <div className="px-4 py-2.5 rounded-xl bg-[#0A0A0B] text-white flex items-center gap-3 cursor-pointer hover:bg-slate-900 transition-colors shadow-xs">
              <Play className="w-5 h-5 fill-current text-white" />
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-tight">
                  Get it on
                </span>
                <span className="text-xs font-bold leading-tight">Google Play</span>
              </div>
            </div>
          </div>

        </div>

        {/* SMS Link Option */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <span className="text-xs font-semibold text-slate-700 block mb-2 text-center">
            Or receive an instant download link via SMS:
          </span>

          {sent ? (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Link dispatched! Check your SMS inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSendLink} className="flex gap-2">
              <input
                type="tel"
                placeholder="+91 Mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#4F6BFF] hover:bg-[#3d5ae8] text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Send</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Trust Note */}
        <div className="mt-4 text-center text-[10px] text-slate-400 font-mono">
          RBI Compliant · 256-Bit TLS · Verified by Bisani Brother
        </div>

      </div>
    </div>
  );
};
