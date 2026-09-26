/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { ArrowLeft } from 'lucide-react';

interface TermsConditionsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigate }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans py-12 px-6 sm:px-12 lg:px-24">
      <div>
        
        {/* Navigation Back Link */}
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        {/* Document Header */}
        <header className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-base font-medium text-slate-500">
            Last Updated: August 5, 2026
          </p>
        </header>

        {/* Document Body Content */}
        <article className="space-y-12 text-slate-700 leading-relaxed text-base sm:text-lg">
          
          {/* Section: Acceptance of Terms */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the MyCredAxis platform (operated by BisaniBrothers Private Limited), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          {/* Section: Description of Services */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Description of Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MyCredAxis acts as a technology intermediary platform providing digital financial services, which include but are not limited to: Utility & Bill Payments, Credit Services, and Rewards Program.
            </p>
          </section>

          {/* Section: Payments and Transactions */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Payments and Transactions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All payments are processed through authorized payment gateways. MyCredAxis does not store your core banking passwords. We are not liable for late fees incurred due to processing delays beyond our control.
            </p>
          </section>

          {/* Section: User Accounts and Security */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              User Accounts and Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Users must provide accurate, current, and complete information during registration and KYC. You are solely responsible for maintaining the confidentiality of your account credentials. MyCredAxis reserves the right to suspend accounts engaging in fraudulent activities.
            </p>
          </section>

          {/* Section: Credit Score & Reports Disclaimer */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Credit Score & Reports Disclaimer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MyCredAxis is not a Credit Information Company (CIC). The credit scores and reports displayed on our platform are sourced directly from authorized credit bureaus (e.g., CIBIL, Experian). We do not guarantee the accuracy of this information.
            </p>
          </section>

          {/* Section: Rewards and Promotional Offers */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Rewards and Promotional Offers
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MyCredAxis reserves the right to modify, suspend, or terminate any rewards program, cashback offer, or promotional coupon without prior notice. Rewards cannot be exchanged for cash unless explicitly stated.
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, Bisani Brothers Private Limited shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the platform.
            </p>
          </section>

          {/* Section: Changes to Terms */}
          <section className="space-y-5 pb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Changes to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms and Conditions periodically to reflect changes in our services or regulatory laws. Continued use of the platform after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
};