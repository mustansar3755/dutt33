import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, Gauge, Award } from 'lucide-react';
import Contact from './Contact';
import CarShowcase from '../components/Home/CarShowCase';
import CarGallery from '../components/Home/CarGallery';
import CarComparison from '../components/Home/CarComparison';
import WhyChooseUs from '../components/common/WhyChooseUs';
import FAQSection from '../components/Home/FAQSection';
import Testimonials from '../components/Home/Testimonials';
import ServiceHero from '../components/Services/ServiceHero';
import assets from '../assets/assets';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           {/* Replace with a high-quality car wash image */}
          <img src={assets.Car_1} alt="Luxury Car" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight uppercase">
            Pure <span className="text-red-600">Perfection.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-gray-300">
            Professional detailing for those who demand excellence. We don't just wash; we restore.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg font-bold uppercase tracking-widest transition-all transform hover:scale-105">
            Explore Packages
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-gray-50 hover:shadow-2xl transition duration-500">
            <Sparkles className="mx-auto text-red-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Ceramic Coating</h3>
            <p className="text-gray-500">Ultimate paint protection with a mirror-like finish that lasts years.</p>
          </div>
          <div className="text-center p-8 border border-gray-50 hover:shadow-2xl transition duration-500">
            <Gauge className="mx-auto text-red-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Interior Detail</h3>
            <p className="text-gray-500">Deep steam cleaning and leather conditioning for a factory-fresh feel.</p>
          </div>
          <div className="text-center p-8 border border-gray-50 hover:shadow-2xl transition duration-500">
            <Award className="mx-auto text-red-600 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Showroom Finish</h3>
            <p className="text-gray-500">Multistage machine polishing to remove swirls and scratches.</p>
          </div>
        </div>
      </section>
      <ServiceHero/>
      <CarShowcase/>
      <CarGallery/>
      <CarComparison/>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQSection/>
      <Contact/>
    </div>
  );
};

export default Home;