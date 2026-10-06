/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useState, useEffect, useRef } from 'react';

import { ShieldCheck, Lock, CheckCircle2, FileCheck2, Cpu, History, LucideIcon } from 'lucide-react';



export const SecurityComplianceBlock: React.FC<{ onNavigateToSecurity?: () => void }> = ({

  onNavigateToSecurity,

}) => {

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setIsVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.15 }

    );



    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }



    return () => observer.disconnect();

  }, []);



  const complianceBadges: {

    icon: LucideIcon;

    title: string;

    subtitle: string;

    iconBg: string;

    iconColor: string;

    hoverColor: string;

  }[] = [

    {

      icon: ShieldCheck,

      title: 'RBI-Compliant',

      subtitle: 'Aligned with Reserve Bank regulatory standards',

      iconBg: 'bg-[#ECFDF5]',

      iconColor: 'text-[#20C7B5]',

      hoverColor: 'group-hover:text-[#20C7B5]',

    },

    {

      icon: Lock,

      title: 'PCI DSS Certified',

      subtitle: 'Highest Payment Card Security',

      iconBg: 'bg-[#EEF2FF]',

      iconColor: 'text-[#4F6BFF]',

      hoverColor: 'group-hover:text-[#4F6BFF]',

    },

    {

      icon: CheckCircle2,

      title: 'NPCI Compliant',

      subtitle: 'National payment rails compliance',

      iconBg: 'bg-[#F0FDF4]',

      iconColor: 'text-emerald-600',

      hoverColor: 'group-hover:text-emerald-600',

    },

  ];



  const platformControls: {

    icon: LucideIcon;

    title: string;

    desc: string;

    iconColor: string;

    hoverTitle: string;

  }[] = [

    {

      icon: Cpu,

      title: 'Encrypted Communication',

      desc: 'Every data packet is secured with TLS 1.3 in-transit and 256-bit AES encryption at rest across sovereign server nodes.',

      iconColor: 'text-[#4F6BFF]',

      hoverTitle: 'group-hover:text-[#4F6BFF]',

    },

    {

      icon: FileCheck2,

      title: 'Secure Authentication',

      desc: 'Multi-factor authentication and device-binding protocols ensure only authorized users can initiate mandate or wallet actions.',

      iconColor: 'text-[#20C7B5]',

      hoverTitle: 'group-hover:text-[#20C7B5]',

    },

    {

      icon: History,

      title: 'Full Audit Trail',

      desc: 'Comprehensive immutable transaction logs for audit readiness, real-time reconciliation, and dispute prevention.',

      iconColor: 'text-slate-900',

      hoverTitle: 'group-hover:text-slate-900',

    },

  ];



  return (

    <section

      id="security-compliance"

      ref={sectionRef}

      className="fx-security py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <div className="w-full mb-10 sm:mb-12">

          <h2

            className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

            style={{ transitionDelay: '120ms' }}

          >

            Security{' '}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">

              You Can Trust.

            </span>

          </h2>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">

          {complianceBadges.map((badge, idx) => {

            const Icon = badge.icon;

            return (

              <div

                key={badge.title}

                className={`security-badge-card fintech-card group p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 flex items-start gap-3.5 sm:gap-4 transition-all duration-700 transform ${

                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

                } hover:border-slate-300 hover:shadow-md hover:-translate-y-1`}

                style={{ transitionDelay: `${280 + idx * 100}ms` }}

              >

                <div

                  className={`security-badge-icon w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${badge.iconBg} ${badge.iconColor} flex items-center justify-center shrink-0 shadow-xs`}

                >

                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />

                </div>

                <div className="min-w-0 flex-1 pt-0.5">

                  <span

                    className={`font-bold text-sm sm:text-base text-[#0A0A0B] block leading-snug transition-colors ${badge.hoverColor}`}

                  >

                    {badge.title}

                  </span>

                  <span className="text-[10px] sm:text-xs text-slate-500 mt-1 block leading-relaxed">{badge.subtitle}</span>

                </div>

              </div>

            );

          })}

        </div>



        <div

          className={`consent-banner-shell mb-8 sm:mb-10 transition-all duration-1000 transform ${

            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-12'

          }`}

          style={{ transitionDelay: '580ms' }}

          role="region"

          aria-label="Non-negotiable trust guarantee"

        >

          <div className="consent-banner-inner p-6 sm:p-8 lg:p-10">

            <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

              <div className="consent-shield-wrap w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#20C7B5]/15 border border-[#20C7B5]/30 flex items-center justify-center text-[#20C7B5] shrink-0 mx-auto lg:mx-0">

                <Lock className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />

              </div>



              <div className="trust-guarantee-copy flex-1 min-w-0 w-full text-center lg:text-left">

                <h3 className="trust-guarantee-headline text-sm sm:text-base leading-snug font-extrabold text-white mt-0 sm:mt-0 max-w-none mx-auto lg:mx-0">

                  Sensitive Banking Credentials Are Never Stored — and Every Financing Arrangement Requires Verified Customer&nbsp;Consent.

                </h3>



                <p className="trust-guarantee-body text-sm sm:text-base leading-snug font-normal text-slate-400 mt-2 sm:mt-2 max-w-none mx-auto lg:mx-0">

                  We operate exclusively through tokenized, bank-authorized protocols. Your login passwords, debit card PINs, and raw CVVs
                  <br />
                  never pass through or touch our storage infrastructure.

                </p>

              </div>

            </div>

          </div>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">

          {platformControls.map((control, idx) => {

            const Icon = control.icon;

            return (

              <div

                key={control.title}

                className={`security-control-card fintech-card group p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/90 transition-all duration-700 transform ${

                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'

                } hover:shadow-lg hover:border-slate-300 hover:-translate-y-1`}

                style={{ transitionDelay: `${720 + idx * 100}ms` }}

              >

                <div className="flex items-start gap-3 mb-2.5 sm:mb-3">

                  <div

                    className={`security-control-icon w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 ${control.iconColor}`}

                  >

                    <Icon className="w-5 h-5" />

                  </div>

                  <h4

                    className={`font-bold text-sm sm:text-base text-[#0A0A0B] leading-snug min-w-0 flex-1 pt-1 transition-colors ${control.hoverTitle}`}

                  >

                    {control.title}

                  </h4>

                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">

                  {control.desc}

                </p>

              </div>

            );

          })}

        </div>



        {onNavigateToSecurity && (

          <div

            className={`mt-8 sm:mt-10 flex justify-center md:justify-end transition-all duration-700 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'

            }`}

            style={{ transitionDelay: '1020ms' }}

          >

            <button

              type="button"

              onClick={onNavigateToSecurity}

              className="text-xs sm:text-sm font-semibold text-[#4F6BFF] hover:text-[#3854E0] flex items-center gap-1.5 cursor-pointer group transition-colors"

            >

              <span className="border-b border-transparent group-hover:border-[#3854E0] transition-colors pb-0.5">

                Explore full Security Architecture & Certifications

              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>

            </button>

          </div>

        )}

      </div>

    </section>

  );

};


