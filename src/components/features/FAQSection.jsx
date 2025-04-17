import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I book a photographer?",
    answer: "Browse profiles, view portfolios, select your preferred professional, choose a date/time, and confirm with secure payment."
  },
  {
    question: "Are photographers verified?",
    answer: "Yes, all photographers undergo portfolio reviews, identity verification, and capability assessments."
  },
  {
    question: "What photography services are available?",
    answer: "Weddings, portraits, commercial, fashion, corporate, and travel photography from vetted professionals."
  },
  {
    question: "Can I see photographer availability?",
    answer: "Yes, our platform shows real-time availability calendars for each photographer."
  },
  {
    question: "What's included in the pricing?",
    answer: "Session time, professional editing, high-res digital files, and usage rights. Prints/albums available as add-ons."
  }
];

const FloatingCamera = ({ initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity] = useState({
    x: (Math.random() - 0.5) * 0.3,
    y: (Math.random() - 0.5) * 0.3
  });

  useEffect(() => {
    const move = () => {
      setPosition(prev => ({
        x: (prev.x + velocity.x + 100) % 100,
        y: (prev.y + velocity.y + 100) % 100
      }));
    };
    const interval = setInterval(move, 50);
    return () => clearInterval(interval);
  }, [velocity.x, velocity.y]);

  return (
    <div 
      className="absolute opacity-20 transition-all duration-1000"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#99426d" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    </div>
  );
};

const FloatingAperture = ({ initialX, initialY }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity] = useState({
    x: (Math.random() - 0.5) * 0.2,
    y: (Math.random() - 0.5) * 0.2
  });

  useEffect(() => {
    const move = () => {
      setPosition(prev => ({
        x: (prev.x + velocity.x + 100) % 100,
        y: (prev.y + velocity.y + 100) % 100
      }));
    };
    const interval = setInterval(move, 50);
    return () => clearInterval(interval);
  }, [velocity.x, velocity.y]);

  return (
    <div 
      className="absolute opacity-15 transition-all duration-1000"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#99426d" strokeWidth="1">
        <circle cx="12" cy="12" r="10" strokeDasharray="3,3" />
      </svg>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-16 px-5 relative overflow-hidden">
      {/* Animated floating elements */}
      {[...Array(4)].map((_, i) => (
        <FloatingCamera 
          key={`camera-${i}`}
          initialX={Math.random() * 100} 
          initialY={Math.random() * 100} 
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <FloatingAperture 
          key={`aperture-${i}`}
          initialX={Math.random() * 100} 
          initialY={Math.random() * 100} 
        />
      ))}

      {/* Subtle glowing dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={`dot-${i}`}
            className="absolute rounded-full bg-[#99426d] opacity-10 animate-pulse"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#99426d] text-xs font-medium tracking-widest uppercase mb-3">
            Support
          </p>
          <h2 className="text-2xl font-medium text-white mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-[#99426d] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Find answers to common questions about our photography services
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-800 rounded-lg overflow-hidden transition-all duration-200 ${openIndex === index ? 'border-[#99426d]/50 bg-gray-900/30' : 'hover:border-gray-700'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 focus:outline-none group"
              >
                <h3 className="text-left text-white font-medium text-sm group-hover:text-[#99426d] transition-colors">
                  {faq.question}
                </h3>
                <div className={`ml-4 p-1 rounded-full transition-all ${openIndex === index ? 'bg-[#99426d]/20 text-[#99426d] rotate-180' : 'text-gray-400 group-hover:text-[#99426d]'}`}>
                  <ChevronDown className="w-4 h-4 transition-transform" />
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-5 pb-5 -mt-2 animate-fadeIn">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-5 py-2.5 bg-transparent border border-[#99426d] text-[#99426d] hover:bg-[#99426d] hover:text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(153,66,109,0.3)] group">
            Contact Our Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;