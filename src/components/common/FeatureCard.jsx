import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, desc, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    
    // Individual card animation
    gsap.fromTo(el, 
      { 
        opacity: 0, 
        y: 50 
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", // Jab card ka top screen ke 90% par ho
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <div 
      ref={cardRef}
      className="group relative p-8 bg-zinc-900 border border-zinc-800 rounded-xl 
                 hover:border-red-600 transition-all duration-500 shadow-xl overflow-hidden"
    >
      {/* Red Hover Accent Top Line */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>

      {/* Icon Container */}
      <div className="mb-6 p-4 bg-black border border-zinc-800 w-fit rounded-lg 
                      group-hover:border-red-600/50 transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed group-hover:text-white transition-colors duration-300">
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;