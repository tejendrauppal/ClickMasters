import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Bride | Delhi",
    quote: "Booking a wedding photographer was so easy! I found someone amazing within minutes and the photos turned out magical.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rohit Kapoor",
    role: "Startup Founder | Mumbai",
    quote: "We needed product photography for our launch, and the platform helped us hire a pro who delivered studio-quality shots at great rates!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Verma",
    role: "Fashion Blogger | Bangalore",
    quote: "Super professional experience! The photographer knew exactly how to capture my vibe — I'll definitely use this again for my next shoot.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Arjun Patel",
    role: "Real Estate Agent | Hyderabad",
    quote: "The architectural photographer we hired captured our properties perfectly. The images helped us sell listings 30% faster!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Malhotra",
    role: "Jewelry Designer | Jaipur",
    quote: "Found a specialist who understood how to photograph jewelry. The images made my pieces look even better than in person!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Vikram Joshi",
    role: "Restaurant Owner | Goa",
    quote: "Our food photographer made our dishes look irresistible. We've seen a noticeable increase in customers since using these photos.",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="bg-black py-28 relative overflow-hidden">
      
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#99426d]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#99426d]/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-[#99426d] text-white rounded-full text-sm font-medium tracking-wider mb-6">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hear From <span className="text-[#99426d]">Our Clients</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Don't just take our word for it - see what our clients say about their experiences
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-gray-900 hover:bg-[#99426d] flex items-center justify-center text-white transition-all border border-gray-800"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900/80 border border-gray-800 hover:border-[#99426d]/50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 group"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Quote className="w-8 h-8 text-[#99426d] mb-6 opacity-80" />
                <p className="text-gray-300 italic mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#99426d]"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-gray-900 hover:bg-[#99426d] flex items-center justify-center text-white transition-all border border-gray-800"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-[#99426d] w-6' : 'bg-gray-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;