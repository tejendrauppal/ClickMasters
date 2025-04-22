import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

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
      className="absolute opacity-20 transition-all duration-1000 pointer-events-none"
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
      className="absolute opacity-15 transition-all duration-1000 pointer-events-none"
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

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      type: "email",
      label: "Email Us",
      value: "hello@clickmasters.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      type: "phone",
      label: "Call Us",
      value: "+1 (555) 123-4567",
      icon: <Phone className="w-5 h-5" />
    },
    {
      type: "address",
      label: "Visit Us",
      value: "123 Photography Ave, Creative District",
      icon: <MapPin className="w-5 h-5" />
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formData);
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({ success: false, message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-black py-28 overflow-hidden border-t border-gray-800">
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#99426d]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#99426d]/10 blur-[150px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's <span className="text-[#99426d]">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or ready to book? Our team is here to help capture your perfect moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-start gap-5 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#99426d]/50 transition-all"
              >
                <div className="p-3 bg-[#99426d]/10 rounded-full text-[#99426d]">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">{info.label}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gradient-to-br from-[#99426d]/10 to-[#7a3556]/10 rounded-xl border border-gray-800 hover:border-[#99426d]/50 transition-all"
            >
              <h3 className="font-medium text-white mb-4">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(153, 66, 109, 0.5)",
                    backgroundColor: "rgba(153, 66, 109, 0.05)"
                  }}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ 
                    boxShadow: "0 0 0 2px rgba(153, 66, 109, 0.5)",
                    backgroundColor: "rgba(153, 66, 109, 0.05)"
                  }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                Subject
              </label>
              <motion.input
                whileFocus={{ 
                  boxShadow: "0 0 0 2px rgba(153, 66, 109, 0.5)",
                  backgroundColor: "rgba(153, 66, 109, 0.05)"
                }}
                type="text"
                id="subject"
                name="subject"
                placeholder="Wedding Photography Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                Your Message
              </label>
              <motion.textarea
                whileFocus={{ 
                  boxShadow: "0 0 0 2px rgba(153, 66, 109, 0.5)",
                  backgroundColor: "rgba(153, 66, 109, 0.05)"
                }}
                id="message"
                name="message"
                placeholder="Tell us about your photography needs..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
              ></motion.textarea>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="pt-4"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-[#99426d]/70 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#99426d] to-[#7a3556] hover:from-[#a54774] hover:to-[#8a3b62] shadow-lg hover:shadow-xl hover:shadow-[#99426d]/20"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </span>
                )}
              </button>
            </motion.div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center ${
                  submitStatus.success ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;