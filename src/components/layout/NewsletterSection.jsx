import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real use, integrate with a newsletter service (e.g., Mailchimp)
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="relative bg-gradient-to-r from-[#7a3560] to-[#99426d] py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent -z-0"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full filter blur-[100px] opacity-10 -z-0"></div>
      <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-white opacity-70 filter blur-[8px] animate-float"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Newsletter
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay <span className="text-white/90">Updated</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join our community to receive exclusive photography tips, event updates, and special offers directly to your inbox.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-white to-white/70 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        {isSubscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center"
          >
            <div className="inline-flex items-center justify-center bg-white text-[#99426d] p-3 rounded-full mb-4">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/80">You've been successfully subscribed to our newsletter.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition"
              />
              <Mail className="absolute right-3 top-3.5 w-5 h-5 text-white/60" />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-[#99426d] font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        )}

        <motion.p 
          className="text-center text-white/50 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </section>
  );
};

export default NewsletterSection;