import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Send, Clock, Info } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.from(infoRef.current, { x: -50, opacity: 0 }).from(
      formRef.current,
      { x: 50, opacity: 0 },
      "-=0.8",
    );
  }, []);

  return (
    // Back to Pure White as per your original design
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
                Ready to give your vehicle the treatment it deserves? Provide
                your vehicle details below for an accurate quote.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="p-2 bg-gray-50 group-hover:text-red-600 rounded-md border transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">
                    Call Us
                  </h4>
                  <p className="text-xl font-bold">+44 161 885 3619</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="p-2 bg-gray-50 group-hover:text-red-600 rounded-md border transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">
                    Email Us
                  </h4>
                  <p className="text-xl font-bold">
                    info@vulpixdetailing.co.uk
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="p-2 bg-gray-50 group-hover:text-red-600 border rounded-md transition-colors duration-300">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-400">
                    Opening Hours
                  </h4>
                  <p className="text-xl font-bold">Mon - Sat: 08:30 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form (Original Dark Design) */}
          <div
            ref={formRef}
            className="bg-slate-950 p-8 md:p-12 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-red-600"></div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">
                    Vehicle (Make/Model)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition"
                    placeholder="e.g. BMW M4"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">
                    Service Required
                  </label>
                  <select className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition appearance-none">
                    <option>Ceramic Coating (£380)</option>
                    <option>Interior Deep Clean</option>
                    <option>Extreme Pet Hair Removal</option>
                    <option>Paint Correction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition"
                    placeholder="07123 456789"
                  />
                </div>
              </div>

              {/* Client's Specific Requirements (Interior/Exterior Condition) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 flex items-center gap-1">
                    <Info size={12} className="text-red-600" /> Interior
                    Condition
                  </label>
                  <select className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition appearance-none">
                    <option>Good / Average</option>
                    <option>Soiled / Heavy Dirt</option>
                    <option>Pet Hair Build-up</option>
                    <option>Seat Stains</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 flex items-center gap-1">
                    <Info size={12} className="text-red-600" /> Exterior
                    Condition
                  </label>
                  <select className="w-full bg-slate-900 border-b border-slate-700 p-3 text-white focus:outline-none focus:border-red-600 transition appearance-none">
                    <option>Good / No Damage</option>
                    <option>Visible Swirls / Scratches</option>
                    <option>Scuffs / Paint Peel</option>
                    <option>Orange Peel</option>
                  </select>
                </div>
              </div>

              <button
                className="group w-full cursor-pointer bg-red-600 hover:bg-red-700 
             text-white font-black uppercase py-4 flex items-center justify-center 
             gap-2 tracking-widest transition-all duration-300"
              >
                Submit Quote Request
                <Send
                  className="transition-transform  duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2:"
                  size={18}
                />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 h-96 bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <MapPin className="text-red-600 mx-auto mb-2" size={40} />
              <p className="font-bold uppercase tracking-widest text-slate-900">
                Manchester, United Kingdom
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-30"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
