/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { centricCompareWrapStyle } from '../utils/centricCompareStyles';
import { usePageReveal } from '../hooks/usePageReveal';
import {
  Smartphone,
  MessageSquare,
  Zap,
  Timer,
  UserX,
  Puzzle,
  Gauge,
  ShieldCheck,
  Layers,
  KeyRound,
  Truck,
  AlertTriangle,
  Lock,
  Unlock,
  TrendingUp,
  LayoutDashboard,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SmartphoneMockup } from './SmartphoneMockup';

type CompareRow = {
  id: string;
  traditionalTitle: string;
  traditionalDesc: string;
  centricTitle: string;
  centricDesc: string;
};

type StepItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
  iconWrapClassName: string;
};

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

const COMPARE_ICON_TRAD = 'bg-slate-100 text-slate-600';
const COMPARE_ICON_ACCENT = ['bg-[#EEF2FF] text-[#4F6BFF]', 'bg-[#ECFDF5] text-[#20C7B5]', 'bg-[#EFF6FF] text-[#4F6BFF]'] as const;

type CompareTableProps = {
  rows: CompareRow[];
  tradIcons: readonly LucideIcon[];
  accentIcons: readonly LucideIcon[];
  leftHeader: string;
  rightHeader: string;
  isVisible: boolean;
  baseDelayMs: number;
};

const CompareTable: React.FC<CompareTableProps> = ({
  rows,
  tradIcons,
  accentIcons,
  leftHeader,
  rightHeader,
  isVisible,
  baseDelayMs,
}) => (
  <div
    className="centric-compare-table-wrap w-full overflow-x-clip rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-500 hover:shadow-md"
    style={centricCompareWrapStyle(leftHeader, rightHeader)}
  >
    <table className="centric-compare-table w-full min-w-0 border-collapse text-left">
      <thead>
        <tr>
          <th scope="col" className="centric-compare-th centric-compare-th--traditional">
            {leftHeader}
          </th>
          <th scope="col" className="centric-compare-th centric-compare-th--centric">
            {rightHeader}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => {
          const TradIcon = tradIcons[rowIndex] ?? Timer;
          const AccentIcon = accentIcons[rowIndex] ?? Layers;
          const accentWrap = COMPARE_ICON_ACCENT[rowIndex % COMPARE_ICON_ACCENT.length];
          return (
            <tr
              key={row.id}
              className={`centric-compare-tr centric-ind-reveal transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${baseDelayMs + rowIndex * 100}ms` }}
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
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{row.traditionalDesc}</p>
                  </div>
                </div>
              </td>
              <td className="centric-compare-td centric-compare-td--centric">
                <div className="centric-compare-cell flex gap-3 sm:gap-4">
                  <div
                    className={`centric-compare-cell-icon shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${accentWrap}`}
                  >
                    <AccentIcon className="w-5 h-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-base sm:text-lg text-[#0A0A0B] tracking-tight">{row.centricTitle}</p>
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
);

const POS_COMPARE: CompareRow[] = [
  {
    id: 'delays',
    traditionalTitle: 'Blind Guesswork & Delays',
    traditionalDesc:
      'Manual document gathering slows checkout down and creates sales friction.',
    centricTitle: 'POS Approval in Minutes',
    centricDesc: 'Real-time credit health and income signals appear instantly in your dashboard.',
  },
  {
    id: 'claims',
    traditionalTitle: 'Unverified Customer Claims',
    traditionalDesc: 'Relying on self-reported income increases early-stage default rates.',
    centricTitle: 'Verified Income Signals',
    centricDesc: 'Access consent-backed bureau data to make confident financing decisions.',
  },
  {
    id: 'tools',
    traditionalTitle: 'Separate Tool Overhead',
    traditionalDesc: 'Buying, integrating, and maintaining standalone credit-checking software.',
    centricTitle: 'Built-in Platform Integration',
    centricDesc: 'Verification is built into the same platform you already finance and collect on.',
  },
];

const POS_STEPS: StepItem[] = [
  {
    title: 'Request Mobile Number',
    desc: "At checkout, request the customer's mobile phone number.",
    icon: Smartphone,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'OTP Approval',
    desc: 'The customer approves access via an SMS OTP—nothing is pulled without it.',
    icon: MessageSquare,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Instant Signal',
    desc: 'Receive credit health, employment, and income signals instantly to make an informed financing decision on the spot.',
    icon: Zap,
    iconWrapClassName: 'bg-[#EFF6FF] text-[#4F6BFF]',
  },
];

const MASTER_COMPARE: CompareRow[] = [
  {
    id: 'writeoff',
    traditionalTitle: 'High Write-off Exposure',
    traditionalDesc: 'Default risk spikes once a financed device leaves the retail store.',
    centricTitle: 'Built-in Hardware Lock',
    centricDesc: 'Pair financed devices with Master Key at checkout for remote enforcement.',
  },
  {
    id: 'repo',
    traditionalTitle: 'Impractical Repossession',
    traditionalDesc: 'Physical recovery is slow, expensive, legally complex, and rarely worth chasing.',
    centricTitle: 'Instant Remote Recovery',
    centricDesc: 'Missed payments automatically lock the device; resuming payment unlocks it instantly.',
  },
  {
    id: 'risk',
    traditionalTitle: 'Unmanaged Credit Risk',
    traditionalDesc: 'Retailers absorb heavy losses or avoid offering device financing altogether.',
    centricTitle: 'Risk-Free Revenue',
    centricDesc: 'Expand device financing options without taking on field collection risks.',
  },
];

const MASTER_STEPS: StepItem[] = [
  {
    title: 'Register',
    desc: 'Pair and register a financed device under Master Key at the point of sale.',
    icon: KeyRound,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'Protect',
    desc: 'If a payment is missed, remotely lock the device directly from your control portal.',
    icon: Lock,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Restore',
    desc: 'Once payment resumes, unlock the device instantly—no repossession, no field visits, and no legal write-offs.',
    icon: Unlock,
    iconWrapClassName: 'bg-[#EFF6FF] text-[#4F6BFF]',
  },
];

const PARTNER_IMPACT = [
  {
    title: 'Lower Financing Risk',
    desc: 'Built-in hardware enforcement drastically reduces default exposure compared to standard retail financing.',
    icon: ShieldCheck,
    iconWrapClassName: 'bg-[#EEF2FF] text-[#4F6BFF]',
  },
  {
    title: 'New Revenue Stream',
    desc: "Offer financing that competing retailers can't, without taking on collection risks.",
    icon: TrendingUp,
    iconWrapClassName: 'bg-[#ECFDF5] text-[#20C7B5]',
  },
  {
    title: 'Full Dashboard Control',
    desc: 'Lock, unlock, send payment reminders, and track every device’s status in one centralized workspace.',
    icon: LayoutDashboard,
    iconWrapClassName: 'bg-[#EFF6FF] text-[#4F6BFF]',
  },
];

const POS_TRAD_ICONS = [Timer, UserX, Puzzle] as const;
const POS_ACCENT_ICONS = [Gauge, ShieldCheck, Layers] as const;
const MASTER_TRAD_ICONS = [AlertTriangle, Truck, AlertTriangle] as const;
const MASTER_ACCENT_ICONS = [KeyRound, Lock, TrendingUp] as const;

const useCentricReveal = () => {
  const { ref, isVisible } = usePageReveal(0.08);
  const reveal = (delayMs: number) =>
    `centric-ind-reveal page-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`.trim();
  return { ref, isVisible, reveal };
};

type PartnersCentricPOSSectionProps = {
  onOpenCirLearnMore?: () => void;
};

export const PartnersCentricPOSSection: React.FC<PartnersCentricPOSSectionProps> = ({ onOpenCirLearnMore }) => {
  const { ref, isVisible, reveal } = useCentricReveal();

  return (
    <section
      id="centric-for-partners-pos"
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
          <div className="centric-ind-hero-top centric-ind-hero-top--pos-headline flex w-full flex-col items-stretch gap-3 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="centric-ind-hero-title centric-ind-headline section-h2 font-extrabold tracking-tight w-full max-w-none min-w-0">
              <span className="centric-ind-hero-line centric-ind-hero-line--single block w-full max-w-none">
                <span className="text-[#0A0A0B]">Centric: Verify Customer Credit Health </span>
                <span className="centric-ind-heading-accent why-heading-accent">at the Point of Sale.</span>
              </span>
            </h2>
          </div>
          <p
            className={`centric-ind-hero-lead centric-ind-hero-lead--single section-lead text-slate-600 w-full max-w-none mt-3 sm:mt-4 lg:mt-5 ${reveal(280)}`}
            style={{ transitionDelay: '280ms' }}
          >
            Run a Centric check directly at the point of sale to access credit health and income signals in minutes—before committing to financing or credit terms.
          </p>
        </header>

        <div className={`mb-12 sm:mb-16 ${reveal(360)}`} style={{ transitionDelay: '360ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            The Point-of-Sale Problem vs. Centric POS Verification
          </h3>
          <CompareTable
            rows={POS_COMPARE}
            tradIcons={POS_TRAD_ICONS}
            accentIcons={POS_ACCENT_ICONS}
            leftHeader="Traditional Retail Financing"
            rightHeader="The Centric Way"
            isVisible={isVisible}
            baseDelayMs={420}
          />
        </div>

        <div className={`centric-ind-why-duo partner-pos-steps-duo mb-12 sm:mb-16 ${reveal(520)}`} style={{ transitionDelay: '520ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-10 items-stretch">
            <div className="centric-ind-why-copy lg:col-span-7 min-w-0 order-1 flex flex-col">
              <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6 text-left">
                How Centric Works at POS
              </h3>
              <div className="partner-pos-steps-stack flex flex-col gap-4 sm:gap-5 flex-1 min-w-0 w-full max-w-xl lg:max-w-none">
                {POS_STEPS.map((step, i) => (
                  <CentricFeatureCard
                    key={step.title}
                    title={step.title}
                    desc={step.desc}
                    icon={step.icon}
                    iconWrapClassName={step.iconWrapClassName}
                    isVisible={isVisible}
                    delayMs={560 + i * 100}
                  />
                ))}
              </div>
            </div>

            <div
              className={`centric-ind-why-aside lg:col-span-5 order-2 min-w-0 w-full centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '640ms' }}
            >
              <div className="centric-ind-why-aside-inner centric-ind-why-aside-inner--duo partner-pos-phone-aside">
                <div className="centric-ind-why-mockup-shell">
                  <div className="centric-ind-why-mockup-wrap">
                    <SmartphoneMockup
                      perspective="flat"
                      interactive={false}
                      screen="partner"
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

        <div
          className={`centric-privacy-guarantee rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF]/40 px-5 py-5 sm:px-8 sm:py-6 centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#C7D2FE]/80 hover:shadow-md ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
          style={{ transitionDelay: '720ms' }}
          role="note"
        >
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-[#0A0A0B]">Consent Line:</span> Every financial profile still requires
            the customer&apos;s own OTP approval—verification never happens without explicit consent, even at the point
            of sale.
          </p>
        </div>
      </div>
    </section>
  );
};

export const PartnersMasterKeySection: React.FC = () => {
  const { ref, isVisible, reveal } = useCentricReveal();

  return (
    <section
      id="master-key-for-partners"
      ref={ref as React.RefObject<HTMLElement>}
      className={`page-section page-section--muted relative overflow-x-clip fx-page centric-ind-section ${
        isVisible ? 'centric-ind--in-view' : ''
      }`.trim()}
    >
      <div
        className="centric-ind-glow absolute top-0 right-0 w-[min(100%,520px)] h-[min(70%,420px)] bg-gradient-to-bl from-amber-500/8 via-[#4F6BFF]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="site-container relative z-10">
        <header className="centric-ind-hero-header w-full max-w-none mb-10 sm:mb-12 lg:mb-14">
          <div className="centric-ind-hero-top flex w-full flex-col items-stretch gap-3 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="centric-ind-hero-title centric-ind-hero-title--master-key centric-ind-headline section-h2 font-extrabold tracking-tight w-full max-w-none min-w-0">
              <span className="centric-ind-hero-line block w-full max-w-none">
                <span className="text-[#0A0A0B]">Master Key: Financing You Can Trust.</span>
              </span>
              <span className="centric-ind-hero-line block w-full max-w-none">
                <span className="centric-ind-heading-accent why-heading-accent centric-ind-hero-accent-phrase">
                  Devices You Can Recover.
                </span>
              </span>
            </h2>
          </div>
          <p
            className={`centric-ind-hero-lead centric-ind-hero-lead--single section-lead text-slate-600 w-full max-w-none mt-3 sm:mt-4 lg:mt-5 ${reveal(280)}`}
            style={{ transitionDelay: '280ms' }}
          >
            Offer your customers secured device financing under the MyCredAxis platform—backed by a built-in remote recovery mechanism if payments stop.
          </p>
        </header>

        <div className={`mb-12 sm:mb-16 ${reveal(360)}`} style={{ transitionDelay: '360ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            Standard Device Financing vs. Master Key Asset Protection
          </h3>
          <CompareTable
            rows={MASTER_COMPARE}
            tradIcons={MASTER_TRAD_ICONS}
            accentIcons={MASTER_ACCENT_ICONS}
            leftHeader="Standard Device Financing"
            rightHeader="The Master Key Way"
            isVisible={isVisible}
            baseDelayMs={420}
          />
        </div>

        <div className={`mb-12 sm:mb-16 ${reveal(520)}`} style={{ transitionDelay: '520ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            How Master Key Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {MASTER_STEPS.map((step, i) => (
              <CentricFeatureCard
                key={step.title}
                title={step.title}
                desc={step.desc}
                icon={step.icon}
                iconWrapClassName={step.iconWrapClassName}
                isVisible={isVisible}
                delayMs={560 + i * 100}
              />
            ))}
          </div>
        </div>

        <div className={`mb-12 sm:mb-16 ${reveal(620)}`} style={{ transitionDelay: '620ms' }}>
          <h3 className="centric-ind-block-title font-semibold text-lg sm:text-xl text-[#0A0A0B] tracking-tight mb-4 sm:mb-6">
            Partner Business Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
            {PARTNER_IMPACT.map((item, i) => (
              <CentricFeatureCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                iconWrapClassName={item.iconWrapClassName}
                isVisible={isVisible}
                delayMs={660 + i * 100}
              />
            ))}
          </div>
        </div>

        <div
          className={`centric-privacy-guarantee rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white px-5 py-5 sm:px-8 sm:py-6 mb-6 centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#C7D2FE]/80 hover:shadow-md ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
          style={{ transitionDelay: '780ms' }}
          role="note"
        >
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-[#0A0A0B]">Who Uses Master Key:</span> Dealer &amp; distributor
            networks · Mobile and electronics retailers · NBFCs and lenders partnering on device-backed credit.
          </p>
        </div>

        <div
          className={`centric-privacy-guarantee rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF]/40 px-5 py-5 sm:px-8 sm:py-6 centric-ind-reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#C7D2FE]/80 hover:shadow-md ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
          style={{ transitionDelay: '860ms' }}
          role="note"
        >
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-[#0A0A0B]">Agreement Line:</span> Every device registration and
            recovery action is tied directly to a financing agreement the customer has agreed to—nothing happens without
            that agreement in place.
          </p>
        </div>
      </div>
    </section>
  );
};
