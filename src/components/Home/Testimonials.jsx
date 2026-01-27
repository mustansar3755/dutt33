import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "../common/TestimonialCard";
import assets from "../../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        clearProps: "transform,opacity",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Paula Montero Marqués",
      text:
        "I found DUTT33 Detailer on Google. I booked my Range Rover Sport in for a deep clean and machine polishing.",
      date: "2025-12-05",
    },
    {
      id: 2,
      name: "Joe Spence",
      text:
        "The guys have done a fantastic job detailing and ceramic coating my new Aston Martin DB12.",
      date: "2025-12-05",
    },
    {
      id: 3,
      name: "Kashif D Sharif",
      text:
        "I can't recommend this company enough. Their attention to detail is world-class.",
      date: "2025-11-30",
    },
    {
      id: 4,
      name: "Alex Turner",
      text:
        "Absolutely flawless service. The finish and attention to detail exceeded expectations.",
      date: "2025-11-25",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="testimonial-header flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Testimonials
            </h2>
            <h3 className="text-5xl font-black text-neutral-900 italic tracking-tighter leading-none">
              TRUSTED BY <br />
              <span className="text-red-600">ENTHUSIASTS</span>
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900 text-white p-5 rounded-2xl shadow-2xl shadow-red-100">
            <div className="text-right">
              <p className="font-black text-xl leading-none mb-1">EXCELLENT</p>
              <div className="flex gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-neutral-700"></div>
            <img
              src={assets.Google_Logo}
              alt="Google"
              className="h-8 w-8"
            />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[ Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard
                review={review}
                cardRef={(el) => (cardsRef.current[index] = el)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
