/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { CentricIdentityReport } from './components/CentricIdentityReport';
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
import { LegacyHashRedirect } from './components/LegacyHashRedirect';

import { IndividualsPage } from './pages/IndividualsPage';
import { BusinessPage } from './pages/BusinessPage';
import { PartnersPage } from './pages/PartnersPage';
import { SecurityPage } from './pages/SecurityPage';
import { FAQPage } from './pages/FAQPage';

import { DownloadModal } from './components/DownloadModal';
import { ContactModal } from './components/ContactModal';
import { LogInModal } from './components/LogInModal';
import { DesignSpecHUD } from './components/DesignSpecHUD';
import { GridOverlay } from './components/GridOverlay';
import { PrivacyPolicyPage } from './components/PrivacyPolicy';
import { TermsConditionsPage } from './components/TermsConditions';

import { HOMEPAGE_FAQS } from './data/faqData';
import { useAppNavigate } from './hooks/useAppNavigate';
import { getRouteFromPathname } from './routing';
import type { PageRoute } from './types';

type SiteChromeContextValue = {
  onNavigate: (route: PageRoute) => void;
  onOpenDownload: () => void;
  onOpenContact: (type?: 'individual' | 'business' | 'partner' | 'general') => void;
};

const SiteChromeContext = React.createContext<SiteChromeContextValue | null>(null);

function useSiteChrome() {
  const ctx = React.useContext(SiteChromeContext);
  if (!ctx) {
    throw new Error('useSiteChrome must be used within SiteChromeLayout');
  }
  return ctx;
}

function HomePageContent() {
  const { onNavigate, onOpenDownload, onOpenContact } = useSiteChrome();
  return (
    <>
      <HeroSection onNavigate={onNavigate} onOpenDownload={onOpenDownload} onOpenContact={onOpenContact} />
      <TrustStrip />
      <CentricIdentityReport onOpenContact={onOpenContact} />
      <ProductSuiteGrid onNavigate={onNavigate} />
      <RewardsSpotlight onDownload={onOpenDownload} />
      <UtilitySpotlight />
      <TrackMoneyBlock onDownload={onOpenDownload} />
      <HowItWorksBlock />
      <WhyMyCredAxisBlock />
      <SecurityComplianceBlock onNavigateToSecurity={() => onNavigate('security')} />
      <IndustryGrid />
      <RoadmapTeaser />
      <FAQSection
        items={HOMEPAGE_FAQS}
        title="Frequently Asked Questions about MyCredAxis."
        titleAccent="MyCredAxis."
        subtitle=""
        onNavigateToFullFaq={() => onNavigate('faq')}
      />
      <FinalCTABanner onOpenDownload={onOpenDownload} onOpenContact={onOpenContact} />
    </>
  );
}

function IndividualsRoute() {
  const { onOpenDownload, onOpenContact } = useSiteChrome();
  return <IndividualsPage onOpenDownload={onOpenDownload} onOpenContact={onOpenContact} />;
}

function BusinessRoute() {
  const { onOpenContact } = useSiteChrome();
  return <BusinessPage onOpenContact={onOpenContact} />;
}

function PartnersRoute() {
  const { onOpenContact } = useSiteChrome();
  return <PartnersPage onOpenContact={onOpenContact} />;
}

function FAQRoute() {
  const { onOpenContact } = useSiteChrome();
  return <FAQPage onOpenContact={onOpenContact} />;
}

function SiteChromeLayout() {
  const onNavigate = useAppNavigate();
  const location = useLocation();
  const currentRoute = getRouteFromPathname(location.pathname);

  const [showGrid, setShowGrid] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactType, setContactType] = useState<'individual' | 'business' | 'partner' | 'general'>('business');
  const [logInOpen, setLogInOpen] = useState(false);

  const handleOpenContact = (type: 'individual' | 'business' | 'partner' | 'general' = 'business') => {
    setContactType(type);
    setContactOpen(true);
  };

  useEffect(() => {
    if (location.pathname === '/contact') {
      setContactType('general');
      setContactOpen(true);
    }
  }, [location.pathname]);

  const chromeValue: SiteChromeContextValue = {
    onNavigate,
    onOpenDownload: () => setDownloadOpen(true),
    onOpenContact: handleOpenContact,
  };

  return (
    <SiteChromeContext.Provider value={chromeValue}>
      <div className="font-sans min-h-screen bg-[#F7F8FA] text-[#0A0A0B] selection:bg-[#4F6BFF]/20 selection:text-[#4F6BFF] relative flex flex-col justify-between">
        <GridOverlay active={showGrid} />
        <DesignSpecHUD showGrid={showGrid} setShowGrid={setShowGrid} />

        <Navbar
          currentRoute={currentRoute}
          onNavigate={onNavigate}
          onOpenLogIn={() => setLogInOpen(true)}
          onOpenDownload={() => setDownloadOpen(true)}
        />

        <main className="flex-1 min-w-0 overflow-x-clip">
          <Outlet />
        </main>

        <Footer
          onNavigate={onNavigate}
          onOpenContact={handleOpenContact}
          onOpenDownload={() => setDownloadOpen(true)}
        />

        <DownloadModal isOpen={downloadOpen} onClose={() => setDownloadOpen(false)} />
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} initialType={contactType} />
        <LogInModal isOpen={logInOpen} onClose={() => setLogInOpen(false)} />
      </div>
    </SiteChromeContext.Provider>
  );
}

function PrivacyPolicyRoute() {
  const onNavigate = useAppNavigate();
  return <PrivacyPolicyPage onNavigate={onNavigate} />;
}

function TermsConditionsRoute() {
  const onNavigate = useAppNavigate();
  return <TermsConditionsPage onNavigate={onNavigate} />;
}

export default function App() {
  return (
    <>
      <LegacyHashRedirect />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicyRoute />} />
        <Route path="/terms-conditions" element={<TermsConditionsRoute />} />
        <Route element={<SiteChromeLayout />}>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/contact" element={<HomePageContent />} />
          <Route path="/individuals" element={<IndividualsRoute />} />
          <Route path="/business" element={<BusinessRoute />} />
          <Route path="/partners" element={<PartnersRoute />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FAQRoute />} />
        </Route>
      </Routes>
    </>
  );
}
