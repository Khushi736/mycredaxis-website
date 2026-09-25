/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQItem, PageRoute } from '../types';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showCategoryFilters?: boolean;
  onNavigateToFullFaq?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers regarding security, mandates, credit tracking, and onboarding.',
  showCategoryFilters = false,
  onNavigateToFullFaq,
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    showCategoryFilters && selectedCategory !== 'all'
      ? items.filter((item) => item.category === selectedCategory)
      : items;

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'security', label: 'Security & Trust' },
    { id: 'individuals', label: 'For Individuals' },
    { id: 'business', label: 'For Businesses' },
    { id: 'partners', label: 'For Partners' },
    { id: 'pricing', label: 'Pricing' },
  ];

  return (
    <section id="faq" className="py-24 bg-[#F7F8FA] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#4F6BFF]" />
            <span className="text-[#4F6BFF]">Support & Clarity</span>
            <span aria-hidden="true">·</span>
            <span>FAQ</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight">
            {title}
          </h2>

          <p className="font-body text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Optional Category Filter Tabs */}
        {showCategoryFilters && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 p-1.5 bg-slate-200/60 rounded-2xl max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-base text-[#0A0A0B]">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 font-body leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ if on Homepage */}
        {onNavigateToFullFaq && (
          <div className="mt-10 text-center">
            <button
              onClick={onNavigateToFullFaq}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F6BFF] hover:underline cursor-pointer"
            >
              <span>Explore full Categorized FAQ Knowledge Base</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
