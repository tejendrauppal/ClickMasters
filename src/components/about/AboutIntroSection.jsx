import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiUsers, FiAward, FiCheckCircle } from 'react-icons/fi';

const AboutIntroSection = ({ onMeetTeamClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });
  
  // Scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  const stats = [
    { 
      value: "150+", 
      title: "Successful Projects", 
      desc: "Global client success stories",
      icon: <FiCheckCircle className="w-6 h-6" />
    },
    { 
      value: "95%", 
      title: "Client Satisfaction", 
      desc: "Repeat business rate",
      icon: <FiUsers className="w-6 h-6" />
    },
    { 
      value: "25+", 
      title: "Industry Awards", 
      desc: "Design & innovation recognition",
      icon: <FiAward className="w-6 h-6" />
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative bg-black overflow-hidden py-24 md:py-32 flex items-center" // Reduced height here
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ 
          y: yBg,
          opacity: opacityBg
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#99426d]/15 via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 40% 50%, #c56d95, transparent 60%), radial-gradient(circle at 60% 50%, #99426d, transparent 60%)'
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#99426d]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#99426d] opacity-10 blur-[120px]"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#c56d95] opacity-10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Hero content */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12" // Adjusted spacing
          >
            <motion.span 
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[#99426d] to-[#c56d95] px-5 py-2 text-sm font-medium text-white shadow-lg shadow-[#99426d]/30 ring-1 ring-white/10 backdrop-blur-sm"
              whileHover={{ y: -2 }}
            >
              <span className="mr-2">About ClickMasters</span>
              <FiCheckCircle className="w-4 h-4" />
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" // Slightly smaller text
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Crafting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99426d] to-[#c56d95]">
              Digital Masterpieces
            </span>
            <br />
            <span className="inline-block mt-4">
              That Drive <span className="text-[#c56d95]">Exceptional</span> Results
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#99426d] to-[#c56d95] mx-auto my-8 rounded-full" // Adjusted size
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10" // Adjusted spacing
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At ClickMasters, we transform digital visions into reality. Since 2018, we've been helping global brands stand out with stunning visuals, innovative web solutions, and strategic digital marketing that delivers measurable impact.
          </motion.p>

          {/* Stats grid */}
          <motion.div
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Tighter gap */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800/30 hover:border-[#99426d]/50 transition-all backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center justify-center w-14 h-14 mb-4 mx-auto rounded-xl bg-[#99426d]/10">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-[#c56d95] mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{stat.title}</h3>
                  <p className="text-sm text-gray-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4" // Adjusted spacing
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#99426d] to-[#c56d95] text-white font-medium flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Our Services</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={onMeetTeamClick}
              className="px-8 py-3.5 rounded-lg bg-transparent text-white border border-[#99426d] hover:bg-[#99426d]/10 transition-colors font-medium flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Meet The Team</span>
              <FiUsers className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;