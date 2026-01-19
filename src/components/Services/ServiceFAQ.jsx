import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
// import { gsap } from 'gsap';

const ServiceFAQ = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "How long does a full detail take?", 
      answer: "A full detail typically takes between 4 to 8 hours depending on the vehicle's condition and the package selected. Premium services like ceramic coating may require the car for 24-48 hours for proper curing." 
    },
    { 
      question: "What is the benefit of Ceramic Coating?", 
      answer: "Ceramic coating provides a semi-permanent sacrificial layer that protects your paint from UV rays, bird droppings, and chemicals while making it extremely easy to clean and giving it a permanent candy-like gloss." 
    },
    { 
      question: "Do I need to book in advance?", 
      answer: "Yes, we recommend booking at least 1-2 weeks in advance to secure your preferred slot, especially for multi-day ceramic coating treatments or weekend appointments." 
    },
    { 
      question: "Can you remove deep scratches?", 
      answer: "Our paint correction process can remove most surface swirls and light scratches. However, if a scratch has gone through the clear coat into the primer, it may require a body shop touch-up." 
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-3">Support</h4>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-black tracking-tighter">
            Common <span className="text-red-600">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === index ? 'border-red-600 shadow-lg shadow-red-50' : 'border-neutral-100 hover:border-neutral-200'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left group bg-white"
              >
                <span className={`text-lg md:text-xl font-black uppercase italic tracking-tight transition-colors ${
                  openIndex === index ? 'text-red-600' : 'text-neutral-900 group-hover:text-red-600'
                }`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <Minus className="text-red-600" size={24} />
                  ) : (
                    <Plus className="text-neutral-400 group-hover:text-red-600" size={24} />
                  )}
                </div>
              </button>

              {/* Answer Section */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-neutral-50">
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest">
            Still have questions? <span className="text-red-600 cursor-pointer hover:underline">Contact our team</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;