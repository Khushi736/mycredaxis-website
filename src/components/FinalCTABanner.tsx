/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, PointerEvent } from 'react';
import { Download, Building2, Store, ArrowRight, LucideIcon } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface FinalCTABannerProps {
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner') => void;
}

type CtaCard = {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconWrap: string;
  iconColor: string;
  hoverTitle: string;
  accentBorder: string;
  accentRgb: string;
  featuredRing?: string;
  delay: number;
  actionLabel: string;
  onAction: () => void;
  buttonClass: string;
};

const revealClass = (visible: boolean, extra = '') =>
  `final-cta-reveal ${visible ? 'final-cta-reveal--shown' : 'final-cta-reveal--hidden'} ${extra}`.trim();

export const FinalCTABanner: React.FC<FinalCTABannerProps> = ({
  onOpenDownload,
  onOpenContact,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardPointer = (event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--cta-mouse-x', `${x}%`);
    el.style.setProperty('--cta-mouse-y', `${y}%`);
  };

  const cards: CtaCard[] = [
    {
      id: 'individuals',
      eyebrow: 'For Individuals',
      eyebrowClass: 'text-[#8BA3FF]',
      title: 'Download the App',
      description:
        'Track your credit score, schedule bill payments, and unlock tangible discipline rewards.',
      icon: Download,
      iconWrap: 'bg-[#4F6BFF]/20',
      iconColor: 'text-[#4F6BFF]',
      hoverTitle: 'group-hover:text-[#8BA3FF]',
      accentBorder: 'hover:border-[#4F6BFF]/50',
      accentRgb: '79, 107, 255',
      delay: 420,
      actionLabel: 'Get MyCredAxis App',
      onAction: onOpenDownload,
      buttonClass:
        'bg-white text-[#0A0A0B] hover:bg-slate-100 shadow-sm group-hover:shadow-lg group-hover:shadow-[#4F6BFF]/20',
    },
    {
      id: 'business',
      eyebrow: 'For Businesses',
      eyebrowClass: 'text-[#20C7B5]',
      title: 'Automate Collections',
      description:
        'Eliminate manual follow-ups, configure bank mandates, and secure recurring cash flows.',
      icon: Building2,
      iconWrap: 'bg-[#20C7B5]/20',
      iconColor: 'text-[#20C7B5]',
      hoverTitle: 'group-hover:text-[#20C7B5]',
      accentBorder: 'hover:border-[#20C7B5]/55',
      accentRgb: '32, 199, 181',
      delay: 540,
      actionLabel: 'Talk to Collections Team',
      onAction: () => onOpenContact('business'),
      buttonClass:
        'bg-[#20C7B5] text-[#0A0A0B] font-bold hover:bg-[#1bb3a3] shadow-sm group-hover:shadow-lg group-hover:shadow-[#20C7B5]/25',
    },
    {
      id: 'partner',
      eyebrow: 'Retailers & Distributors',
      eyebrowClass: 'text-amber-400/95',
      title: 'Become a Partner',
      description:
        'Offer secured Master Key device financing to your customer base without building infrastructure.',
      icon: Store,
      iconWrap: 'bg-amber-400/20',
      iconColor: 'text-amber-400',
      hoverTitle: 'group-hover:text-amber-400',
      accentBorder: 'hover:border-amber-400/55',
      accentRgb: '251, 191, 36',
      featuredRing: 'ring-1 ring-amber-400/35',
      delay: 660,
      actionLabel: 'Ask About Partnership',
      onAction: () => onOpenContact('partner'),
      buttonClass:
        'bg-white/10 text-white border border-white/15 hover:bg-white/20 group-hover:border-amber-400/35 group-hover:shadow-lg group-hover:shadow-amber-400/15',
    },
  ];

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      aria-labelledby="final-cta-title"
      className="fx-cta py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 relative overflow-hidden"
     
    >
      <div className="site-container relative z-10">
        <div
          className={`final-cta-shell rounded-2xl sm:rounded-3xl lg:rounded-[2.75rem] bg-[#0A0A0B] text-white p-6 sm:p-10 lg:p-14 border border-slate-800/90 shadow-2xl relative overflow-hidden ${
            isVisible ? 'final-cta-shell--visible' : ''
          }`}
        >
          <div className="final-cta-topline" aria-hidden />

          <div
            className="final-cta-mesh final-cta-mesh-a pointer-events-none absolute -top-24 -right-16 w-[min(520px,90vw)] h-[280px] rounded-full bg-[#4F6BFF]/20 blur-[90px]"
            aria-hidden
          />
          <div
            className="final-cta-mesh final-cta-mesh-b pointer-events-none absolute -bottom-20 -left-12 w-[min(420px,85vw)] h-[240px] rounded-full bg-[#20C7B5]/18 blur-[80px]"
            aria-hidden
          />
          <div
            className="final-cta-grid pointer-events-none absolute inset-0 opacity-[0.35]"
            aria-hidden
          />

          <header className="relative z-10 text-center w-full mx-auto mb-10 sm:mb-12 lg:mb-14">
            <div
              className={revealClass(isVisible, 'final-cta-logo-wrap flex justify-center mb-4 sm:mb-5')}
              style={{ transitionDelay: '80ms' }}
            >
              <MyCredAxisLogo variant="dark" size="md" />
            </div>

            <h2
              id="final-cta-title"
              className={`section-h2 final-cta-title font-extrabold text-white tracking-tight ${revealClass(isVisible)}`}
              style={{ transitionDelay: '180ms' }}
            >
              One App. Every Way to Pay, Collect, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#6B8AFF] to-[#20C7B5] why-heading-accent">
                Grow.
              </span>
            </h2>

            <p
              className={`section-lead text-slate-300 mt-3 sm:mt-4 max-w-2xl mx-auto ${revealClass(isVisible)}`}
              style={{ transitionDelay: '280ms' }}
            >
              Whether you are managing your personal credit, automating business receivables, or
              financing retail devices, MyCredAxis is ready.
            </p>
          </header>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-fr">
            {cards.map((card) => {
              const Icon = card.icon;
              const partBase = card.delay;

              return (
                <article
                  key={card.id}
                  onPointerMove={handleCardPointer}
                  onPointerLeave={(e) => {
                    e.currentTarget.style.setProperty('--cta-mouse-x', '50%');
                    e.currentTarget.style.setProperty('--cta-mouse-y', '0%');
                  }}
                  style={
                    {
                      animationDelay: `${card.delay}ms`,
                      '--cta-accent': card.accentRgb,
                    } as React.CSSProperties
                  }
                  className={`final-cta-card group flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-[2px] ${
                    isVisible ? 'final-cta-card--in' : ''
                  } ${card.accentBorder} hover:-translate-y-1.5 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/40 ${
                    card.featuredRing ?? ''
                  }`}
                >
                  <div>
                    <div
                      className="final-cta-card-part flex items-center gap-3 mb-4 sm:mb-5"
                      style={{ transitionDelay: `${partBase + 90}ms` }}
                    >
                      <div
                        className={`final-cta-card-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${card.iconWrap} ${card.iconColor} flex items-center justify-center shrink-0 shadow-xs`}
                        aria-hidden
                      >
                        <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" />
                      </div>
                      <p
                        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] ${card.eyebrowClass}`}
                      >
                        {card.eyebrow}
                      </p>
                    </div>

                    <h3
                      className={`final-cta-card-part section-h3 font-bold text-white transition-colors duration-300 ${card.hoverTitle}`}
                      style={{ transitionDelay: `${partBase + 150}ms` }}
                    >
                      {card.title}
                    </h3>

                    <p
                      className="final-cta-card-part section-lead text-slate-300/95 mt-2 sm:mt-2.5 leading-relaxed"
                      style={{ transitionDelay: `${partBase + 210}ms` }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={card.onAction}
                    style={{ transitionDelay: `${partBase + 270}ms` }}
                    className={`final-cta-card-part final-cta-btn mt-6 sm:mt-8 w-full py-3 sm:py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-[13px] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] ${card.buttonClass}`}
                  >
                    <span>{card.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
