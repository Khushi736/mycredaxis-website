import React from 'react';
import { motion } from 'framer-motion';

const UpgradeLife = ({ data, isLoading }) => {
  // Base URL for images coming from API
  const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_BASE_URL || '';

  // Helper function to format image URLs
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${MEDIA_BASE_URL}${imagePath}`;
  };

  // Extract items from API data or use empty array
  const items = data?.items || [];

  return (
    <section className="py-24 w-full bg-white overflow-hidden">
      
      {/* Section Heading - API se aayega ya fallback use hoga */}
      <div className="px-6 lg:px-16 mb-14">
        <h2 className="text-5xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.05] tracking-tight whitespace-pre-line">
          {data?.title ? data.title.replace(/\\n/g, '\n') : "Upgrade your life.\nbit by bit."}
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="px-6 lg:px-16">
        {isLoading ? (
          // Jab tak API se data aayega, ek loading skeleton dikhega
          <div className="flex gap-6 lg:gap-8 pb-12">
            {[1, 2, 3, 4].map((skeleton) => (
              <div key={skeleton} className="shrink-0 w-[85vw] md:w-[340px] lg:w-[360px] xl:w-[380px] h-[440px] rounded-[1.25rem] bg-gray-100 animate-pulse"></div>
            ))}
          </div>
        ) : items.length > 0 ? (
          <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
            
            {items.map((item, index) => {
              // Centric page ke liye specific logic jaisa V1 mein tha
              const isCentricCard = String(item.title || "").trim().toLowerCase() === "centric";
              const link = isCentricCard ? "/centric" : item.link || "#";

              return (
                <motion.div 
                  key={index}
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
                      src={getImageUrl(item.image)} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Softer White Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent h-full w-full"></div>

                  {/* Top Section: Tag ki position (API mein item.title tag ka kaam kar raha hai) */}
                  <div className="absolute top-4 left-8 z-10 pr-8">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 drop-shadow-md">
                      {item.title}
                    </span>
                  </div>

                  {/* Bottom Section: Title aur Link (API mein item.description actual card heading hai) */}
                  <div className="relative z-10 flex flex-col">
                    <h3 className="text-3xl lg:text-[2rem] font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-tight pr-4 whitespace-pre-line">
                      {item.description ? item.description.replace(/\\n/g, '\n') : ""}
                    </h3>
                    
                    <a 
                      href={link} 
                      className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center gap-2 group-hover:text-blue-600 transition-colors"
                    >
                      Know More 
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}

          </div>
        ) : null}
      </div>
    </section>
  );
};

export default UpgradeLife;