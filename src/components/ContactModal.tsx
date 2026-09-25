/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Mail, Phone, Globe, Check, Building2, Store, Send } from 'lucide-react';
import { MyCredAxisLogo } from './MyCredAxisLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'individual' | 'business' | 'partner' | 'general';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialType = 'business',
}) => {
  const [inquiryType, setInquiryType] = useState<'business' | 'partner' | 'general'>(
    initialType === 'partner' ? 'partner' : 'business'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <MyCredAxisLogo size="sm" />
          <h3 className="font-display font-extrabold text-2xl text-[#0A0A0B] mt-3">
            Talk to the MyCredAxis Team
          </h3>
          <p className="text-xs text-slate-500 mt-1 font-body">
            Automate your recurring collections or explore our Super Key device financing partnership.
          </p>
        </div>

        {/* Official Quick Contacts Bar */}
        <div className="p-3.5 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-xs mb-6 font-medium text-slate-700">
          <a
            href="mailto:support@mycredaxis.com"
            className="flex items-center gap-1.5 hover:text-[#4F6BFF] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#4F6BFF]" />
            <span>support@mycredaxis.com</span>
          </a>

          <a
            href="tel:+919793649177"
            className="flex items-center gap-1.5 hover:text-[#20C7B5] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#20C7B5]" />
            <span>+91 97936 49177</span>
          </a>

          <span className="flex items-center gap-1.5 text-slate-500">
            <Globe className="w-4 h-4 text-slate-400" />
            <span>www.mycredaxis.com</span>
          </span>
        </div>

        {/* Inquiry Type Tabs */}
        <div className="flex items-center gap-2 mb-6 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setInquiryType('business')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              inquiryType === 'business'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Business Collections
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('partner')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              inquiryType === 'partner'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Partner Financing
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('general')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              inquiryType === 'general'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            General Support
          </button>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#ECFDF5] border border-emerald-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-lg text-emerald-950">
              Message Received
            </h4>
            <p className="text-xs text-emerald-800 font-body max-w-sm mx-auto leading-relaxed">
              Our enterprise team has received your details. A dedicated specialist will reach out within 1 business day via phone or email.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Bisani"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Store Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Bisani Electronics"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tell us about your requirements
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Monthly collection volume, device financing requirements, or questions..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#0A0A0B] focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/30"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Pricing is custom & depends on volume.
              </span>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#0A0A0B] hover:bg-slate-900 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
