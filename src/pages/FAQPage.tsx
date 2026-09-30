/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { FAQSection } from '../components/FAQSection';
import { ALL_FAQS } from '../data/faqData';
import { HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

interface FAQPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll reveal observer for smooth entry animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#F7F8FA]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* Page Header */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 px-6 lg:px-12 max-w-7xl mx-auto text-center space-y-4 sm:space-y-6 relative">
        {/* Soft background glow for the header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#4F6BFF]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          <h1 
            className={`font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0B] tracking-tight lg:whitespace-nowrap transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            How can we help you?
          </h1>

          <p 
            className={`text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mt-4 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Find answers regarding credit visibility, wallet management, automated business collections, and partner device financing.
          </p>
        </div>
      </section>

      {/* Comprehensive Categorized FAQ Section */}
      <div 
        className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <FAQSection
          items={ALL_FAQS}
          title="Knowledge Base"
          subtitle="Select a category below to filter questions."
          showCategoryFilters={true}
        />
      </div>

      {/* Still Have Questions Box */}
      <section className="py-16 sm:py-20 bg-white text-center border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle background glow for contact section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20C7B5]/5 to-transparent pointer-events-none" />

        <div className="max-w-xl mx-auto px-6 space-y-4 sm:space-y-5 relative z-10">
          <h3 className="font-extrabold text-2xl sm:text-3xl text-[#0A0A0B] tracking-tight">
            Still have questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Our support and solutions teams are available to clarify any aspect of our platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-5">
            <button
              onClick={() => onOpenContact('general')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-full bg-[#0A0A0B] hover:bg-slate-900 active:scale-98 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
            >
              Contact Support
            </button>
            <a
              href="mailto:support@mycredaxis.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-98 text-slate-800 font-semibold text-xs sm:text-sm transition-all text-center"
            >
              Email support@mycredaxis.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};