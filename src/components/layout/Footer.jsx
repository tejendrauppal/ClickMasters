import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/whitelogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black/95 to-black backdrop-blur-2xl border-t border-gray-800/30 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col space-y-6">
              <Link to="/" className="w-fit">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-14 w-auto transition-opacity hover:opacity-90"
                />
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                We create digital experiences that redefine industries and elevate brands to new heights of success.
              </p>
              
              <div className="flex space-x-5 pt-2">
                {[
                  { icon: <Facebook className="w-5 h-5" />, url: "#" },
                  { icon: <Twitter className="w-5 h-5" />, url: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, url: "#" },
                  { icon: <Instagram className="w-5 h-5" />, url: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="text-gray-400 hover:text-[#99426d] transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h3 className="text-white font-medium tracking-wider text-sm uppercase">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {['Home', 'About', 'Services', 'Team', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#99426d] transition-colors duration-300 text-sm flex items-start"
                  >
                    <span className="w-1 h-1 bg-[#99426d] rounded-full mt-2.5 mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h3 className="text-white font-medium tracking-wider text-sm uppercase">
              Resources
            </h3>
            <ul className="space-y-3.5">
              {['Careers', 'FAQs', 'Press', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#99426d] transition-colors duration-300 text-sm flex items-start"
                  >
                    <span className="w-1 h-1 bg-[#99426d] rounded-full mt-2.5 mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-white font-medium tracking-wider text-sm uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-[#99426d] w-4 h-4 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@yourbrand.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-[#99426d] w-4 h-4 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#99426d] w-4 h-4 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Business Ave, Suite 500<br />San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50"></div>

        {/* Copyright */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ClickMasters. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-[#99426d] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#99426d] text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-[#99426d] text-xs transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;