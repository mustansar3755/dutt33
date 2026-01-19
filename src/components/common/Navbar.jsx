import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Instagram, Facebook, Phone } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  return (
    <header className="fixed w-full z-50">
      {/* --- Top Bar (New Section) --- */}
      <div className="bg-neutral-900 text-white py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[10px] md:text-xs font-medium tracking-widest uppercase">
          
          {/* Working Hours */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-red-500" />
              <span>Mon - Fri: 08:00 - 20:00</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border-l border-gray-700 pl-4">
              <span>Weekends: 10:00 - 20:00</span>
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="flex items-center gap-4">
            <a href="tel:+923001234567" className="hover:text-red-500 transition flex items-center gap-1">
              <Phone size={14} /> <span>Call Us</span>
            </a>
            <div className="flex items-center gap-3 border-l border-gray-700 pl-4">
              <a href="#" className="hover:text-red-500 transition"><Instagram size={16} /></a>
              <a href="#" className="hover:text-red-500 transition"><Facebook size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navbar (Your Original Code) --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="text-red-600" size={32} />
            <span className="font-black text-2xl tracking-tighter italic text-gray-900">
              DUTT33 <span className="text-red-600">DETAILER</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium uppercase text-sm tracking-widest text-gray-700">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="/services" className="hover:text-red-600 transition">Services</Link>
            <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
            <Link to="/about-us" className="hover:text-red-600 transition">About Us</Link>
          </div>

          {/* Book Now Button */}
          <button 
            onClick={onOpenBooking}
            className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-red-700
              shadow-lg shadow-red-200 active:scale-95 transition-transform"
          >
            Book Now
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;