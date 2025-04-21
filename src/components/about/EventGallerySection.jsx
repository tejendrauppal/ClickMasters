import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Clock, CheckCircle } from "lucide-react";

const events = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Pre-Wedding Shoot - Jaipur",
    category: "Wedding",
    status: "completed",
    rating: 4.8
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Event - Delhi",
    category: "Corporate",
    status: "completed",
    rating: 4.5
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Product Launch - Mumbai",
    category: "Commercial",
    status: "completed",
    rating: 4.9
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Music Festival - Goa",
    category: "Event",
    status: "ongoing",
    rating: null
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Portfolio - Bangalore",
    category: "Fashion",
    status: "ongoing",
    rating: null
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Birthday Celebration - Pune",
    category: "Portrait",
    status: "upcoming",
    rating: null
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Baby Shower - Chennai",
    category: "Family",
    status: "upcoming",
    rating: null
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Engagement Ceremony - Hyderabad",
    category: "Wedding",
    status: "completed",
    rating: 4.7
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Conference - Gurgaon",
    category: "Corporate",
    status: "completed",
    rating: 4.6
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Jewelry Campaign - Kolkata",
    category: "Commercial",
    status: "completed",
    rating: 4.9
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Rock Concert - Bangalore",
    category: "Event",
    status: "ongoing",
    rating: null
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Summer Fashion Show - Mumbai",
    category: "Fashion",
    status: "ongoing",
    rating: null
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Anniversary Party - Delhi",
    category: "Portrait",
    status: "upcoming",
    rating: null
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1529635767877-4a6e4e9aeb4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Newborn Photoshoot - Pune",
    category: "Family",
    status: "upcoming",
    rating: null
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Bridal Portraits - Udaipur",
    category: "Wedding",
    status: "completed",
    rating: 5.0
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Tech Summit - Bangalore",
    category: "Corporate",
    status: "completed",
    rating: 4.7
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Automobile Ad Campaign - Chennai",
    category: "Commercial",
    status: "completed",
    rating: 4.8
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Food Festival - Delhi",
    category: "Event",
    status: "ongoing",
    rating: null
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Lingerie Campaign - Mumbai",
    category: "Fashion",
    status: "ongoing",
    rating: null
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Graduation Portraits - Hyderabad",
    category: "Portrait",
    status: "upcoming",
    rating: null
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Family Reunion - Kochi",
    category: "Family",
    status: "upcoming",
    rating: null
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Reception - Jodhpur",
    category: "Wedding",
    status: "completed",
    rating: 4.9
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Product Workshop - Pune",
    category: "Corporate",
    status: "completed",
    rating: 4.4
  },
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Cosmetics Campaign - Mumbai",
    category: "Commercial",
    status: "completed",
    rating: 4.7
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Art Exhibition - Bangalore",
    category: "Event",
    status: "ongoing",
    rating: null
  },
  {
    id: 26,
    url: "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Winter Collection - Delhi",
    category: "Fashion",
    status: "ongoing",
    rating: null
  },
  {
    id: 27,
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Model Portfolio - Chennai",
    category: "Portrait",
    status: "upcoming",
    rating: null
  },
  {
    id: 28,
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "New Year Party - Goa",
    category: "Event",
    status: "upcoming",
    rating: null
  }
];

const EventGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const carouselRef = useRef(null);

  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= Math.ceil(filteredEvents.length / 6) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(filteredEvents.length / 6) - 1 : prevIndex - 1
    );
  };

  // Calculate visible events based on currentIndex
  const visibleEvents = filteredEvents.slice(currentIndex * 6, currentIndex * 6 + 6);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Glowing decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#99426d]/20 to-transparent -z-0"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#99426d] rounded-full filter blur-[120px] opacity-10 -z-0"></div>
      <div className="absolute top-1/4 left-20 w-48 h-48 bg-[#426d99] rounded-full filter blur-[100px] opacity-10 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-[#99426d] to-[#c56d95] text-white px-4 py-1 rounded-full text-xs font-medium mb-4 uppercase tracking-wider"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our Portfolio
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Moments Captured by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99426d] to-[#c56d95]">ClickMasters</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore our collection of stunning photographs from various events and sessions.
          </motion.p>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-[#99426d] to-[#c56d95] mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex justify-center mb-12 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => { setFilter("all"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "all" ? "bg-gradient-to-r from-[#99426d] to-[#c56d95] text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            All Events
          </button>
          <button
            onClick={() => { setFilter("completed"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${filter === "completed" ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <CheckCircle className="w-4 h-4 mr-2" /> Completed
          </button>
          <button
            onClick={() => { setFilter("ongoing"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${filter === "ongoing" ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <Clock className="w-4 h-4 mr-2" /> Ongoing
          </button>
          <button
            onClick={() => { setFilter("upcoming"); setCurrentIndex(0); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${filter === "upcoming" ? "bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
          >
            <Clock className="w-4 h-4 mr-2" /> Upcoming
          </button>
        </motion.div>

        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-900 p-3 rounded-full shadow-lg hover:bg-[#99426d] transition-all border border-gray-700 hover:border-[#c56d95] group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-2xl h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Status badge */}
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "completed" ? "bg-green-600/90 text-white" :
                      event.status === "ongoing" ? "bg-blue-600/90 text-white" :
                      "bg-purple-600/90 text-white"
                    }`}>
                      {event.status === "completed" ? "Completed" : 
                       event.status === "ongoing" ? "Ongoing" : "Upcoming"}
                    </div>
                    
                    <img
                      src={event.url}
                      alt={event.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#c56d95] font-medium text-sm mb-1">{event.category}</span>
                      <h3 className="text-white text-xl font-semibold mb-2">{event.title}</h3>
                      
                      {event.rating && (
                        <div className="flex items-center mb-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-white text-sm font-medium">{event.rating}/5.0</span>
                        </div>
                      )}
                      
                      <button className="mt-2 text-white text-sm font-medium flex items-center hover:text-[#c56d95] transition-colors">
                        View Full Gallery
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-900 p-3 rounded-full shadow-lg hover:bg-[#99426d] transition-all border border-gray-700 hover:border-[#c56d95] group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-2 bg-gray-900/50 p-2 rounded-full border border-gray-700">
            {Array.from({ length: Math.ceil(filteredEvents.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-gradient-to-r from-[#99426d] to-[#c56d95] scale-125' : 'bg-gray-700 hover:bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallerySection;