/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, FileCheck2, Repeat } from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { ALL_FAQS } from '../data/faqData';

export const SecurityPage: React.FC = () => {
  const securityFaqs = ALL_FAQS.filter((f) => f.category === 'security');
  
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

  const cardsData = [
    {
      title: "RBI Compliant",
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconBg: "bg-[#ECFDF5]",
      iconColor: "text-[#20C7B5]",
      dotBg: "bg-[#20C7B5]",
      borderColor: "border-[#20C7B5]/30",
      description: "MyCredAxis strictly follows an RBI-compliant approach to all payments and explicit customer consent frameworks."
    },
    {
      title: "PCI DSS Certified",
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#4F6BFF]",
      dotBg: "bg-[#4F6BFF]",
      borderColor: "border-[#4F6BFF]/30",
      description: "We maintain PCI DSS Certification, ensuring that all sensitive card and payment details are processed with the highest security standards."
    },
    {
      title: "NPCI Compliant",
      icon: <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      dotBg: "bg-emerald-600",
      borderColor: "border-emerald-500/30",
      description: "Our platform strictly abides by NPCI compliance requirements for UPI Autopay and electronic mandate generation."
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-[#F7F8FA]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* 1. Header with Attractive Glow */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#20C7B5]/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#4F6BFF]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
          <h1 
            className={`font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#0A0A0B] tracking-tight lg:whitespace-nowrap transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Trust, built into every single layer.
          </h1>

          <p 
            className={`text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Sensitive banking credentials are never stored. Every mandate and financing arrangement requires verified customer consent.
          </p>
        </div>
      </section>

      {/* 2. Core Certifications: Full Info on Mobile, 3D Flip Animation on Desktop (lg+) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-[#20C7B5]/5 via-[#4F6BFF]/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            
            {cardsData.map((card, idx) => (
              <div 
                key={idx}
                className={`w-full transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                {/* Mobile / Tablet View (< lg): Static Card with Full Information */}
                <div className="lg:hidden p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F7F8FA] border border-slate-200 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4 sm:mb-5`}>
                      {card.icon}
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0A0A0B] mb-2">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/80 text-[10px] sm:text-[11px] font-mono text-slate-500 flex items-center justify-between">
                    <span>Verified Compliance</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${card.dotBg} animate-pulse`} />
                  </div>
                </div>

                {/* Desktop View (lg+): 3D Hover Flip Card */}
                <div className="hidden lg:block group [perspective:1000px] w-full h-[280px]">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 [backface-visibility:hidden] p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className={`w-12 h-12 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-5`}>
                          {card.icon}
                        </div>
                        <h3 className="font-bold text-xl text-[#0A0A0B]">{card.title}</h3>
                      </div>
                      <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><Repeat className="w-3 h-3" /> Hover to flip</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${card.dotBg} animate-pulse`} />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 rounded-3xl bg-white border ${card.borderColor} shadow-xl flex flex-col justify-center items-center text-center`}>
                      <div className={`w-10 h-10 rounded-full ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-3`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {card.description}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. The Bold Non-Negotiable Statement (Dark Section with Rich Glow) */}
      <section className="py-20 sm:py-28 bg-[#0A0A0B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#4F6BFF]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#20C7B5]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center space-y-5 sm:space-y-6 relative z-10">
          
          <h2 
            className={`font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white max-w-4xl mx-auto leading-tight transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Sensitive banking credentials are never stored — and every financing arrangement requires verified customer consent.
          </h2>
          
          <p 
            className={`text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Every mandate requires the customer's bank-authenticated approval. Nothing is debited without consent.
          </p>
        </div>
      </section>

      {/* 4. Security FAQs */}
      <FAQSection
        items={securityFaqs}
        title="Security & Trust Questions"
        subtitle="Learn how MyCredAxis approaches security, compliance, and customer consent."
      />

    </div>
  );
};