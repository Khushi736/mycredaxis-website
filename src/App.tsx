/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ProductSuiteGrid } from './components/ProductSuiteGrid';
import { RewardsSpotlight } from './components/RewardsSpotlight';
import { UtilitySpotlight } from './components/UtilitySpotlight';
import { TrackMoneyBlock } from './components/TrackMoneyBlock';
import { HowItWorksBlock } from './components/HowItWorksBlock';
import { WhyMyCredAxisBlock } from './components/WhyMyCredAxisBlock';
import { SecurityComplianceBlock } from './components/SecurityComplianceBlock';
import { IndustryGrid } from './components/IndustryGrid';
import { RoadmapTeaser } from './components/RoadmapTeaser';
import { FAQSection } from './components/FAQSection';
import { FinalCTABanner } from './components/FinalCTABanner';
import { Footer } from './components/Footer';

// Pages
import { IndividualsPage } from './pages/IndividualsPage';
import { BusinessPage } from './pages/BusinessPage';
import { PartnersPage } from './pages/PartnersPage';
import { SecurityPage } from './pages/SecurityPage';
import { FAQPage } from './pages/FAQPage';

// Modals & HUD
import { DownloadModal } from './components/DownloadModal';
import { ContactModal } from './components/ContactModal';
import { LogInModal } from './components/LogInModal';
import { DesignSpecHUD } from './components/DesignSpecHUD';
import { GridOverlay } from './components/GridOverlay';
import { PrivacyPolicyPage } from './components/PrivacyPolicy';
import { TermsConditionsPage } from './components/TermsConditions';

// Data
import { HOMEPAGE_FAQS } from './data/faqData';

export default function App() {
  // Initial route check from URL hash so refresh keeps the current page
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    const validRoutes: PageRoute[] = ['home', 'individuals', 'business', 'partners', 'security', 'faq', 'contact', 'privacy-policy', 'terms-conditions'];
    return validRoutes.includes(hash) ? hash : 'home';
  });

  const [showGrid, setShowGrid] = useState<boolean>(false);

  // Modals
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactType, setContactType] = useState<'individual' | 'business' | 'partner' | 'general'>('business');
  const [logInOpen, setLogInOpen] = useState(false);

  // Sync route changes with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = ['home', 'individuals', 'business', 'partners', 'security', 'faq', 'contact', 'privacy-policy', 'terms-conditions'];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle route change with scroll to top and updating URL hash
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (type: 'individual' | 'business' | 'partner' | 'general' = 'business') => {
    setContactType(type);
    setContactOpen(true);
  };

  // If the Privacy Policy page has its own layout, render it here
  if (currentRoute === 'privacy-policy') {
    return (
      <PrivacyPolicyPage
        onNavigate={handleNavigate}
        onOpenLogIn={() => setLogInOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
        onOpenContact={handleOpenContact}
      />
    );
  }

  // If the Terms & Conditions page has its own layout, render it here
  if (currentRoute === 'terms-conditions') {
    return (
      <TermsConditionsPage
        onNavigate={handleNavigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0A0A0B] selection:bg-[#4F6BFF]/20 selection:text-[#4F6BFF] relative flex flex-col justify-between font-body">
      {/* 12-Column Desktop Grid Visualizer */}
      <GridOverlay active={showGrid} />

      {/* Brand Spec HUD Tool */}
      <DesignSpecHUD
        showGrid={showGrid}
        setShowGrid={setShowGrid}
      />

      {/* Wise-Style Audience-First Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenLogIn={() => setLogInOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenDownload={() => setDownloadOpen(true)}
              onOpenContact={handleOpenContact}
            />

            {/* 2. Trust Strip */}
            <TrustStrip />

            {/* 3. Product Suite Grid */}
            <ProductSuiteGrid onNavigate={handleNavigate} />

            {/* 4. Rewards Spotlight */}
            <RewardsSpotlight onDownload={() => setDownloadOpen(true)} />

            {/* 5. Everyday Utility Spotlight */}
            <UtilitySpotlight />

            {/* 6. Track Your Money */}
            <TrackMoneyBlock onDownload={() => setDownloadOpen(true)} />

            {/* 7. How It Works */}
            <HowItWorksBlock />

            {/* 8. Why MyCredAxis */}
            <WhyMyCredAxisBlock />

            {/* 9. Security & Compliance */}
            <SecurityComplianceBlock onNavigateToSecurity={() => handleNavigate('security')} />

            {/* 10. Built for Every Industry */}
            <IndustryGrid />

            {/* 11. What's Next */}
            <RoadmapTeaser />

            {/* 12. Homepage FAQ */}
            <FAQSection
              items={HOMEPAGE_FAQS}
              title="Frequently Asked Questions"
              subtitle="Quick answers to common questions about MyCredAxis."
              onNavigateToFullFaq={() => handleNavigate('faq')}
            />

            {/* 13. Final CTA Banner */}
            <FinalCTABanner
              onOpenDownload={() => setDownloadOpen(true)}
              onOpenContact={handleOpenContact}
            />
          </>
        )}

        {/* /individuals Page */}
        {currentRoute === 'individuals' && (
          <IndividualsPage onOpenDownload={() => setDownloadOpen(true)} />
        )}

        {/* /business Page */}
        {currentRoute === 'business' && (
          <BusinessPage onOpenContact={handleOpenContact} />
        )}

        {/* /partners Page */}
        {currentRoute === 'partners' && (
          <PartnersPage onOpenContact={handleOpenContact} />
        )}

        {/* /security Page */}
        {currentRoute === 'security' && <SecurityPage />}

        {/* /faq Page */}
        {currentRoute === 'faq' && <FAQPage onOpenContact={handleOpenContact} />}
      </main>

      {/* Standard Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* Interactive Modals */}
      <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialType={contactType}
      />
      <LogInModal isOpen={logInOpen} onClose={() => setLogInOpen(false)} />
    </div>
  );
}