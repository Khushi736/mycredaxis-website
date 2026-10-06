/**

 * @license

 * SPDX-License-Identifier: Apache-2.0

 */



import React, { useState, useEffect, useRef } from 'react';

import { UserCheck, Settings, Cpu, LineChart, PackageCheck, LucideIcon } from 'lucide-react';
import { ConsentBanner } from './ConsentBanner';



type StepItem = {

  num: string;

  title: string;

  desc: string;

  icon: LucideIcon;

  color: string;

};



const StepFlowConnector: React.FC<{

  index: number;

  variant: 'horizontal' | 'vertical';

  live: boolean;

}> = ({ index, variant, live }) => {

  const uid = `flow-${variant}-${index}`;

  const pathClass = `${live ? 'steps-snake-path steps-snake-path--live opacity-100' : 'steps-snake-path opacity-70'}`;



  if (variant === 'horizontal') {

    const curveUp = index % 2 === 0;

    const pathD = curveUp

      ? 'M 1 16 C 16 8, 32 24, 48 16 S 58 10, 63 16'

      : 'M 1 16 C 16 24, 32 8, 48 16 S 58 22, 63 16';



    return (

      <div className="hidden lg:flex items-center justify-center shrink-0 w-12 xl:w-[3.25rem] px-0.5 self-center" aria-hidden>

        <svg viewBox="0 0 64 32" className="steps-flow-svg w-full h-8 overflow-visible">

          <defs>

            <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">

              <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.85" />

              <stop offset="55%" stopColor="#5B7CFF" stopOpacity="0.95" />

              <stop offset="100%" stopColor="#20C7B5" stopOpacity="1" />

            </linearGradient>

            <marker

              id={`${uid}-arrow`}

              markerWidth="12"

              markerHeight="12"

              refX="10"

              refY="6"

              orient="auto"

              markerUnits="userSpaceOnUse"

            >

              <path d="M 0 1 L 11 6 L 0 11 Z" fill="#20C7B5" stroke="#4F6BFF" strokeWidth="0.5" />

            </marker>

          </defs>

          <path d={pathD} fill="none" className="steps-snake-glow" pathLength={100} />

          <path

            d={pathD}

            fill="none"

            stroke={`url(#${uid}-grad)`}

            strokeLinecap="round"

            markerEnd={`url(#${uid}-arrow)`}

            className={pathClass}

            style={{ animationDelay: `${index * 140}ms` }}

          />

        </svg>

      </div>

    );

  }



  const pathD = index % 2 === 0 ? 'M 16 2 C 24 12, 8 22, 16 32' : 'M 16 2 C 8 12, 24 22, 16 32';



  return (

    <div className="lg:hidden flex justify-center py-2" aria-hidden>

      <svg viewBox="0 0 32 36" className="steps-flow-svg w-8 h-10">

        <defs>

          <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="0%" y2="100%">

            <stop offset="0%" stopColor="#4F6BFF" stopOpacity="0.85" />

            <stop offset="100%" stopColor="#20C7B5" stopOpacity="1" />

          </linearGradient>

          <marker

            id={`${uid}-arrow`}

            markerWidth="12"

            markerHeight="12"

            refX="6"

            refY="10"

            orient="auto"

            markerUnits="userSpaceOnUse"

          >

            <path d="M 0 1 L 11 6 L 0 11 Z" fill="#20C7B5" />

          </marker>

        </defs>

        <path d={pathD} fill="none" className="steps-snake-glow" />

        <path

          d={pathD}

          fill="none"

          stroke={`url(#${uid}-grad)`}

          strokeLinecap="round"

          markerEnd={`url(#${uid}-arrow)`}

          className={pathClass}

        />

      </svg>

    </div>

  );

};



export const HowItWorksBlock: React.FC = () => {

  const [activeStep, setActiveStep] = useState(0);

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



  useEffect(() => {

    if (!isVisible) return;

    const timer = window.setInterval(() => {

      setActiveStep((prev) => (prev + 1) % 5);

    }, 3200);

    return () => window.clearInterval(timer);

  }, [isVisible]);



  const steps: StepItem[] = [

    {

      num: '01',

      title: 'Sign Up & Verify',

      desc: 'Digital KYC to get started with zero paper delays.',

      icon: UserCheck,

      color: '#4F6BFF',

    },

    {

      num: '02',

      title: 'Set Up',

      desc: 'Set up your mandate or wallet with simple 1-click bank authorization.',

      icon: Settings,

      color: '#20C7B5',

    },

    {

      num: '03',

      title: 'Process',

      desc: 'Payments and collections processed automatically on scheduled cycles.',

      icon: Cpu,

      color: '#4F6BFF',

    },

    {

      num: '04',

      title: 'Track',

      desc: 'Track everything in real time via live dashboards and mobile feeds.',

      icon: LineChart,

      color: '#20C7B5',

    },

    {

      num: '05',

      title: 'Deliver',

      desc: 'Get paid or get service — reliably, every cycle without friction.',

      icon: PackageCheck,

      color: '#0A0A0B',

    },

  ];



  const renderStepCard = (st: StepItem, index: number) => {

    const Icon = st.icon;

    const isSelected = activeStep === index;

    const delay = 480 + index * 100;



    return (

      <div

        key={st.num}

        role="button"

        tabIndex={0}

        onClick={() => setActiveStep(index)}

        onKeyDown={(e) => {

          if (e.key === 'Enter' || e.key === ' ') {

            e.preventDefault();

            setActiveStep(index);

          }

        }}

        className={`fintech-card steps-flow-card steps-flow-card--uniform steps-flow-card--stacked how-it-works-step-card how-it-works-step-card--centered rounded-2xl sm:rounded-3xl cursor-pointer flex flex-col h-full text-center items-center transition-all duration-700 transform group ${

          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'

        } ${

          isSelected

            ? 'step-card-active bg-white scale-[1.02] ring-2 ring-[#4F6BFF]/15'

            : 'border-slate-200/80 bg-[#F7F8FA]/60 hover:bg-white hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'

        }`}

        style={{ transitionDelay: `${delay}ms` }}

      >

        <div className="flex flex-col items-center justify-start gap-3 sm:gap-3.5 w-full flex-1 min-w-0">
          <div
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-xs mx-auto"
            style={{ backgroundColor: `${st.color}15`, color: st.color }}
          >
            <Icon className="w-5 h-5 sm:w-[1.25rem] sm:h-[1.25rem]" strokeWidth={2.1} />
          </div>
          <h3
            className={`font-bold text-sm sm:text-[0.9375rem] leading-snug w-full text-center text-pretty transition-colors duration-300 ${
              isSelected ? 'text-[#4F6BFF]' : 'text-[#0A0A0B] group-hover:text-[#4F6BFF]'
            }`}
          >
            {st.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed w-full text-center text-pretty flex-1">
            {st.desc}
          </p>
        </div>

      </div>

    );

  };



  return (

    <section

      id="how-it-works"

      ref={sectionRef}

      className="fx-steps py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-hidden"

     

    >

      <div className="site-container relative z-10">

        <div className="w-full max-w-none text-left mb-10 sm:mb-14">

          <h2

            className={`section-h2 steps-headline font-extrabold text-[#0A0A0B] tracking-tight transition-all duration-700 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

            style={{ transitionDelay: '120ms' }}

          >

            Predictable, Transparent, and{' '}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">

              Consent-Driven.

            </span>

          </h2>



          <p

            className={`steps-subline steps-subline--how-it-works section-lead text-slate-600 mt-3 sm:mt-4 transition-all duration-700 transform ${

              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

            }`}

            style={{ transitionDelay: '240ms' }}

          >

            A cohesive 5-step operational architecture bridging individuals, merchants, and banking gateways.

          </p>

        </div>



        <div

          className={`hidden lg:flex items-stretch gap-0 transition-all duration-700 ${

            isVisible ? 'opacity-100' : 'opacity-0'

          }`}

          style={{ transitionDelay: '360ms' }}

        >

          {steps.map((st, index) => (

            <React.Fragment key={st.num}>

              <div className="flex-1 min-w-0 flex">{renderStepCard(st, index)}</div>

              {index < steps.length - 1 && (

                <StepFlowConnector

                  index={index}

                  variant="horizontal"

                  live={isVisible && (activeStep === index || activeStep === index + 1)}

                />

              )}

            </React.Fragment>

          ))}

        </div>



        <div className="lg:hidden max-w-md mx-auto">

          {steps.map((st, index) => (

            <React.Fragment key={`m-${st.num}`}>

              {renderStepCard(st, index)}

              {index < steps.length - 1 && (

                <StepFlowConnector

                  index={index}

                  variant="vertical"

                  live={isVisible && (activeStep === index || activeStep === index + 1)}

                />

              )}

            </React.Fragment>

          ))}

        </div>



        <ConsentBanner
          ariaLabel="Bank-authenticated mandate consent"
          body="Every mandate requires the customer's bank-authenticated approval — nothing is ever debited without consent."
          pill="Bank-Gateways Verified"
          className={`mt-10 sm:mt-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-14 scale-[0.98]'
          }`}
          style={{ transitionDelay: '900ms' }}
        />

      </div>

    </section>

  );

};


