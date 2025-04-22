import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const clients = [
  { name: "Moment", color: "#000000", logo: "/logos/moment.png" },
  { name: "Peak Design", color: "#1A1A1A", logo: "/logos/peak-design.png" },
  { name: "SIGMA", color: "#FF0000", logo: "/logos/sigma.png" },
  { name: "Tamron", color: "#E31937", logo: "/logos/tamron.png" },
  { name: "Manfrotto", color: "#E31937", logo: "/logos/manfrotto.png" },
  { name: "Godox", color: "#FF6B00", logo: "/logos/godox.png" },
  { name: "Rode", color: "#B62626", logo: "/logos/rode.png" },
  { name: "SmallRig", color: "#FF6B00", logo: "/logos/smallrig.png" },
];

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [isHoveringPrev, setIsHoveringPrev] = useState(false);
  const [isHoveringNext, setIsHoveringNext] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (autoplayEnabled) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, autoplayEnabled]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleSliderHover = () => {
    setAutoplayEnabled(false);
  };

  const handleSliderLeave = () => {
    setAutoplayEnabled(true);
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (activeIndex + i) % clients.length;
      visibleSlides.push({ ...clients[index], index });
    }
    return visibleSlides;
  };

  const visibleSlides = getVisibleSlides();

  const sliderVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    }),
  };

  // Indicators for current position
  const renderIndicators = () => {
    const totalPages = Math.ceil(clients.length / slidesPerView);
    const currentPage = Math.floor(activeIndex / slidesPerView);
    
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={`indicator-${index}`}
            className={`w-3 h-3 rounded-full ${
              index === currentPage % totalPages
                ? "bg-purple-500 w-8"
                : "bg-neutral-700"
            } transition-all duration-300`}
            onClick={() => setActiveIndex(index * slidesPerView)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 + index * 0.1 } }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-900 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-pink-500 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-blue-600 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-2 bg-purple-900/20 text-pink-300 rounded-full text-sm font-medium tracking-wider mb-6 border border-purple-900/30 uppercase"
          >
            Industry Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-400 to-purple-600">
              Innovative Brands
            </span>
          </h2>
          <motion.p 
            className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            We collaborate with leading photography and videography brands to deliver 
            exceptional creative solutions for professionals worldwide.
          </motion.p>
        </motion.div>

        {/* Client Slider */}
        <div 
          className="relative px-4 md:px-12 mb-8"
          onMouseEnter={handleSliderHover}
          onMouseLeave={handleSliderLeave}
        >
          <div className="py-8 overflow-hidden">
            <AnimatePresence initial={false} mode="wait" custom={1}>
              <motion.div
                key={`slider-${activeIndex}`}
                custom={1}
                variants={sliderVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {visibleSlides.map((client, index) => (
                  <motion.div
                    key={`${client.name}-${client.index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.2)",
                      borderColor: "#A855F7"
                    }}
                    className="flex justify-center items-center p-8 bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-purple-500 transition-all duration-300 h-full min-h-[200px] group"
                  >
                    <div className="flex flex-col items-center justify-center relative">
                      <div 
                        className="w-20 h-20 rounded-xl mb-6 flex items-center justify-center bg-neutral-800/50 backdrop-blur-sm overflow-hidden relative"
                        style={{ backgroundColor: `${client.color}15` }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-tr from-purple-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <motion.img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-14 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                        />
                      </div>
                      <p className="text-white font-medium text-lg">{client.name}</p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-3 opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Arrows */}
          <motion.button
            onClick={() => {
              prevSlide();
              setAutoplayEnabled(false);
              setTimeout(() => setAutoplayEnabled(true), 5000);
            }}
            onHoverStart={() => setIsHoveringPrev(true)}
            onHoverEnd={() => setIsHoveringPrev(false)}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(168, 85, 247, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 hover:border-purple-500 transition-all duration-300 shadow-xl"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={false}
                animate={{
                  width: isHoveringPrev ? "100%" : "0%",
                  opacity: isHoveringPrev ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/30 to-transparent"
              />
              <svg 
                className="w-8 h-8 text-white relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </motion.button>

          <motion.button
            onClick={() => {
              nextSlide();
              setAutoplayEnabled(false);
              setTimeout(() => setAutoplayEnabled(true), 5000);
            }}
            onHoverStart={() => setIsHoveringNext(true)}
            onHoverEnd={() => setIsHoveringNext(false)}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(168, 85, 247, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 hover:border-purple-500 transition-all duration-300 shadow-xl"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={false}
                animate={{
                  width: isHoveringNext ? "100%" : "0%",
                  opacity: isHoveringNext ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full bg-gradient-to-l from-purple-900/30 to-transparent"
              />
              <svg 
                className="w-8 h-8 text-white relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* Slider Indicators */}
        {renderIndicators()}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium tracking-wider text-white rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0.5 rounded-full bg-black transition-all duration-300"></span>
            <span className="relative flex items-center text-base md:text-lg font-medium">
              Partner With Us
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-3" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 2
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;