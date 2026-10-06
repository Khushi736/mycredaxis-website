/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Lock, FileCheck2 } from 'lucide-react';
import { usePageReveal } from '../hooks/usePageReveal';
import { FAQSection } from '../components/FAQSection';
import { PageShell } from '../components/PageShell';
import { PageHero } from '../components/PageHero';
import { SmartphoneMockup } from '../components/SmartphoneMockup';
import { ALL_FAQS } from '../data/faqData';

export const SecurityPage: React.FC = () => {
  const { ref: complianceRef, isVisible: complianceVisible } = usePageReveal(0.08);
  const { ref: trustRef, isVisible: trustVisible } = usePageReveal(0.12);

  const securityFaqs = ALL_FAQS.filter((f) => f.category === 'security');

  const cardsData = [
    {
      title: 'RBI Compliant',
      icon: ShieldCheck,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: '#20C7B5',
      description:
        'MyCredAxis strictly follows an RBI-compliant approach to all payments and explicit customer consent frameworks.',
    },
    {
      title: 'PCI DSS Certified',
      icon: Lock,
      iconBg: 'bg-[#EEF2FF]',
      iconColor: '#4F6BFF',
      description:
        'We maintain PCI DSS Certification, ensuring that all sensitive card and payment details are processed with the highest security standards.',
    },
    {
      title: 'NPCI Compliant',
      icon: FileCheck2,
      iconBg: 'bg-emerald-50',
      iconColor: '#059669',
      description:
        'Our platform strictly abides by NPCI compliance requirements for UPI Autopay and electronic mandate generation.',
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
            <span className="hero-line block text-[#0A0A0B]">Trust, Built Into Every</span>
            <span className="hero-line block">
              <span className="hero-accent text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] via-[#3854E0] to-[#20C7B5] why-heading-accent">
                Single Layer.
              </span>
            </span>
          </>
        }
        subtitle="Sensitive banking credentials are never stored. Every mandate and financing arrangement requires verified customer consent."
        aside={
          <SmartphoneMockup
            perspective="isometric"
            interactive={false}
            cleanFrame
            className="drop-shadow-xl"
          />
        }
      />

      <section
        ref={complianceRef as React.RefObject<HTMLElement>}
        className="page-section page-section--white relative overflow-hidden fx-page"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-[#20C7B5]/8 via-[#4F6BFF]/6 to-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cardsData.map((card, idx) => {
              const Icon = card.icon;
              const delay = 240 + idx * 100;
              return (
                <article
                  key={card.title}
                  className={`business-cap-card fintech-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white border border-slate-200/90 flex flex-col h-full group transition-all duration-700 transform hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-300/90 ${
                    complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div
                      className={`business-cap-card-icon w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl sm:rounded-2xl ${card.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                      style={{ color: card.iconColor }}
                    >
                      <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={2.1} />
                    </div>
                    <h3 className="section-h3 font-bold text-[#0A0A0B] leading-snug flex-1 min-w-0 pt-0.5 transition-colors duration-300 group-hover:text-[#4F6BFF]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={trustRef as React.RefObject<HTMLElement>}
        className="page-section page-section--dark fx-consent relative overflow-hidden"
        aria-labelledby="security-trust-heading"
      >
        <div className="data-consent-section-grid pointer-events-none" aria-hidden />
        <div
          className="absolute top-0 right-0 w-[min(100%,520px)] h-56 bg-[#4F6BFF]/12 blur-[88px] pointer-events-none data-consent-ambient"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-[8%] w-64 h-64 bg-[#20C7B5]/12 blur-[72px] pointer-events-none data-consent-ambient data-consent-ambient--delayed"
          aria-hidden
        />

        <div className="site-container relative z-10">
          <div
            className={`consent-banner-shell data-consent-panel transition-all duration-1000 transform ${
              trustVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
            role="region"
            aria-label="Security and consent guarantee"
          >
            <div className="consent-banner-inner data-consent-inner-pro px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div
                className={`data-consent-lock consent-shield-wrap mb-5 sm:mb-6 transition-all duration-700 ${
                  trustVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: '220ms' }}
              >
                <Lock className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
              </div>

              <h2
                id="security-trust-heading"
                className={`section-h2 font-extrabold text-white tracking-tight data-consent-heading transition-all duration-1000 ${
                  trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '340ms' }}
              >
                Sensitive Banking Credentials Are Never Stored — and Every Financing Arrangement Requires Verified
                Customer Consent.
              </h2>

              <p
                className={`data-consent-lead section-lead mt-4 sm:mt-5 text-pretty transition-all duration-1000 ${
                  trustVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '420ms' }}
              >
                Every mandate requires the customer's bank-authenticated approval. Nothing is debited without consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        enhanced
        titleSingleLine
        items={securityFaqs}
        title="Security & Trust Questions"
        subtitle="Learn how MyCredAxis approaches security, compliance, and customer consent."
      />
    </PageShell>
  );
};
