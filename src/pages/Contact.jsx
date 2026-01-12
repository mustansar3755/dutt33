import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    tl.from(infoRef.current, { x: -50, opacity: 0 })
      .from(formRef.current, { x: 50, opacity: 0 }, "-=0.8");
  }, []);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div ref={infoRef} className="space-y-12">
            <div>
              <h2 className="text-5xl font-black italic uppercase leading-none">
                Get in <span className="text-red-600">Touch</span>
              </h2>
              <div className="h-2 w-24 bg-red-600 mt-4"></div>
              <p className="text-gray-500 mt-8 text-lg max-w-md">
                Ready to give your vehicle the treatment it deserves? Fill out the form or reach out directly to book your slot.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="p-4 bg-gray-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Call Us</h4>
                  <p className="text-xl font-bold">+44 7000 000000</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="p-4 bg-gray-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Email Us</h4>
                  <p className="text-xl font-bold">booking@dutt33detailer.co.uk</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="p-4 bg-gray-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">Opening Hours</h4>
                  <p className="text-xl font-bold">Mon - Sat: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div ref={formRef} className="bg-slate-950 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-2 h-full bg-red-600"></div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition" 
                    placeholder="07123 456789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Service Required</label>
                <select className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition">
                  <option>Ceramic Coating</option>
                  <option>Full Interior Detail</option>
                  <option>Paint Correction</option>
                  <option>Basic Maintenance Wash</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Message / Vehicle Model</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition"
                  placeholder="Tell us about your car..."
                ></textarea>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-4 flex items-center justify-center gap-3 tracking-widest transition-all">
                Submit Request <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-96 bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <MapPin className="text-red-600 mx-auto mb-2" size={40} />
                    <p className="font-bold uppercase tracking-widest text-slate-900">London, United Kingdom</p>
                </div>
             </div>
             {/* Replace with an actual Google Maps Iframe if needed */}
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-30" alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Contact;