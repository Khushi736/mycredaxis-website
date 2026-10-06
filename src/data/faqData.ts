/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem } from '../types';

export const ALL_FAQS: FAQItem[] = [
  // Master FAQs (Global / Help Center)
  {
    id: 'gen-master-1',
    category: 'general',
    question: 'What is MyCredAxis, and how do Centric and Master Key fit together?',
    answer:
      'MyCredAxis is a unified platform providing complete financial verification and asset management solutions. Centric handles pre-approval credit and income verification via consent-based pulls, while Master Key provides post-issuance hardware asset recovery through remote locking technology.',
  },
  {
    id: 'gen-master-2',
    category: 'general',
    question: 'How does MyCredAxis ensure data security and privacy?',
    answer:
      'All data transmitted across Centric and Master Key is secured using bank-grade 256-bit AES encryption in transit and at rest. We adhere strictly to zero-trust architecture, meaning no data is accessed or processed without verified user consent or contractual authorization.',
  },
  {
    id: 'gen-master-3',
    category: 'general',
    question: 'Who controls the data access consent process?',
    answer:
      'The end consumer always retains primary control. No background pull or financial profile compilation ever occurs without a live, one-time password (OTP) authorized directly on the user’s mobile device.',
  },
  {
    id: 'gen-master-4',
    category: 'general',
    question: 'Can MyCredAxis solutions be customized for enterprise clients?',
    answer:
      'Yes. We provide flexible API integrations, custom dashboard roles, white-label consent interfaces, and tailored reporting features for enterprise financial institutions, large retail networks, and distributor groups.',
  },
  {
    id: 'gen-master-5',
    category: 'general',
    question: 'How do I get started as an Individual, Business, or Retail Partner?',
    answer:
      'Individuals: Simply enter your phone number on our website to generate and share your verified financial profile in minutes. Businesses & Partners: Click “Request API Access” or “Book a Platform Demo” to connect with our team and set up your sandbox environment.',
  },

  // General — platform (classic)
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
      'MyCredAxis serves three distinct audiences: Individuals looking to manage credit, bills, and everyday payments; Businesses & Merchants needing automated recurring payment collections; and Retailers & Distribution Partners looking to offer secured device financing (Master Key) to their customers.',
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
    question: 'What happens with Master Key financing if I miss a payment?',
    answer:
      'Master Key is secured device financing with a built-in recovery mechanism. Contact MyCredAxis for details about missed payments.',
  },
  {
    id: 'ind-3',
    category: 'individuals',
    question: "What's coming next in the app (BBPS, cash withdrawal, etc.)?",
    answer:
      'Bill payments via BBPS and cash and money movement services, including AePS, DMT/IMPS, and Micro ATM, are marked Coming Soon.',
  },
  {
    id: 'ind-cen-1',
    category: 'individuals',
    question: 'Is Centric a credit bureau or a bank?',
    answer:
      'No. Centric is an encrypted financial profile management platform. We do not issue loans or generate independent credit scores; instead, we securely pull your official records across identity, credit, employment, address, and banking from verified data partners into one unified report.',
  },
  {
    id: 'ind-cen-2',
    category: 'individuals',
    question: 'Will generating a Centric report hurt my credit score?',
    answer:
      'No. Requesting your own financial profile through Centric is categorized as a soft inquiry, which has zero negative impact on your official credit score.',
  },
  {
    id: 'ind-cen-3',
    category: 'individuals',
    question: 'Can anyone access my financial details without me knowing?',
    answer:
      'Absolutely not. Centric operates on a strict consent-first model. No data can ever be pulled or shared without your active SMS OTP verification every single time.',
  },
  {
    id: 'ind-cen-4',
    category: 'individuals',
    question: 'How long does a recipient have access to my shared financial report?',
    answer:
      'You maintain complete control over link expiration. You can share your profile via a time-sensitive access link and revoke viewing access at any time directly from your dashboard.',
  },
  {
    id: 'ind-cen-5',
    category: 'individuals',
    question: 'What happens to my raw documents after I generate my report?',
    answer:
      'Unlike static PDF email attachments that sit permanently in third-party inboxes, Centric does not store raw, unencrypted files on shared servers. Your data is encrypted in transit and shared only as a secure, verified digital view.',
  },

  // For Businesses — Centric
  {
    id: 'biz-cen-1',
    category: 'business',
    question: 'How does Centric integrate with our existing underwriting or HR workflow?',
    answer:
      'Centric offers both a standalone web dashboard for manual verification and robust REST APIs that integrate directly into your existing CRM, LOS (Loan Origination System), or onboarding software.',
  },
  {
    id: 'biz-cen-2',
    category: 'business',
    question: 'How is Centric compliant with data privacy regulations?',
    answer:
      'Compliance is built into our core architecture. Every data request triggers an explicit OTP consent flow sent directly to the individual’s registered mobile number, ensuring a audit-ready consent trail for regulatory compliance.',
  },
  {
    id: 'biz-cen-3',
    category: 'business',
    question: 'How fast are financial profiles returned once a user grants consent?',
    answer:
      'Once the applicant inputs their OTP, Centric compiles and returns the consolidated financial profile (identity, credit health, employment history, address, and banking) in under 10 seconds.',
  },
  {
    id: 'biz-cen-4',
    category: 'business',
    question: 'Why should my business use Centric instead of integrating directly with credit bureaus?',
    answer:
      'Direct bureau checks only provide one piece of the puzzle. Centric consolidates bureau scores, employment confirmation, address verification, and income signals into one unified response—saving your engineering team from managing multiple vendor APIs and manual data reconciliation.',
  },
  {
    id: 'biz-cen-5',
    category: 'business',
    question: 'What industry sectors currently use Centric for Business?',
    answer:
      'Centric is optimized for non-banking financial companies (NBFCs), digital lenders, background verification and staffing agencies, high-trust intro platforms, and residential property management firms.',
  },

  // For Businesses — platform
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

  // For Partners — Centric & Master Key
  {
    id: 'prt-cen-1',
    category: 'partners',
    question: 'How does Centric work at the point of sale (POS)?',
    answer:
      'At checkout, your sales associate enters the customer’s phone number into your partner dashboard. The customer receives a prompt to approve data access via OTP on their phone. Upon approval, key credit health and income indicators appear instantly to guide your financing approval.',
  },
  {
    id: 'prt-cen-2',
    category: 'partners',
    question: 'What types of devices can be secured using Master Key?',
    answer:
      'Master Key supports smartphones, tablets, laptops, and smart consumer electronics running supported operating systems (Android, iOS, Windows) via light device management integration.',
  },
  {
    id: 'prt-cen-3',
    category: 'partners',
    question: 'Does locking a device via Master Key erase the customer’s personal data?',
    answer:
      'No. Master Key locks access to the device user interface while displaying a customizable payment reminder screen with direct payment links. Personal data, photos, and files remain intact and untouched.',
  },
  {
    id: 'prt-cen-4',
    category: 'partners',
    question: 'What happens when a customer pays their overdue balance on a locked device?',
    answer:
      'Once the payment confirmation signal is received by the Master Key engine, an automated unlock command is sent immediately to the device—restoring full functionality in seconds without requiring manual intervention or store visits.',
  },
  {
    id: 'prt-cen-5',
    category: 'partners',
    question: 'Is Master Key legally compliant for retail device financing?',
    answer:
      'Yes. Master Key operates strictly under explicit device-backed credit terms agreed to by the customer during checkout. Remote locking capabilities are fully disclosed and legally anchored within the signed customer financing agreement.',
  },
  {
    id: 'prt-cen-6',
    category: 'partners',
    question: 'Do I need to adopt both Centric and Master Key together?',
    answer:
      'No, both products are modular. You can start with Centric for pre-approval verification, deploy Master Key solely for device asset protection, or combine both into the full MyCredAxis Power Suite for end-to-end risk management.',
  },
  // For Partners — platform
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
  ['gen-master-1', 'sec-1', 'sec-2', 'ind-2', 'biz-1', 'prc-1'].includes(f.id)
);

const INDIVIDUAL_FAQ_IDS = [
  'ind-cen-1',
  'ind-cen-2',
  'ind-cen-3',
  'ind-cen-4',
  'ind-cen-5',
  'ind-1',
  'ind-2',
  'ind-3',
  'sec-1',
  'sec-2',
  'gen-master-1',
  'gen-master-2',
  'gen-master-3',
  'gen-master-5',
  'gen-1',
  'gen-2',
  'gen-3',
] as const;

export const INDIVIDUAL_FAQS = INDIVIDUAL_FAQ_IDS.map((id) => ALL_FAQS.find((f) => f.id === id)).filter(
  (f): f is FAQItem => Boolean(f)
);

const BUSINESS_FAQ_IDS = [
  'biz-cen-1',
  'biz-cen-2',
  'biz-cen-3',
  'biz-cen-4',
  'biz-cen-5',
  'biz-1',
  'biz-2',
  'biz-3',
  'sec-1',
  'prc-1',
] as const;

export const BUSINESS_FAQS = BUSINESS_FAQ_IDS.map((id) => ALL_FAQS.find((f) => f.id === id)).filter(
  (f): f is FAQItem => Boolean(f)
);

const PARTNER_FAQ_IDS = [
  'prt-cen-1',
  'prt-cen-2',
  'prt-cen-3',
  'prt-cen-4',
  'prt-cen-5',
  'prt-cen-6',
  'gen-master-1',
  'gen-master-2',
  'gen-master-3',
  'gen-master-4',
  'gen-master-5',
  'prt-1',
  'prt-2',
  'sec-2',
  'sec-1',
  'gen-1',
  'gen-2',
  'prc-1',
] as const;

export const PARTNER_FAQS = PARTNER_FAQ_IDS.map((id) => ALL_FAQS.find((f) => f.id === id)).filter(
  (f): f is FAQItem => Boolean(f)
);
