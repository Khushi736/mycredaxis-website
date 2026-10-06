/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePageReveal } from '../hooks/usePageReveal';
import { FAQSection } from '../components/FAQSection';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { SmartphoneMockup } from '../components/SmartphoneMockup';
import { StepsFlowSection, type StepsFlowStep } from '../components/StepsFlowSection';
import { PartnersCentricPOSSection, PartnersMasterKeySection } from '../components/PartnersProgramSections';
import { CirProfileMockupCard } from '../components/CirProfileMockupCard';
import { PARTNER_FAQS } from '../data/faqData';
import {
  Store,
  KeyRound,
  Coins,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  UserCheck,
  ClipboardCheck,
} from 'lucide-react';

interface PartnersPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenContact }) => {
  const { ref: reasonsRef, isVisible: reasonsVisible } = usePageReveal(0.08);
  const { ref: contactCtaRef, isVisible: contactCtaVisible } = usePageReveal(0.12);

  const reasons = [
    {
      icon: KeyRound,
      title: 'Offer Secured Device Financing (Master Key)',
      desc: 'Offer customers secured device financing with a built-in recovery mechanism.',
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      icon: Coins,
      title: 'Collect Payments Digitally',
      desc: 'Collect payments from your customers digitally under the MyCredAxis platform.',
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      icon: TrendingUp,
      title: 'No Infrastructure to Build',
      desc: 'Offer financing and collections without building your own infrastructure.',
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
  ];

  const partnerSteps: StepsFlowStep[] = [
    {
      num: '01',
      title: 'Apply to Become a Partner',
      desc: 'Contact us to apply to become a partner.',
      icon: FileCheck2,
      color: '#4F6BFF',
    },
    {
      num: '02',
      title: 'Review & Verification',
      desc: 'Our team reviews your business and use case.',
      icon: ClipboardCheck,
      color: '#20C7B5',
    },
    {
      num: '03',
      title: 'Platform Onboarding',
      desc: 'Onboard onto the MyCredAxis platform.',
      icon: UserCheck,
      color: '#4F6BFF',
    },
    {
      num: '04',
      title: 'Start Offering Financing',
      desc: 'Start offering financing and collections to your customers.',
      icon: TrendingUp,
      color: '#0A0A0B',
    },
  ];

  return (
    <PageShell>
      <PageHero
        stackedHeadline
        enhanced
        prominentPhone
        phoneGlow={false}
        title={
          <>
            <span className="hero-line block text-[#0A0A0B]">Grow Your Business</span>
            <span className="hero-line block">
              <span className="hero-accent text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                With MyCredAxis.
              </span>
            </span>
          </>
        }
        subtitle="Offer device financing and payment collection to your own customers — under the MyCredAxis platform, without building your own infrastructure."
        aside={
          <SmartphoneMockup
            perspective="isometric"
            interactive={false}
            screen="partner"
            cleanFrame
            className="drop-shadow-xl"
          />
        }
      >
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => onOpenContact('partner')}
            className="site-nav-cta group inline-flex w-full sm:w-auto justify-center"
          >
            <span>Ask About Becoming a Partner</span>
            <ArrowRight className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              Master Key Secured Protocol
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-[#4F6BFF]" />
              Bank-Authenticated E-Mandates
            </span>
          </div>
        </div>
      </PageHero>

      <PartnersCentricPOSSection onOpenCirLearnMore={() => onOpenContact('general')} />
      <PartnersMasterKeySection />

      <section
        ref={reasonsRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden fx-page"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-amber-500/8 via-[#4F6BFF]/6 to-[#20C7B5]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10">
          <header className="w-full mb-10 sm:mb-14">
            <h2
              className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight business-capabilities-heading transition-all duration-1000 transform ${
                reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              Why Partner with MyCredAxis.
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const delay = 240 + i * 100;
              return (
                <article
                  key={r.title}
                  className={`business-cap-card fintech-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col h-full group transition-all duration-700 transform hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300/90 ${
                    reasonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div
                      className={`business-cap-card-icon w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl sm:rounded-2xl ${r.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: r.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={2.1} />
                    </div>
                    <h3 className="business-cap-card-title section-h3 font-bold text-[#0A0A0B] leading-snug flex-1 min-w-0 pt-0.5 transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{r.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <StepsFlowSection
        id="partners-how-it-works"
        title={
          <>
            How Partnership{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
              Works.
            </span>
          </>
        }
        titleAlign="left"
        stepCardLayout="step"
        subtitle="Apply, get verified, onboard, and launch financing for your customers—without building infrastructure from scratch."
        steps={partnerSteps}
      />

      <FAQSection
        enhanced
        titleSingleLine
        items={PARTNER_FAQS}
        title="Frequently Asked Questions for Partners"
        subtitle="POS verification, Master Key, partnership onboarding, enterprise options, security, and platform overview—updated and legacy FAQs together."
      />

      <section
        ref={contactCtaRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden"
        aria-labelledby="partners-contact-cta-heading"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-40 bg-amber-500/8 blur-[72px] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-[8%] w-56 h-56 bg-[#4F6BFF]/10 blur-[64px] pointer-events-none page-end-cta-glow"
          aria-hidden
        />

        <div className="site-container relative z-10">
          <div className="page-end-cta-band page-end-cta-band--partners page-end-cta-band--with-cir w-full max-w-none">
          <div
            className={`page-end-cta-shell page-end-cta-shell--partners transition-all duration-1000 transform ${
              contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="page-end-cta-panel page-end-cta-panel--partners page-end-cta-panel--with-cir px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
              <div className="page-end-cta-panel-main">
              <h2
                id="partners-contact-cta-heading"
                className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight page-end-cta-title page-end-cta-title--partners transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Ready to Expand Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                  Customer Financing?
                </span>
              </h2>

              <p
                className={`section-lead page-end-cta-lead mt-3 sm:mt-4 transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '320ms' }}
              >
                Terms are discussed directly with our partnerships team. Contact us for current details.
              </p>

              <div
                className={`page-end-cta-actions mt-6 sm:mt-8 transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '440ms' }}
              >
                <button
                  type="button"
                  onClick={() => onOpenContact('partner')}
                  className="site-nav-cta group inline-flex w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-[0.8125rem] px-5 sm:px-6"
                >
                  <Store className="w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Ask About Becoming a Partner</span>
                </button>
              </div>

              <div
                className={`page-end-cta-trust mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold text-slate-600 transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '540ms' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5]" aria-hidden />
                  Master Key Secured Protocol
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" aria-hidden />
                  Bank-Authenticated E-Mandates
                </span>
              </div>
              </div>
              <aside className="page-end-cta-panel-aside" aria-label="Centric Identity Report preview">
                <CirProfileMockupCard
                  variant="embedded"
                  onInspectClick={() => onOpenContact('general')}
                />
              </aside>
            </div>
          </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
};
