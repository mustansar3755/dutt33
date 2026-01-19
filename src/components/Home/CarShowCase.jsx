import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CarShowcase = () => {
  const containerRef = useRef(null);

  // Images aur Sounds ka data
  const cars = [
    {
      id: 1,
      img: "https://lirp.cdn-website.com/443aa17f/dms3rep/multi/opt/car+detailing+the+works+auto+center-640w.jpg",
      sound: "/sounds/race-1.mp3",
    },
    {
      id: 2,
      img: "https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/07/26081339/all-about-car-detailing-process-body-b-260720211245-2-1024x640.jpg",
      sound: "/sounds/race-2.mp3",
    },
    {
      id: 3,
      img: "https://autobrains.pk/wp-content/webp-express/webp-images/uploads/2024/07/car-detailing-services.png.webp",
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
