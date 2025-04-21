import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Tejendra Singh",
    role: "Founder & UI/UX Designer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Creative mind behind the design and flow of the platform, ensuring every pixel and interaction feels seamless.",
  },
  {
    name: "Ananya Verma",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Passionate about clean code and smart architecture, making sure the platform runs smoothly and securely.",
  },
  {
    name: "Karan Joshi",
    role: "Partnerships & Growth",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Focused on scaling and collaborations, building bridges with photographers and agencies across India.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Strategist behind our brand voice and digital presence, connecting us with the right audiences.",
  },
  {
    name: "Rahul Mehta",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Ensures every client and photographer has an exceptional experience on our platform.",
  },
  {
    name: "Neha Sharma",
    role: "Content Curator",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Showcases our photographers' best work through compelling storytelling and visual curation.",
  },
  {
    name: "Arjun Kapoor",
    role: "AI Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Develops cutting-edge AI features to enhance photo editing and search capabilities.",
  },
  {
    name: "Sanya Malhotra",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Builds and nurtures our community of photographers and clients through engaging initiatives.",
  },
  {
    name: "Vikram Reddy",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    bio: "Crafts intuitive mobile experiences that bring our platform to your fingertips.",
  }
];

const TeamSection = React.forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

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

  return (
    <section ref={ref} className="relative bg-black py-24 overflow-hidden">
      {/* Glowing decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#99426d]/10 to-transparent -z-0"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#99426d] rounded-full filter blur-[100px] opacity-10 -z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#99426d] rounded-full filter blur-[80px] opacity-5 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block bg-[#99426d] text-white px-4 py-1 rounded-full text-xs font-medium mb-4 uppercase tracking-wider"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Experts
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet The <span className="text-[#99426d]">ClickMasters</span> Team
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#99426d] to-[#c56d95] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all border border-gray-800"
            whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-[#99426d]" />
          </motion.button>
          
          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 px-4 flex-shrink-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Team Member Card */}
                  <motion.div 
                    className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-800 group"
                    whileHover={{ y: -10, borderColor: "#99426d" }}
                  >
                    {/* Profile Image */}
                    <div className="relative mb-6 group">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#99426d] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 object-cover rounded-full shadow-md border-4 border-gray-800 group-hover:border-[#99426d] transition-all duration-300"
                      />
                    </div>
                    
                    {/* Member Info */}
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#99426d] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#99426d] text-sm font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <motion.div 
                      className="mt-6 flex space-x-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {['facebook', 'instagram', 'linkedin'].map((social, i) => (
                        <motion.a 
                          key={i}
                          href="#"
                          className="text-gray-500 hover:text-[#99426d] transition-colors bg-gray-800 p-2 rounded-full"
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <motion.button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all border border-gray-800"
            whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-[#99426d]" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {teamMembers.slice(0, teamMembers.length - 2).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#99426d]' : 'bg-gray-700'} relative`}
              whileHover={{ scale: 1.2 }}
            >
              {currentIndex === index && (
                <motion.span 
                  className="absolute inset-0 rounded-full bg-[#99426d] opacity-50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeamSection;