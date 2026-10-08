/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { PageRoute } from '../types';
import { getPathForRoute } from '../routing';
import { Mail, Phone, Instagram, Facebook, Youtube, LucideIcon } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
  onOpenDownload: () => void;
}

type SocialLink = { label: string; href: string; Icon: LucideIcon };

const socialLinks: SocialLink[] = [
  { label: 'MyCredAxis on Facebook', href: 'https://www.facebook.com/mycredaxis', Icon: Facebook },
  { label: 'MyCredAxis on Instagram', href: 'https://www.instagram.com/mycredaxis', Icon: Instagram },
  { label: 'MyCredAxis on YouTube', href: 'https://www.youtube.com/@mycredaxis', Icon: Youtube },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, onOpenDownload }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer relative bg-[#0A0A0B] text-slate-400 pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10 border-t border-white/[0.06] overflow-hidden"
     
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-[10%] w-[min(420px,70vw)] h-[220px] rounded-full bg-[#4F6BFF]/10 blur-[90px]"
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="footer-main pb-8 sm:pb-10 lg:pb-12 border-b border-white/10">
          <div className="footer-brand">
            <MyCredAxisLogo variant="dark" size="md" />
            <p className="footer-tagline mt-3 text-sm text-slate-400 leading-snug sm:leading-relaxed">
              Your Credit. Your Payments. One App That Rewards You for Both. Built by Bisani Brother.
            </p>
          </div>

          <nav className="footer-links-grid text-sm" aria-label="Footer navigation">
            <div className="footer-link-col">
              <h4 className="footer-col-title">Audience</h4>
              <ul className="footer-link-list text-slate-400">
                <li>
                  <Link to={getPathForRoute('individuals')} className="footer-link">
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link to={getPathForRoute('business')} className="footer-link">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to={getPathForRoute('partners')} className="footer-link">
                    Partners
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenDownload}
                    className="text-[#20C7B5] hover:text-[#5eead4] font-semibold transition-colors cursor-pointer text-left"
                  >
                    Download App
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h4 className="footer-col-title">Product</h4>
              <ul className="footer-link-list text-slate-400">
                <li>Collections</li>
                <li>Credit Score Check</li>
                <li>Digital Wallet</li>
                <li>Master Key Financing</li>
                <li>BBPS Bills (Soon)</li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h4 className="footer-col-title">Trust &amp; Support</h4>
              <ul className="footer-link-list text-slate-400">
                <li>
                  <Link to={getPathForRoute('security')} className="footer-link">
                    Security &amp; Compliance
                  </Link>
                </li>
                <li>
                  <Link to={getPathForRoute('faq')} className="footer-link">
                    Shared FAQ Bank
                  </Link>
                </li>
                <li>
                  <button type="button" onClick={() => onOpenContact('general')} className="footer-link">
                    Contact Support
                  </button>
                </li>
                <li>Zero Credential Storage</li>
              </ul>
            </div>

            <div className="footer-link-col">
              <h4 className="footer-col-title">Organization</h4>
              <ul className="footer-link-list text-slate-400">
                <li>By Bisani Brother</li>
                <li>Bangalore · Mumbai</li>
                <li>
                  <Link
                    to={getPathForRoute('privacy-policy')}
                    className="footer-link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={getPathForRoute('terms-conditions')}
                    className="footer-link"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="footer-contact-strip">
            <h4 className="footer-col-title footer-contact-strip-title">Get in touch</h4>
            <ul className="footer-contact-items">
              <li>
                <a href="mailto:support@mycredaxis.com" className="footer-contact-row">
                  <span className="footer-contact-icon" aria-hidden>
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="footer-contact-text">support@mycredaxis.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919793649177" className="footer-contact-row">
                  <span className="footer-contact-icon" aria-hidden>
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="footer-contact-text">+91 97936 49177</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom pt-5 sm:pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-left">
            © {year} MyCredAxis. All rights reserved.{' '}
            <span className="text-slate-600">By Bisani Brother.</span>
          </p>

          <nav
            aria-label="Social media"
            className="footer-social-row flex flex-wrap items-center justify-center sm:justify-end gap-2"
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-link"
              >
                <Icon className="w-[1.05rem] h-[1.05rem]" strokeWidth={2} aria-hidden />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
