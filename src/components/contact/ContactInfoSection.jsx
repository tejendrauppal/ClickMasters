import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone className="text-indigo-600 w-6 h-6" />,
    title: "Phone",
    detail: "+91 98765 43210",
  },
  {
    icon: <Mail className="text-indigo-600 w-6 h-6" />,
    title: "Email",
    detail: "support@photohire.in",
  },
  {
    icon: <MapPin className="text-indigo-600 w-6 h-6" />,
    title: "Address",
    detail: "3rd Floor, Startup Hub, Chandigarh, India",
  },
  {
    icon: <Clock className="text-indigo-600 w-6 h-6" />,
    title: "Hours",
    detail: "Mon–Sat: 9am – 6pm",
  },
];

const ContactInfoSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {contactDetails.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
