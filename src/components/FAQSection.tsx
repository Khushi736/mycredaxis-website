/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ArrowRight, Search, X } from 'lucide-react';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  /** When set, renders this substring in the title with a gradient accent (must appear in `title`). */
  titleAccent?: string;
  showCategoryFilters?: boolean;
  onNavigateToFullFaq?: () => void;
  /** Richer layout: page-section spacing, stronger cards & accordion motion. */
  enhanced?: boolean;
  /** Keep the section title on one line from large breakpoints up. */
  titleSingleLine?: boolean;
  /** Dedicated FAQ route: toolbar + accordion (hero lives in PageHero). */
  fullPage?: boolean;
  showSearch?: boolean;
  suppressHeader?: boolean;
}

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

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All', fullLabel: 'All Questions' },
  { id: 'general', label: 'General', fullLabel: 'General' },
  { id: 'security', label: 'Security', fullLabel: 'Security & Trust' },
  { id: 'individuals', label: 'Individuals', fullLabel: 'For Individuals' },
  { id: 'business', label: 'Business', fullLabel: 'For Businesses' },
  { id: 'partners', label: 'Partners', fullLabel: 'For Partners' },
  { id: 'pricing', label: 'Pricing', fullLabel: 'Pricing' },
] as const;

export const FAQSection: React.FC<FAQSectionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers regarding security, mandates, credit tracking, and onboarding.',
  titleAccent,
  showCategoryFilters = false,
  onNavigateToFullFaq,
  enhanced = false,
  titleSingleLine = false,
  fullPage = false,
  showSearch = false,
  suppressHeader = false,
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = items.filter((item) => {
    if (showCategoryFilters && selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery)
    );
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const showToolbar = fullPage && (showSearch || showCategoryFilters);

  return (
    <section
      id={fullPage ? 'faq-articles' : 'faq'}
      ref={sectionRef}
      aria-labelledby={suppressHeader ? 'page-hero-heading' : 'faq-section-title'}
      className={
        enhanced
          ? `fx-faq fx-faq--enhanced page-section page-section--muted relative overflow-hidden ${
              fullPage ? 'faq-page-section' : ''
            }`
          : 'fx-faq py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 relative overflow-hidden'
      }
     
    >
      {enhanced && !fullPage && (
        <div
          className="absolute top-[8%] right-[4%] w-[min(420px,55vw)] h-[min(420px,55vw)] rounded-full bg-gradient-to-br from-[#4F6BFF]/15 via-[#4F6BFF]/5 to-transparent blur-3xl pointer-events-none faq-ambient-glow"
          aria-hidden
        />
      )}

      <div className="site-container relative z-10">
        {showToolbar && (
          <div
            className={`faq-toolbar w-full max-w-none transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            {showSearch && (
              <div className="faq-toolbar-search">
                <label htmlFor="faq-search-input" className="sr-only">
                  Search questions
                </label>
                <Search className="faq-toolbar-search-icon" aria-hidden strokeWidth={2.25} />
                <input
                  id="faq-search-input"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions…"
                  className="faq-toolbar-search-input"
                  autoComplete="off"
                />
                {searchQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="faq-toolbar-search-clear"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" aria-hidden />
                  </button>
                )}
              </div>
            )}

            {showCategoryFilters && (
              <div className="faq-toolbar-topics">
                <div className="faq-toolbar-topics-head">
                  <span className="faq-toolbar-topics-label">Topics</span>
                  <span className="faq-toolbar-result" aria-live="polite">
                    {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'}
                  </span>
                </div>
                <div className="faq-topic-rail" role="tablist" aria-label="Filter questions by category">
                  {FAQ_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={selectedCategory === cat.id}
                      title={cat.fullLabel}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`faq-topic-chip ${
                        selectedCategory === cat.id ? 'faq-topic-chip--active' : ''
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!suppressHeader && (
          <header className="faq-section-header text-left w-full max-w-none mb-10 sm:mb-12 lg:mb-14">
            <h2
              id="faq-section-title"
              className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${
                titleSingleLine ? 'faq-section-title-one-line' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '120ms' }}
            >
              {titleAccent ? renderTitleWithAccent(title, titleAccent) : title}
            </h2>

            {subtitle ? (
              <p
                className={`section-lead ${enhanced ? '' : 'industry-subline'} text-slate-600 mt-2 sm:mt-4 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '240ms' }}
              >
                {subtitle}
              </p>
            ) : null}
          </header>
        )}

        {showCategoryFilters && !fullPage && (
          <div
            className={`faq-category-shell w-full max-w-none mb-8 sm:mb-10 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '320ms' }}
          >
            <div
              className="faq-category-inner p-2 sm:p-2.5"
              role="tablist"
              aria-label="Filter questions by category"
            >
              <div className="faq-category-grid">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`faq-category-pill ${
                      selectedCategory === cat.id ? 'faq-category-pill--active' : ''
                    }`}
                  >
                    {cat.fullLabel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div
          className={`faq-section-list w-full max-w-none ${
            showToolbar ? 'mt-8 sm:mt-10' : ''
          } ${enhanced ? 'space-y-3 sm:space-y-3.5' : 'space-y-3 sm:space-y-4'}`}
        >
          {filteredItems.length === 0 && (
            <div className="faq-empty-state text-center py-10 sm:py-12 px-6 rounded-2xl border border-dashed border-slate-200 bg-white/80">
              <p className="section-h3 font-bold text-[#0A0A0B]">No matching questions</p>
              <p className="section-lead text-slate-600 mt-2 max-w-md mx-auto">
                Try a different keyword or choose another topic.
              </p>
              {(normalizedQuery || selectedCategory !== 'all') && (
                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-[#4F6BFF] hover:text-[#3854E0]"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Reset filters
                </button>
              )}
            </div>
          )}

          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const delay = showToolbar ? 160 + index * 70 : 360 + index * 90;

            return (
              <article
                key={item.id}
                className={`faq-card fintech-card rounded-2xl sm:rounded-[1.25rem] border overflow-hidden transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  isOpen
                    ? enhanced
                      ? 'faq-card--open border-[#4F6BFF]/25 shadow-lg shadow-[#4F6BFF]/8'
                      : 'shadow-md border-slate-300/90'
                    : enhanced
                      ? 'border-slate-200/90 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#4F6BFF]/20'
                      : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <button
                  type="button"
                  id={`faq-trigger-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6BFF]/40 focus-visible:ring-offset-2 group"
                >
                  <span
                    className={`section-h3 font-bold transition-colors duration-300 ${
                      isOpen ? 'text-[#4F6BFF]' : 'text-[#0A0A0B] group-hover:text-[#4F6BFF]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`faq-toggle w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#4F6BFF] text-white shadow-md shadow-[#4F6BFF]/35'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4F6BFF]'
                    }`}
                    aria-hidden
                  >
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t ${
                        enhanced ? 'border-slate-200/80' : 'border-slate-100'
                      }`}
                    >
                      <p
                        className={`section-lead text-slate-600 leading-relaxed pt-3 sm:pt-4 transition-all duration-500 ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {onNavigateToFullFaq && (
          <div
            className={`mt-10 sm:mt-12 text-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '720ms' }}
          >
            <button
              type="button"
              onClick={onNavigateToFullFaq}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-[#4F6BFF] hover:text-[#3854E0] group cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6BFF]/40 rounded-sm"
            >
              <span className="border-b border-transparent group-hover:border-[#3854E0] pb-0.5 transition-colors">
                Explore full Categorized FAQ Knowledge Base
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
