import React from "react";
import { motion } from "framer-motion";

// Enhanced SVG Components with glow effects
const CameraIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const ApertureIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="14.31" y1="8" x2="20.05" y2="17.94"/>
    <line x1="9.69" y1="8" x2="21.17" y2="8"/>
    <line x1="7.38" y1="12" x2="13.12" y2="2.06"/>
    <line x1="9.69" y1="16" x2="3.95" y2="6.06"/>
    <line x1="14.31" y1="16" x2="2.83" y2="16"/>
    <line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const DocumentIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/>
    <line x1="9" y1="15" x2="15" y2="15"/>
  </svg>
);

const FloatingElements = () => {
  const elements = [
    { 
      component: <CameraIcon className="w-full h-full" />, 
      size: 40, 
      x: "15%", 
      y: "20%", 
      delay: 0.1,
      color: "text-[#ff66a3]/40",
      animation: {
        y: [0, -20, 0],
        rotate: [0, -5, 0],
        scale: [1, 1.1, 1]
      },
      glow: "0 0 15px rgba(255, 102, 163, 0.7)"
    },
    { 
      component: <ApertureIcon className="w-full h-full" />, 
      size: 48, 
      x: "85%", 
      y: "30%", 
      delay: 0.3,
      color: "text-[#ff66a3]/35",
      animation: {
        y: [0, 15, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.15, 1]
      },
      glow: "0 0 20px rgba(255, 102, 163, 0.6)"
    },
    { 
      component: "✦", 
      size: 32, 
      x: "25%", 
      y: "70%", 
      delay: 0.5,
      color: "text-[#ff66a3]/30",
      animation: {
        y: [0, -10, 0],
        rotate: [0, 180, 0],
        scale: [1, 1.2, 1]
      },
      glow: "0 0 12px rgba(255, 102, 163, 0.5)"
    },
    { 
      component: "✧", 
      size: 36, 
      x: "75%", 
      y: "80%", 
      delay: 0.2,
      color: "text-[#ff66a3]/35",
      animation: {
        y: [0, 10, 0],
        rotate: [0, -180, 0],
        scale: [1, 1.3, 1]
      },
      glow: "0 0 18px rgba(255, 102, 163, 0.6)"
    }
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute pointer-events-none ${element.color}`}
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: element.x,
            top: element.y,
            filter: element.glow
          }}
          initial={{ y: -10, opacity: 0, rotate: -5 }}
          animate={{
            y: element.animation.y,
            opacity: [0.4, 0.9, 0.4],
            rotate: element.animation.rotate,
            scale: element.animation.scale
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.component}
        </motion.div>
      ))}
    </>
  );
};

const TimelineItem = ({ year, title, description, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[18px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#ff66a3] to-transparent"></div>
      )}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#ff66a3] border-2 border-[#ff66a3] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
      <div className="relative z-10">
        <div className="text-sm font-semibold text-[#ff66a3] mb-1">{year}</div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const OurStorySection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Pure black background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#120101] opacity-90"></div>
      
      {/* Floating background elements with glow */}
      <FloatingElements />
      
      {/* Enhanced floating shapes with more depth and glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff66a3]/10 blur-[100px]"
          style={{ filter: "drop-shadow(0 0 30px rgba(255, 102, 163, 0.4))" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#ff66a3]/10 blur-[120px]"
          style={{ filter: "drop-shadow(0 0 40px rgba(255, 102, 163, 0.3))" }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Enhanced Image section with glow and visibility */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="relative group perspective-1000">
              {/* Main image with enhanced visibility and glow */}
              <motion.div 
                className="relative overflow-hidden aspect-[4/3] rounded-xl bg-gray-900 border border-gray-800/50 shadow-2xl"
                whileHover="hover"
                initial="rest"
                variants={{
                  rest: { transform: "rotateY(0deg) rotateX(0deg)" },
                  hover: { transform: "rotateY(5deg) rotateX(2deg)" }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  boxShadow: "0 0 30px rgba(255, 102, 163, 0.2)"
                }}
              >
                {/* Fallback background color to ensure visibility */}
                <div className="absolute inset-0 bg-gray-800/30"></div>
                <img
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80"
                  alt="Photographer taking picture of a model in studio"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-100 contrast-100"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))"
                  }}
                />
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/05 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              
              {/* Enhanced floating badge with glow */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-[#ff66a3] px-5 py-2.5 rounded-lg shadow-xl backdrop-blur-sm border border-[#ff66a3]/40"
                style={{
                  boxShadow: "0 0 20px rgba(255, 102, 163, 0.5)"
                }}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(255, 102, 163, 0.6)"
                }}
                transition={{ 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }}
              >
                <span className="text-white font-medium tracking-wide flex items-center gap-2">
                  <DocumentIcon className="w-4 h-4" />
                  <span className="relative">
                    Since 2018
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </span>
                </span>
              </motion.div>
              
              {/* Glowing corner elements */}
              <div 
                className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#ff66a3]/50 rounded-tl-lg"
                style={{ filter: "drop-shadow(0 0 8px rgba(255, 102, 163, 0.5))" }}
              ></div>
              <div 
                className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#ff66a3]/50 rounded-br-lg"
                style={{ filter: "drop-shadow(0 0 8px rgba(255, 102, 163, 0.5))" }}
              ></div>
            </div>
          </motion.div>

          {/* Enhanced Content section with glow effects */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span 
                className="inline-flex items-center bg-[#ff66a3]/10 text-[#ff66a3] px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider border border-[#ff66a3]/20 gap-2"
                style={{
                  boxShadow: "0 0 10px rgba(255, 102, 163, 0.2)"
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 102, 163, 0.2)",
                  boxShadow: "0 0 15px rgba(255, 102, 163, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <ClockIcon className="w-4 h-4" />
                <span>Our Journey</span>
              </motion.span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block">
                Crafting{' '}
                <span className="relative inline-block">
                  <span 
                    className="relative z-10 text-[#ff66a3]"
                    style={{ textShadow: "0 0 10px rgba(255, 102, 163, 0.4)" }}
                  >
                    Visual Excellence
                  </span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-2 bg-[#ff66a3]/30 -z-1"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  />
                </span>
              </span>
            </motion.h2>

            <div className="space-y-8 mb-12">
              {[
                "Founded in 2018 with a vision to transform how businesses connect with photographic talent. We've eliminated the friction of traditional hiring processes through our curated platform.",
                "What began as a small team in a shared workspace has grown into the nation's premier photography network, trusted by leading brands and discerning clients.",
                "Today, our elite roster of photographers delivers exceptional results, with over 5,000 successful projects completed to our exacting standards."
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="relative pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div 
                    className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#ff66a3]"
                    style={{ boxShadow: "0 0 8px rgba(255, 102, 163, 0.7)" }}
                  ></div>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { 
                  value: "150+", 
                  label: "Professional Photographers", 
                  icon: "👨‍🎨",
                  bg: "bg-gradient-to-br from-[#ff66a3]/10 to-[#ff66a3]/05"
                },
                { 
                  value: "5,000+", 
                  label: "Completed Projects", 
                  icon: "🏆",
                  bg: "bg-gradient-to-br from-[#ff66a3]/10 to-[#120101]/50"
                }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={`p-6 rounded-xl border border-gray-800/50 hover:border-[#ff66a3]/40 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden ${stat.bg}`}
                  style={{
                    boxShadow: "0 0 15px rgba(255, 102, 163, 0.1)"
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 10px 30px -10px rgba(255, 102, 163, 0.4)"
                  }}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff66a3]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-2xl opacity-80 group-hover:opacity-100 group-hover:text-[#ff66a3] transition-all duration-300"
                        style={{ textShadow: "0 0 8px rgba(255, 102, 163, 0.5)" }}
                      >
                        {stat.icon}
                      </span>
                      <h3 
                        className="text-3xl font-bold text-white group-hover:text-[#ff66a3] transition-colors duration-300"
                        style={{ textShadow: "0 0 10px rgba(255, 102, 163, 0.3)" }}
                      >
                        {stat.value}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 pl-9 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <motion.h3 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative inline-block">
              Our <span className="text-[#ff66a3]">Milestones</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-[#ff66a3]/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff66a3] to-transparent transform -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
              {[
                {
                  year: "2018",
                  title: "Foundation",
                  description: "Launched with 5 photographers in New York, focusing on commercial photography."
                },
                {
                  year: "2019",
                  title: "First Expansion",
                  description: "Expanded to Los Angeles and Chicago, growing our team to 25 professionals."
                },
                {
                  year: "2020",
                  title: "Digital Platform",
                  description: "Launched our online booking platform, making our services accessible nationwide."
                },
                {
                  year: "2021",
                  title: "Award Recognition",
                  description: "Received 'Best Photography Network' award from Creative Professionals Association."
                },
                {
                  year: "2022",
                  title: "International Reach",
                  description: "Expanded services to Europe with partnerships in London and Paris."
                },
                {
                  year: "2023",
                  title: "Current Day",
                  description: "Serving over 500 clients monthly with a network of 150+ elite photographers."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:col-start-2'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <TimelineItem 
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLast={index === 5}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;