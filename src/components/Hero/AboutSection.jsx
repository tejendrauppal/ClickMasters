import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const images = [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Corporate event",
      class: "col-span-2 row-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      alt: "Wedding photography",
      class: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      alt: "Camera equipment",
      class: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
      alt: "Portrait session",
      class: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      alt: "Concert photography",
      class: "col-span-2 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3",
      alt: "Product shoot",
      class: "col-span-1 row-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9",
      alt: "Drone photography",
      class: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="bg-black py-28 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#8a3a62] rounded-full filter blur-[100px]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#8a3a62] rounded-full filter blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[550px]">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={hoverEffect}
                className={`relative rounded-lg overflow-hidden ${img.class} shadow-xl`}
              >
                <img
                  src={`${img.src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
                )}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-end p-4"
                >
                  <motion.span 
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    className="text-white font-medium text-sm"
                  >
                    {img.alt}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-5 right-6 bg-white text-black px-5 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Award Winning
          </motion.div>
        </motion.div>

        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeIn} className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#8a3a62] to-[#99426d] text-white rounded-full text-xs font-medium tracking-wider uppercase"
            >
              Visual Storytelling
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d17ba1] to-[#99426d]">Timeless</span> Imagery
            </h2>
          </motion.div>
          
          <motion.div variants={fadeIn} className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              At <span className="font-medium text-white">ClickMasters</span>, we blend technical precision with artistic vision to create photographs that stand the test of time. Our approach combines cutting-edge technology with timeless composition principles.
            </p>
            <p>
              Serving clients worldwide since 2015, our team of certified professionals delivers exceptional quality across commercial, editorial, and personal photography projects.
            </p>
          </motion.div>

          
          <motion.div variants={fadeIn} className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 relative pl-8 before:absolute before:left-0 before:top-3 before:w-5 before:h-0.5 before:bg-gradient-to-r from-[#99426d] to-transparent">
              Our Methodology
            </h3>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Discovery", 
                  description: "Understanding your brand and visual requirements",
                  icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                },
                { 
                  title: "Planning", 
                  description: "Strategic shot lists and technical preparations",
                  icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"
                },
                { 
                  title: "Execution", 
                  description: "Precision shooting with professional equipment",
                  icon: "M3 9l2-2m0 0l7-7 7 7M5 9v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
                },
                { 
                  title: "Refinement", 
                  description: "Meticulous post-processing and quality control",
                  icon: "M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  whileHover={{ x: 5 }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-md bg-gradient-to-br from-[#8a3a62] to-[#99426d] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white group-hover:text-[#d17ba1] transition-colors">{step.title}</h4>
                  <p className="text-gray-400 mt-1 text-base">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Link
              to="/portfolio"
              className="px-8 py-3.5 bg-gradient-to-r from-[#8a3a62] to-[#99426d] hover:from-[#99426d] hover:to-[#8a3a62] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center gap-3 justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-gray-700 hover:border-[#99426d] text-white hover:text-[#d17ba1] font-medium rounded-lg transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-3 justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;