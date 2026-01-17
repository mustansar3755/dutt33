import React, { useState, useRef, useEffect } from 'react';
import { MoveLeft, MoveRight, Star, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

const CarComparison = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // GSAP Animation for Entrance
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

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.pageX || e.touches?.[0]?.pageX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: BEFORE/AFTER SLIDER */}
        <div 
          ref={containerRef}
          className="relative h-100 md:h-137.5 w-full overflow-hidden rounded-3xl cursor-col-resize shadow-2xl group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070" 
            alt="After Detailing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2070" 
              alt="Before Detailing"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
            />
          </div>

          {/* Vertical Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 z-10 w-1 bg-white/50 shadow-lg pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
              <div className="flex gap-0.5 text-white">
                <MoveLeft size={14} fill="currentColor" />
                <MoveRight size={14} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div ref={textRef} className="space-y-6">
          <header className="animate-text">
            <h4 className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase mb-2">
              Vulpix Car Detailing and Valeting
            </h4>
            <h2 className="text-zinc-900 text-4xl md:text-5xl font-extrabold leading-tight">
              Car Detailing In <span className="text-zinc-600">Manchester</span>
            </h2>
          </header>

          <p className="text-zinc-600 text-lg leading-relaxed animate-text">
            Welcome to Manchester's premium car detailing service. Whether you choose 
            our mobile or unit-based services, we deliver results that last. 
            From ceramic coating to deep interior cleaning, we bring back the showroom shine.
          </p>

          {/* Feature List */}
          <ul className="space-y-4 animate-text">
            {[
              "Mobile and unit-based car detailing",
              "Ceramic coating for lasting protection",
              "Multi-stage car washing and deep cleaning",
              "Trusted across Manchester and the North West"
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-zinc-800 font-medium">
                <Star className="text-blue-600" size={20} fill="currentColor" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="animate-text mt-4 px-8 py-4 bg-[#c27803] hover:bg-[#a16302] text-white font-bold rounded-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default CarComparison;