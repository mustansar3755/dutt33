import React, { useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Droplets, Sun } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CeramicCoating = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content Reveal
      gsap.from(".content-reveal", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Media Reveal (Video/Image)
      gsap.from(".media-reveal", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const benefits = [
    "Shields against UV rays, oxidation, and harsh weather",
    "Repels dirt, water, and road salt for easier maintenance",
    "Delivers long-lasting depth, clarity, and showroom shine",
    "Professionally applied for guaranteed durability"
  ];

  return (
    <section ref={sectionRef} className="bg-neutral-900 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="content-reveal">
            <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Premium Protection</h4>
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic leading-[1.1] tracking-tighter">
              Professional <span className="text-red-600">Ceramic Coating</span> Services
            </h2>
          </div>

          <p className="content-reveal text-neutral-400 text-lg leading-relaxed font-medium">
            Get lasting protection with full paint correction and surface preparation to ensure maximum bonding. 
            The result is a high-gloss, hydrophobic layer that resists dirt and damage for years.
          </p>

          <ul className="content-reveal space-y-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-semibold">
                <CheckCircle2 className="text-red-600 shrink-0" size={24} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="content-reveal pt-4">
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-red-900/20 active:scale-95">
              Explore Packages
            </button>
          </div>
          
          {/* Trust Badge */}
          <div className="content-reveal flex items-center gap-4 pt-6 border-t border-neutral-800">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" alt="G" className="w-8 h-8" />
            <div>
              <p className="text-white font-bold text-sm">Most trusted with over 200+ reviews</p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                <span className="ml-2 text-white text-xs opacity-60">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Video/Image Container */}
        <div className="media-reveal w-full lg:w-1/2 relative group">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 border-2 border-red-600/30 rounded-3xl group-hover:border-red-600 transition-colors duration-500"></div>
          
          {/* Video Placeholder (Aap apni video source yahan dalen) */}
          <div className="relative overflow-hidden rounded-2xl aspect-square lg:aspect-[4/5] bg-neutral-800 shadow-2xl">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-detailing-a-car-with-a-high-pressure-water-hose-34440-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Floating Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full"><Shield className="text-white" /></div>
                <div>
                  <h5 className="text-white font-black italic uppercase">5 Year Warranty</h5>
                  <p className="text-white/60 text-xs">Certified Installation & Aftercare</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CeramicCoating;