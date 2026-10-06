/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePageReveal } from '../hooks/usePageReveal';
import { centricCompareWrapStyle } from '../utils/centricCompareStyles';
import {
  Building2,
  Briefcase,
  HeartHandshake,
  Blocks,
  Clock,
  FileStack,
  Layers,
  Zap,
  Workflow,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { CirProfileMockupCard } from './CirProfileMockupCard';

type CentricFeatureCardProps = {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconWrapClassName: string;
  isVisible: boolean;
  delayMs: number;
};

const CentricFeatureCard: React.FC<CentricFeatureCardProps> = ({
  title,
  desc,
  icon: Icon,
  iconWrapClassName,
  isVisible,
  delayMs,
}) => (
  <div
    className={`centric-ind-feature-card fintech-card rounded-2xl p-5 sm:p-6 flex flex-col h-full group centric-ind-reveal ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${delayMs}ms` }}
  >
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
    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{desc}</p>
  </div>
);

const COMPARE_ROWS = [
  {
    id: 'vendors',
    traditionalTitle: 'Multi-Vendor Friction',
    traditionalDesc:
      'Stitching together separate pulls for credit bureau scores, employment calls, and physical address forms.',
    centricTitle: 'Single Consent Step',
    centricDesc:
      'Get a consolidated profile across identity, credit, employment, address, and banking from one pull.',
  },
  {
    id: 'timelines',
    traditionalTitle: 'Slow & Conflicting Timelines',
    traditionalDesc:
      'Chasing individual document sources across different vendors on disjointed timelines.',
    centricTitle: 'One Timeline, One Answer',
    centricDesc:
      'Receive unified, standardized data instantly to streamline applicant decisioning.',
  },
  {
    id: 'reconcile',
    traditionalTitle: 'Manual Data Reconciliation',
    traditionalDesc:
      'Spending internal operational hours comparing inconsistent data points across physical PDFs.',
    centricTitle: 'Automated Profile Delivery',
    centricDesc:
      'Eliminate manual data entry and document reconciliation with a single structured result.',
  },
] as const;

const INDUSTRY_USE_CASES = [
  {
    title: 'Finance Companies & Lenders',
    desc: "Verify an applicant's financial profile, including income signals and credit health, before approving a loan or credit line.",
    icon: Building2,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'Placement & Staffing Agencies',
    desc: "Confirm a candidate's financial profile, including identity and employment history, prior to placement.",
    icon: Briefcase,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Matrimonial & Introduction Platforms',
    desc: "Let members request a prospective match's financial profile, with that person's consent, to verify stated claims before an introduction moves forward.",
    icon: HeartHandshake,
    iconWrapClassName: 'bg-[#EFF6FF] text-[#4F6BFF]',
  },
];

const COMPARE_ICON_TRAD = 'bg-slate-100 text-slate-600';
const COMPARE_ICON_CENTRIC = ['bg-[#EEF2FF] text-[#4F6BFF]', 'bg-[#ECFDF5] text-[#20C7B5]', 'bg-[#EFF6FF] text-[#4F6BFF]'] as const;
const COMPARE_TRAD_ICONS = [Blocks, Clock, FileStack] as const;
const COMPARE_CENTRIC_ICONS = [Layers, Zap, Workflow] as const;

type CentricForBusinessSectionProps = {
  onCirInspect?: () => void;
};

export const CentricForBusinessSection: React.FC<CentricForBusinessSectionProps> = ({ onCirInspect }) => {
  const { ref, isVisible } = usePageReveal(0.08);

  const reveal = (delayMs: number) =>
    `centric-ind-reveal page-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`.trim();

  return (
    <section
      id="centric-for-business"
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
            <h2 className="centric-ind-hero-title centric-ind-hero-title--business centric-ind-headline section-h2 font-extrabold tracking-tight w-full max-w-none min-w-0">
              <span className="centric-ind-hero-line centric-ind-hero-line--single block w-full max-w-none">
                <span className="text-[#0A0A0B]">Centric: Your Data. Your Consent.</span>{' '}
                <span className="centric-ind-heading-accent why-heading-accent centric-ind-hero-accent-phrase">
                  Your Intelligence.
                </span>
              </span>
            </h2>
          </div>
          <p
            className={`centric-ind-hero-lead section-lead text-slate-600 w-full max-w-none mt-3 sm:mt-4 lg:mt-5 text-pretty ${reveal(280)}`}
            style={{ transitionDelay: '280ms' }}
          >
            Centric gives your business a consolidated, consent-based financial profile for anyone you need to
            assess—so you can make faster, safer decisions without chasing documents or managing multiple vendor APIs.
          </p>
        </header>

        <div className={`mb-12 sm:mb-16 ${reveal(360)}`} style={{ transitionDelay: '360ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            Traditional Fragmentation vs. Centric Single-Source Verification
          </h3>

          <div
            className="centric-compare-table-wrap w-full overflow-x-clip rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-500 hover:shadow-md"
            style={centricCompareWrapStyle('Traditional Verification Checks', 'The Centric Way')}
          >
            <table className="centric-compare-table w-full min-w-0 border-collapse text-left">
              <thead>
                <tr>
                  <th scope="col" className="centric-compare-th centric-compare-th--traditional">
                    Traditional Verification Checks
                  </th>
                  <th scope="col" className="centric-compare-th centric-compare-th--centric">
                    The Centric Way
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, rowIndex) => {
                  const TradIcon = COMPARE_TRAD_ICONS[rowIndex] ?? Blocks;
                  const CentricIcon = COMPARE_CENTRIC_ICONS[rowIndex] ?? Layers;
                  const centricIconWrap = COMPARE_ICON_CENTRIC[rowIndex % COMPARE_ICON_CENTRIC.length];
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
            Industry Use Cases
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {INDUSTRY_USE_CASES.map((item, cardIndex) => (
              <CentricFeatureCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                iconWrapClassName={item.iconWrapClassName}
                isVisible={isVisible}
                delayMs={560 + cardIndex * 100}
              />
            ))}
          </div>
        </div>

        <div
          className={`centric-different-stack centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '720ms' }}
        >
          <div className="cir-footer-duo centric-different-duo centric-different-duo--natural">
            <div
              className="centric-different-duo__copy cir-footer-duo__copy flex flex-col min-w-0 w-full lg:h-full"
              role="note"
            >
              <div className="centric-different-duo__copy-body min-w-0 w-full max-w-lg">
                <h3 className="centric-different-duo__title tracking-tight">
                  Why Centric is{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
                    Different
                  </span>
                </h3>
                <div className="centric-different-duo__lead-stack flex flex-col gap-3 sm:gap-3.5 w-full max-w-full">
                  <p className="centric-different-duo__lead w-full max-w-full leading-relaxed text-pretty">
                    Traditional verification requires multiple providers for identity, credit, employment, address, and
                    banking data—each with different formats and timelines that must be manually reconciled.
                  </p>
                  <p className="centric-different-duo__lead w-full max-w-full leading-relaxed text-pretty">
                    Centric simplifies it with one consent step. It brings verified identity, credit health, employment,
                    address, and banking signals into one consolidated financial profile.
                  </p>
                  <p className="centric-different-duo__lead w-full max-w-full leading-relaxed text-pretty">
                    The result: one verified source, one unified timeline, and one consistent view—helping businesses
                    reduce manual effort and make faster, more confident decisions.
                  </p>
                </div>
              </div>

              <div className="centric-different-duo__foot flex flex-col items-start min-w-0 w-full max-w-full">
                <p className="centric-different-duo__tagline leading-relaxed">
                  Powering instant onboarding for consumers, merchants, and NBFC partners.
                </p>

                <button
                  type="button"
                  onClick={() => onCirInspect?.()}
                  className="centric-different-duo__cta shrink-0 group inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#4F6BFF] hover:bg-[#3D56E8] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#4F6BFF]/25 cursor-pointer text-left"
                >
                  <span className="leading-snug text-left">Learn More About Centric Identity Report</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>

            <div className="centric-different-duo__mockup cir-footer-duo__mockup">
              <CirProfileMockupCard
                columnFill
                className="centric-different-duo__cir w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto lg:h-full"
                onInspectClick={onCirInspect}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
