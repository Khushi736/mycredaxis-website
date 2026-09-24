import React from 'react';
import Hero from '../sections/Hero';
import Capabilities from '../sections/Capabilities';
import Rewards from '../sections/Rewards';
import FinancialSteps from '../sections/FinancialSteps';
import ComingSoon from '../sections/ComingSoon';
import Consent from '../sections/Consent';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import UpgradeLife from '../sections/UpgradeLife';

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section - Jisme Headline aur Mockup hai */}
      <Hero />
      <UpgradeLife />

      {/* 2. Capabilities - "What you can do with MyCredAxis" */}
      <Capabilities />

      {/* 3. Rewards - Dark theme section for timely payments */}
      <Rewards />

      {/* Baaki sections ke placeholders jo hum aage banayenge */}
      <FinancialSteps /> 
      <ComingSoon /> 
      <Consent />
      <FAQ /> 
      <FinalCTA /> 
    </div>
  );
};

export default Home;