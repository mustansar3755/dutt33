import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import ImageSlider from '../common/ImageSlider';


const CarComparison = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-text", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Reusable Slider */}
        <ImageSlider 
          beforeImg="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070"
          afterImg="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070"
        />

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div ref={textRef} className="space-y-6">
          <header className="animate-text">
            <h4 className="text-red-600 font-bold tracking-[0.2em] text-xs uppercase mb-2 italic">
              DUTT33 DETAILER
            </h4>
            <h2 className="text-zinc-900 text-4xl md:text-5xl font-black italic uppercase leading-tight tracking-tighter">
              Car Detailing In <span className="text-red-600">Manchester</span>
            </h2>
          </header>

          <p className="text-zinc-600 text-lg leading-relaxed animate-text font-medium">
            Welcome to DUTT33's premium car detailing service. Whether you choose 
            our mobile or unit-based services, we deliver results that last. 
          </p>

          <ul className="space-y-4 animate-text">
            {[
              "Mobile and unit-based car detailing",
              "Ceramic coating for lasting protection",
              "Multi-stage car washing and deep cleaning",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-zinc-800 font-bold uppercase text-sm italic">
                <Star className="text-red-600" size={18} fill="currentColor" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="animate-text mt-4 px-10 py-4 bg-neutral-900 hover:bg-red-600 text-white font-black rounded-full uppercase transition-all duration-300 transform hover:scale-105 shadow-xl italic tracking-widest">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default CarComparison;