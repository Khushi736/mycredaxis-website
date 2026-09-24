import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FinancialSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Sign up & verify your identity",
      description: "Quick and secure onboarding using your standard KYC documents."
    },
    {
      id: 2,
      title: "Set up your wallet & customize limits",
      description: "Take control of your spending by setting your own daily limits."
    },
    {
      id: 3,
      title: "Pay bills, send money & invest",
      description: "Handle all your financial transactions from a single dashboard."
    },
    {
      id: 4,
      title: "Track everything in real-time",
      description: "Get instant notifications and detailed insights on your expenses."
    },
    {
      id: 5,
      title: "Earn rewards & build your credit",
      description: "Timely payments automatically boost your credit score and unlock perks."
    }
  ];

  return (
    <section className="py-24 w-full bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-16 md:gap-8 justify-between items-start">
        
        {/* Left Side: Heading */}
        <div className="w-full md:w-[45%] sticky top-32">
          <span className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Five simple steps to financial peace of mind.
          </h2>
          <p className="text-lg text-gray-600">
            Getting started with MyCredAxis is completely seamless. Follow these steps to take full control of your financial journey.
          </p>
        </div>

        {/* Right Side: Steps List */}
        <div className="w-full md:w-[50%] flex flex-col space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 shrink-0 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg border border-blue-100">
                {step.id}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FinancialSteps;