import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide in from left
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Text elements reveal
      gsap.from(".reveal-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image with Red Border Accent */}
          <div ref={imageRef} className="relative w-full lg:w-1/2">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-600 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop" 
                alt="Professional Detailing" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-black italic leading-none">10+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold">Years Experience</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div ref={contentRef} className="w-full lg:w-1/2 space-y-6">
            <div className="reveal-text">
              <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-3">
                Since Day One
              </h2>
              <h3 className="text-5xl font-black text-neutral-900 italic tracking-tighter leading-tight">
                DUTT33 <span className="text-red-600">DETAILING</span>
              </h3>
            </div>

            <div className="space-y-4 text-neutral-700 leading-relaxed font-medium reveal-text">
              <p>
                At DUTT33 Detailing, our passion for cars drives everything we do. Inspired by an early love for vehicles and shaped by years of discipline, we've developed an eye for detail and a commitment to delivering exceptional results without compromise.
              </p>
              <p>
                Since launching, we’ve built a loyal customer base impressed by our high-quality services, great value, and the unmatched convenience of professional detailing. As an independent company, we use only the best techniques and equipment.
              </p>
              <p className="italic border-l-4 border-red-600 pl-4 bg-neutral-50 py-2">
                "Every car deserves the utmost care, and that’s exactly what we provide."
              </p>
            </div>

            <div className="pt-6 reveal-text">
              <h4 className="font-black text-neutral-900 text-lg uppercase">James Belfield</h4>
              <p className="text-red-600 font-bold text-sm uppercase tracking-widest">Founder & CEO</p>
              <p className="text-xs text-neutral-500 mt-1 uppercase">Professionally Trained • Committed to Detail</p>
            </div>

            <div className="pt-4 reveal-text">
              <button className="bg-neutral-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-600 transition-colors shadow-xl active:scale-95">
                View Services
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;