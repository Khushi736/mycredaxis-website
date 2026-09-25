/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'home' | 'individuals' | 'business' | 'partners' | 'security' | 'faq' | 'contact';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'security' | 'individuals' | 'business' | 'partners' | 'pricing';
}
