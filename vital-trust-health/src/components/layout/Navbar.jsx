 import { useState } from "react";
import { NavLink } from "react-router-dom";

// 1. Extracted data to keep code clean and avoid repetition
const servicesList = [
  { name: "Individual Therapy", path: "/services/individual-therapy" },
  { name: "Couples Therapy", path: "/services/couples-therapy" },
  { name: "Anxiety & Depression", path: "/services/anxiety-depression" },
  { name: "Stress Management", path: "/services/stress-management" },
  { name: "Trauma Therapy", path: "/services/trauma-therapy" },
  { name: "Online Counseling", path: "/services/online-counseling" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Helper for active link styling
  const linkClasses = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-teal-600 font-semibold"
        : "text-gray-600 hover:text-teal-600"
    }`;

  return (
<nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-[9999]">
        <div className="max-w-[1200px] mx-auto px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Vital Trust Logo" 
              className="h-10 md:h-12 object-contain" 
            />
            <div>
              <h1 className="font-bold text-teal-600 text-base md:text-lg leading-none tracking-tight">
                Vital Trust
              </h1>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest -mt-0.5">
                Health LLC
              </p>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
            <li><NavLink to="/about-us" className={linkClasses}>About</NavLink></li>

            {/* SERVICES DROPDOWN */}
            <li className="relative group">
              <span className="cursor-pointer text-gray-600 hover:text-teal-600 transition-colors duration-200 flex items-center gap-1">
                Services 
                <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              
              {/* Invisible bridge to keep hover open while moving cursor */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-48 h-4"></div>
              
              <ul className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 bg-white shadow-xl rounded-lg py-3 px-2 space-y-1 text-sm border border-gray-100">
                {servicesList.map((item) => (
                  <li key={item.path}>
                    <NavLink 
                      to={item.path} 
                      className="block px-4 py-2 rounded-md text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li><NavLink to="/faq" className={linkClasses}>FAQ</NavLink></li>
            {/* <li><NavLink to="/contact-us" className={linkClasses}>Contact</NavLink></li> */}
          </ul>

          {/* CTA (Desktop) */}
          <div className="hidden md:block">
            <NavLink
              to="/contact-us"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium shadow-sm transition-colors duration-200"
            >
              Book Appointment
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* Added animation classes for smooth entry */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen border-t opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white px-6 py-4 space-y-3 shadow-lg">
          
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "block text-teal-600 font-semibold" : "block text-gray-700"}>
            Home
          </NavLink>
          <NavLink to="/about-us" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "block text-teal-600 font-semibold" : "block text-gray-700"}>
            About
          </NavLink>

          {/* MOBILE SERVICES ACCORDION */}
          <div>
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full flex justify-between items-center text-gray-700 font-medium py-1"
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-300 ${serviceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${serviceOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                {servicesList.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path} 
                    onClick={() => setMenuOpen(false)}
                    className={({isActive}) => `block py-1 text-sm ${isActive ? 'text-teal-600' : 'text-gray-600'}`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/faq" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "block text-teal-600 font-semibold" : "block text-gray-700"}>
            FAQ
          </NavLink>
          {/* <NavLink to="/contact-us" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "block text-teal-600 font-semibold" : "block text-gray-700"}>
            Contact
          </NavLink> */}

          {/* CTA (Mobile) */}
          <div className="pt-4">
            <NavLink
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-teal-600 text-white px-4 py-3 rounded-full font-medium shadow-sm"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;