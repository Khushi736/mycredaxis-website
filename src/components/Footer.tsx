/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { PageRoute } from '../types';
import { Mail, Phone, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, onOpenDownload }) => {
  return (
    <footer 
      className="bg-[#0A0A0B] text-slate-400 pt-12 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 border-t border-slate-900 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Sitemap Grid */}
        <div className="pb-10 sm:pb-12 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/10 items-start">
          
          {/* Left Column: MyCredAxis Logo, Description & Desktop Contact Details */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3.5">
              <MyCredAxisLogo variant="dark" size="md" />
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Your Credit. Your Payments. One App That Rewards You for Both. Built by Bisani Brother.
              </p>
            </div>

            {/* Contact Details right under paragraph on Desktop / Tablet */}
            <div className="hidden lg:flex flex-col space-y-3 pt-2 font-mono text-xs">
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
          </div>

          {/* Right Column: 2x2 grid on mobile/tablet, 4 columns side-by-side on desktop (lg+) */}
          <div className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 text-xs sm:text-sm">
            
            {/* Grid 1: Audience */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-3.5">
                Audience
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => onNavigate('individuals')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Individuals
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('business')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Business
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Partners
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDownload} className="text-[#20C7B5] hover:underline cursor-pointer text-left font-medium">
                    Download App
                  </button>
                </li>
              </ul>
            </div>

            {/* Grid 2: Product */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-3.5">
                Product
              </h4>
              <ul className="space-y-2.5">
                <li><span className="text-slate-400">Collections</span></li>
                <li><span className="text-slate-400">Credit Score Check</span></li>
                <li><span className="text-slate-400">Digital Wallet</span></li>
                <li><span className="text-slate-400">Master Key Financing</span></li>
                <li><span className="text-amber-400 text-[11px]">BBPS Bills (Soon)</span></li>
              </ul>
            </div>

            {/* Grid 3: Trust & Support */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-3.5">
                Trust &amp; Support
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => onNavigate('security')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Security &amp; Compliance
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Shared FAQ Bank
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenContact('general')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Contact Support
                  </button>
                </li>
                <li><span className="text-slate-500">Zero Credential Storage</span></li>
              </ul>
            </div>

            {/* Grid 4: Organization */}
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs mb-3.5">
                Organization
              </h4>
              <ul className="space-y-2.5">
                <li><span className="text-slate-300">By Bisani Brother</span></li>
                <li><span className="text-slate-500">Bangalore · Mumbai</span></li>
                <li>
                  <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('terms-conditions')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Terms and Conditions
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Section: Contact details for mobile (hidden on lg+), Copyright & Social Links */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Mobile Contact Details (visible only on mobile/tablet) */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-4 font-mono text-slate-300">
            <a
              href="https://www.mycredaxis.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#4F6BFF]" />
              <span>www.mycredaxis.com</span>
            </a>

            <a
              href="mailto:support@mycredaxis.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#20C7B5]" />
              <span>support@mycredaxis.com</span>
            </a>

            <a
              href="tel:+919793649177"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+91 97936 49177</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-center md:text-left hidden lg:block">
            © {new Date().getFullYear()} MyCredAxis. All rights reserved. By Bisani Brother.
          </p>

          <p className="text-slate-500 text-center block lg:hidden">
            © {new Date().getFullYear()} MyCredAxis. All rights reserved. By Bisani Brother.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-white transition-colors cursor-pointer">
              Twitter / X
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              LinkedIn
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Instagram
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};