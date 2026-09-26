/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { PageRoute } from '../types';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
            Privacy Policy
          </h1>
          <p className="text-base font-medium text-slate-500">
            Effective Date: Sep 16, 2026
          </p>
        </header>

        {/* Document Body Content */}
        <article className="space-y-12 text-slate-700 leading-relaxed text-base sm:text-lg">
          
          {/* Section: Introduction */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              This Privacy Policy explains how <strong>MyCredAxis</strong> — a next-generation digital finance platform by Newish Technology, a sister concern of Bisani Brothers Pvt. Ltd. — including UPI AutoPay / mandate, wallet, promotional content, Master Key Pro (formerly Super Key / DLC Device Lock), and DLC Tokens (prepaid tokens used to create Master Keys), and Centric (mobile-number verification / identity intelligence service), protects your personal information when you use our mobile application, website, and related services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using MyCredAxis, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* Section: Information We Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Information We Collect
            </h2>
            <p className="text-slate-600">Depending on the services you use, we may collect the following information:</p>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>Email Address (if provided)</li>
                <li>Profile Photo / Profile Image (where provided)</li>
                <li>Date of Birth (where required)</li>
                <li>Address (where required)</li>
                <li>Partner/business details, including business name, owner name, and business type</li>
              </ul>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Identity Verification Information</h3>
              <p className="text-slate-600">Where required for KYC or regulatory compliance, we may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>PAN Number</li>
                <li>Government ID Information (only where legally permitted and with your consent)</li>
                <li>Other identity documents required for verification</li>
                <li>Bank account details for KYC / payout / AutoPay, including account number, IFSC, account holder name, and account type</li>
                <li>VPA / UPI ID provided by the user or customer for AutoPay purposes</li>
              </ul>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Device Information</h3>
              <p className="text-slate-600">To help secure the platform and improve service performance, we may collect:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Device Model</li>
                <li>Operating System Version</li>
                <li>App Version</li>
                <li>Device Identifier (where applicable)</li>
              </ul>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Become a Partner</h3>
              <p className="text-slate-600 leading-relaxed">
                If you apply to Become a Partner, we collect business details you enter: business name, business type, owner name, PAN, full address, city, state, pincode, and the modules you select. Email, GST, and extra pincodes are optional. We use this to review your application and, if approved, to show your partner code, commission, referrals, and earnings in the App. There is no in-app payment or fee to submit a partner application.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Master Key Pro (formerly Super Key / DLC Device Lock) Information</h3>
              <p className="text-slate-600">
                If you use our Master Key Pro (DLC Device Lock) feature as an authorized merchant or partner, we may collect and process:
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Customer details entered by you, including full name and mobile number</li>
                <li>Customer device details, including IMEI number(s), manufacturer, and model</li>
                <li>Device eligibility status from our approved device catalogue</li>
                <li>Enrollment and key status, such as pending, active, released, or unregistered</li>
                <li>Lock/unlock status and related control information</li>
                <li>Action history, including lock, unlock, reminders sent, unlock codes, and release/unregister events</li>
                <li>Consent status recorded as part of the enrollment process</li>
                <li>DLC Tokens used to create Master Keys, including token balance before/after creation and related token deduction records. Tokens may be purchased using wallet balance or online payment (Razorpay). Master Key creation consumes tokens from your DLC Token balance rather than a direct INR debit from your main wallet at the moment of key creation (unless otherwise stated in the App).</li>
              </ul>
              <p className="text-slate-600 leading-relaxed pt-2">
                This information is collected to provide secured device financing and remote device management services that you initiate through the App. In this Privacy Policy, references to &ldquo;Master Key Pro&rdquo;, &ldquo;Master Key&rdquo;, &ldquo;Super Key&rdquo;, or &ldquo;DLC Device Lock&rdquo; mean the same feature unless the context clearly requires otherwise.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Promotional Banners and External Links</h3>
              <p className="text-slate-600 leading-relaxed">
                The App may display promotional banners on the home screen or other sections. These banners are managed by us and fetched from our servers (/api/banners or dashboard content). For promotional banners, we may process:
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Banner content such as title, description, image, display order, and destination link</li>
                <li>Basic interaction data such as which banner was shown or tapped, where logged on our servers for analytics and service improvement</li>
              </ul>
              <p className="text-slate-600 leading-relaxed pt-2">
                When you tap a promotional banner that contains an external link, the App opens the link in your device&apos;s external web browser, such as Chrome or your default browser. The App does not embed those promotional pages inside the App. We do not require extra permissions solely to show promotional banners.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Once you open an external website, that website is operated by its own provider and is not controlled by MyCredAxis. Any information you provide on a third-party website is governed by that website&apos;s privacy policy and terms. We recommend reviewing the third-party site&apos;s privacy policy before submitting personal or payment information.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Announcements</h3>
              <p className="text-slate-600 leading-relaxed">
                We may show in-app announcements (image messages from our servers), similar to promotional banners. We may record when you close or tap an announcement so we can stop showing it again and understand what was opened. If an announcement has a link, tapping it may open that page in your browser. We do not control third-party websites; their own privacy policy applies.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Transaction Information</h3>
              <p className="text-slate-600">When you use our services, we may collect:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Wallet balance and wallet top-up / payment-related details</li>
                <li>Transaction reference numbers and payment status</li>
                <li>UPI AutoPay / mandate details, including mandate ID, frequency, amounts, installment / collection / settlement status</li>
                <li>Payer (customer) name and mobile number</li>
                <li>OTP and transactional messages related to login, mandate activity, wallet activity, and service notifications</li>
                <li>Payment amounts for paid services, such as credit report fees, Centric fees, DLC Token purchases, and Master Key–related charges, where applicable</li>
                <li>Reward / points activity and service usage history</li>
              </ul>
              <p className="text-slate-600 leading-relaxed pt-2">
                Card, UPI, or net-banking credentials are entered on the payment gateway&apos;s secure checkout. We do not store your full card number or CVV on our servers. Bill payment details are collected only if and when those services are made available in the App.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Credit Service Information</h3>
              <p className="text-slate-600 leading-relaxed">
                If you request credit-related services, we may collect and process information required to obtain your credit report or credit score only after obtaining your consent, where applicable.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Centric Information</h3>
              <p className="text-slate-600 leading-relaxed">
                Centric is our mobile-number based verification and identity intelligence feature (powered by our technology partner Cashfree). If you use Centric, we collect and process information only after you start the Centric flow, pay the applicable fee (where required), and complete OTP verification with your consent.
              </p>
              <p className="text-slate-600 font-medium">Information you provide for Centric:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>OTP entered by you to complete verification</li>
                <li>Payment / fee details for the Centric request (wallet, coins, or online payment)</li>
              </ul>
              <p className="text-slate-600 font-medium pt-2">Information that may be returned by our verification partner after successful OTP verification (depending on partner response and availability):</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Personal details linked to the verified mobile number (such as name and related identity attributes)</li>
                <li>Contact details associated with the number (such as phone numbers and email addresses, where available)</li>
                <li>Identity document-related attributes (for example PAN and, where returned by the partner and permitted, other ID-related details)</li>
                <li>Address, employment, and other identity / intelligence attributes returned by the partner</li>
                <li>Bank account–related attributes, where returned by the partner</li>
                <li>Credit-score or credit-related attributes, where returned by the partner</li>
                <li>Verification status, reference / verification IDs, timestamps, and raw partner response required to deliver and audit the service</li>
              </ul>
            </div>
          </section>

          {/* Section: How We Use Your Information */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              How We Use Your Information
            </h2>
            <p className="text-slate-600">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
              <li>Create and manage your account</li>
              <li>Verify your identity where required</li>
              <li>Provide bill payment and other services when available</li>
              <li>Process transactions</li>
              <li>Provide credit-related services with your consent</li>
              <li>Deliver rewards and promotional benefits, where applicable</li>
              <li>Display promotional banners and service announcements inside the App</li>
              <li>Respond to customer support requests</li>
              <li>Improve platform functionality and user experience</li>
              <li>Detect and prevent fraud or misuse</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Create and manage UPI AutoPay mandates and related collections</li>
              <li>Send OTP and transactional SMS / in-app notifications</li>
              <li>Provide Centric verification services with your consent</li>
              <li>Process Centric fees and related refunds where applicable</li>
            </ul>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-slate-900">Master Key Pro (formerly Super Key / DLC Device Lock)</h3>
              <p className="text-slate-600">For Master Key Pro (DLC Device Lock), we additionally use information to:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Verify whether a customer&apos;s device is eligible for DLC enrollment</li>
                <li>Register and manage Master Keys for customer devices</li>
                <li>Enable remote lock, unlock, reminders, unlock codes, and release (unregister) actions that you initiate</li>
                <li>Maintain audit logs and action history for compliance and dispute resolution</li>
                <li>Sell and manage DLC Token plans and token balances</li>
                <li>Process token purchases via wallet or payment gateway</li>
                <li>Deduct tokens when you create a Master Key</li>
                <li>Show purchase history, transaction ledger, and purchase details in the App</li>
                <li>Prevent fraud, reverse failed purchases where applicable, and maintain payment audit records</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-slate-900">Merchant Responsibility</h3>
              <p className="text-slate-600">If you register a customer&apos;s device through Master Key Pro, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
                <li>Obtaining the customer&apos;s informed consent before enrollment</li>
                <li>Ensuring that the IMEI and customer details entered are accurate</li>
                <li>Using the Master Key Pro service only for legitimate and authorized purposes</li>
              </ul>
            </div>
          </section>

          {/* Section: Information Sharing */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Information Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may share your information only when necessary for providing services or complying with applicable laws. This may include sharing information with:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
              <li>Authorized payment partners, such as Razorpay (including for wallet top-ups, credit-report fees, AutoPay-related fees, and DLC Token purchases)</li>
              <li>Credit information partners, where applicable</li>
              <li>KYC verification partners</li>
              <li>DLC / Master Key Pro technology partners, including RocketPay and authorized DLC service providers, for device enrollment, remote lock/unlock, reminders, and related device management</li>
              <li>Technology and hosting service providers</li>
              <li>Government authorities or law enforcement agencies when legally required</li>
              <li>Bill payment and other service providers when such services are available</li>
              <li>SMS / messaging gateway providers for OTP and service messages</li>
              <li>Verification / identity intelligence partners, including Cashfree, for Centric (name, mobile number, OTP, and verification identifiers)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed pt-2">
              For Master Key Pro, customer name, mobile number, IMEI, device details, and control/action data may be shared with our technology partners solely to deliver the Master Key Pro service you request. Promotional banner destination links may lead to third-party websites operated independently of MyCredAxis. We do not control how those third parties collect or use your information. We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Section: Data Security */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We implement reasonable administrative, technical, and organizational measures to help protect your personal information against unauthorized access, disclosure, alteration, or destruction. The App also provides an in-app account deletion request mechanism where applicable.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mandate, payment, DLC Token, and Master Key Pro records may be retained for the period required by applicable regulatory, legal, and compliance requirements. While we take appropriate steps to safeguard information, no method of electronic storage or transmission over the internet can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section: Data Retention */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Data Retention
            </h2>
            <p className="text-slate-600">We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
              <li>Provide our services</li>
              <li>Maintain transaction records</li>
              <li>Meet legal, regulatory, or compliance requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p className="text-slate-600 leading-relaxed pt-2">
              Master Key Pro records — including customer IMEI, device details, enrollment status, and action history — may be retained for as long as required to provide the service, meet legal obligations, and resolve disputes. Records for released or unregistered keys may also be retained for audit and compliance purposes.
            </p>
          </section>

          {/* Section: Your Rights */}
          <section className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              Your Rights
            </h2>
            <p className="text-slate-600">Subject to applicable laws, you may:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information where legally permitted</li>
              <li>Request account closure through the in-app deletion request option</li>
              <li>Contact us regarding privacy-related concerns</li>
            </ul>
          </section>

          {/* Section: App Permissions */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-4">
              App Permissions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MyCredAxis requests only the device permissions required to operate the App. Below is an explanation of each permission and why it is used.
            </p>
            
            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Internet</h3>
              <p className="text-slate-600 leading-relaxed">
                We use the Internet permission to connect the App to our servers so that you can log in, load your profile, use wallet and payment features, request credit-related services, use Centric, view rewards and games, receive in-app notifications, load promotional banners and announcements, use Master Key Pro (DLC) features, purchase and manage DLC Tokens, save your location, and submit or view a Become a Partner application.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Location</h3>
              <p className="text-slate-600 leading-relaxed">
                We use the location permissions (approximate / coarse location and precise / fine location) only when the App needs your current place: (1) after login on Home, if your location is not already saved, we may ask you to confirm it; and (2) before you submit KYC, so we can complete identity verification.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Camera</h3>
              <p className="text-slate-600 leading-relaxed">
                We use the camera permission only when you choose to take a photo inside the App, such as uploading a profile photograph or capturing documents / images required for KYC or identity verification.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-semibold text-slate-900">Notifications</h3>
              <p className="text-slate-600 leading-relaxed">
                We use the notification permission to send you in-app alerts and service-related notifications, such as account, wallet, mandate, or app update messages, where supported on your device.
              </p>
            </div>
          </section>

          {/* Section: Contact Us */}
          <section className="space-y-4 pt-8 border-t border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy or the handling of your personal information, you may contact us:
            </p>
            <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 text-slate-600">
              <li><strong>Product:</strong> MyCredAxis</li>
              <li><strong>Company:</strong> BisaniBrothers Private Limited</li>
              <li><strong>Email:</strong> contact@bisanibrother.com</li>
              <li><strong>Website:</strong> https://www.bisanibrothers.com</li>
            </ul>
          </section>

        </article>
      </div>
    </div>
  );
};