/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MyCredAxisLogo } from './MyCredAxisLogo';
import { PageRoute } from '../types';
import { getPathForRoute } from '../routing';
import { Menu, X, Download } from 'lucide-react';

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
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) return;
    const panel = mobileNavRef.current;
    const active = document.activeElement;
    if (panel && active instanceof HTMLElement && panel.contains(active)) {
      active.blur();
      menuToggleRef.current?.focus({ preventScroll: true });
    }
  }, [mobileMenuOpen]);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Individuals', route: 'individuals' },
    { label: 'Business', route: 'business' },
    { label: 'Partners', route: 'partners' },
    { label: 'Security', route: 'security' },
    { label: 'FAQ', route: 'faq' },
  ];

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-40 ${scrolled ? 'site-header--scrolled' : ''}`}
     
    >
      <div className="site-header-glow pointer-events-none" aria-hidden />

      <div className="site-container site-header-inner">
        <Link
          to={getPathForRoute('home')}
          className="site-header-logo shrink-0 text-left cursor-pointer"
          aria-label="MyCredAxis home"
        >
          <MyCredAxisLogo size="md" variant="light" />
        </Link>

        <nav className="site-header-nav hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <Link
                key={item.route}
                to={getPathForRoute(item.route)}
                className={`site-nav-link ${isActive ? 'site-nav-link--active' : ''}`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="site-header-actions">
          <div className="hidden lg:flex items-center gap-2.5">
            <button type="button" onClick={onOpenLogIn} className="site-nav-login">
              Log In
            </button>

            <button type="button" onClick={onOpenDownload} className="site-nav-cta group">
              <Download className="w-3.5 h-3.5 text-[#20C7B5] shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span>Download the App</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenDownload}
              className="site-nav-cta-icon"
              title="Download the App"
              aria-label="Download the App"
            >
              <Download className="w-4 h-4 text-[#20C7B5]" />
            </button>

            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="site-nav-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`site-mobile-backdrop lg:hidden ${mobileMenuOpen ? 'site-mobile-backdrop--open' : ''}`}
        onClick={closeMobile}
        aria-hidden
      />

      <div
        ref={mobileNavRef}
        id="site-mobile-nav"
        className={`site-mobile-panel lg:hidden ${mobileMenuOpen ? 'site-mobile-panel--open' : ''}`}
        aria-hidden={mobileMenuOpen ? undefined : true}
        inert={mobileMenuOpen ? undefined : true}
      >
        <div className="site-container site-mobile-panel-inner">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            <Link
              to={getPathForRoute('home')}
              onClick={closeMobile}
              className={`site-mobile-link ${currentRoute === 'home' ? 'site-mobile-link--active' : ''}`}
              style={{ transitionDelay: mobileMenuOpen ? '40ms' : '0ms' }}
            >
              Home
            </Link>

            {navItems.map((item, index) => (
              <Link
                key={item.route}
                to={getPathForRoute(item.route)}
                onClick={closeMobile}
                className={`site-mobile-link ${currentRoute === item.route ? 'site-mobile-link--active' : ''}`}
                style={{ transitionDelay: mobileMenuOpen ? `${80 + index * 35}ms` : '0ms' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-mobile-actions">
            <button
              type="button"
              onClick={() => {
                onOpenLogIn();
                closeMobile();
              }}
              className="site-nav-login w-full justify-center"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
