import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ review, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="group bg-white border-2 border-neutral-50 p-8 
      rounded-3xl shadow-sm relative
      hover:shadow-2xl hover:border-red-600"
    >
      <Quote
        className="absolute right-6 top-6 text-neutral-100 group-hover:text-red-50"
        size={48}
      />

      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-red-600 text-red-600" />
        ))}
      </div>

      <p className="text-neutral-700 font-medium leading-relaxed mb-8 italic">
        "{review.text}"
      </p>

      <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
        <div
          className="h-12 w-12 bg-neutral-900 rounded-full flex
          items-center justify-center text-white font-black border-2
          border-red-600 transition-transform duration-300
          group-hover:scale-110"
        >
          {review.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-bold text-neutral-900 text-sm uppercase">
            {review.name}
          </h4>
          <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
            {review.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
