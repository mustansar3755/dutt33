import React from "react";
import ImageSlider from "../common/ImageSlider";
import assets from "../../assets/assets";

export const BeforeAfter = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3">
            Visible Results
          </h4>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6 leading-none">
            The <span className="text-red-600">Transformation</span>
          </h2>
          <p className="text-neutral-400 mb-8 font-medium leading-relaxed">
            Drag the slider to see how we restore neglected paintwork to a
            mirror-like finish. Our multi-stage correction process removes 99%
            of surface defects and restores the deep, rich gloss your car
            deserves.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 text-white px-8 py-4 rounded-full font-black uppercase text-xs hover:bg-white hover:text-black transition-all shadow-lg shadow-red-900/20 active:scale-95">
              See Full Gallery
            </button>
            <button className="border-2 border-white/10 text-white px-8 py-4 rounded-full font-black uppercase text-xs hover:border-red-600 transition-all active:scale-95">
              Book Correction
            </button>
          </div>
        </div>

        {/* Right Side: Reusable Slider Component */}
        <div className="order-1 lg:order-2">
          <ImageSlider beforeImg={assets.Before_2} afterImg={assets.After_2} />
          <p className="text-center text-neutral-500 text-[10px] mt-4 uppercase tracking-[0.2em] font-bold">
            ← Slide to compare before & after →
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
