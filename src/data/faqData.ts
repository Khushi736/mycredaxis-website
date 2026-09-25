/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem } from '../types';

export const ALL_FAQS: FAQItem[] = [
  // General
  {
    id: 'gen-1',
    category: 'general',
    question: 'What is MyCredAxis?',
    answer:
      'MyCredAxis brings collections, credit visibility, a wallet, and secured device financing into a single platform. Individuals can manage payments and credit, while businesses can automate collections.',
  },
  {
    id: 'gen-2',
    category: 'general',
    question: 'Who is MyCredAxis built for?',
    answer:
      'MyCredAxis serves three distinct audiences: Individuals looking to manage credit, bills, and everyday payments; Businesses & Merchants needing automated recurring payment collections; and Retailers & Distribution Partners looking to offer secured device financing (Super Key) to their customers.',
  },
  {
    id: 'gen-3',
    category: 'general',
    question: 'Is MyCredAxis available on iOS and Android?',
    answer:
      'Download the MyCredAxis app using the app store links provided on this website.',
  },

  // Security & Trust
  {
    id: 'sec-1',
    category: 'security',
    question: 'Is my banking information stored by MyCredAxis?',
    answer:
      'Sensitive banking credentials are never stored. Every payment mandate requires bank-authenticated customer approval.',
  },
  {
    id: 'sec-2',
    category: 'security',
    question: 'How does consent work for mandates and financing?',
    answer:
      'Every payment mandate requires the customer’s bank-authenticated approval. Financing arrangements require verified customer consent. Nothing is debited without consent.',
  },
  {
    id: 'sec-3',
    category: 'security',
    question: 'What compliance certifications does MyCredAxis hold?',
    answer:
      'MyCredAxis lists RBI-Compliant, PCI DSS Certified, and NPCI Compliant among its trust and compliance commitments.',
  },

  // For Individuals
  {
    id: 'ind-1',
    category: 'individuals',
    question: 'Is checking my credit score free, and does it affect my score?',
    answer:
      'Credit checks are consent-based. The cost and effect on your score are not specified here; contact MyCredAxis support for details.',
  },
  {
    id: 'ind-2',
    category: 'individuals',
    question: 'What happens with Super Key financing if I miss a payment?',
    answer:
      'Super Key is secured device financing with a built-in recovery mechanism. Contact MyCredAxis for details about missed payments.',
  },
  {
    id: 'ind-3',
    category: 'individuals',
    question: "What's coming next in the app (BBPS, cash withdrawal, etc.)?",
    answer:
      'Bill payments via BBPS and cash and money movement services, including AePS, DMT/IMPS, and Micro ATM, are marked Coming Soon.',
  },

  // For Businesses
  {
    id: 'biz-1',
    category: 'business',
    question: 'How does automated collection work?',
    answer:
      'Businesses set up bank-authorized recurring payments for EMIs, subscriptions, and dealer receivables. Payments and collections are processed automatically.',
  },
  {
    id: 'biz-2',
    category: 'business',
    question: 'What happens if a payment mandate fails?',
    answer:
      'Contact our team for details about failed or revoked mandates.',
  },
  {
    id: 'biz-3',
    category: 'business',
    question: "What's the onboarding process for merchants?",
    answer:
      'Merchants complete digital KYC. Contact our team to discuss onboarding for your business.',
  },

  // For Partners
  {
    id: 'prt-1',
    category: 'partners',
    question: 'How do I apply to become a partner?',
    answer:
      'Contact the MyCredAxis partnerships team to apply. The team will review your business and use case.',
  },
  {
    id: 'prt-2',
    category: 'partners',
    question: 'What does MyCredAxis provide vs. what the partner provides?',
    answer:
      'MyCredAxis provides the platform for secured device financing and digital payment collection. Contact the partnerships team to discuss your role and support.',
  },

  // Pricing
  {
    id: 'prc-1',
    category: 'pricing',
    question: 'What does MyCredAxis cost?',
    answer:
      'Pricing depends on your volume and use case. Contact our team for current terms.',
  },
];

export const HOMEPAGE_FAQS = ALL_FAQS.filter((f) =>
  ['gen-1', 'sec-1', 'sec-2', 'ind-2', 'biz-1', 'prc-1'].includes(f.id)
);

export const INDIVIDUAL_FAQS = ALL_FAQS.filter((f) =>
  ['ind-1', 'gen-1', 'ind-2', 'sec-1', 'ind-3', 'sec-2'].includes(f.id)
);

export const BUSINESS_FAQS = ALL_FAQS.filter((f) =>
  ['biz-1', 'biz-2', 'biz-3', 'sec-1', 'prc-1'].includes(f.id)
);

export const PARTNER_FAQS = ALL_FAQS.filter((f) =>
  ['prt-1', 'prt-2', 'ind-2', 'sec-2', 'prc-1'].includes(f.id)
);
