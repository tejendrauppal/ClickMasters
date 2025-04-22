import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Check, Bell, X } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setIsLoading(false);
      setShowToast(true);
    }, 1500);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setTimeout(() => setIsSubscribed(false), 300);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Sample subscriber avatars
  const subscriberAvatars = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  ];

  return (
    <section className="relative bg-black py-28 overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff66a3]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#ff66a3]/10 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      {['✧', '✦', '✧', '✦'].map((char, index) => (
        <motion.div
          key={index}
          className={`absolute text-[#ff66a3]/30 text-3xl select-none ${
            index === 0 ? 'top-20 left-10' : 
            index === 1 ? 'bottom-20 right-16 text-4xl' : 
            index === 2 ? 'top-40 right-32 text-2xl' : 
            'bottom-40 left-32'
          }`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, index % 2 === 0 ? 10 : -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          {char}
        </motion.div>
      ))}
      
      {/* Success toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-gray-900 rounded-lg shadow-xl p-4 max-w-sm z-50 flex items-center gap-3 border border-[#ff66a3]/30 backdrop-blur-sm"
            style={{ boxShadow: "0 0 20px rgba(255, 102, 163, 0.3)" }}
          >
            <div className="flex-shrink-0 bg-[#ff66a3] p-2 rounded-full">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-white">Successfully subscribed!</h4>
              <p className="text-sm text-gray-300">You'll receive our next newsletter soon</p>
            </div>
            <button 
              onClick={() => setShowToast(false)} 
              className="text-gray-400 hover:text-[#ff66a3] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-[#ff66a3]/10 backdrop-blur-sm text-[#ff66a3] px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider gap-2 mb-8 border border-[#ff66a3]/20"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(255, 102, 163, 0.3)"
            }}
            style={{ boxShadow: "0 0 10px rgba(255, 102, 163, 0.15)" }}
          >
            <Bell className="w-4 h-4" />
            <span>Stay Updated</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block">
              Join Our{' '}
              <span 
                className="text-[#ff66a3]"
                style={{ textShadow: "0 0 10px rgba(255, 102, 163, 0.4)" }}
              >
                Newsletter
              </span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get exclusive photography insights, early access to new features, and special offers delivered straight to your inbox.
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubscribed ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="bg-[#ff66a3]/10 backdrop-blur-sm border border-[#ff66a3]/30 rounded-2xl p-10 text-center max-w-md mx-auto"
              style={{ boxShadow: "0 20px 40px -15px rgba(255, 102, 163, 0.25)" }}
            >
              <motion.div
                className="inline-flex items-center justify-center bg-[#ff66a3] text-white p-3 rounded-full mb-6 mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
              >
                <Check className="w-6 h-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Thanks for subscribing!</h3>
              <p className="text-gray-300">We're excited to have you join our community. Look out for photography tips and inspiration coming your way soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-4 max-w-2xl mx-auto"
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full group h-16">
                  <motion.div 
                    className="absolute -inset-0.5 bg-[#ff66a3] rounded-xl opacity-20 group-hover:opacity-30 blur transition duration-300 group-focus-within:opacity-30"
                    whileHover={{ opacity: 0.3 }}
                  />
                  <div className="relative flex h-full">
                    <span className="inline-flex items-center px-4 bg-black/50 border-y border-l border-gray-800 rounded-l-xl">
                      <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#ff66a3] group-focus-within:text-[#ff66a3] transition-colors" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 rounded-r-xl bg-black/50 backdrop-blur-sm border-y border-r border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#ff66a3]/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="h-16 w-full sm:w-auto bg-[#ff66a3] hover:bg-[#ff3385] text-white font-medium px-8 rounded-xl flex items-center justify-center gap-2 relative overflow-hidden transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(255, 102, 163, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  style={{ boxShadow: "0 0 15px rgba(255, 102, 163, 0.3)" }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </div>
                  )}
                </motion.button>
              </motion.form>
              
              <motion.div 
                className="flex flex-col items-center mt-8 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {subscriberAvatars.map((avatar, index) => (
                    <motion.div
                      key={index}
                      className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-900 bg-gray-800"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <img 
                        src={avatar}
                        alt={`Subscriber ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm">
                  Join <span className="text-[#ff66a3] font-medium">1,200+</span> photographers in our community
                </p>
              </motion.div>
              
              <motion.p 
                className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                We respect your privacy. Unsubscribe anytime with one click.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSection;