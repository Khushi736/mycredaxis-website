import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Consent = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center justify-center text-center">
        
        {/* Icon */}
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
          <ShieldCheck className="w-8 h-8 text-green-400" />
        </div>

        {/* Content[cite: 2] */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Your data, your consent.
        </h2>
        <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
          We ensure that your data is securely encrypted and never shared without your explicit consent. Your financial peace of mind is our top priority.
        </p>
        
      </div>
    </section>
  );
};

export default Consent;