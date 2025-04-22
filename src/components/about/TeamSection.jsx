import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    name: "Tejendra Singh",
    role: "Founder & UI/UX Designer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&auto=format&fit=crop",
    bio: "Creative mind behind the design and flow of the platform, ensuring every pixel and interaction feels seamless.",
  },
  {
    name: "Ananya Verma",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&auto=format&fit=crop",
    bio: "Passionate about clean code and smart architecture, making sure the platform runs smoothly and securely.",
  },
  {
    name: "Karan Joshi",
    role: "Partnerships & Growth",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&auto=format&fit=crop",
    bio: "Focused on scaling and collaborations, building bridges with photographers and agencies across India.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&auto=format&fit=crop",
    bio: "Strategist behind our brand voice and digital presence, connecting us with the right audiences.",
  },
  {
    name: "Rahul Mehta",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop",
    bio: "Ensures every client and photographer has an exceptional experience on our platform.",
  },
  {
    name: "Neha Sharma",
    role: "Content Curator",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&auto=format&fit=crop",
    bio: "Showcases our photographers' best work through compelling storytelling and visual curation.",
  },
  {
    name: "Arjun Kapoor",
    role: "AI Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop",
    bio: "Develops cutting-edge AI features to enhance photo editing and search capabilities.",
  },
  {
    name: "Sanya Malhotra",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&auto=format&fit=crop",
    bio: "Builds and nurtures our community of photographers and clients through engaging initiatives.",
  },
  {
    name: "Vikram Reddy",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=300&h=300&auto=format&fit=crop",
    bio: "Crafts intuitive mobile experiences that bring our platform to your fingertips.",
  }
];

const TeamSection = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(Array(teamMembers.length).fill(false));
  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);

  // Preload images
  useEffect(() => {
    teamMembers.forEach((member, index) => {
      const img = new Image();
      img.src = member.image;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.onerror = () => {
        console.error(`Failed to load image for ${member.name}`);
      };
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  // Auto-rotate carousel unless paused
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, currentIndex]);

  // Pause autoplay on user interaction
  const pauseAutoplay = () => setIsAutoplay(false);
  const resumeAutoplay = () => setIsAutoplay(true);

  return (
    <section 
      ref={ref} 
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 overflow-hidden"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Ambient light effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08, x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-xl -z-0"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08, x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full filter blur-xl -z-0"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMTExODIzIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-[#99426d] to-pink-600 text-white px-5 py-1.5 rounded-full text-xs font-medium mb-5 uppercase tracking-wider shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
          >
            Our Experts
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet The <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#99426d] to-pink-500">ClickMasters</span> Team
          </motion.h2>
          
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-[#99426d] to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
          
          <motion.p
            className="max-w-2xl mx-auto text-gray-400 mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Passionate individuals working together to revolutionize the photography industry in India with innovation and creativity.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 px-4 flex-shrink-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Team Member Card */}
                  <motion.div 
                    className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl h-full flex flex-col"
                    whileHover={{ 
                      y: -12,
                      boxShadow: "0 30px 60px -15px rgba(153, 66, 109, 0.4)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Top accent */}  
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#99426d] to-pink-500"></div>
                    
                    {/* Sparkle effect */}
                    <motion.div 
                      className="absolute top-4 right-4 w-4 h-4 text-pink-300"
                      animate={{ 
                        opacity: hovered === index ? [0.5, 1, 0.5] : 0.5,
                        scale: hovered === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L12.9 8.58.9 12 12.9 15.42 12 24 15.42 15.42 24 12 15.42 8.58z" />
                      </svg>
                    </motion.div>
                    
                    {/* Profile Image */}
                    <div className="relative pt-10 pb-5 flex justify-center">
                      <div className="relative group">
                        {/* Pulsing ring */}
                        <motion.div 
                          className={`absolute -inset-1 rounded-full ${hovered === index ? 'bg-gradient-to-r from-[#99426d] to-pink-500' : 'bg-gradient-to-r from-gray-700 to-gray-800'} opacity-60 blur`}
                          animate={{ 
                            scale: hovered === index ? [1, 1.05, 1] : 1,
                            opacity: hovered === index ? [0.6, 0.8, 0.6] : 0.6
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Image container */}
                        <motion.div 
                          className="relative p-1 bg-gradient-to-r from-[#99426d] to-pink-500 rounded-full"
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                          <div className="p-0.5 rounded-full bg-gray-900">
                            <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-800 relative">
                              {/* Loading skeleton */}
                              {!imagesLoaded[index] && (
                                <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-full" />
                              )}
                              
                              {/* Fallback initials */}
                              <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 ${
                                imagesLoaded[index] ? 'opacity-0' : 'opacity-100'
                              } transition-opacity duration-300`}>
                                <span className="text-3xl font-bold text-[#99426d]">
                                  {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              
                              {/* Actual image */}
                              <img
                                src={member.image}
                                alt={member.name}
                                className={`absolute inset-0 w-full h-full object-cover ${
                                  imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500`}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              
                              {/* Decorative circles */}
                              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(153, 66, 109, 0.2)" strokeWidth="1" />
                                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(153, 66, 109, 0.1)" strokeWidth="1" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="p-6 pt-0 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-1 text-center">
                        {member.name}
                      </h3>
                      <div className="text-center mb-4">
                        <motion.span 
                          className="inline-block px-4 py-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full text-[#99426d] text-xs font-medium"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(153, 66, 109, 0.1)"
                          }}
                        >
                          {member.role}
                        </motion.span>
                      </div>
                      <motion.p 
                        className="text-gray-400 text-sm leading-relaxed flex-grow text-center"
                        animate={{
                          color: hovered === index ? "#d1d5db" : "#9ca3af"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.bio}
                      </motion.p>
                      
                      {/* Social Links */}
                      <div className="mt-6 pt-4 border-t border-gray-800/50">
                        <motion.div 
                          className="flex justify-center space-x-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {['facebook', 'instagram', 'linkedin'].map((social, i) => (
                            <motion.a 
                              key={i}
                              href="#"
                              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/70 text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
                              whileHover={{ 
                                scale: 1.15,
                                backgroundColor: social === 'facebook' ? '#1877F2' : 
                                               social === 'instagram' ? '#E4405F' : 
                                               '#0A66C2'
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.span
                                className="absolute inset-0 bg-white rounded-full"
                                initial={{ scale: 0, opacity: 0.3 }}
                                whileHover={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                              />
                              
                              <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                {social === 'facebook' && (
                                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                )}
                                {social === 'instagram' && (
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                )}
                                {social === 'linkedin' && (
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                )}
                              </svg>
                            </motion.a>
                          ))}
                        </motion.div>
                      </div>
                      
                      {/* Profile view button */}
                      <AnimatePresence>
                        {hovered === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-center"
                          >
                            <motion.button
                              className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium text-white bg-[#99426d] hover:bg-[#b64e84] transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              View Profile <ExternalLink className="w-3 h-3 ml-2" />
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="mt-16 flex flex-col items-center">
          {/* Progress bar */}
          <motion.div 
            className="w-full max-w-md h-1 bg-gray-800 rounded-full mb-8 overflow-hidden"
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-[#99426d] to-pink-500"
              animate={{ 
                width: `${(currentIndex / (teamMembers.length - 3)) * 100}%` 
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mb-8 space-x-3">
            {teamMembers.slice(0, teamMembers.length - 2).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className={`block h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-gradient-to-r from-[#99426d] to-pink-500' 
                    : 'w-2 bg-gray-700 group-hover:bg-gray-600'
                }`} />
                {currentIndex === index && (
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-[#99426d]"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex space-x-6">
            <motion.button 
              onClick={() => {
                prevSlide();
                pauseAutoplay();  
              }}
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg border border-gray-700 hover:border-[#99426d] group transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px -5px rgba(153, 66, 109, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: [-2, 0, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-[#99426d] transition-colors" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              onClick={() => {
                nextSlide();
                pauseAutoplay();
              }}
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-lg border border-gray-700 hover:border-[#99426d] group transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px -5px rgba(153, 66, 109, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: [2, 0, 2] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-[#99426d] transition-colors" />
              </motion.div>
            </motion.button>
          </div>
          
          {/* Autoplay indicator */}
          <motion.div 
            className="mt-6 flex items-center space-x-2 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className={`block w-2 h-2 rounded-full ${isAutoplay ? 'bg-green-500' : 'bg-gray-600'}`}></span>
            <span>{isAutoplay ? 'Auto-rotating' : 'Paused'}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default TeamSection;