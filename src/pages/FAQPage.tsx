/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MessageCircle, ShieldCheck, Lock } from 'lucide-react';
import { usePageReveal } from '../hooks/usePageReveal';
import { FAQSection } from '../components/FAQSection';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { ALL_FAQS } from '../data/faqData';

interface FAQPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenContact }) => {
  const { ref: supportCtaRef, isVisible: supportCtaVisible } = usePageReveal(0.12);

  return (
    <PageShell>
      <div id="faq" className="faq-page">
      <PageHero
        enhanced
        align="center"
        wideCenter
        compact
        stackedHeadline
        subtitle="Master help-center answers on Centric verification, Master Key asset protection, security, consent, enterprise options, and getting started."
        subtitleClassName="page-hero-subtitle--balanced max-w-[min(100%,34rem)]"
        title={
          <>
            <span className="hero-line hero-line--single block text-[#0A0A0B]">
              How Can We{' '}
              <span className="hero-accent text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                Help You?
              </span>
            </span>
          </>
        }
      />

      <FAQSection
        enhanced
        fullPage
        showCategoryFilters
        showSearch
        suppressHeader
        items={ALL_FAQS}
      />

      </div>

      <section
        ref={supportCtaRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden"
        aria-labelledby="faq-support-cta-heading"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-40 bg-[#20C7B5]/8 blur-[72px] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-[12%] w-56 h-56 bg-[#4F6BFF]/10 blur-[64px] pointer-events-none page-end-cta-glow"
          aria-hidden
        />

        <div className="site-container relative z-10">
          <div className="page-end-cta-band">
          <div
            className={`page-end-cta-shell transition-all duration-1000 transform ${
              supportCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="page-end-cta-panel px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <h2
                id="faq-support-cta-heading"
                className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 ${
                  supportCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Still Have Questions?
              </h2>

              <p
                className={`section-lead page-end-cta-lead mt-3 sm:mt-4 transition-all duration-1000 ${
                  supportCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '320ms' }}
              >
                Our support and solutions teams are available to clarify any aspect of our platform.
              </p>

              <div
                className={`page-end-cta-actions mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-1000 ${
                  supportCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '440ms' }}
              >
                <button
                  type="button"
                  onClick={() => onOpenContact('general')}
                  className="site-nav-cta group inline-flex w-full sm:w-auto justify-center text-sm sm:text-[0.8125rem] px-5 sm:px-6"
                >
                  <MessageCircle className="w-4 h-4 text-[#20C7B5] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Contact Support</span>
                </button>
                <a
                  href="mailto:support@mycredaxis.com"
                  className="faq-support-email inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-100 hover:bg-slate-200/90 border border-slate-200/90 text-slate-800 font-semibold text-xs sm:text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Mail className="w-4 h-4 text-[#4F6BFF] shrink-0" aria-hidden />
                  Email support@mycredaxis.com
                </a>
              </div>

              <div
                className={`page-end-cta-trust mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold text-slate-600 transition-all duration-1000 ${
                  supportCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '540ms' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5]" aria-hidden />
                  RBI-Compliant Framework
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" aria-hidden />
                  PCI DSS Certified
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
