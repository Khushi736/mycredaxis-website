/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { PageRoute } from '../types';
import { ShieldCheck, Lock, CheckCircle2, Mail, Phone, Globe, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, onOpenDownload }) => {
  return (
    <footer className="bg-[#0A0A0B] text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Compliance Badge Row (Prompt Requirement: RBI, PCI DSS, NPCI) */}
        <div className="pb-12 border-b border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              Institutional Compliance:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              <span>RBI-Compliant Framework</span>
            </div>

            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>

            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#4F6BFF]" />
              <span>PCI DSS Certified</span>
            </div>

            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>NPCI Compliant</span>
            </div>
          </div>
        </div>

        {/* Main Footer Sitemap Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10">
          
          {/* Brand Info & Contacts */}
          <div className="md:col-span-4 space-y-4">
            <MyCredAxisLogo variant="dark" size="md" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-body">
              Your Credit. Your Payments. One App That Rewards You for Both. Built by Bisani Brother.
            </p>

            {/* Official Contact Details from Prompt */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <a
                href="https://www.mycredaxis.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#4F6BFF]" />
                <span>www.mycredaxis.com</span>
              </a>

              <a
                href="mailto:support@mycredaxis.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#20C7B5]" />
                <span>support@mycredaxis.com</span>
              </a>

              <a
                href="tel:+919793649177"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>+91 97936 49177</span>
              </a>
            </div>

            {/* Brand Color Swatches Reference */}
            
          </div>

          {/* Standard Sitemap (Individuals / Business / Partners / Security / FAQ / Contact) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            
            {/* Column 1: Audience */}
            <div className="space-y-3">
              <span className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Audience
              </span>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => onNavigate('individuals')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Individuals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('business')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('partners')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Partners
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenDownload}
                    className="text-[#20C7B5] hover:underline cursor-pointer text-left"
                  >
                    Download App
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div className="space-y-3">
              <span className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Product
              </span>
              <ul className="space-y-2.5">
                <li><span className="text-slate-400">Collections</span></li>
                <li><span className="text-slate-400">Credit Score Check</span></li>
                <li><span className="text-slate-400">Digital Wallet</span></li>
                <li><span className="text-slate-400">Super Key Financing</span></li>
                <li><span className="text-amber-400 text-[11px]">BBPS Bills (Soon)</span></li>
              </ul>
            </div>

            {/* Column 3: Trust & Support */}
            <div className="space-y-3">
              <span className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Trust & Support
              </span>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={() => onNavigate('security')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Security & Compliance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('faq')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Shared FAQ Bank
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenContact('general')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact Support
                  </button>
                </li>
                <li><span className="text-slate-500">Zero Credential Storage</span></li>
              </ul>
            </div>

            {/* Column 4: Organization & Legal */}
            <div className="space-y-3">
              <span className="font-display font-bold text-white uppercase tracking-wider text-[11px]">
                Organization
              </span>
              <ul className="space-y-2.5">
                <li><span className="text-slate-300">By Bisani Brother</span></li>
                <li><span className="text-slate-500">Bangalore · Mumbai</span></li>
                <li>
                  <button
                    onClick={() => onNavigate('privacy-policy')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Privacy Policy
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => onNavigate('terms-conditions')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Terms and Conditions
                  </button>
                </li>
                {/* <li><span className="text-slate-500 hover:text-white transition-colors cursor-pointer">Terms of Service</span></li> */}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-body">
          <p>
            © {new Date().getFullYear()} MyCredAxis. All rights reserved. By Bisani Brother.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Twitter / X
            </span>
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              LinkedIn
            </span>
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Instagram
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};