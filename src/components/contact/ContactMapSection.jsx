import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ContactMapSection = () => {
  return (
    <section className="bg-white py-16 border-t">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Find Us & Connect</h2>

        {/* Embedded Google Map */}
        <div className="w-full h-72 mb-10">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4690997205274!2d76.5769300752367!3d30.77175707452826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb0dd2dbb18f%3A0xc29d90ee42a12637!2sSVIET%20Campus!5e0!3m2!1sen!2sin!4v1713623673323!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
