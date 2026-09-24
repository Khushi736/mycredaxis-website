import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpgradeLife = () => {
  const [featuresData] = useState([
    {
      id: 1,
      tag: "CREDIT REPORT",
      title: "Know where You stand.",
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
    },
    {
      id: 2,
      tag: "MANDATE",
      title: "Set it once. Forgot the rest.",
      link: "#",
      image: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      tag: "YOUR FD. YOUR CREDIT LIMIT.",
      title: "Deposit more. Unlock more.",
      link: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      tag: "MASTER KEY PRO",
      title: "Missed EMI remind you.",
      link: "#",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
    }
  ]);

  return (
    <section className="py-24 w-full bg-white overflow-hidden">
      
      {/* Section Heading - Wapas pehle jaisa kar diya gaya hai */}
      <div className="px-6 lg:px-16 mb-14">
        <h2 className="text-5xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.05] tracking-tight">
          Upgrade your life. <br />
          <span className="text-gray-400">bit by bit.</span>
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="px-6 lg:px-16">
        <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
          
          {featuresData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Container ko sirf justify-end rakha hai taaki bottom content set rahe
              className="shrink-0 snap-start group relative w-[85vw] md:w-[340px] lg:w-[360px] xl:w-[380px] h-[440px] rounded-[1.25rem] bg-gray-50 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-end p-8 cursor-pointer"
            >
              
              {/* Full Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Softer White Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent h-full w-full"></div>

              {/* Top Section: Tag ki position fix kar di hai (Absolute Top Left) */}
              <div className="absolute top-4 left-8 z-10 pr-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 drop-shadow-md">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Section: Title aur Link */}
              <div className="relative z-10 flex flex-col">
                <h3 className="text-3xl lg:text-[2rem] font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight pr-4">
                  {item.title}
                </h3>
                
                <a 
                  href={item.link} 
                  className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center gap-2 group-hover:text-blue-600 transition-colors"
                >
                  Know More 
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default UpgradeLife;