/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Lock, Smartphone, Check, ArrowRight } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface LogInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogInModal: React.FC<LogInModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'success'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4) {
      setStep('success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 animate-in fade-in zoom-in-95 duration-200">
        
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
            {step === 'success' ? 'Welcome Back' : 'Log in to MyCredAxis'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-body">
            Secure, passwordless authentication via verified mobile OTP.
          </p>
        </div>

        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enter Mobile Number
              </label>
              <div className="flex items-center rounded-xl bg-slate-50 border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#4F6BFF]/30">
                <span className="px-3.5 text-xs font-semibold text-slate-500 border-r border-slate-200">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-transparent text-xs text-[#0A0A0B] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get Verification Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enter 4-Digit OTP sent to +91 {phone}
              </label>
              <input
                type="text"
                required
                maxLength={6}
                placeholder="• • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-widest text-lg font-mono font-bold py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#4F6BFF] hover:bg-[#3d5ae8] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Verify & Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setStep('phone')}
              className="w-full text-center text-[11px] text-slate-500 hover:text-slate-800"
            >
              Change phone number
            </button>
          </form>
        )}

        {step === 'success' && (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0A0A0B]">
              Authenticated Successfully
            </h4>
            <p className="text-xs text-slate-500 font-body">
              Your member session is now authenticated under RBI Account Aggregator guidelines.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0A0A0B] text-white text-xs font-semibold"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <Lock className="w-3 h-3" />
          <span>256-Bit Bank Gateway Encryption</span>
        </div>

      </div>
    </div>
  );
};
