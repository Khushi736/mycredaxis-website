/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { type LucideIcon } from 'lucide-react';
import { ConsentBanner } from './ConsentBanner';

export type StepsFlowStep = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
};

function renderTitleWithAccent(title: string, accent?: string) {
  if (!accent || !title.includes(accent)) {
    return title;
  }
  const [before, after] = title.split(accent);
  return (
    <>
      {before}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
        {accent}
      </span>
      {after}
    </>
  );
}

type StepsFlowSectionProps = {
  id?: string;
  title: React.ReactNode;
  /** When set with a string `title`, renders this substring with a gradient accent. */
  titleAccent?: string;
  subtitle?: string;
  steps: StepsFlowStep[];
  titleAlign?: 'center' | 'left';
  /** `carousel` = homepage-style row + snake; `timeline` = individual journey (vertical) */
  layout?: 'carousel' | 'timeline';
  consent?: {
    eyebrow?: string;
    body: string;
    pill?: string;
  };
  /** Carousel: `stacked` = icon + centered; `stage` / `step` = flat label row (no arrows/panel) */
  stepCardLayout?: 'inline' | 'stacked' | 'stage' | 'step' | 'phase';
};

const StepFlowConnector: React.FC<{
  index: number;
  variant: 'horizontal' | 'vertical';
  live: boolean;
}> = ({ index, variant, live }) => {
  const uid = `flow-${variant}-${index}`;
  const pathClass = `${live ? 'steps-snake-path steps-snake-path--live opacity-100' : 'steps-snake-path opacity-70'}`;

  if (variant === 'horizontal') {
    const curveUp = index % 2 === 0;
    const pathD = curveUp
      ? 'M 1 16 C 16 8, 32 24, 48 16 S 58 10, 63 16'
      : 'M 1 16 C 16 24, 32 8, 48 16 S 58 22, 63 16';

    return (
      <div className="hidden lg:flex items-center justify-center shrink-0 w-12 xl:w-[3.25rem] px-0.5 self-center" aria-hidden>
        <svg viewBox="0 0 64 32" className="steps-flow-svg w-full h-8 overflow-visible">
          <defs>
            <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#5B7CFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#20C7B5" stopOpacity="1" />
            </linearGradient>
            <marker id={`${uid}-arrow`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M 0 1 L 11 6 L 0 11 Z" fill="#20C7B5" stroke="#4F6BFF" strokeWidth="0.5" />
            </marker>
          </defs>
          <path d={pathD} fill="none" className="steps-snake-glow" pathLength={100} />
          <path
            d={pathD}
            fill="none"
            stroke={`url(#${uid}-grad)`}
            strokeLinecap="round"
            markerEnd={`url(#${uid}-arrow)`}
            className={pathClass}
            style={{ animationDelay: `${index * 140}ms` }}
          />
        </svg>
      </div>
    );
  }

  const pathD = index % 2 === 0 ? 'M 16 2 C 24 12, 8 22, 16 32' : 'M 16 2 C 8 12, 24 22, 16 32';

  return (
    <div className="lg:hidden flex justify-center py-2" aria-hidden>
      <svg viewBox="0 0 32 36" className="steps-flow-svg w-8 h-10">
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#20C7B5" stopOpacity="1" />
          </linearGradient>
          <marker id={`${uid}-arrow`} markerWidth="12" markerHeight="12" refX="6" refY="10" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 1 L 11 6 L 0 11 Z" fill="#20C7B5" />
          </marker>
        </defs>
        <path d={pathD} fill="none" className="steps-snake-glow" />
        <path d={pathD} fill="none" stroke={`url(#${uid}-grad)`} strokeLinecap="round" markerEnd={`url(#${uid}-arrow)`} className={pathClass} />
      </svg>
    </div>
  );
};

export const StepsFlowSection: React.FC<StepsFlowSectionProps> = ({
  id,
  title,
  titleAccent,
  subtitle,
  steps,
  titleAlign = 'center',
  layout = 'carousel',
  consent,
  stepCardLayout = 'inline',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoAdvanceSteps, setAutoAdvanceSteps] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const stepCount = steps.length;
  const isTimeline = layout === 'timeline';
  const isStepRow =
    stepCardLayout === 'step' || stepCardLayout === 'phase' || stepCardLayout === 'stage';
  const isStageRow = isStepRow;
  const isPlainStepLabel = stepCardLayout === 'step' || stepCardLayout === 'phase';

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const sync = () => setAutoAdvanceSteps(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || stepCount < 2 || !autoAdvanceSteps || isStageRow) return;

    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepCount);
    }, isTimeline ? 4000 : 3200);

    return () => window.clearInterval(timer);
  }, [isVisible, stepCount, isTimeline, autoAdvanceSteps, isStageRow]);

  const renderStageCard = (st: StepsFlowStep, index: number) => {
    const stepIndexLabel = isPlainStepLabel
      ? String(parseInt(st.num, 10) || index + 1)
      : st.num;
    const stepPrefix = isPlainStepLabel ? 'Step' : 'Stage';

    return (
    <article
      key={st.num}
      className={`steps-flow-card steps-flow-card--stage flex flex-col h-full w-full min-w-0 transition-all duration-700 ease-out ${
        isPlainStepLabel ? 'steps-flow-card--step' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${420 + index * 70}ms` }}
    >
      <p className={`steps-flow-stage-label ${isPlainStepLabel ? 'steps-flow-step-label' : ''}`}>
        {stepPrefix} {stepIndexLabel}
      </p>
      <h3 className="steps-flow-stage-title">{st.title}</h3>
      <p className="steps-flow-stage-desc">{st.desc}</p>
    </article>
    );
  };

  const renderCarouselCard = (st: StepsFlowStep, index: number) => {
    const Icon = st.icon;
    const isSelected = activeStep === index;
    const delay = 480 + index * 100;
    const isStacked = stepCardLayout === 'stacked';

    return (
      <div
        key={st.num}
        role="button"
        tabIndex={0}
        onClick={() => setActiveStep(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveStep(index);
          }
        }}
        className={`fintech-card steps-flow-card cursor-pointer flex flex-col h-full w-full transition-all duration-700 transform group ${
          isStacked
            ? 'steps-flow-card--stacked steps-flow-card--uniform rounded-2xl sm:rounded-3xl text-center items-center'
            : 'rounded-2xl p-4 sm:p-5 min-h-[132px]'
        } ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${
          isSelected
            ? `step-card-active bg-white ring-2 ring-[#4F6BFF]/15${isStacked ? '' : ' scale-[1.02]'}`
            : 'border-slate-200/80 bg-[#F7F8FA]/60 hover:bg-white hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {isStacked ? (
          <div className="flex flex-col items-center justify-start gap-3 sm:gap-3.5 w-full flex-1">
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-xs mx-auto"
              style={{ backgroundColor: `${st.color}15`, color: st.color }}
            >
              <Icon className="w-5 h-5 sm:w-[1.25rem] sm:h-[1.25rem]" strokeWidth={2.1} />
            </div>
            <h3
              className={`steps-flow-card__title font-bold text-sm sm:text-[0.9375rem] leading-snug w-full text-center text-pretty transition-colors duration-300 ${
                isSelected ? 'text-[#4F6BFF]' : 'text-[#0A0A0B] group-hover:text-[#4F6BFF]'
              }`}
            >
              {st.title}
            </h3>
            <p className="steps-flow-card__desc text-[11px] sm:text-xs text-slate-600 leading-relaxed w-full text-center text-pretty flex-1">
              {st.desc}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-xs"
                style={{ backgroundColor: `${st.color}15`, color: st.color }}
              >
                <Icon className="w-4 h-4 sm:w-[1.1rem] sm:h-[1.1rem]" strokeWidth={2.1} />
              </div>
              <h3
                className={`font-bold text-sm sm:text-base leading-snug min-w-0 flex-1 pt-0.5 transition-colors duration-300 ${
                  isSelected ? 'text-[#4F6BFF]' : 'text-[#0A0A0B] group-hover:text-[#4F6BFF]'
                }`}
              >
                {st.title}
              </h3>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed flex-1">{st.desc}</p>
          </>
        )}
      </div>
    );
  };

  const renderJourneyPanel = (compact = false) => {
    const active = steps[activeStep];
    if (!active) return null;
    const ActiveIcon = active.icon;
    const progressPct = ((activeStep + 1) / stepCount) * 100;
    const ringRadius = 54;
    const ringCirc = 2 * Math.PI * ringRadius;
    const ringOffset = ringCirc - (progressPct / 100) * ringCirc;

    return (
      <div className={`steps-journey-panel ${compact ? 'steps-journey-panel--compact' : ''}`}>
        <div className="steps-journey-panel-glow pointer-events-none" aria-hidden />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
            <div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#4F6BFF] font-semibold">
                Your journey
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0A0A0B] tracking-tight">
                Step {active.num}
                <span className="text-slate-400 font-bold text-lg sm:text-xl"> / {String(stepCount).padStart(2, '0')}</span>
              </p>
            </div>
            <div className="steps-journey-ring shrink-0" aria-hidden>
              <svg width="88" height="88" viewBox="0 0 120 120" className="sm:w-[104px] sm:h-[104px]">
                <defs>
                  <linearGradient id="steps-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F6BFF" />
                    <stop offset="100%" stopColor="#20C7B5" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r={ringRadius} fill="none" stroke="#E2E8F0" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r={ringRadius}
                  fill="none"
                  stroke="url(#steps-ring-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={ringCirc}
                  strokeDashoffset={ringOffset}
                  transform="rotate(-90 60 60)"
                  className="steps-journey-ring-progress"
                />
              </svg>
              <span className="steps-journey-ring-label">{Math.round(progressPct)}%</span>
            </div>
          </div>

          <div
            className="rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm p-4 sm:p-5 mb-5 shadow-sm"
            style={{ boxShadow: `0 16px 40px -24px ${active.color}55` }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${active.color}15`, color: active.color }}
              >
                <ActiveIcon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-[#0A0A0B] leading-snug">{active.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{active.desc}</p>
              </div>
            </div>
          </div>

          <ul className="steps-journey-mini space-y-2" aria-label="All steps">
            {steps.map((st, index) => {
              const isCurrent = index === activeStep;
              const isDone = index < activeStep;
              return (
                <li key={st.num}>
                  <button
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`steps-journey-mini-btn w-full text-left ${isCurrent ? 'steps-journey-mini-btn--active' : ''} ${isDone ? 'steps-journey-mini-btn--done' : ''}`}
                  >
                    <span className="steps-journey-mini-num">{st.num}</span>
                    <span className="truncate">{st.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const renderTimelineStep = (st: StepsFlowStep, index: number) => {
    const Icon = st.icon;
    const isSelected = activeStep === index;
    const delay = 360 + index * 90;

    return (
      <div
        key={st.num}
        className={`steps-timeline-item relative ${isVisible ? 'steps-timeline-item--in' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <article
          role="button"
          tabIndex={0}
          onClick={() => setActiveStep(index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveStep(index);
            }
          }}
          className={`steps-timeline-card group cursor-pointer ${isSelected ? 'steps-timeline-card--active' : ''}`}
          style={{ '--step-accent': st.color } as React.CSSProperties}
        >
          <span className={`steps-timeline-index ${isSelected ? 'steps-timeline-index--active' : ''}`}>{st.num}</span>

          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-sm sm:text-base text-[#0A0A0B] leading-snug group-hover:text-[#4F6BFF] transition-colors">
              {st.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
          </div>

          <div
            className="steps-timeline-icon w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 ring-1 ring-slate-200/80"
            style={{ backgroundColor: `${st.color}12`, color: st.color }}
          >
            <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" strokeWidth={2.1} />
          </div>
        </article>
      </div>
    );
  };

  const headerAlign = titleAlign === 'left' ? 'text-left' : 'text-center';

  const sectionSurface = isTimeline
    ? 'page-section page-section--muted fx-steps fx-steps--timeline relative overflow-hidden'
    : 'page-section page-section--white fx-steps overflow-hidden';

  return (
    <section id={id} ref={sectionRef} className={sectionSurface}>
      {isTimeline && (
        <>
          <div className="absolute top-0 right-0 w-[min(420px,55vw)] h-[220px] bg-[#4F6BFF]/8 rounded-full blur-[80px] pointer-events-none" aria-hidden />
          <div className="absolute bottom-8 left-0 w-[min(360px,50vw)] h-[200px] bg-[#20C7B5]/8 rounded-full blur-[72px] pointer-events-none" aria-hidden />
        </>
      )}

      <div className="site-container relative z-10">
        <div
          className={`w-full ${headerAlign} mb-8 sm:mb-10 lg:mb-12 ${isTimeline ? 'max-w-none' : 'max-w-3xl'} ${titleAlign === 'left' || isTimeline ? '' : 'mx-auto'}`}
        >
          <h2
            className={`section-h2 steps-headline font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            {typeof title === 'string' && titleAccent
              ? renderTitleWithAccent(title, titleAccent)
              : title}
          </h2>
          {subtitle && (
            <p
              className={`steps-subline text-slate-600 mt-3 sm:mt-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '240ms' }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {isTimeline ? (
          <div
            className={`steps-timeline-layout transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '320ms' }}
          >
            <div className="md:hidden mb-6 sm:mb-7">
              <div className="steps-mobile-progress rounded-2xl border border-slate-200/90 bg-white px-4 py-3.5 shadow-sm">
                <div className="flex items-center justify-between gap-3 text-[11px] sm:text-xs font-semibold text-slate-600 mb-2">
                  <span>
                    Step {steps[activeStep]?.num} of {String(stepCount).padStart(2, '0')}
                  </span>
                  <span className="text-[#4F6BFF]">
                    {Math.round(((activeStep + 1) / stepCount) * 100)}% complete
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] transition-all duration-700 ease-out"
                    style={{ width: `${((activeStep + 1) / stepCount) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="steps-timeline-layout__duo grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-start w-full">
              <div className="steps-timeline-layout__rail min-w-0 w-full">
                <div className="steps-timeline steps-timeline--with-panel w-full max-w-none">
                  <div
                    className="steps-timeline-rail"
                    aria-hidden
                    style={{ '--steps-progress': `${(activeStep / Math.max(stepCount - 1, 1)) * 100}%` } as React.CSSProperties}
                  />
                  {steps.map((st, index) => renderTimelineStep(st, index))}
                </div>
              </div>
              <aside className="steps-timeline-layout__detail hidden lg:block min-w-0 w-full lg:sticky lg:top-24 self-start">
                {renderJourneyPanel(false)}
              </aside>
            </div>
          </div>
        ) : isStageRow ? (
          <>
            <div
              className={`steps-flow-stage-row hidden lg:grid transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '320ms', ['--steps-stage-cols' as string]: stepCount }}
            >
              {steps.map((st, index) => renderStageCard(st, index))}
            </div>

            <div
              className={`steps-flow-stage-row steps-flow-stage-row--compact lg:hidden grid transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '320ms', ['--steps-stage-cols' as string]: stepCount }}
            >
              {steps.map((st, index) => renderStageCard(st, index))}
            </div>
          </>
        ) : (
          <>
            <div
              className={`steps-flow-carousel-row hidden lg:flex items-stretch gap-0 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '360ms' }}
            >
              {steps.map((st, index) => (
                <React.Fragment key={st.num}>
                  <div className="steps-flow-carousel-cell flex-1 min-w-0 flex">{renderCarouselCard(st, index)}</div>
                  {index < steps.length - 1 && (
                    <StepFlowConnector index={index} variant="horizontal" live={isVisible && (activeStep === index || activeStep === index + 1)} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="lg:hidden w-full max-w-none sm:max-w-xl sm:mx-auto space-y-0">
              {steps.map((st, index) => (
                <React.Fragment key={`m-${st.num}`}>
                  {renderCarouselCard(st, index)}
                  {index < steps.length - 1 && (
                    <StepFlowConnector index={index} variant="vertical" live={isVisible && (activeStep === index || activeStep === index + 1)} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        )}

        {consent && (
          <ConsentBanner
            eyebrow={consent.eyebrow}
            body={consent.body}
            pill={consent.pill}
            className={`mt-10 sm:mt-12 w-full max-w-none transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-[0.98]'
            }`}
            style={{ transitionDelay: '900ms' }}
          />
        )}
      </div>
    </section>
  );
};
