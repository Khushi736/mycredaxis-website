/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useState, useEffect, useRef } from 'react';

import { Layers, KeyRound, ShieldCheck } from 'lucide-react';



export const WhyMyCredAxisBlock: React.FC = () => {

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



  const differentiators = [

    {

      icon: Layers,

      title: 'A Full Financial Layer, Not Just Collections',

      desc: 'Credit score visibility, an integrated payment wallet, and secured device financing unified inside one interoperable platform.',

      color: '#4F6BFF',

      bg: 'bg-[#EEF2FF]',

    },

    {

      icon: KeyRound,

      title: 'Built-In Recovery Mechanism (Master Key)',

      desc: 'Secured device financing infrastructure that most collection-only tools do not offer, safeguarding lender and merchant capital.',

      color: '#0A0A0B',

      bg: 'bg-slate-100',

    },

    {

      icon: ShieldCheck,

      title: 'Consent-First by Design',

      desc: 'Every recurring mandate, bureau pull, and financing arrangement is strictly bank-authenticated by the customer. Zero ambiguity.',

      color: '#20C7B5',

      bg: 'bg-[#ECFDF5]',

    },

  ];



  return (

    <section

      ref={sectionRef}

      id="why-mycredaxis"

      className="fx-why py-16 sm:py-24 lg:py-28 bg-[#F7F8FA] border-b border-slate-200/80 relative overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <div className="w-full mb-10 sm:mb-14">

          <h2

            className={`section-h2 why-headline font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

            style={{ transitionDelay: '120ms' }}

          >

            Built Different.{' '}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">

              Built for Better.

            </span>

          </h2>



          <p

            className={`why-subline section-lead text-slate-600 mt-2 sm:mt-4 transition-all duration-1000 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

            }`}

            style={{ transitionDelay: '260ms' }}

          >

            Designed to bridge the gap between consumer trust and enterprise collection certainty.

          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {differentiators.map((diff, idx) => {

            const Icon = diff.icon;

            const delay = 400 + idx * 140;



            return (

              <div

                key={diff.title}

                className={`why-card fintech-card group rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 flex flex-col h-full transition-all duration-700 transform ${

                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'

                } hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300`}

                style={{ transitionDelay: `${delay}ms` }}

              >

                <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">

                  <div

                    className={`why-card-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${diff.bg} flex items-center justify-center shrink-0 shadow-xs`}

                    style={{ color: diff.color }}

                  >

                    <Icon className="w-5 h-5 sm:w-[1.35rem] sm:h-[1.35rem]" />

                  </div>



                  <h3 className="section-h3 font-bold text-[#0A0A0B] min-w-0 flex-1 transition-colors duration-300 group-hover:text-[#4F6BFF]">

                    {diff.title}

                  </h3>

                </div>



                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">{diff.desc}</p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

};


