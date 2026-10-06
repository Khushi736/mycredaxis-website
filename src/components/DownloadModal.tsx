/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

// Import your actual images
import qrCodeImage from '../assets/images/app-qr-code.webp'; 
import playStoreIcon from '../assets/images/google-play-store-icon.png';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSent(true);
  };

  return (
    <div className="app-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="download-modal-title">
      <div className="app-modal-panel app-modal-panel--lg bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl p-5 sm:p-7 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-5 sm:mb-6 pr-6">
          <div className="flex justify-center mb-2 sm:mb-3">
            <MyCredAxisLogo size="sm" />
          </div>
          <h3 id="download-modal-title" className="font-display font-extrabold text-xl sm:text-2xl text-[#0A0A0B]">
            Get the MyCredAxis App
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-body leading-relaxed">
            Download the MyCredAxis app and get started with digital KYC.
          </p>
        </div>

        {/* QR Code and App Badges */}
        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F7F8FA] border border-slate-200 flex flex-col sm:flex-row items-center gap-5 justify-center">
          
          {/* Real QR Code Image */}
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col items-center shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#0A0A0B] rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={qrCodeImage} 
                alt="Scan to download app" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[10px] font-mono text-slate-500 mt-1.5 font-bold tracking-wider">
              SCAN WITH PHONE
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-2.5 w-full sm:w-auto items-center sm:items-start">
            {/* Google Play Button with Link */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.bbpl.mycredaxis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0A0A0B] text-white flex items-center justify-center sm:justify-start gap-3 cursor-pointer hover:bg-slate-900 transition-colors shadow-xs"
            >
              <img 
                src={playStoreIcon} 
                alt="Play Store" 
                className="w-5 h-5 object-contain shrink-0" 
              />
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 block leading-tight">
                  Get it on
                </span>
                <span className="text-xs font-bold leading-tight">Google Play</span>
              </div>
            </a>
          </div>

        </div>

        {/* SMS Link Option */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-2 text-center">
            Or receive an instant download link via SMS:
          </span>

          {sent ? (
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium flex items-center justify-center gap-2 text-center">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Link dispatched! Check your SMS inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row gap-2">
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
                className="px-5 py-2.5 rounded-xl bg-[#4F6BFF] hover:bg-[#3d5ae8] text-white font-semibold text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
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