/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useEffect, useRef, useState } from 'react';

import { SmartphoneMockup } from './SmartphoneMockup';

import { Bell, ArrowRight, TrendingUp } from 'lucide-react';



export const TrackMoneyBlock: React.FC<{ onDownload: () => void }> = ({ onDownload }) => {

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

      { threshold: 0.1 }

    );



    if (sectionRef.current) {

      observer.observe(sectionRef.current);

    }



    return () => observer.disconnect();

  }, []);



  const features = [

    {

      icon: TrendingUp,

      iconClass: 'text-[#20C7B5]',

      title: 'Continuous Credit Telemetry',

      desc: 'Monitor your score status without bureau penalties, understand utilization ratios, and receive proactive advice before taking on new debt.',

      delay: 480,

    },

    {

      icon: Bell,

      iconClass: 'text-[#4F6BFF]',

      title: 'Smart Pre-Debit Alerts',

      desc: 'Timely notifications arrive days prior to any recurring mandate debit, verifying sufficient account balance to safeguard you from bounce fees.',

      delay: 580,

    },

  ];



  return (

    <section

      id="track-money"

      ref={sectionRef}

      className="fx-track py-16 sm:py-24 bg-[#F7F8FA] relative border-b border-slate-200/80 overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          <div

            className={`lg:col-span-5 flex justify-center order-2 lg:order-1 transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'

            }`}

            style={{ transitionDelay: '120ms' }}

          >

            <div className="track-mockup-wrap scale-[0.70] sm:scale-[0.75] origin-center -my-12 sm:-my-16 lg:-my-20">

              <SmartphoneMockup perspective="flat" interactive={false} screen="wallet" />

            </div>

          </div>



          <div className="lg:col-span-7 min-w-0 w-full space-y-5 sm:space-y-6 order-1 lg:order-2">

            <h2

              className={`font-extrabold text-[#0A0A0B] tracking-tight track-headline-line transition-all duration-1000 transform ${

                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '200ms' }}

            >

              Track Your Money.{' '}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] track-heading-accent">

                Stay in Control.

              </span>

            </h2>



            <p

              className={`text-sm sm:text-base text-slate-600 leading-relaxed w-full transition-all duration-1000 transform ${

                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

              }`}

              style={{ transitionDelay: '320ms' }}

            >

              Every payment, every EMI, every wallet transaction — tracked in real time, so you're never guessing what's due or what's already paid.

            </p>



            <div className="space-y-3 sm:space-y-4 pt-2 w-full">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <div

                    key={feature.title}

                    className={`track-feature-card fintech-card group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 space-y-1.5 hover:-translate-y-0.5 hover:border-slate-300 transform ${

                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

                    }`}

                    style={{ transitionDelay: `${feature.delay}ms` }}

                  >

                    <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-[#0A0A0B] group-hover:text-[#4F6BFF] transition-colors duration-300">

                      <Icon

                        className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${feature.iconClass} group-hover:scale-110 transition-transform duration-300`}

                      />

                      <span>{feature.title}</span>

                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed pl-6 sm:pl-7">

                      {feature.desc}

                    </p>

                  </div>

                );

              })}

            </div>



            <div

              className={`pt-3 sm:pt-4 transition-all duration-1000 transform ${

                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

              }`}

              style={{ transitionDelay: '680ms' }}

            >

              <button

                type="button"

                onClick={onDownload}

                className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#0A0A0B] hover:bg-slate-900 hover:shadow-lg active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer group"

              >

                <span>Get Real-Time Visibility</span>

                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-300" />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};


