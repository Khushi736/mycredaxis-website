import React, { useState, useEffect } from 'react';
import Hero from '../sections/Hero';
import Capabilities from '../sections/Capabilities';
import Rewards from '../sections/Rewards';
import FinancialSteps from '../sections/FinancialSteps';
import ComingSoon from '../sections/ComingSoon';
import Consent from '../sections/Consent';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import UpgradeLife from '../sections/UpgradeLife';
import apiClient from '../services/apiClient'; // API client import kiya

const Home = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Component load hote hi API call karne ke liye useEffect
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // API client interceptor se seedha response.data aayega
        const response = await apiClient.get('/website/pages/home');
        
        if (response && response.success && response.data) {
          setPageData(response.data);
        }
      } catch (error) {
        console.error("Home page API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // API response mein se sirf 'upgrade' wali key ka data nikal rahe hain
  const upgradeSectionData = pageData?.sections?.find(sec => sec.key === 'upgrade');

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Hero Section - Jisme Headline aur Mockup hai */}
      <Hero />
      
      {/* UpgradeLife ko data aur loading state pass kar di */}
      <UpgradeLife data={upgradeSectionData} isLoading={loading} />

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