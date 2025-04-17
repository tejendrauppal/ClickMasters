import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/blacklogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with elegant hover effect */}
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={() => handleLinkClick("Home")}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-18 transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" 
            />
          </Link>

          {/* Desktop Navigation with refined hover effects */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-6 py-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name 
                    ? "text-[#99426d] font-semibold"
                    : "text-gray-400 hover:text-[#99426d]"
                } group/navlink`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                {/* Animated underline effect with different hover color */}
                <span className={`absolute bottom-3 left-1/2 h-0.5 transition-all duration-500 ${
                  activeLink === link.name 
                    ? "w-4/5 -translate-x-1/2 opacity-100 bg-[#99426d]"
                    : "w-0 -translate-x-1/2 opacity-0 group-hover/navlink:w-4/5 group-hover/navlink:opacity-100 bg-teal-400"
                }`}></span>
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 px-8 py-3.5 bg-[#99426d] text-white text-sm font-semibold rounded-lg hover:bg-[#8a3a62] transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
              onClick={() => handleLinkClick("Login")}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button with enhanced interaction */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-200 hover:text-[#99426d] hover:bg-white/10 focus:outline-none transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-9 w-9" />
              ) : (
                <Menu className="h-9 w-9" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with glass effect */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-8 space-y-4 bg-white/5 backdrop-blur-lg border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-6 py-4 rounded-lg text-base font-medium transition-all duration-300 ${
                activeLink === link.name
                  ? "text-[#99426d] font-semibold bg-white/10"
                  : "text-gray-200 hover:text-[#99426d] hover:bg-white/10"
              }`}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block mt-4 px-6 py-4 bg-[#99426d] text-white text-center font-semibold rounded-lg hover:bg-[#8a3a62] transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            onClick={() => handleLinkClick("Login")}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;