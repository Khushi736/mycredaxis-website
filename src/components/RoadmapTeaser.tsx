/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useState, useEffect, useRef } from 'react';

import { CheckCircle2, Clock, Wallet, Banknote, Receipt, LucideIcon } from 'lucide-react';



type RoadmapItem = {

  title: string;

  desc: string;

  icon: LucideIcon;

  iconBg: string;

  iconColor: string;

  hoverTitle: string;

  live: boolean;

  status: string;

  delay: number;

};



export const RoadmapTeaser: React.FC = () => {

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



  const roadmapItems: RoadmapItem[] = [

    {

      title: 'Wallet Top-Up',

      desc: 'Add funds seamlessly via UPI, credit & debit cards, and net banking into one single centralized balance for bills, EMIs, and peer transactions.',

      icon: Wallet,

      iconBg: 'bg-[#EEF2FF]',

      iconColor: 'text-[#4F6BFF]',

      hoverTitle: 'group-hover:text-[#4F6BFF]',

      live: true,

      status: 'Status: Operational & Live in App',

      delay: 360,

    },

    {

      title: 'Bill Payments via BBPS',

      desc: 'Electricity, water, gas, telecom, DTH, insurance, and traffic challans, all unified in one place under Bharat Bill Payment System standards.',

      icon: Receipt,

      iconBg: 'bg-amber-50',

      iconColor: 'text-amber-600',

      hoverTitle: 'group-hover:text-amber-600',

      live: false,

      status: 'Status: Coming Soon',

      delay: 460,

    },

    {

      title: 'Cash & Money Movement',

      desc: 'Card-free cash withdrawal (AePS biometric), cash-to-bank transfer (DMT/IMPS), and Micro ATM cash distribution network.',

      icon: Banknote,

      iconBg: 'bg-[#ECFDF5]',

      iconColor: 'text-[#20C7B5]',

      hoverTitle: 'group-hover:text-[#20C7B5]',

      live: false,

      status: 'Status: Coming Soon',

      delay: 560,

    },

  ];



  return (

    <section

      ref={sectionRef}

      aria-labelledby="roadmap-section-title"

      className="fx-roadmap py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <header className="w-full mb-10 sm:mb-14">

          <h2
            id="roadmap-section-title"
            className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '120ms' }}
          >
            Building Better Ways to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
              Move Money
            </span>
          </h2>



          <p

            className={`section-lead industry-subline text-slate-600 mt-2 sm:mt-4 max-w-3xl transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

            }`}

            style={{ transitionDelay: '240ms' }}

          >

            Wallet top-up is live today. Bill payments and cash and money movement services are coming soon.

          </p>

        </header>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 auto-rows-fr">

          {roadmapItems.map((item) => {

            const Icon = item.icon;



            return (

              <article

                key={item.title}

                className={`roadmap-card fintech-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/90 flex flex-col h-full bg-white group transition-all duration-700 transform ${

                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'

                } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 ${

                  item.live ? 'roadmap-card-live ring-1 ring-emerald-200/80' : ''

                }`}

                style={{ transitionDelay: `${item.delay}ms` }}

              >

                <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">

                  <div className="flex items-center gap-3 min-w-0 flex-1">

                    <div

                      className={`roadmap-card-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-xs`}

                      aria-hidden

                    >

                      <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" />

                    </div>



                    <h3

                      className={`section-h3 font-bold text-[#0A0A0B] min-w-0 transition-colors duration-300 ${item.hoverTitle}`}

                    >

                      {item.title}

                    </h3>

                  </div>



                  {item.live ? (

                    <span className="utility-live-badge inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">

                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden />

                      Live Today

                    </span>

                  ) : (

                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">

                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden />

                      Coming Soon

                    </span>

                  )}

                </div>



                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{item.desc}</p>



                <footer className="mt-5 sm:mt-6 pt-3 border-t border-slate-100">

                  <span

                    className={`inline-flex text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full ${

                      item.live ? 'text-emerald-700 bg-emerald-50/80' : 'text-slate-500 bg-slate-50'

                    }`}

                  >

                    {item.status}

                  </span>

                </footer>

              </article>

            );

          })}

        </div>

      </div>

    </section>

  );

};


