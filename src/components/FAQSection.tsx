/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after animating once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with Scroll Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div 
            className={`flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4F6BFF]" />
            <span className="text-[#4F6BFF]">Support & Clarity</span>
            <span aria-hidden="true">·</span>
            <span>FAQ</span>
          </div>

          <h2 
            className={`font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {title}
          </h2>

          <p 
            className={`text-sm sm:text-base text-slate-600 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {subtitle}
          </p>
        </div>

        {/* Optional Category Filter Tabs with Reveal */}
        {showCategoryFilters && (
          <div 
            className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1.5 bg-slate-200/60 rounded-2xl max-w-2xl mx-auto transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-[10px] sm:rounded-xl text-[10px] sm:text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#0A0A0B] shadow-sm'
                    : 'text-slate-600 hover:text-[#0A0A0B] hover:bg-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion List with Staggered Reveal */}
        <div className="space-y-3 sm:space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openId === item.id;
            const delay = 450 + index * 100; // Staggered reveal for each FAQ

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md overflow-hidden transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0A0A0B] transition-colors group-hover:text-[#4F6BFF]">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#4F6BFF] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-[#EEF2FF] group-hover:text-[#4F6BFF]'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </button>

                {/* Animated content expansion */}
                <div 
                  className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-5 sm:pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="pt-3 sm:pt-4 border-t border-slate-100 text-[11px] sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ with Reveal */}
        {onNavigateToFullFaq && (
          <div 
            className={`mt-10 sm:mt-12 text-center transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button
              onClick={onNavigateToFullFaq}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-[#4F6BFF] hover:text-[#3854E0] group cursor-pointer transition-colors"
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