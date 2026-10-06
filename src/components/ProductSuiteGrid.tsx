/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { RotateCw, Gauge, Wallet, KeyRound, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface ProductSuiteGridProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductSuiteGrid: React.FC<ProductSuiteGridProps> = ({ onNavigate }) => {
  // Scroll reveal ke liye state aur ref
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

  const products = [
    {
      id: 'collections',
      title: 'Collections',
      benefit: 'Automated, bank-authorized recurring payments for EMIs, subscriptions, and dealer receivables.',
      icon: RotateCw,
      accent: '#4F6BFF',
      bgAccent: 'bg-[#EEF2FF]',
      actionText: 'For Businesses',
      targetRoute: 'business' as PageRoute,
    },
    {
      id: 'credit',
      title: 'Credit',
      benefit: 'Check your credit health, consent-based, whenever you want.',
      icon: Gauge,
      accent: '#20C7B5',
      bgAccent: 'bg-[#ECFDF5]',
      actionText: 'For Individuals',
      targetRoute: 'individuals' as PageRoute,
    },
    {
      id: 'wallet',
      title: 'Wallet',
      benefit: 'One balance for bills, EMIs, and everyday payments.',
      icon: Wallet,
      accent: '#4F6BFF',
      bgAccent: 'bg-[#EFF6FF]',
      actionText: 'Explore Wallet',
      targetRoute: 'individuals' as PageRoute,
    },
    {
      id: 'master-key',
      title: 'Master Key',
      benefit: 'Secured device financing, with built-in recovery if payments stop.',
      icon: KeyRound,
      accent: '#0A0A0B',
      bgAccent: 'bg-slate-100',
      actionText: 'For Partners & Merchants',
      targetRoute: 'partners' as PageRoute,
    },
  ];

  return (
    <section 
      id="product-suite" 
      ref={sectionRef}
      className="fx-suite py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 overflow-hidden"
     
    >
      <div className="site-container">
        
        {/* Section Header with Smooth Scroll Reveal */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 
            className={`font-extrabold text-3xl sm:text-4xl text-[#0A0A0B] tracking-tight transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Simple Money,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F6BFF] to-[#20C7B5] why-heading-accent">
              Smarter Moves.
            </span>
          </h2>

          <p 
            className={`text-base text-slate-600 mt-2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            Collections, credit visibility, wallet, and secured device financing in one platform.
          </p>
        </div>

        {/* 4 Clean Cards Grid with Staggered Smooth Scroll Reveal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {products.map((prod, index) => {
            const Icon = prod.icon;
            const delay = 400 + index * 150;

            return (
              <div
                key={prod.id}
                onClick={() => onNavigate(prod.targetRoute)}
                className={`fintech-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between cursor-pointer border border-slate-200/90 hover:border-slate-300 group transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } hover:-translate-y-1 hover:shadow-lg`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div>
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl ${prod.bgAccent} flex items-center justify-center mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                    style={{ color: prod.accent }}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-xl text-[#0A0A0B] transition-colors duration-300 group-hover:text-[#4F6BFF]">
                    {prod.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-sm text-slate-600 leading-[1.3] sm:leading-relaxed">
                    {prod.benefit}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] sm:text-xs font-semibold text-slate-500 group-hover:text-[#4F6BFF] transition-colors">
                  <span className="truncate pr-1">{prod.actionText}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};