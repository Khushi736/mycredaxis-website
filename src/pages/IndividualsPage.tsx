/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePageReveal } from '../hooks/usePageReveal';
import { SmartphoneMockup } from '../components/SmartphoneMockup';
import { FAQSection } from '../components/FAQSection';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { StepsFlowSection, type StepsFlowStep } from '../components/StepsFlowSection';
import { CentricForIndividualsSection } from '../components/CentricForIndividualsSection';
import { CirProfileMockupCard } from '../components/CirProfileMockupCard';
import { INDIVIDUAL_FAQS } from '../data/faqData';
import {
  Download,
  Gauge,
  Wallet,
  CalendarCheck,
  Award,
  Sparkles,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  LineChart,
  Receipt,
  ScanFace,
  ArrowLeftRight,
} from 'lucide-react';

interface IndividualsPageProps {
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const IndividualsPage: React.FC<IndividualsPageProps> = ({ onOpenDownload, onOpenContact }) => {
  const { ref: comingSoonRef, isVisible: comingSoonVisible } = usePageReveal(0.1);
  const { ref: dataConsentRef, isVisible: dataConsentVisible } = usePageReveal(0.12);
  const { ref: downloadCtaRef, isVisible: downloadCtaVisible } = usePageReveal(0.12);

  const dataConsentTrustPoints = [
    { icon: ShieldCheck, label: 'No stored banking credentials' },
    { icon: CheckCircle2, label: 'Bank-verified before any debit' },
    { icon: Lock, label: 'Credit checks only with your consent' },
  ];

  const comingSoonItems = [
    {
      title: 'Bill Payments via BBPS',
      desc: 'Electricity, water, gas, telecom, DTH, insurance, and even traffic challans, in one place.',
      icon: Receipt,
      iconBg: 'bg-[#EEF2FF]',
      iconColor: 'text-[#4F6BFF]',
    },
    {
      title: 'Cash Without a Card',
      desc: '[Biometric ID Redacted]-based biometric cash withdrawal (AePS).',
      icon: ScanFace,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#20C7B5]',
    },
    {
      title: 'Cash-to-Bank Transfer',
      desc: 'Deposit cash at a partner shop for transfer to a bank account in India via DMT/IMPS.',
      icon: ArrowLeftRight,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  const capabilities = [
    {
      title: 'Check your credit',
      desc: "See your score and what's affecting it, whenever you want, with consent.",
      icon: Gauge,
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
    {
      title: 'Manage your wallet',
      desc: 'One balance for bills, EMIs, and everyday payments.',
      icon: Wallet,
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      title: 'Pay every bill & EMI',
      desc: 'Keep bills and EMIs together and track your payments in one place.',
      icon: CalendarCheck,
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      title: 'Earn rewards',
      desc: 'Get recognized for paying on time, not just for spending. Good financial habits deserve tangible returns.',
      icon: Award,
      color: '#8B5CF6',
      bg: 'bg-[#F5F3FF]',
    },
  ];

  const rewardPillars = [
    {
      title: 'Credit Health',
      desc: 'Every on-time payment works toward your credit health.',
      icon: Gauge,
      color: '#20C7B5',
      iconBg: 'bg-[#20C7B5]/15',
      cardClass: 'reward-pillar-card--teal',
    },
    {
      title: 'Rewards',
      desc: 'Get recognized for staying on top of your payments.',
      icon: Award,
      color: '#4F6BFF',
      iconBg: 'bg-[#4F6BFF]/15',
      cardClass: 'reward-pillar-card--indigo',
    },
    {
      title: 'Good Habits',
      desc: 'Rewards recognize on-time payments, not just spending.',
      icon: Sparkles,
      color: '#FBBF24',
      iconBg: 'bg-amber-500/15',
      cardClass: 'reward-pillar-card--amber',
    },
  ];

  const peaceSteps: StepsFlowStep[] = [
    {
      num: '01',
      title: 'Sign up & verify with digital KYC',
      desc: 'Complete digital KYC to get started.',
      icon: UserCheck,
      color: '#4F6BFF',
    },
    {
      num: '02',
      title: 'Set up your wallet or payment mandate',
      desc: 'Link your primary bank account with bank-authenticated consent.',
      icon: Wallet,
      color: '#20C7B5',
    },
    {
      num: '03',
      title: 'Pay bills, EMIs, and manage credit',
      desc: 'Manage your payments and credit in one app.',
      icon: CalendarCheck,
      color: '#4F6BFF',
    },
    {
      num: '04',
      title: 'Track everything in real time',
      desc: 'See what is due and what is already paid.',
      icon: LineChart,
      color: '#20C7B5',
    },
    {
      num: '05',
      title: 'Get rewarded for staying on schedule',
      desc: 'Get recognized for paying on time.',
      icon: Award,
      color: '#0A0A0B',
    },
  ];

  return (
    <PageShell>
      <PageHero
        stackedHeadline
        enhanced
        prominentPhone
        title={
          <>
            <span className="hero-line block text-[#0A0A0B]">Pay Smarter. Get</span>
            <span className="hero-line block">
              <span className="text-[#0A0A0B]">Rewarded. </span>
              <span className="hero-accent text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                Bank Simpler.
              </span>
            </span>
          </>
        }
        subtitle="Check your credit, manage your wallet, and pay every bill & EMI — all from one app that recognizes you for staying on top of your money."
        aside={
          <SmartphoneMockup
            perspective="isometric"
            interactive={false}
            screen="rewards"
            className="drop-shadow-xl"
          />
        }
      >
        <div className="space-y-4">
          <button
            type="button"
            onClick={onOpenDownload}
            className="site-nav-cta group inline-flex w-full sm:w-auto justify-center"
          >
            <Download className="w-4 h-4 text-[#20C7B5] shrink-0" />
            <span>Download the App</span>
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5]" />
              RBI-Compliant
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" />
              PCI DSS Certified
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
              NPCI Compliant
            </span>
          </div>
        </div>
      </PageHero>

      <CentricForIndividualsSection onOpenCirLearnMore={() => onOpenContact('general')} />

      <section className="page-section page-section--muted">
        <div className="site-container">
          <div className="w-full max-w-none mb-10 sm:mb-14">
            <h2 className="section-h2 business-capabilities-heading font-extrabold text-[#0A0A0B] tracking-tight">
              Unlock More With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                MyCredAxis
              </span>
            </h2>
          </div>

          {/* Grid Layout: 2 Columns on Mobile, 4 on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const delay = 200 + i * 100;
              return (
                <div
                  key={i}
                  className="fintech-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white border border-slate-200/90 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                  style={{ animationFillMode: 'both', animationDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-xl sm:rounded-2xl ${cap.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="section-h3 font-bold text-[#0A0A0B] leading-snug flex-1 min-w-0 pt-0.5 transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section page-section--dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#4F6BFF]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#20C7B5]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="w-full max-w-none space-y-4 mb-10 sm:mb-14">
            <h2 className="section-h2 section-h2--long font-extrabold text-white tracking-tight">
              Pay On Time.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                Get More Back.
              </span>
            </h2>
            <p className="section-lead w-full max-w-none text-slate-300 text-pretty">
              Build healthier credit habits, strengthen your credit profile, and unlock meaningful rewards simply by
              staying consistent with your payments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rewardPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className={`reward-pillar-card fintech-card-dark group rounded-2xl sm:rounded-3xl p-5 sm:p-7 h-full flex flex-col ${pillar.cardClass}`}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                    <div
                      className={`reward-pillar-icon w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl ${pillar.iconBg} flex items-center justify-center ring-1 ring-white/10`}
                      style={{ color: pillar.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} />
                    </div>
                    <h3 className="section-h3 font-bold text-white leading-snug min-w-0 flex-1 pt-1 group-hover:text-white/95 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="reward-pillar-desc text-slate-400 flex-1">{pillar.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <StepsFlowSection
        title="Five Steps toward Financial Freedom"
        titleAccent="Financial Freedom"
        titleAlign="left"
        stepCardLayout="stacked"
        steps={peaceSteps}
        consent={{
          eyebrow: 'Bank Consent Guarantee',
          body: 'Every payment mandate needs your bank-authenticated approval first. Nothing moves without your consent.',
          pill: 'Bank-Gateways Verified',
        }}
      />

      <section ref={comingSoonRef as React.RefObject<HTMLElement>} className="page-section page-section--muted relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-amber-500/8 via-[#4F6BFF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10">
          <header className="w-full mb-10 sm:mb-14">
            <h2
              className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${
                comingSoonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              Coming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                Soon for You.
              </span>
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
            {comingSoonItems.map((item, index) => {
              const Icon = item.icon;
              const delay = 280 + index * 120;
              return (
                <article
                  key={item.title}
                  className={`coming-soon-card fintech-card group rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 bg-white flex flex-col h-full transition-all duration-700 transform ${
                    comingSoonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  } hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-200/90`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                    <div
                      className={`coming-soon-card-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}
                      aria-hidden
                    >
                      <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={2.1} />
                    </div>
                    <h3 className="section-h3 font-bold text-[#0A0A0B] leading-snug min-w-0 flex-1 pt-0.5 group-hover:text-[#4F6BFF] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={dataConsentRef as React.RefObject<HTMLElement>}
        className="page-section page-section--dark fx-consent relative overflow-hidden"
        aria-labelledby="individuals-data-consent-heading"
      >
        <div className="data-consent-section-grid pointer-events-none" aria-hidden />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,820px)] h-56 bg-[#20C7B5]/12 blur-[88px] pointer-events-none data-consent-ambient"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-[6%] w-72 h-72 bg-[#4F6BFF]/14 blur-[80px] pointer-events-none data-consent-ambient data-consent-ambient--delayed"
          aria-hidden
        />

        <div className="site-container relative z-10">
          <div
            className={`consent-banner-shell data-consent-panel transition-all duration-1000 transform ${
              dataConsentVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
            role="region"
            aria-label="Data privacy and consent"
          >
            <div className="consent-banner-inner data-consent-inner-pro px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div
                className={`data-consent-heading-row flex items-center gap-3.5 sm:gap-5 transition-all duration-1000 ${
                  dataConsentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '280ms' }}
              >
                <div
                  className={`data-consent-lock consent-shield-wrap shrink-0 transition-all duration-700 ${
                    dataConsentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '220ms' }}
                >
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
                </div>

                <h2
                  id="individuals-data-consent-heading"
                  className="section-h2 font-extrabold text-white mt-0 tracking-tight data-consent-heading min-w-0 flex-1"
                >
                  Your Data,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                    Your Consent.
                  </span>
                </h2>
              </div>

              <p
                className={`data-consent-lead section-lead mt-4 sm:mt-5 text-pretty transition-all duration-1000 ${
                  dataConsentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '420ms' }}
              >
                We never store your banking credentials, and nothing is ever debited without your explicit,
                bank-verified approval. Your credit checks are consent-based — we only look when you ask us to.
              </p>

              <ul className="data-consent-trust-grid mt-9 sm:mt-11 list-none p-0 m-0">
                {dataConsentTrustPoints.map((point, index) => {
                  const PointIcon = point.icon;
                  const chipDelay = 520 + index * 110;
                  return (
                    <li
                      key={point.label}
                      className={`data-consent-trust-card group transition-all duration-700 ${
                        dataConsentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${chipDelay}ms` }}
                    >
                      <div className="data-consent-trust-icon" aria-hidden>
                        <PointIcon className="w-[1.125rem] h-[1.125rem] sm:w-5 sm:h-5 text-[#20C7B5]" strokeWidth={2.1} />
                      </div>
                      <span className="data-consent-trust-label">{point.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Individual FAQ */}
      <FAQSection
        enhanced
        titleSingleLine
        items={INDIVIDUAL_FAQS}
        title="Frequently Asked Questions for Individuals"
        titleAccent="for Individuals"
        subtitle=""
      />

      <section
        ref={downloadCtaRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden"
        aria-labelledby="individuals-download-cta-heading"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,640px)] h-40 bg-[#4F6BFF]/8 blur-[72px] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-[8%] w-56 h-56 bg-[#20C7B5]/10 blur-[64px] pointer-events-none page-end-cta-glow"
          aria-hidden
        />

        <div className="site-container relative z-10">
          <div className="page-end-cta-band page-end-cta-band--with-cir">
          <div
            className={`page-end-cta-shell transition-all duration-1000 transform ${
              downloadCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="page-end-cta-panel page-end-cta-panel--with-cir px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <div className="page-end-cta-panel-main">
              <h2
                id="individuals-download-cta-heading"
                className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight page-end-cta-title transition-all duration-1000 ${
                  downloadCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Ready to Experience{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                  MyCredAxis?
                </span>
              </h2>

              <p
                className={`section-lead page-end-cta-lead mt-3 sm:mt-4 transition-all duration-1000 ${
                  downloadCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '320ms' }}
              >
                Download the MyCredAxis app and manage your credit, wallet, and payments in one place.
              </p>

              <div
                className={`page-end-cta-actions mt-6 sm:mt-8 transition-all duration-1000 ${
                  downloadCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '440ms' }}
              >
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="site-nav-cta group inline-flex w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-[0.8125rem] px-5 sm:px-6"
                >
                  <Download className="w-4 h-4 text-[#20C7B5] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Download MyCredAxis App</span>
                </button>
              </div>

              <div
                className={`page-end-cta-trust mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-semibold text-slate-600 transition-all duration-1000 ${
                  downloadCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '540ms' }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#20C7B5]" aria-hidden />
                  RBI-Compliant
                </span>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" aria-hidden />
                  Rewards on on-time payments
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