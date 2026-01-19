import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatsBar = () => {
  const statsContainerRef = useRef(null);

  useEffect(() => {
    const targets = gsap.utils.toArray(".stat-number");
    
    targets.forEach((target) => {
      const endValue = parseInt(target.getAttribute("data-target"));
      
      gsap.to(target, {
        innerText: endValue,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsContainerRef.current,
          start: "top 85%",
        }
      });
    });
  }, []);

  const stats = [
    { label: "Cars Detailed", value: 500, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Google Reviews", value: 80, suffix: "+" },
  ];

  return (
    <div ref={statsContainerRef} className="bg-neutral-900 py-16 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-white text-5xl md:text-6xl font-black italic flex justify-center">
                <span className="stat-number" data-target={stat.value}>0</span>
                <span className="text-red-600">{stat.suffix}</span>
              </div>
              <p className="text-neutral-400 text-[10px] md:text-xs uppercase font-bold tracking-[0.3em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;