import React from 'react';
import { Palette, CreditCard, Repeat } from 'lucide-react';

const ComingSoon = () => {
  // Document[cite: 2] ke hisaab se content
  const upcomingFeatures = [
    {
      title: "Different colors of UPI",
      description: "Choose from a range of UPI colors to match your personality.",
      icon: <Palette className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Cash Rewards Card",
      description: "Get flat 2% cash back on all online spends with no upper limits.",
      icon: <CreditCard className="w-6 h-6 text-green-500" />
    },
    {
      title: "Card to Card Transfer",
      description: "Transfer funds directly between credit cards at 0% processing fee.",
      icon: <Repeat className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="py-24 w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-orange-500 text-sm font-bold tracking-wider uppercase mb-3 block">
            Sneak Peek
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Coming soon for you.
          </h2>
        </div>
        
        {/* 3-Column Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50/80 p-8 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="mb-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;