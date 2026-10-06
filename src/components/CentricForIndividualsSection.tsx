/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePageReveal } from '../hooks/usePageReveal';
import { centricCompareWrapStyle } from '../utils/centricCompareStyles';
import {
  Smartphone,
  MessageSquare,
  Share2,
  Zap,
  Shield,
  Globe,
  Files,
  Layers,
  Lock,
  ShieldAlert,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SmartphoneMockup } from './SmartphoneMockup';

type CentricForIndividualsSectionProps = {
  onOpenCirLearnMore?: () => void;
};

type CentricIndFeatureCardProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconWrapClassName: string;
  isVisible: boolean;
  delayMs: number;
  eyebrow?: string;
  /** Icon beside title (How / Why cards). Stack layout when eyebrow is set. */
  iconBesideTitle?: boolean;
};

const CentricIndFeatureCard: React.FC<CentricIndFeatureCardProps> = ({
  title,
  desc,
  icon: Icon,
  iconWrapClassName,
  isVisible,
  delayMs,
  eyebrow,
  iconBesideTitle = true,
}) => {
  const useInlineHead = iconBesideTitle && !eyebrow;

  return (
    <div
      className={`centric-ind-feature-card fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group centric-ind-reveal ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {eyebrow ? (
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 mb-2">{eyebrow}</p>
      ) : null}

      {useInlineHead ? (
        <div className="centric-ind-feature-head flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-3.5 min-w-0">
          <div
            className={`centric-ind-feature-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconWrapClassName}`}
          >
            <Icon className="w-5 h-5" aria-hidden />
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight leading-snug text-pretty pt-1 sm:pt-1.5 min-w-0 flex-1">
            {title}
          </h3>
        </div>
      ) : (
        <>
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 ${iconWrapClassName}`}
          >
            <Icon className="w-5 h-5" aria-hidden />
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">{title}</h3>
        </>
      )}

      <p
        className={`text-xs sm:text-sm text-slate-600 leading-relaxed flex-1 ${
          useInlineHead ? '' : 'mt-2'
        }`}
      >
        {desc}
      </p>
    </div>
  );
};

type CompareRow = {
  id: string;
  traditionalTitle: string;
  traditionalDesc: string;
  centricTitle: string;
  centricDesc: string;
};

const COMPARE_ROWS: CompareRow[] = [
  {
    id: 'clutter',
    traditionalTitle: 'Paper Clutter & Scatter',
    traditionalDesc:
      'Gathering salary slips, bank statements, PAN copies, and bureau reports manually across multiple portals.',
    centricTitle: 'All-in-One Snapshot',
    centricDesc:
      'One consent pull consolidates identity, credit health, employment, address, and banking instantly.',
  },
  {
    id: 'privacy',
    traditionalTitle: 'Zero Privacy Control',
    traditionalDesc:
      'Emailing unencrypted files or handing over physical copies that linger permanently in inbox attachments and file cabinets.',
    centricTitle: 'Granular Access Control',
    centricDesc: 'You decide who views your profile and for how long. Revoke access whenever you choose.',
  },
  {
    id: 'fraud',
    traditionalTitle: 'High Fraud Risk',
    traditionalDesc:
      'Sharing raw, sensitive financial documents exposes you to identity theft and unauthorized data misuse.',
    centricTitle: 'Bank-Grade Security',
    centricDesc:
      'Encrypted digital transmission ensures your raw documents are never directly exposed.',
  },
];

const HOW_STEPS = [
  {
    title: 'Enter Mobile Number',
    desc: 'Start verification directly using your registered phone number.',
    icon: Smartphone,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'One-Touch OTP Consent',
    desc: 'Approve data access via a secure SMS OTP. Nothing is ever accessed without your explicit command.',
    icon: MessageSquare,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Generate & Share Instantly',
    desc: 'Your unified financial report is generated on the spot, ready to share securely via a time-sensitive access link.',
    icon: Share2,
    iconWrapClassName: 'bg-[#EFF6FF] text-[#4F6BFF]',
  },
];

const WHY_CENTRIC = [
  {
    title: 'Speed & Convenience',
    desc: 'Replace a full folder of physical documents with a single digital report in less than 60 seconds.',
    icon: Zap,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'Privacy First',
    desc: 'Unlike email attachments or photocopies, your shared report stays under your active control.',
    icon: Shield,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Universal Acceptance',
    desc: 'Delivered in a standardized, verified format trusted by landlords, background checkers, and financial service providers.',
    icon: Globe,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
];

const COMPARE_ICON_TRAD = 'bg-slate-100 text-slate-600';
const COMPARE_ICON_CENTRIC = ['bg-[#EEF2FF] text-[#4F6BFF]', 'bg-[#ECFDF5] text-[#20C7B5]', 'bg-[#EFF6FF] text-[#4F6BFF]'] as const;
const COMPARE_TRAD_ICONS = [Files, Lock, ShieldAlert] as const;
const COMPARE_CENTRIC_ICONS = [Layers, Shield, ShieldAlert] as const;

export const CentricForIndividualsSection: React.FC<CentricForIndividualsSectionProps> = ({
  onOpenCirLearnMore,
}) => {
  const { ref, isVisible } = usePageReveal(0.08);

  const reveal = (delayMs: number) =>
    `centric-ind-reveal page-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`.trim();

  return (
    <section
      id="centric-for-individuals"
      ref={ref as React.RefObject<HTMLElement>}
      className={`page-section page-section--white relative overflow-x-clip fx-page centric-ind-section ${
        isVisible ? 'centric-ind--in-view' : ''
      }`.trim()}
    >
      <div
        className="centric-ind-glow absolute top-0 right-0 w-[min(100%,520px)] h-[min(70%,420px)] bg-gradient-to-bl from-[#4F6BFF]/10 via-[#20C7B5]/6 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="site-container relative z-10">
        <header className="centric-ind-hero-header w-full max-w-none mb-10 sm:mb-12 lg:mb-14">
          <div className="centric-ind-hero-top flex w-full flex-col items-stretch gap-3 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="centric-ind-hero-title centric-ind-hero-title--individuals centric-ind-headline section-h2 font-extrabold tracking-tight w-full max-w-none min-w-0">
              <span className="centric-ind-hero-line centric-ind-hero-line--single block w-full max-w-none">
                <span className="text-[#0A0A0B]">Centric: Your Identity.</span>{' '}
                <span className="centric-ind-heading-accent why-heading-accent centric-ind-hero-accent-phrase">
                  Secure &amp; Shareable.
                </span>
              </span>
            </h2>
          </div>
          <p
            className={`centric-ind-hero-lead section-lead text-slate-600 w-full max-w-none mt-3 sm:mt-4 lg:mt-5 text-pretty ${reveal(280)}`}
            style={{ transitionDelay: '280ms' }}
          >
            Whether you are renting an apartment, applying for credit, or proving your financial standing to someone you
            trust—Centric packages your verified identity, credit score, employment, address, and banking profile into a
            single secure report in under two minutes.
          </p>
        </header>

        <div className={`mb-12 sm:mb-16 ${reveal(360)}`} style={{ transitionDelay: '360ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            The Traditional Hassle vs. The Centric Way
          </h3>

          <div
            className="centric-compare-table-wrap w-full overflow-x-clip rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-500 hover:shadow-md"
            style={centricCompareWrapStyle('Traditional Document Sharing', 'The Centric Way')}
          >
            <table className="centric-compare-table w-full min-w-0 border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="centric-compare-th centric-compare-th--traditional">
                    Traditional Document Sharing
                  </th>
                  <th scope="col" className="centric-compare-th centric-compare-th--centric">
                    The Centric Way
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, rowIndex) => {
                  const TradIcon = COMPARE_TRAD_ICONS[rowIndex] ?? Files;
                  const CentricIcon = COMPARE_CENTRIC_ICONS[rowIndex] ?? Shield;
                  const centricIconWrap =
                    COMPARE_ICON_CENTRIC[rowIndex % COMPARE_ICON_CENTRIC.length];
                  return (
                    <tr
                      key={row.id}
                      className={`centric-compare-tr centric-ind-reveal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${420 + rowIndex * 100}ms` }}
                    >
                      <td className="centric-compare-td">
                        <div className="centric-compare-cell flex gap-3 sm:gap-4">
                          <div
                            className={`centric-compare-cell-icon shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${COMPARE_ICON_TRAD}`}
                          >
                            <TradIcon className="w-5 h-5" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                              {row.traditionalTitle}
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {row.traditionalDesc}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="centric-compare-td centric-compare-td--centric">
                        <div className="centric-compare-cell flex gap-3 sm:gap-4">
                          <div
                            className={`centric-compare-cell-icon shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${centricIconWrap}`}
                          >
                            <CentricIcon className="w-5 h-5" aria-hidden />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">
                              {row.centricTitle}
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{row.centricDesc}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`mb-12 sm:mb-16 ${reveal(520)}`} style={{ transitionDelay: '520ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {HOW_STEPS.map((step, stepIndex) => (
              <CentricIndFeatureCard
                key={step.title}
                title={step.title}
                desc={step.desc}
                icon={step.icon}
                iconWrapClassName={step.iconWrapClassName}
                isVisible={isVisible}
                delayMs={560 + stepIndex * 100}
              />
            ))}
          </div>
        </div>

        <div className={`centric-ind-why-duo mb-12 sm:mb-16 ${reveal(620)}`} style={{ transitionDelay: '620ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-10 items-stretch">
            <div className="centric-ind-why-copy lg:col-span-7 min-w-0 order-1 flex flex-col">
              <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
                Why Choose Centric?
              </h3>
              <div className="centric-ind-why-stack flex flex-col gap-4 sm:gap-5 flex-1 min-h-0">
                {WHY_CENTRIC.map((item, cardIndex) => (
                  <CentricIndFeatureCard
                    key={item.title}
                    title={item.title}
                    desc={item.desc}
                    icon={item.icon}
                    iconWrapClassName={item.iconWrapClassName}
                    isVisible={isVisible}
                    delayMs={660 + cardIndex * 100}
                  />
                ))}

                <div
                  className={`centric-privacy-guarantee centric-ind-why-privacy rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF]/40 px-5 py-4 sm:px-6 sm:py-5 centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#C7D2FE]/80 hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
                  }`}
                  style={{ transitionDelay: '780ms' }}
                  role="note"
                >
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-pretty">
                    <span className="font-semibold text-[#0A0A0B]">Privacy Guarantee:</span> You control who sees your
                    financial profile. Nothing is accessed, pulled, or shared without your explicit OTP approval every
                    single time.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`centric-ind-why-aside lg:col-span-5 order-2 min-w-0 w-full h-full centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '720ms' }}
            >
              <div className="centric-ind-why-aside-inner centric-ind-why-aside-inner--duo">
                <div className="centric-ind-why-mockup-shell">
                  <div className="centric-ind-why-mockup-wrap">
                    <SmartphoneMockup
                      perspective="flat"
                      interactive={false}
                      screen="home"
                      cleanFrame
                      className="centric-ind-why-phone drop-shadow-lg"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenCirLearnMore?.()}
                  className="centric-ind-why-cta w-full mt-auto group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 rounded-full bg-[#4F6BFF] hover:bg-[#3D56E8] active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs transition-all shadow-md shadow-[#4F6BFF]/20 cursor-pointer text-center"
                >
                  <span className="text-balance leading-snug">Learn More About Centric Identity Report</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};
