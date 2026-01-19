import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Open Animation
      gsap.to(contentRef.current, { height: "auto", duration: 0.4, ease: "power2.out", opacity: 1 });
      gsap.to(iconRef.current, { rotate: 180, duration: 0.3, color: "#dc2626" });
    } else {
      // Close Animation
      gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: "power2.in", opacity: 0 });
      gsap.to(iconRef.current, { rotate: 0, duration: 0.3, color: "#ffffff" });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-zinc-800 bg-zinc-900/30 mb-4 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-600/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-red-600' : 'text-white'}`}>
          {question}
        </span>
        <div ref={iconRef} className="text-white">
          <ChevronDown size={24} />
        </div>
      </button>
      
      <div 
        ref={contentRef} 
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;