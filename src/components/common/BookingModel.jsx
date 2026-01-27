import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Calendar, Car, Shield, User, Info } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, { opacity: 1, duration: 0.3, display: "flex" });
      gsap.fromTo(contentRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = 'unset';
      gsap.to(modalRef.current, { opacity: 0, duration: 0.3, display: "none" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef} 
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div 
        ref={contentRef}
        className="bg-white w-full max-w-2xl relative overflow-hidden rounded-sm shadow-2xl my-auto"
      >
        {/* Header */}
        <div className="bg-red-600 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Request A Quote</h2>
            <p className="text-red-100 text-xs uppercase tracking-widest mt-1">Dutt33 Premium Detailing</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-red-700 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <form className="p-8 grid md:grid-cols-2 gap-6">
          {/* Customer Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <User size={14} className="text-red-600" /> Full Name
            </label>
            <input type="text" placeholder="John Doe" className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors" />
          </div>

          {/* Vehicle Manufacturer & Model */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <Car size={14} className="text-red-600" /> Vehicle (Make/Model)
            </label>
            <input type="text" placeholder="e.g. BMW M4" className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors" />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <Shield size={14} className="text-red-600" /> Service Required
            </label>
            <select className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors bg-transparent">
              <option>Ceramic Coating (£380)</option>
              <option>Machine Polish (£380)</option>
              <option>Interior Deep Clean (Quote)</option>
              <option>Full Valet (Quote)</option>
              <option>Extreme Pet Hair Removal (Quote)</option>
            </select>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <Calendar size={14} className="text-red-600" /> Preferred Date
            </label>
            <input type="date" className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors" />
          </div>

          {/* --- Client Special Requirements --- */}
          
          {/* Interior Condition */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <Info size={14} className="text-red-600" /> Interior Condition
            </label>
            <select className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors bg-transparent text-sm">
              <option>Good (Light dust only)</option>
              <option>Average (Daily use)</option>
              <option>Soiled (Heavy dirt/stains)</option>
              <option>Pet Hair (Heavy buildup)</option>
              <option>Seat Stains (Needs extraction)</option>
            </select>
          </div>

          {/* Exterior Condition */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-2">
              <Info size={14} className="text-red-600" /> Exterior Condition
            </label>
            <select className="w-full border-b-2 border-gray-300 p-2 focus:border-red-600 outline-none transition-colors bg-transparent text-sm">
              <option>Good (Maintenance only)</option>
              <option>Visible Swirls / Light Scratches</option>
              <option>Scuffs / Paint Damage</option>
              <option>Paint Peel / Orange Peel</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold uppercase text-gray-400">Notes for Detailer</label>
            <textarea rows="2" placeholder="Tell us more about your car's needs..." className="w-full border-2 border-gray-100 p-3 focus:border-red-600 outline-none transition-colors text-sm"></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-2">
            <button className="w-full cursor-pointer bg-slate-950 text-white font-black uppercase py-4 tracking-[0.2em] hover:bg-red-600 transition-all duration-300 shadow-lg">
              Submit Quote Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;