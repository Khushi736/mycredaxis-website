/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { PageRoute } from '../types';
import { ArrowUpRight, Menu, X, Download, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenLogIn: () => void;
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenLogIn,
  onOpenDownload,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Wise pattern: Audience-first navigation items
  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Individuals', route: 'individuals' },
    { label: 'Business', route: 'business' },
    { label: 'Partners', route: 'partners' },
    { label: 'Security', route: 'security' },
    { label: 'FAQ', route: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-[#F7F8FA]/90 backdrop-blur-xs py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo - clicks to homepage */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left cursor-pointer transition-opacity hover:opacity-90"
        >
          <MyCredAxisLogo size="md" variant="light" />
        </button>

        {/* Desktop Wise-Style Audience Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => onNavigate(item.route)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#0A0A0B] font-bold'
                    : 'text-slate-600 hover:text-[#0A0A0B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F6BFF] rounded-full animate-in fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons: [Log In] and [Download the App] */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLogIn}
            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-white/80 border border-slate-200/80 transition-all cursor-pointer"
          >
            Log In
          </button>

          <button
            onClick={onOpenDownload}
            className="group relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#20C7B5]" />
            <span>Download the App</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDownload}
            className="p-2 rounded-full bg-[#0A0A0B] text-white text-xs"
            title="Download App"
          >
            <Download className="w-4 h-4 text-[#20C7B5]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-bold text-slate-900 py-1.5"
            >
              Home (Audience Overview)
            </button>

            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  onNavigate(item.route);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm py-1.5 ${
                  currentRoute === item.route
                    ? 'font-bold text-[#4F6BFF]'
                    : 'font-medium text-slate-700 hover:text-[#4F6BFF]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenLogIn();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs font-semibold text-center"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onOpenDownload();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#0A0A0B] text-white text-xs font-semibold text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#20C7B5]" />
                <span>Download the App</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
