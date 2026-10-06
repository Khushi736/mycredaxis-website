/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

type PageSectionTone = 'white' | 'muted' | 'dark';

type PageSectionProps = {
  tone?: PageSectionTone;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const PageSection: React.FC<PageSectionProps> = ({
  tone = 'muted',
  children,
  className = '',
  id,
}) => {
  const toneClass =
    tone === 'white' ? 'page-section--white' : tone === 'dark' ? 'page-section--dark' : 'page-section--muted';

  return (
    <section id={id} className={`page-section ${toneClass} ${className}`.trim()}>
      <div className="site-container relative z-10">{children}</div>
    </section>
  );
};

export const PageSectionHeader: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ title, subtitle, className = '' }) => (
  <header className={`mb-10 sm:mb-14 max-w-3xl ${className}`.trim()}>
    <h2 className="section-h2 font-extrabold text-[#0A0A0B] tracking-tight">{title}</h2>
    {subtitle && <p className="section-lead text-slate-600 mt-2 sm:mt-4">{subtitle}</p>}
  </header>
);
