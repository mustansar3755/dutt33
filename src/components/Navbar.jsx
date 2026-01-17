import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

// onOpenBooking prop add kiya hai modal handle karne ke liye
const Navbar = ({ onOpenBooking }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="text-red-600" size={32} />
          <span className="font-black text-2xl tracking-tighter italic">
            DUTT33 <span className="text-red-600">DETAILER</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium uppercase text-sm tracking-widest">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/services" className="hover:text-red-600 transition">Services</Link>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
        </div>

        {/* Updated Book Now Button */}
        {/* Ab ye button Link ke bajaye ek functional button hai jo Modal trigger karega */}
        <button 
          onClick={onOpenBooking}
          className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-red-700
            shadow-lg shadow-red-200 active:scale-95 transition-transform"
        >
          Book Now
        </button>

      </div>
    </nav>
  );
};

export default Navbar;