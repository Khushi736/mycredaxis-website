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
import { CentricForBusinessSection } from '../components/CentricForBusinessSection';
import { CirProfileMockupCard } from '../components/CirProfileMockupCard';
import { BUSINESS_FAQS } from '../data/faqData';
import {
  Building2,
  RotateCw,
  BarChart3,
  UserCheck,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  LineChart,
} from 'lucide-react';

interface BusinessPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onOpenContact }) => {
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = usePageReveal(0.08);
  const { ref: outcomesRef, isVisible: outcomesVisible } = usePageReveal(0.1);
  const { ref: contactCtaRef, isVisible: contactCtaVisible } = usePageReveal(0.12);

  const capabilities = [
    {
      title: 'Automated Collections',
      desc: 'Bank-authorized recurring payments for EMIs, subscriptions, and dealer receivables via e-NACH and UPI Autopay.',
      icon: RotateCw,
      color: '#4F6BFF',
      bg: 'bg-[#EEF2FF]',
    },
    {
      title: 'Real-Time MIS & Analytics',
      desc: 'Get visibility into collections and cash flow through real-time dashboards.',
      icon: BarChart3,
      color: '#20C7B5',
      bg: 'bg-[#ECFDF5]',
    },
    {
      title: 'Merchant & Dealer Onboarding',
      desc: 'Quick digital KYC to onboard merchants and dealers.',
      icon: UserCheck,
      color: '#0A0A0B',
      bg: 'bg-slate-100',
    },
    {
      title: 'Smart Payment Reminders',
      desc: 'Automated reminders through WhatsApp, SMS, email, and IVR before a payment is late.',
      icon: MessageSquare,
      color: '#8B5CF6',
      bg: 'bg-[#F5F3FF]',
    },
  ];

  const benefits = [
    'Lower collection cost',
    'Predictable cash inflow',
    'Built-in recovery via Master Key for financed devices and equipment',
    'Easier scaling as your customer base grows',
  ];

  const receivablesSteps: StepsFlowStep[] = [
    {
      num: '01',
      title: 'Onboard',
      desc: 'Complete merchant onboarding.',
      icon: UserCheck,
      color: '#4F6BFF',
    },
    {
      num: '02',
      title: 'Set Up Mandates',
      desc: 'Set up bank-authorized payment mandates.',
      icon: RotateCw,
      color: '#20C7B5',
    },
    {
      num: '03',
      title: 'Process Payments',
      desc: 'Payments and collections are processed automatically.',
      icon: BarChart3,
      color: '#4F6BFF',
    },
    {
      num: '04',
      title: 'Track in Real Time',
      desc: 'Track collections in real time.',
      icon: LineChart,
      color: '#20C7B5',
    },
    {
      num: '05',
      title: 'Get Paid Reliably',
      desc: 'Get paid reliably every cycle.',
      icon: CheckCircle2,
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
            <span className="hero-line hero-line--single block text-[#0A0A0B]">
              Get Paid On Time, Every{' '}
              <span className="hero-accent text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                Time.
              </span>
            </span>
          </>
        }
        subtitle="Automate collections, reduce manual follow-up, and get full visibility into your cash flow — without adding headcount."
        aside={
          <SmartphoneMockup
            perspective="isometric"
            interactive={false}
            screen="mandate"
            className="drop-shadow-xl"
          />
        }
      >
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => onOpenContact('business')}
            className="site-nav-cta group inline-flex w-full sm:w-auto justify-center"
          >
            <span>Talk to Our Team / Request a Demo</span>
            <ArrowRight className="w-4 h-4 text-[#20C7B5] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20C7B5]" />
              RBI-Compliant Framework
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#4F6BFF]" />
              PCI DSS Certified
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              NPCI Compliant
            </span>
          </div>
        </div>
      </PageHero>

      <CentricForBusinessSection onCirInspect={() => onOpenContact('general')} />

      <section
        ref={capabilitiesRef as React.RefObject<HTMLElement>}
        className="page-section page-section--muted relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#4F6BFF]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10">
          <header className="w-full mb-10 sm:mb-14">
            <h2
              className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight business-capabilities-heading transition-all duration-1000 transform ${
                capabilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '120ms' }}
            >
              What MyCredAxis Does for Your Business.
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const delay = 240 + i * 100;
              return (
                <article
                  key={cap.title}
                  className={`business-cap-card fintech-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col h-full group transition-all duration-700 transform hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300/90 ${
                    capabilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div
                      className={`business-cap-card-icon w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl sm:rounded-2xl ${cap.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: cap.color }}
                    >
                      <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={2.1} />
                    </div>
                    <h3 className="business-cap-card-title section-h3 font-bold text-[#0A0A0B] leading-snug flex-1 min-w-0 pt-0.5 transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {cap.desc}
                  </p>
                </article>
              );
            })}
          </div>

          <div
            ref={outcomesRef as React.RefObject<HTMLDivElement>}
            className={`mt-10 sm:mt-14 business-outcomes-shell transition-all duration-1000 transform ${
              outcomesVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-10'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            <div className="business-outcomes-panel overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="business-outcomes-header px-6 py-5 sm:px-8 sm:py-6 lg:px-10">
                <h3 className="section-h3 font-bold text-white tracking-tight">Key Business Outcomes</h3>
              </div>
              <div className="business-outcomes-body p-5 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.map((b, idx) => (
                    <div
                      key={b}
                      className={`business-outcome-tile group transition-all duration-700 ${
                        outcomesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}
                      style={{ transitionDelay: `${280 + idx * 90}ms` }}
                    >
                      <div className="business-outcome-tile-icon" aria-hidden>
                        <CheckCircle2 className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] text-[#20C7B5]" strokeWidth={2.25} />
                      </div>
                      <p className="business-outcome-tile-text">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StepsFlowSection
        title="From Customer Onboarding to Faster Payments"
        titleAccent="Onboarding to Faster Payments"
        titleAlign="left"
        stepCardLayout="stage"
        steps={receivablesSteps}
      />

      <FAQSection
        enhanced
        titleSingleLine
        items={BUSINESS_FAQS}
        title="Frequently Asked Questions for Businesses"
        subtitle="Centric verification, collections, onboarding, compliance, and pricing—clear answers for your team."
      />

      <section
        ref={contactCtaRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden"
        aria-labelledby="business-contact-cta-heading"
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
              contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="page-end-cta-panel page-end-cta-panel--with-cir px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <div className="page-end-cta-panel-main">
              <h2
                id="business-contact-cta-heading"
                className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight page-end-cta-title transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Automate Your Collections Today.
              </h2>

              <p
                className={`section-lead page-end-cta-lead mt-3 sm:mt-4 transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '320ms' }}
              >
                Talk to our team about automating your collections.
              </p>

              <div
                className={`page-end-cta-actions mt-6 sm:mt-8 transition-all duration-1000 ${
                  contactCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '440ms' }}
              >
                <button
                  type="button"
                  onClick={() => onOpenContact('business')}
                  className="site-nav-cta group inline-flex w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-[0.8125rem] px-5 sm:px-6"
                >
                  <Building2 className="w-4 h-4 text-[#20C7B5] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>Talk to Our Team</span>
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
