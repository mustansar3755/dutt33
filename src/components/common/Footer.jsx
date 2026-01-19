import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-red-600" size={32} />
              <span className="font-black text-2xl tracking-tighter italic">
                DUTT33 <span className="text-red-600">DETAILER</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium automotive care and restoration services in the UK. 
              We bring back that showroom shine with precision and passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-900 hover:bg-red-600 transition rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-red-600 transition rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-red-600 transition rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-red-500 transition flex items-center gap-2 group">
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" /> Home
              </Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition flex items-center gap-2 group">
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" /> Services
              </Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition flex items-center gap-2 group">
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" /> Bookings
              </Link></li>
              <li><Link to="/gallery" className="hover:text-red-500 transition flex items-center gap-2 group">
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" /> Our Work
              </Link></li>
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">Ceramic Coating</li>
              <li className="hover:text-white transition cursor-pointer">Paint Correction</li>
              <li className="hover:text-white transition cursor-pointer">Interior Detailing</li>
              <li className="hover:text-white transition cursor-pointer">Full Valeting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <span>123 Detailer Lane, <br />London, UK</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span>+44 7000 000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-red-600 shrink-0" size={20} />
                <span>info@dutt33detailer.co.uk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} DUTT33 DETAILER. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;