/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useState, useEffect, useRef } from 'react';

import {

  Landmark,

  Network,

  Repeat,

  GraduationCap,

  HeartPulse,

  Users2,

  Building,

  ShoppingCart,

} from 'lucide-react';



export const IndustryGrid: React.FC = () => {

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



  const industries = [

    { name: 'NBFCs & Fintechs', icon: Landmark, desc: 'Automate loan EMI collections and recurring credit installments.' },

    { name: 'Dealer & Distributor Networks', icon: Network, desc: 'Streamline trade receivables and secured inventory cycles.' },

    { name: 'Subscription Businesses', icon: Repeat, desc: 'Zero-churn recurring billing with multi-account mandate fallbacks.' },

    { name: 'Educational Institutions', icon: GraduationCap, desc: 'Term fee collections and student loan installment management.' },

    { name: 'Healthcare Providers', icon: HeartPulse, desc: 'Treatment financing installments and hospital recurring retainers.' },

    { name: 'Membership Organizations', icon: Users2, desc: 'Annual club dues, gym memberships, and association subscriptions.' },

    { name: 'Utility & Service Companies', icon: Building, desc: 'Scheduled recurring infrastructure and municipal service collections.' },

    { name: 'E-commerce Platforms', icon: ShoppingCart, desc: 'Device financing, Buy-Now-Pay-Later checkout, and customer wallets.' },

  ];



  return (

    <section

      ref={sectionRef}

      className="fx-industry py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 relative overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <div className="w-full mb-10 sm:mb-14">

          <h2

            className={`section-h2 font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

            style={{ transitionDelay: '120ms' }}

          >

            Built for{' '}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">

              Every Industry.

            </span>

          </h2>



          <p

            className={`section-lead industry-subline text-slate-600 mt-2 sm:mt-4 max-w-3xl transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

            }`}

            style={{ transitionDelay: '240ms' }}

          >

            From consumer electronics retailers to high-growth NBFCs, MyCredAxis adapts to diverse transactional flows.

          </p>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-fr">

          {industries.map((ind, i) => {

            const Icon = ind.icon;

            const delay = 360 + i * 80;



            return (

              <div

                key={ind.name}

                className={`industry-card fintech-card rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col h-full min-h-[148px] group transition-all duration-700 transform ${

                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'

                } hover:-translate-y-1.5 hover:shadow-lg hover:border-[#4F6BFF]/25`}

                style={{ transitionDelay: `${delay}ms` }}

              >

                <div className="flex items-center gap-3 sm:gap-3.5 min-h-[2.75rem] sm:min-h-[3rem]">

                  <div className="industry-card-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EEF2FF] text-[#4F6BFF] flex items-center justify-center shrink-0 shadow-xs">

                    <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" />

                  </div>



                  <h3 className="section-h3 font-bold text-[#0A0A0B] min-w-0 flex-1 transition-colors duration-300 group-hover:text-[#4F6BFF]">

                    {ind.name}

                  </h3>

                </div>



                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 sm:mt-3.5 flex-1">{ind.desc}</p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

};


