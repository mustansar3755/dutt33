import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Droplets, Wand2, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DetailingProcess = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
        clearProps: "transform,opacity",
      });
    });

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      icon: <Search size={24} />,
      title: "Detailed Inspection",
      desc: "We perform a comprehensive paint analysis under specialized lighting to identify swirl marks, scratches, and surface contaminants.",
    },
    {
      num: "02",
      icon: <Droplets size={24} />,
      title: "Decontamination Wash",
      desc: "Using pH-neutral shampoos and clay bar treatment, we safely remove embedded grime and industrial fallout from every inch of the bodywork.",
    },
    {
      num: "03",
      icon: <Wand2 size={24} />,
      title: "Paint Correction",
      desc: "Our master detailers use multi-stage machine polishing to level the clear coat, restoring deep gloss and removing paint defects.",
    },
    {
      num: "04",
      icon: <ShieldCheck size={24} />,
      title: "Ceramic Protection",
      desc: "We apply premium ceramic coatings or high-grade sealants to lock in the shine and provide long-lasting hydrophobicity and UV protection.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3">
            Our Methodology
          </h4>
          <h2 className="text-black text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
            THE <span className="text-red-600">DUTT33</span> STANDARD
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mt-4"></div>
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="relative p-8 bg-neutral-50 rounded-2xl border-b-4 border-transparent 
              hover:border-red-600 transition-border duration-300 group"
            >
              <div
                className="text-red-600 mb-4 bg-white w-12 h-12 rounded-lg flex items-center 
                justify-center shadow-sm group-hover:bg-red-600 group-hover:text-white 
                transition-colors duration-300"
              >
                {step.icon}
              </div>

              <h4 className="text-xl font-black text-black uppercase italic mb-3">
                {step.title}
              </h4>

              <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>

              <span className="absolute top-6 right-8 text-4xl font-black text-neutral-200 opacity-50 italic">
                {step.num}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailingProcess;
