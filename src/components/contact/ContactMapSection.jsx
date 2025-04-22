import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactMapSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("location");
  const [copied, setCopied] = useState(null);

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

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsMapLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black py-28 overflow-hidden border-t border-gray-800">
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
            Find & <span className="text-[#99426d]">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Visit our studio or connect with us through your preferred channel
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-900 rounded-lg p-1 border border-gray-800">
            {["location", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#99426d] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "location" ? "Our Location" : "Contact Info"}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
          {activeTab === "location" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Loading Skeleton */}
              {!isMapLoaded && (
                <div className="w-full h-96 bg-gray-800 animate-pulse"></div>
              )}

              {/* Embedded Google Map */}
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4690997205274!2d76.5769300752367!3d30.77175707452826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb0dd2dbb18f%3A0xc29d90ee42a12637!2sSVIET%20Campus!5e0!3m2!1sen!2sin!4v1713623673323!5m2!1sen!2sin"
                width="100%"
                height="500"
                className={`transition-opacity duration-500 ${isMapLoaded ? "opacity-100" : "opacity-0"}`}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
              />

              {/* Map Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#99426d]/10 rounded-full text-[#99426d]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Studio Location</h3>
                      <p className="text-sm text-gray-400 mt-1">123 Photography Ave, Creative District</p>
                    </div>
                  </div>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.google.com?q=123+Photography+Ave,+Creative+District"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#99426d] hover:bg-[#8a3b62] text-white rounded-md text-sm font-medium flex items-center gap-2 shadow-lg"
                >
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.type}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#99426d]/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#99426d]/10 rounded-full text-[#99426d]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{info.label}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-gray-400">{info.value}</p>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyToClipboard(info.value, info.type)}
                            className="text-gray-500 hover:text-[#99426d]"
                            aria-label={`Copy ${info.type}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                          </motion.button>
                        </div>
                        {copied === info.type && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="text-xs text-[#99426d] mt-1"
                          >
                            Copied to clipboard!
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 text-center">
                <h4 className="text-gray-400 text-sm font-medium mb-6 tracking-widest">CONNECT WITH US</h4>
                <div className="flex justify-center gap-6">
                  {[
                    { icon: <Facebook className="w-6 h-6" />, url: "https://facebook.com" },
                    { icon: <Instagram className="w-6 h-6" />, url: "https://instagram.com" },
                    { icon: <Twitter className="w-6 h-6" />, url: "https://twitter.com" },
                    { icon: <Linkedin className="w-6 h-6" />, url: "https://linkedin.com" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 hover:bg-[#99426d]/10 rounded-full text-gray-400 hover:text-[#99426d] border border-gray-700 hover:border-[#99426d]/50 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;