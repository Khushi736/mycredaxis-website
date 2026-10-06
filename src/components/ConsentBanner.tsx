/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck } from 'lucide-react';

type ConsentBannerProps = {
  eyebrow?: string;
  body: string;
  pill?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ConsentBanner: React.FC<ConsentBannerProps> = ({
  eyebrow,
  body,
  pill,
  ariaLabel,
  className = '',
  style,
}) => {
  const regionLabel = ariaLabel ?? eyebrow ?? 'Consent and security';

  return (
    <div
      className={`consent-banner-shell ${className}`.trim()}
      style={style}
      role="region"
      aria-label={regionLabel}
    >
      <div className="consent-banner-inner p-5 sm:p-6 lg:py-7 lg:px-8">
        <div className="consent-banner-grid relative z-10">
          <div className="consent-shield-wrap w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#20C7B5]/15 border border-[#20C7B5]/25 flex items-center justify-center text-[#20C7B5] shrink-0 mx-auto sm:mx-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
          </div>

          <div className="consent-banner-copy min-w-0">
            {eyebrow ? (
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#20C7B5] block">
                {eyebrow}
              </span>
            ) : null}
            <p
              className={`consent-banner-body font-semibold text-white text-pretty ${
                eyebrow ? 'mt-1.5 sm:mt-2' : 'mt-0'
              }`}
            >
              {body}
            </p>
          </div>

          {pill ? (
            <div className="consent-banner-aside">
              <div className="consent-verified-pill inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono text-slate-300 px-3.5 py-2 rounded-full whitespace-nowrap">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20C7B5] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20C7B5]" />
                </span>
                <span>{pill}</span>
              </div>
            </div>
          ) : (
            <div className="consent-banner-aside hidden lg:block" aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
};
