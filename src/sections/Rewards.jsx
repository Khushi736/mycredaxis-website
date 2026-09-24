import React from 'react';
import { Unlock, CreditCard, Settings } from 'lucide-react';

const Rewards = () => {
  // Document[cite: 2] se cards ka content
  const rewardFeatures = [
    {
      title: "Unlock Upgrades",
      description: "Timely repayments lead to level-ups, unlocking premium features, higher limits, and exclusive rewards.",
      icon: <Unlock className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Digital and Physical",
      description: "Access your virtual card instantly, or get a physical card with customized limits and settings.",
      icon: <CreditCard className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Manage Your Cards",
      description: "Disable, pause, block or order a replacement card easily through the app with complete peace of mind.",
      icon: <Settings className="w-5 h-5 text-blue-400" />
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-gray-400 text-sm font-bold tracking-wider uppercase mb-4 block">
            REWARDS & UPGRADES
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight">
            Get Rewarded for Paying On Time.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Good financial behavior deserves a little interest. Unlock a feature-rich smart card that rewards you based on your financial health and lets you customize its features.
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewardFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rewards;