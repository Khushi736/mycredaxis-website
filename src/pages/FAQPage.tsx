/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { ALL_FAQS } from '../data/faqData';
import { HelpCircle, Mail, Phone, MessageSquare } from 'lucide-react';

interface FAQPageProps {
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <section className="pt-8 pb-12 px-6 lg:px-12 max-w-7xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-[#4F6BFF]" />
          <span className="text-[#4F6BFF]">Knowledge & Clarity</span>
          <span aria-hidden="true">·</span>
          <span>Shared FAQ Bank</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0A0A0B] tracking-tight">
          How can we help you?
        </h1>

        <p className="font-body text-base text-slate-600 max-w-2xl mx-auto">
          Find answers regarding credit visibility, wallet management, automated business collections, and partner device financing.
        </p>
      </section>

      {/* Comprehensive Categorized FAQ Section */}
      <FAQSection
        items={ALL_FAQS}
        title="Knowledge Base"
        subtitle="Select a category below to filter questions."
        showCategoryFilters={true}
      />

      {/* Still Have Questions Box */}
      <section className="py-16 bg-white text-center border-t border-slate-200/80">
        <div className="max-w-xl mx-auto px-6 space-y-4">
          <h3 className="font-display font-bold text-2xl text-[#0A0A0B]">
            Still have questions?
          </h3>
          <p className="text-xs text-slate-600 font-body">
            Our support and solutions teams are available to clarify any aspect of our platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact('general')}
              className="px-6 py-3 rounded-full bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Contact Support
            </button>
            <a
              href="mailto:support@mycredaxis.com"
              className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
            >
              Email support@mycredaxis.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
