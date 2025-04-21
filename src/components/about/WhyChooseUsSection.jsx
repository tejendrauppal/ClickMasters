import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, Users, Camera, Aperture } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Verified Professionals",
    description: "Every photographer undergoes rigorous vetting with background checks and portfolio reviews to ensure excellence.",
    accentColor: "from-[#99426d] to-[#7a3560]",
    hoverColor: "hover:bg-gradient-to-br hover:from-[#99426d] hover:to-[#7a3560]"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Exceptional Quality",
    description: "We maintain the highest standards through continuous training, feedback, and portfolio curation.",
    accentColor: "from-[#b35683] to-[#99426d]",
    hoverColor: "hover:bg-gradient-to-br hover:from-[#b35683] hover:to-[#99426d]"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick & Easy Booking",
    description: "Our seamless platform shows real-time availability with transparent pricing and secure payments.",
    accentColor: "from-[#c56d95] to-[#b35683]",
    hoverColor: "hover:bg-gradient-to-br hover:from-[#c56d95] hover:to-[#b35683]"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personalized Experience",
    description: "We match you with photographers who align perfectly with your style and vision for any occasion.",
    accentColor: "from-[#d884a7] to-[#c56d95]",
    hoverColor: "hover:bg-gradient-to-br hover:from-[#d884a7] hover:to-[#c56d95]"
  },
];

const FloatingElement = ({ x, y, size, delay, duration, icon, color }) => {
  return (
    <motion.div
      className={`absolute ${color} opacity-80 drop-shadow-[0_0_12px_currentColor]`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `${size}rem`,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 15, 0],
        opacity: [0.7, 0.9, 0.7],
        rotate: [0, 8, 0]
      }}
      transition={{
        duration: duration || 12 + Math.random() * 6,
        delay: delay || 0,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
  );
};

const GlowingOrb = ({ x, y, size, color, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} filter blur-[60px]`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay: delay || 0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* === Floating Camera Elements === */}
      <FloatingElement x={5} y={15} size={3.5} delay={0} duration={14} 
        icon={<Camera className="w-full h-full" />} color="text-[#99426d]" />
      <FloatingElement x={15} y={70} size={3} delay={3} duration={18} 
        icon={<Aperture className="w-full h-full" />} color="text-[#b35683]" />
      <FloatingElement x={85} y={20} size={4.5} delay={1} duration={16} 
        icon={<Camera className="w-full h-full" />} color="text-[#d884a7]" />
      <FloatingElement x={75} y={60} size={2.5} delay={4} duration={15} 
        icon={<Aperture className="w-full h-full" />} color="text-[#c56d95]" />

      {/* === Glowing Orbs === */}
      <GlowingOrb x={15} y={25} size={180} color="bg-[#99426d]" delay={0} />
      <GlowingOrb x={85} y={70} size={220} color="bg-[#d884a7]" delay={2} />
      <GlowingOrb x={25} y={65} size={160} color="bg-[#b35683]" delay={1} />
      <GlowingOrb x={70} y={30} size={200} color="bg-[#c56d95]" delay={3} />

      {/* === Grid Pattern === */}
      <div className="absolute inset-0 opacity-10 bg-[length:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
      
      {/* === Content === */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-[#99426d] to-[#b35683] text-white px-4 py-1.5 rounded-full text-xs font-medium mb-4 uppercase tracking-wider shadow-lg"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            Our Advantages
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.3
            }}
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d884a7] to-[#99426d]">ClickMasters</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.4
            }}
          >
            We're not just a platform — we're your photography partner committed to delivering exceptional experiences.
          </motion.p>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#99426d] to-[#c56d95] mx-auto mt-8 rounded-full shadow-md"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="relative group"
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-80 transition duration-500 blur-lg group-hover:blur-md" />
              <div className={`relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 h-full border border-gray-800/60 shadow-xl group-hover:shadow-2xl transition-all duration-500 ${feature.hoverColor} hover:border-transparent`}>
                <motion.div 
                  className={`bg-gradient-to-r ${feature.accentColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, 15, -15, 0],
                    transition: { duration: 0.8 }
                  }}
                >
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white drop-shadow-md" })}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d884a7] group-hover:to-[#99426d] transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-all duration-500">
                  {feature.description}
                </p>
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#d884a7] to-[#99426d] group-hover:w-full transition-all duration-700"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.6
          }}
        >
          <motion.button 
            className="relative overflow-hidden bg-gradient-to-r from-[#99426d] to-[#b35683] hover:from-[#b35683] hover:to-[#99426d] text-white px-10 py-4 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_-5px_rgba(157,66,109,0.7)] transition-all duration-500 font-medium group"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <Camera className="w-6 h-6 drop-shadow-md" />
              </motion.div>
              Discover Our Photographers
            </span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-[#b35683] to-[#d884a7] opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;