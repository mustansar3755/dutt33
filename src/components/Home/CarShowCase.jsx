import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import assets from "../../assets/assets";

const CarShowcase = () => {
  const containerRef = useRef(null);

  // Images aur Sounds ka data
  const cars = [
    {
      id: 1,
      img: assets.Car_8,
      sound: "/sounds/race-1.mp3",
    },
    {
      id: 2,
      img: assets.Car_9,
      sound: "/sounds/race-2.mp3",
    },
    {
      id: 3,
      img: assets.Car_10,
      sound: "/sounds/race-3.mp3",
    },
  ];

  useEffect(() => {
    const images = containerRef.current.querySelectorAll(".car-image");

    // GSAP Timeline for auto-playing slider
    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((img, index) => {
      tl.to(img, {
        opacity: 1,
        duration: 1.5,
        onStart: () => {
          // Jab image fade in hona shuru ho, sound play krein
          const audio = new Audio(cars[index].sound);
          audio.volume = 0.5; // Sound thora kam rakhein taky user irritate na ho
          audio.play();
        },
      }).to(img, {
        opacity: 0,
        duration: 1.5,
        delay: 3, // Image kitni dair screen pr rahy gi
      });
    });
  }, []);

  return (
    <div
      className="relative w-full h-125 bg-black overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      <h2 className="absolute top-10 text-white text-3xl font-bold z-10 uppercase tracking-widest">
        Our Elite Detailing
      </h2>

      {cars.map((car) => (
        <img
          key={car.id}
          src={car.img}
          alt="Car Detailing"
          className="car-image absolute w-full h-full object-cover opacity-0"
        />
      ))}

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></div>
    </div>
  );
};

export default CarShowcase;
