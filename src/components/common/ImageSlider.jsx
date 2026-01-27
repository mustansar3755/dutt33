import React, { useState, useRef } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

const ImageSlider = ({ beforeImg, afterImg }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.pageX || e.touches?.[0]?.pageX) - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-100 md:h-[550px] w-full overflow-hidden rounded-3xl cursor-col-resize shadow-2xl group border-4 border-neutral-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img 
        src={afterImg} 
        alt="After Detailing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={beforeImg} 
          alt="Before Detailing"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-75"
        />
      </div>

      {/* Label Badges */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold backdrop-blur-sm">Before</div>
      <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold shadow-lg">After</div>

      {/* Vertical Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 z-10 w-1 bg-white/50 shadow-lg pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-red-600 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
          <div className="flex gap-0.5 text-white">
            <MoveLeft size={14} fill="currentColor" />
            <MoveRight size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;