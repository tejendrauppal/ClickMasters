import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  const marqueeVariants = {  // Fixed typo in constant name (was marqueeVariants)
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }
      }
    }
  };

  return (
    <section ref={ref} className="bg-black min-h-screen flex items-center relative overflow-hidden">
     
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-[#99426d]/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full border-2 border-[#99426d]/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-[#99426d]/20"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>
      
     
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          <motion.div className="text-center lg:text-left space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-6 py-2 bg-[#99426d] rounded-full mb-6 group">
                <span className="text-white font-medium uppercase tracking-wider text-sm">
                  Award-Winning Photography
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-yellow-300 transform group-hover:rotate-12 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Where <span className="text-[#99426d]">Vision</span> Meets <span className="text-[#99426d]">Artistry</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We don't just take pictures - we craft visual stories that resonate. Specializing in commercial, portrait, and event photography, our team delivers images that stand the test of time.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#99426d] to-[#7a2f55] hover:from-[#7a2f55] hover:to-[#99426d] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 justify-center group"
              >
                <span>Book a Session</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border-2 border-white hover:border-[#99426d] text-white hover:text-[#99426d] font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 justify-center group"
              >
                <span>View Portfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {[
                { value: "850+", label: "Projects Completed", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { value: "28+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { value: "100%", label: "Client Satisfaction", icon: "M5 13l4 4L19 7" },
                { value: "200+", label: "Repeat Clients", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                  variants={statsVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#99426d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                    <p className="text-[#99426d] text-2xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

         
          <motion.div 
            className="relative h-full min-h-[500px] group"
            variants={imageVariants}
          >
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt="Professional photographer using camera in studio"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white/20 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ 
                opacity: 1,
                scale: 1.2,
                transition: { duration: 0.5 }
              }}
            />
            
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#99426d] to-[#7a2f55] text-white px-6 py-3 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <div>
                  <p className="font-bold text-lg">Featured Work</p>
                  <p className="text-sm">2024 International Photo Awards</p>
                </div>
              </div>
            </motion.div>
            
            
            <motion.div 
              className="absolute -top-4 -left-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-md"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#99426d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-sm">Sony α7 IV • 50mm f/1.2</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling testimonials at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 py-4 overflow-hidden z-20">
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[
            "National Geographic Featured Photographer",
            "Vogue • Harper's Bazaar • Elle",
            "5-Star Rated on Google",
            "Canon Ambassador",
            "Wedding Photography Awards Winner 2023",
            "Commercial Photography Excellence Award",
            "Featured in TIME Magazine",
            "Nikon Creator of the Year 2022"
          ].map((text, index) => (
            <div key={index} className="flex items-center text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#99426d] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {[
            "National Geographic Featured Photographer",
            "Vogue • Harper's Bazaar • Elle",
            "5-Star Rated on Google",
            "Canon Ambassador",
            "Wedding Photography Awards Winner 2023",
            "Commercial Photography Excellence Award",
            "Featured in TIME Magazine",
            "Nikon Creator of the Year 2022"
          ].map((text, index) => (
            <div key={`dup-${index}`} className="flex items-center text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#99426d] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;