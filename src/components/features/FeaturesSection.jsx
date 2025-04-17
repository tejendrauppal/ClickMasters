import React from "react";
import { Link } from "react-router-dom";
import { Camera, Award, ShieldCheck, Star, Calendar, Wallet, Globe, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/80 hover:bg-gray-800/90 border border-gray-800 hover:border-[#99426d]/40 rounded-xl p-8 transition-all duration-300 group relative overflow-hidden"
    >
      
      <motion.div 
        className="absolute inset-0 border border-transparent group-hover:border-[#99426d]/20 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#99426d]/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="w-12 h-12 bg-[#99426d]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#99426d]/20 transition-colors"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          {feature.icon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Elite Photographers",
      description: "Verified professionals with proven portfolios and industry experience",
      icon: <Camera className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Award-Winning Talent",
      description: "Connect with photographers recognized for their exceptional work",
      icon: <Award className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Secure Payments",
      description: "Protected transactions with escrow protection for your peace of mind",
      icon: <ShieldCheck className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "5-Star Reviews",
      description: "Real client feedback to help you choose the perfect photographer",
      icon: <Star className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Easy Scheduling",
      description: "Book sessions instantly with our integrated calendar system",
      icon: <Calendar className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Transparent Pricing",
      description: "Clear packages with no hidden fees or surprise charges",
      icon: <Wallet className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Nationwide Coverage",
      description: "Find top photographers in any location across the country",
      icon: <Globe className="w-6 h-6 text-[#99426d]" />,
    },
    {
      title: "Satisfaction Guarantee",
      description: "We ensure you get exactly the photos you envisioned",
      icon: <Smile className="w-6 h-6 text-[#99426d]" />,
    },
  ];

  return (
    <section className="bg-black py-28 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/4 w-60 h-60 bg-[#99426d] rounded-full filter blur-[100px]"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#99426d] rounded-full filter blur-[100px]"
      />

      
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
       
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-5 py-2 bg-gradient-to-r from-[#8a3a62] to-[#99426d] text-white rounded-full text-sm font-medium tracking-wider mb-6"
          >
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            The Premier Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d17ba1] to-[#99426d]">Hiring Photographers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We connect you with exceptional photography talent for any occasion, ensuring professional results and a seamless experience.
          </motion.p>
        </motion.div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            to="/photographers"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#8a3a62] to-[#99426d] hover:from-[#99426d] hover:to-[#8a3a62] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#99426d]/30 relative overflow-hidden group"
          >
           
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20 opacity-0 group-hover:opacity-100"
              initial={{ x: -100 }}
              whileHover={{ x: "100%", transition: { duration: 0.6 } }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Browse Top Photographers
              <motion.span
                animate={inView ? { x: [0, 5, 0] } : {}}
                transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;