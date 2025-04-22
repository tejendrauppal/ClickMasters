import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Hire Top Photographers",
    description: "Access our exclusive network of vetted professional photographers for weddings, corporate events, and special occasions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Event Coverage & Consultation",
    description: "Get end-to-end photography planning with our expert team to ensure flawless execution of your vision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Partnership & Collaboration",
    description: "Explore creative partnerships with brands, venues, and event planners through our network.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Support & Queries",
    description: "Our dedicated support team is available 24/7 to answer your questions and resolve any issues.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

const WhyReachOutSection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#99426d]/30 to-[#99426d]/10 blur-[150px]"
        ></motion.div>
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#99426d]/30 to-[#99426d]/10 blur-[180px]"
        ></motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 text-[#99426d]/20 text-5xl"
      >
        ✧
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 right-16 text-[#99426d]/20 text-6xl"
      >
        ✦
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#99426d]">Click Masters</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium photography services designed to capture your most important moments perfectly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(153, 66, 109, 0.3)",
                borderColor: "#99426d"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800 hover:border-[#99426d] transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                className="bg-gradient-to-br from-[#99426d]/20 to-[#99426d]/10 p-4 rounded-full w-max mb-6 text-[#99426d] group-hover:shadow-lg group-hover:shadow-[#99426d]/20 transition-all"
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {reason.description}
              </p>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                whileHover={{ 
                  background: "linear-gradient(to right, #99426d, transparent)"
                }}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 1,
                  hover: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="h-0.5 bg-gradient-to-r from-[#99426d]/50 to-transparent group-hover:from-[#99426d]"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(153, 66, 109, 0.5)",
              background: "linear-gradient(to right, #99426d, #b34d7d)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 15
            }}
            className="px-10 py-4 bg-gradient-to-r from-[#99426d] to-[#8a3b62] text-white font-medium rounded-xl shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Photoshoot Journey</span>
            <motion.span
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
            ></motion.span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 inline-block ml-2 -mb-1 relative z-10"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyReachOutSection;