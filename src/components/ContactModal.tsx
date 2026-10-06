/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, Mail, Phone, Globe, Check, Send } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'individual' | 'business' | 'partner' | 'general';
}

type InquiryType = 'business' | 'partner' | 'general';

const INQUIRY_COPY: Record<
  InquiryType,
  { lead: string; messagePlaceholder: string; footnote: string }
> = {
  business: {
    lead: 'Automate recurring collections, reduce manual follow-up, and get visibility into cash flow.',
    messagePlaceholder: 'Monthly collection volume, mandate types, industries you serve…',
    footnote: 'Pricing is custom and depends on collection volume.',
  },
  partner: {
    lead: 'Explore Master Key device financing partnerships and co-branded recovery workflows.',
    messagePlaceholder: 'Store count, financing volume, integration requirements…',
    footnote: 'Partner programs are tailored to your channel and volume.',
  },
  general: {
    lead: 'Questions about the app, security, billing, or your MyCredAxis account.',
    messagePlaceholder: 'How can we help you today?',
    footnote: 'We typically respond within one business day.',
  },
};

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialType = 'business',
}) => {
  const resolveInquiryType = (type: ContactModalProps['initialType']): InquiryType => {
    if (type === 'partner') return 'partner';
    if (type === 'general') return 'general';
    if (type === 'individual') return 'general';
    return 'business';
  };

  const [inquiryType, setInquiryType] = useState<InquiryType>(() =>
    resolveInquiryType(initialType)
  );

  useEffect(() => {
    if (isOpen) {
      setInquiryType(resolveInquiryType(initialType));
    }
  }, [isOpen, initialType]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copy = INQUIRY_COPY[inquiryType];

  const tabs: { id: InquiryType; label: string }[] = [
    { id: 'business', label: 'Business Collections' },
    { id: 'partner', label: 'Partner Financing' },
    { id: 'general', label: 'General Support' },
  ];

  return (
    <div
      className="app-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="app-modal-panel app-modal-panel--wide contact-modal-panel app-modal-scroll-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="contact-modal-accent" aria-hidden />

        <button
          type="button"
          onClick={onClose}
          className="contact-modal-close"
          aria-label="Close contact form"
        >
          <X className="w-4 h-4" strokeWidth={2.25} />
        </button>

        <header className="contact-modal-header">
          <MyCredAxisLogo size="sm" />
          <h2 id="contact-modal-title" className="contact-modal-title">
            Talk to the MyCredAxis Team
          </h2>
          <p className="contact-modal-lead">{copy.lead}</p>
        </header>

        <div className="contact-modal-contacts" role="group" aria-label="Direct contact">
          <a href="mailto:support@mycredaxis.com" className="contact-modal-contact-link">
            <span className="contact-modal-contact-icon contact-modal-contact-icon--mail">
              <Mail className="w-3.5 h-3.5" strokeWidth={2.25} />
            </span>
            <span className="contact-modal-contact-text">support@mycredaxis.com</span>
          </a>
          <a href="tel:+919793649177" className="contact-modal-contact-link">
            <span className="contact-modal-contact-icon contact-modal-contact-icon--phone">
              <Phone className="w-3.5 h-3.5" strokeWidth={2.25} />
            </span>
            <span className="contact-modal-contact-text">+91 97936 49177</span>
          </a>
          <a
            href="https://www.mycredaxis.com"
            className="contact-modal-contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-modal-contact-icon contact-modal-contact-icon--web">
              <Globe className="w-3.5 h-3.5" strokeWidth={2.25} />
            </span>
            <span className="contact-modal-contact-text">www.mycredaxis.com</span>
          </a>
        </div>

        <div className="contact-modal-tabs" role="tablist" aria-label="Inquiry type">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={inquiryType === tab.id}
              onClick={() => setInquiryType(tab.id)}
              className={`contact-modal-tab ${inquiryType === tab.id ? 'contact-modal-tab--active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="contact-modal-success">
            <div className="contact-modal-success-icon">
              <Check className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <h3 className="contact-modal-success-title">Message received</h3>
            <p className="contact-modal-success-body">
              Our team has your details. A specialist will reach out within one business day by phone
              or email.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="contact-modal-success-btn"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-modal-form">
            <div className="contact-modal-field-grid">
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="contact-name">
                  Full Name <span className="text-[#4F6BFF]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Bisani"
                  className="contact-modal-input"
                />
              </div>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="contact-email">
                  Work Email <span className="text-[#4F6BFF]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="contact-modal-input"
                />
              </div>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="contact-phone">
                  Phone / WhatsApp <span className="text-[#4F6BFF]">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="contact-modal-input"
                />
              </div>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="contact-company">
                  Company / Store Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Bisani Electronics"
                  className="contact-modal-input"
                />
              </div>
            </div>

            <div className="contact-modal-field">
              <label className="contact-modal-label" htmlFor="contact-message">
                Tell us about your requirements
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={copy.messagePlaceholder}
                className="contact-modal-input contact-modal-textarea"
              />
            </div>

            <footer className="contact-modal-footer">
              <p className="contact-modal-footnote">{copy.footnote}</p>
              <button type="submit" className="contact-modal-submit">
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4 shrink-0" strokeWidth={2.25} />
              </button>
            </footer>
          </form>
        )}
      </div>
    </div>
  );
};
