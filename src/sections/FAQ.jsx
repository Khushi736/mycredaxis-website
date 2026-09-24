import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  // Currently open question ka index track karne ke liye state
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Agar wahi question dobara click kiya hai toh close kar do, nahi toh naya open karo
    setOpenIndex(openIndex === index ? null : index);
  };

  // Document[cite: 2] se FAQ data
  const faqData = [
    {
      question: "What is MyCredAxis?",
      answer: "MyCredAxis is a digital smart card and financial management platform that helps you pay smarter, earn rewards, and keep track of your money all in one place."
    },
    {
      question: "How is MyCredAxis different from regular bank apps?",
      answer: "Unlike traditional banking apps, MyCredAxis focuses on rewarding your good financial behavior, offering customizable card limits, and providing a unified dashboard for all your expenses."
    },
    {
      question: "Do I need a credit card to use the app?",
      answer: "No, you don't necessarily need a pre-existing credit card. You can start with our basic digital wallet and unlock credit features as you build your financial profile with us."
    },
    {
      question: "Is it safe to link my bank accounts to MyCredAxis?",
      answer: "Absolutely. We use bank-grade encryption and strict data privacy protocols. Your data is your consent, and we never share your sensitive information with third parties."
    },
    {
      question: "What happens if I make my timely credit card payment?",
      answer: "Timely payments are highly rewarded! You will level up in our system, unlocking premium features, higher credit limits, and exclusive cashback offers."
    },
    {
      question: "Is there an annual fee for using MyCredAxis services?",
      answer: "The basic MyCredAxis wallet and UPI features are completely free. Some premium credit features or physical cards may have a nominal fee, which is always displayed transparently."
    }
  ];

  return (
    <section className="py-24 w-full bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-bold tracking-wider uppercase mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions for Individuals
          </h2>
          <p className="text-gray-500">
            Find answers to common questions about our platform.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-blue-100' : 'hover:border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-400 shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>
              
              {/* Answer Content - Conditional Rendering */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;