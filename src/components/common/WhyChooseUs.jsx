import React from 'react';
import { ShieldCheck, Zap, Award, Gauge, Clock, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';




const WhyChooseUs = () => {
  const features = [
    { title: "Premium Quality", desc: "Top-tier international brands ke products aur advanced techniques.", icon: <Award className="w-8 h-8 text-red-600" /> },
    { title: "Expert Team", desc: "Certified detailers jo har car ko showroom condition mein late hain.", icon: <ShieldCheck className="w-8 h-8 text-red-600" /> },
    { title: "Quick Turnaround", desc: "Hamari team time-management mein expert hai baghair quality giraye.", icon: <Clock className="w-8 h-8 text-red-600" /> },
    { title: "Advanced Tech", desc: "Modern ceramic coating aur detailing tools ka behtreen istemal.", icon: <Zap className="w-8 h-8 text-red-600" /> },
    { title: "Detail Oriented", desc: "Har choti se choti jagah ki safai hamari pehchan hai.", icon: <Sparkles className="w-8 h-8 text-red-600" /> },
    { title: "Client Trust", desc: "Hamaray customers hamari quality ke sab se baray gawah hain.", icon: <Gauge className="w-8 h-8 text-red-600" /> },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Efficiency & Trust</h4>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic ">
            Why Choose <span className="text-red-600">Our Shop?</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid of Separate Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard 
              key={index}
              title={item.title}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;