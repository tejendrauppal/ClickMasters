import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const visibleSlides = [];
  for (let i = 0; i < slidesPerView; i++) {
    const index = (activeIndex + i) % clients.length;
    visibleSlides.push(clients[index]);
  }

  return (
    <section className="bg-black py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-500 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-2 bg-purple-900/20 text-pink-300 rounded-full text-sm font-medium tracking-wider mb-6 border border-purple-900/30 uppercase"
          >
            Industry Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-600">Innovative Brands</span>
          </h2>
          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading photography and videography brands to deliver exceptional creative solutions.
          </p>
        </motion.div>

        {/* Client Slider */}
        <div className="relative px-2 md:px-10">
          <div className="py-8 overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {visibleSlides.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px -10px rgba(168, 85, 247, 0.15)",
                    borderColor: "#A855F7"
                  }}
                  className="flex justify-center items-center p-8 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-purple-500 transition-all duration-300 h-full min-h-[180px]"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div 
                      className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center bg-neutral-800/50 backdrop-blur-sm"
                      style={{ backgroundColor: `${client.color}10` }}
                    >
                      <motion.img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-12 max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                    <p className="text-white font-medium">{client.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            onHoverStart={() => setIsHoveringPrev(true)}
            onHoverEnd={() => setIsHoveringPrev(false)}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(168, 85, 247, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:border-purple-500 transition-all duration-300 shadow-xl"
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
                className="w-7 h-7 text-white relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            onHoverStart={() => setIsHoveringNext(true)}
            onHoverEnd={() => setIsHoveringNext(false)}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(168, 85, 247, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 hover:border-purple-500 transition-all duration-300 shadow-xl"
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
                className="w-7 h-7 text-white relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 overflow-hidden font-medium tracking-wider text-white rounded-full group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-700 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0.5 rounded-full bg-black transition-all duration-300"></span>
            <span className="relative flex items-center text-base font-medium">
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;