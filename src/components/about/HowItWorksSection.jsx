import React from "react";
import { motion } from "framer-motion";
import { Camera, Search, CalendarCheck, Smile } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-10 h-10" />,
    title: "Explore Photographers",
    description: "Browse our curated selection of verified professionals with detailed portfolios and authentic client reviews.",
    color: "from-[#99426d] to-[#d884a7]"
  },
  {
    icon: <CalendarCheck className="w-10 h-10" />,
    title: "Check Availability",
    description: "Select your preferred date, location, and photography style with our real-time booking system.",
    color: "from-[#99426d] to-[#c56d95]"
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Book a Session",
    description: "Secure your booking with our trusted payment system and receive instant confirmation.",
    color: "from-[#99426d] to-[#b35683]"
  },
  {
    icon: <Smile className="w-10 h-10" />,
    title: "Enjoy the Moments",
    description: "Relax and create beautiful memories while our professionals capture every special moment.",
    color: "from-[#99426d] to-[#ff9bb7]"
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * Math.sin(i * 0.5)],
              y: [0, 50 * Math.cos(i * 0.5)],
              transition: {
                duration: 20 + i * 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="absolute bg-gradient-to-br from-[#99426d] to-[#d884a7] rounded-full"
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              left: `${10 + i * 7}%`,
              top: `${10 + (i * 10) % 80}%`,
              opacity: 0.15
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-[#99426d] to-[#d884a7] text-white px-4 py-1 rounded-full text-xs font-medium mb-4 uppercase tracking-wider"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
          >
            Simple Process
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            How <span className="bg-gradient-to-r from-[#99426d] to-[#d884a7] bg-clip-text text-transparent">ClickMasters</span> Works
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#99426d] to-[#d884a7] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "backOut"
              }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                <div className="absolute inset-0.5 bg-black rounded-2xl" />
                <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-transparent transition-all duration-500">
                  <motion.div 
                    className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {React.cloneElement(step.icon, { className: "w-8 h-8 text-white" })}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#99426d] group-hover:to-[#d884a7] transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                  <motion.div 
                    className="mt-6 font-medium text-sm flex items-center justify-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="bg-gradient-to-r from-[#99426d] to-[#d884a7] bg-clip-text text-transparent">
                      Step {index + 1}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-[#d884a7]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className="relative overflow-hidden bg-gradient-to-r from-[#99426d] to-[#d884a7] text-white px-8 py-4 rounded-xl shadow-2xl font-medium text-lg group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(153, 66, 109, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started Today</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#d884a7] to-[#99426d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;