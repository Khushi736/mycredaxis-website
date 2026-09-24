import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Heading & Subtext[cite: 2] */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Ready to experience MyCredAxis?
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
          Download the MyCredAxis app now to unlock a smarter, safer, and more rewarding way to manage your daily finances.
        </p>
        
        {/* Action Button[cite: 1] */}
        <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          Download App
        </button>

        {/* Note / Trust Badge */}
        <p className="mt-8 text-sm text-gray-400 font-medium">
          Available on iOS and Android. No hidden setup fees.
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;