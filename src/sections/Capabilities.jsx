import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { TrendingUp, Wallet, Smartphone, Gift } from 'lucide-react';

const Capabilities = () => {
  const features = [
    {
      title: "Check your credit",
      description: "Keep an eye on your credit score and stay financially healthy.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Manage your wallet",
      description: "A digital wallet to keep track of your cash flow, all in one place.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Pay using UPI/Card",
      description: "Make seamless payments across stores, online apps & utility bills.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Earn rewards",
      description: "Get rewarded for every transaction and timely payment you make.",
      icon: <Gift className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <span className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3 block">
          Capabilities
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          What you can do with MyCredAxis.
        </h2>
      </div>
      
      {/* 4-column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            title={feature.title} 
            description={feature.description} 
            icon={feature.icon} 
          />
        ))}
      </div>
    </section>
  );
};

export default Capabilities;