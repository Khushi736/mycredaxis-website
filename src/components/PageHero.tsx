/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePageReveal } from '../hooks/usePageReveal';

type PageHeroProps = {
  title: React.ReactNode;
  subtitle: string;
  align?: 'left' | 'center';
  aside?: React.ReactNode;
  children?: React.ReactNode;
  /** Staggered multi-line headline (homepage-style `.hero-line`) */
  stackedHeadline?: boolean;
  /** Dot grid, orbs, and floating phone glow */
  enhanced?: boolean;
  /** Keep the hero title on one line from large breakpoints up (e.g. with phone aside). */
  titleSingleLine?: boolean;
  /** Wider centered copy block (no phone aside — e.g. FAQ). */
  wideCenter?: boolean;
  subtitleClassName?: string;
  /** Tighter space below hero before the next section (e.g. FAQ toolbar). */
  compact?: boolean;
  /** Larger in-frame phone scale (dense app UI mockups — Individuals / Business). */
  prominentPhone?: boolean;
  /** Soft gradient behind the phone (off for a cleaner aside). */
  phoneGlow?: boolean;
};

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  align = 'left',
  aside,
  children,
  stackedHeadline = false,
  enhanced = false,
  titleSingleLine = false,
  wideCenter = false,
  subtitleClassName = '',
  compact = false,
  prominentPhone = false,
  phoneGlow = true,
}) => {
  const { ref, isVisible } = usePageReveal();

  const revealClass = (visible: boolean) =>
    `page-reveal transition-all duration-1000 transform ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  const sectionClass = [
    'page-hero',
    align === 'center' ? 'page-hero--center' : '',
    enhanced ? 'page-hero--enhanced' : '',
    compact ? 'page-hero--compact' : '',
    isVisible ? 'page-hero--in-view' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={sectionClass}>
      {enhanced && (
        <>
          <div
            className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"
            aria-hidden
          />
          <div className="fx-orb left-[6%] top-12 h-36 w-36 bg-[#4F6BFF]/18 pointer-events-none" aria-hidden />
          <div className="fx-orb right-[12%] bottom-6 h-44 w-44 bg-[#20C7B5]/14 [animation-delay:1.2s] pointer-events-none" aria-hidden />
        </>
      )}
      <div className="page-hero-glow page-hero-glow-a pointer-events-none" aria-hidden />
      <div className="page-hero-glow page-hero-glow-b pointer-events-none" aria-hidden />

      <div
        className={`site-container relative z-10 ${
          aside
            ? `grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center`
            : ''
        }`}
      >
        <div
          className={
            aside
              ? 'lg:col-span-7 space-y-4 sm:space-y-5 lg:pr-6 min-w-0'
              : align === 'center'
                ? `page-hero-copy--center mx-auto space-y-4 sm:space-y-5 text-center w-full ${
                    wideCenter ? 'page-hero-copy--wide' : 'max-w-[min(100%,40rem)]'
                  }`
                : 'max-w-3xl space-y-4 sm:space-y-5 min-w-0'
          }
        >
          <h1
            id="page-hero-heading"
            className={`page-hero-title ${align === 'center' ? 'text-center w-full' : ''} ${
              titleSingleLine ? 'page-hero-title--single-line' : ''
            } ${stackedHeadline ? 'hero-headline font-extrabold' : revealClass(isVisible)}`}
            style={stackedHeadline ? undefined : { transitionDelay: '120ms' }}
          >
            {title}
          </h1>

          <p
            className={`section-lead text-slate-600 max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${subtitleClassName} ${revealClass(isVisible)}`.trim()}
            style={{ transitionDelay: '220ms' }}
          >
            {subtitle}
          </p>

          {children && (
            <div className={revealClass(isVisible)} style={{ transitionDelay: '320ms' }}>
              {children}
            </div>
          )}
        </div>

        {aside && (
          <div
            className={`page-hero-aside lg:col-span-5 w-full min-w-0 max-w-full flex justify-center lg:justify-end ${
              prominentPhone ? 'overflow-visible' : 'overflow-hidden'
            } ${revealClass(isVisible)}`}
            style={{ transitionDelay: enhanced ? '420ms' : '400ms' }}
          >
            {enhanced ? (
              <div
                className={`page-hero-phone-frame${prominentPhone ? ' page-hero-phone-frame--prominent' : ''}${
                  !phoneGlow ? ' page-hero-phone-frame--no-glow' : ''
                }`}
              >
                {phoneGlow && <div className="page-hero-phone-glow pointer-events-none" aria-hidden />}
                <div className="page-hero-phone-scaler">
                  <div className="page-hero-phone-float">{aside}</div>
                </div>
              </div>
            ) : (
              aside
            )}
          </div>
        )}
      </div>
    </section>
  );
};
