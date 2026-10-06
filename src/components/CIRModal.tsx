/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { 
  X, 
  Fingerprint, 
  UserCheck, 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2,
  Lock,
  Download,
  ArrowRight
} from 'lucide-react';

interface CIRModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const CIRModal: React.FC<CIRModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Dynamic Contact Handler
  const handleIntegrateClick = () => {
    onClose(); 
    onOpenContact('business');
  };

  // Dynamic PDF Download Handler
  const handleExportPDF = () => {
    // Generate a simple text file that mimics a downloaded spec PDF for demo purposes
    const content = "CENTRIC IDENTITY REPORT (CIR) API SPECIFICATIONS\n\nVersion: 2.4 Live\nType: REST API\n\nConfidential Document. MyCredAxis Platform.";
    const blob = new Blob([content], { type: 'application/pdf' }); // Using pdf MIME type to force browser handling
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'centric-identity-report-spec.pdf';
    
    // Append, click, and cleanup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="app-modal-overlay app-modal-overlay--elevated"
     
      role="dialog"
      aria-modal="true"
      aria-labelledby="cir-modal-title"
    >
      {/* Dark backdrop with blur */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main Modal Container - Wide Layout */}
      <div className="app-modal-panel app-modal-panel--wide bg-white rounded-2xl sm:rounded-[24px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        {/* Dark Header */}
        <div className="bg-[#0A0A0B] px-6 sm:px-8 py-5 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 shadow-inner">
              <ShieldCheck className="w-5 h-5 text-[#20C7B5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#20C7B5]">FLAGSHIP TRUST VERIFICATION</span>
                <span className="text-[9px] bg-white/10 text-slate-300 px-1.5 py-0.5 rounded border border-white/10">v2.4 Live</span>
              </div>
              <h2 id="cir-modal-title" className="font-bold text-lg sm:text-xl text-white tracking-tight">
                Centric Identity Report (CIR)
              </h2>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="cir-modal-tabs border-b border-slate-200 px-4 sm:px-8 shrink-0 overflow-x-auto app-modal-scroll-hidden">
          <div className="flex items-center gap-2 sm:gap-6 min-w-max py-3">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'overview' ? 'bg-[#0A0A0B] text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Report Overview
            </button>
            <button 
              onClick={() => setActiveTab('aggregation')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'aggregation' ? 'bg-[#0A0A0B] text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Multi-Source Aggregation
            </button>
            <button 
              onClick={() => setActiveTab('fraud')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'fraud' ? 'bg-[#0A0A0B] text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Synthetic Fraud Shield
            </button>
            <button 
              onClick={() => setActiveTab('credit')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'credit' ? 'bg-[#0A0A0B] text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Credit Readiness Score
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 flex-1 bg-[#F7F8FA]">
          
          {/* Main Dark Rating Card */}
          <div className="p-6 sm:p-8 rounded-[20px] bg-gradient-to-br from-[#12131C] to-[#0A0A0B] text-white relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F6BFF]/15 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-1">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#20C7B5]">CONSOLIDATED TRUST ASSESSMENT</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 sm:mt-2 tracking-tight">Identity Confidence Rating</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 max-w-lg leading-relaxed">
                  Aggregates government registries, banking behavioral telemetry, bureau tradelines, and biometric consent into an instant verifiable token.
                </p>
              </div>
              
              <div className="flex items-center gap-5 bg-white/[0.03] border border-white/5 p-5 rounded-[20px] shrink-0 backdrop-blur-md">
                <div className="text-center px-2">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#20C7B5] to-[#4F6BFF] leading-none mb-1">
                    98.4
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">TRUST SCORE (TIER 1)</span>
                </div>
                
                <div className="h-14 w-px bg-white/10" />
                
                <div className="space-y-1.5 pl-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#20C7B5] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Zero Flags</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">Instant Approval Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Info Grid Cards (Detailed layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 sm:p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm hover:border-[#4F6BFF]/30 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <span className="text-sm font-bold text-[#0A0A0B] flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-[#4F6BFF] group-hover:scale-110 transition-transform" />
                  Multi-Source Registry Match
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold uppercase tracking-wider w-fit">
                  VERIFIED (100%)
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Cross-matched with NSDL (PAN), UIDAI ([Biometric ID Redacted] Offline XML/OTP), and voter records for 100% deterministic identification.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm hover:border-[#20C7B5]/30 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <span className="text-sm font-bold text-[#0A0A0B] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#20C7B5] group-hover:scale-110 transition-transform" />
                  Friction-Free Onboarding
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold uppercase tracking-wider w-fit">
                  &lt; 8 SECONDS
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                End users authorize with one tap; merchants and lenders ingest verified parameters without paper copies or manual field entries.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm hover:border-[#4F6BFF]/30 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <span className="text-sm font-bold text-[#0A0A0B] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4F6BFF] group-hover:scale-110 transition-transform" />
                  Synthetic Fraud Shield
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold uppercase tracking-wider w-fit">
                  NO MISMATCH
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Multi-factor heuristics identify synthetic IDs, stolen credentials, SIM-swap anomalies, and spoofed bank statements.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm hover:border-[#20C7B5]/30 transition-colors group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <span className="text-sm font-bold text-[#0A0A0B] flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#20C7B5] group-hover:scale-110 transition-transform" />
                  Credit &amp; Underwriting Readiness
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-bold uppercase tracking-wider w-fit">
                  PRE-QUALIFIED
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                Calculates repayment integrity, debt servicing capacity, and cash-flow regularity to power instant credit line decisions.
              </p>
            </div>

          </div>
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="bg-white border-t border-slate-200 px-6 sm:px-8 py-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Lock className="w-4 h-4 text-[#20C7B5]" />
            <span>256-Bit Encrypted · Consent-Authorized Handshake</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Download Event Attached */}
            <button 
              onClick={handleExportPDF}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export Spec PDF</span>
            </button>
            
            {/* Opens Contact Modal for Business when clicked */}
            <button 
              onClick={handleIntegrateClick}
              className="flex-1 sm:flex-none group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#4F6BFF] hover:bg-[#3D56E8] active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#4F6BFF]/20 transition-all cursor-pointer"
            >
              <span>Integrate CIR API</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>

      </div>
    </div>
  );
};