import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactHeroSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  // Photo data
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      alt: "Wedding photography",
      category: "Weddings"
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
      alt: "Family photography",
      category: "Family"
    },
    {
      src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24",
      alt: "Graduation photography",
      category: "Graduations"
    },
    {
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      alt: "Event photography",
      category: "Corporate"
    }
  ];

  // Curved underline path
  const curvePath = "M0,10 C30,25 70,25 100,10";

  return (
    <section 
      ref={ref}
      className="relative bg-black overflow-hidden py-32"
    >
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ff66a3] blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#ff66a3] blur-[180px]"></div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.3 } : { y: -40, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-1/4 left-1/6 text-[#ff66a3] text-7xl"
      >
        ✧
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.3 } : { y: 40, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute bottom-1/3 right-1/6 text-[#ff66a3] text-8xl"
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block px-5 py-2.5 bg-[#ff66a3]/10 text-[#ff66a3] rounded-full text-sm font-medium mb-6 border border-[#ff66a3]/20">
                Premium Photography Network
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Capture Life's <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#ff66a3]">Special Moments</span>
                <svg 
                  className="absolute -bottom-3 left-0 w-full h-4"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d={curvePath}
                    stroke="#ff66a3"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
            >
              Click Masters connects you with elite photographers for weddings, birthdays, and all your memorable occasions. Simple booking, exceptional results.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(255, 102, 163, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-9 py-4 bg-[#ff66a3] text-white font-medium rounded-xl flex items-center gap-3 group"
              >
                <span>Find Photographers</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255, 102, 163, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-9 py-4 bg-transparent border-2 border-gray-700 text-white font-medium rounded-xl"
              >
                How It Works
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-5 pt-8"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ x: item * -15, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: item * -15, opacity: 0 }}
                    transition={{ delay: 0.9 + (item * 0.1), type: "spring", stiffness: 100 }}
                    className="w-12 h-12 rounded-full border-2 border-gray-800 overflow-hidden shadow-lg hover:z-10 hover:scale-110 transition-all duration-300"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                      alt="Happy customer"
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-white font-medium">8,000+</span> moments captured
              </div>
            </motion.div>
          </div>

          {/* Right column - Photo showcase */}
          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-5"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ delay: 0.6 + (index * 0.15), duration: 0.7 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }}
                className="relative h-72 rounded-2xl overflow-hidden border border-gray-800/50 group cursor-pointer"
              >
                <img 
                  src={`${photo.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-7">
                  <div className="transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="text-[#ff66a3] text-xs font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest">
                      PHOTOGRAPHY
                    </div>
                    <div className="text-white font-medium text-xl">
                      {photo.category}
                    </div>
                  </div>
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 bg-[#ff66a3] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 border-2 border-[#ff66a3]/30 rounded-2xl pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;