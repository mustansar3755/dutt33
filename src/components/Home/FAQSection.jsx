import React from 'react';
import FAQItem from '../common/FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does ceramic coating last?",
      answer: "Our premium ceramic coatings typically last between 2 to 5 years. This depends on the package you choose and how well the vehicle is maintained with regular proper washing."
    },
    {
      question: "Do you offer mobile detailing services?",
      answer: "Yes, we provide fully equipped mobile detailing services. We can come to your home or office in Manchester and surrounding areas, bringing our own power and water if needed."
    },
    {
      question: "What is the difference between a wash and a detail?",
      answer: "A standard wash only removes surface dirt. Professional detailing involves deep cleaning, paint decontamination, machine polishing, and long-term protection for both interior and exterior."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book directly through our online form, or reach out to us via WhatsApp/Phone. We usually recommend booking at least 48 hours in advance to secure your preferred slot."
    }
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Glow for Difference */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">Questions & Answers</h4>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic ">
            Common <span className="text-red-600">Queries</span>
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16 p-8 bg-zinc-900/20 rounded-2xl border border-zinc-800/50">
          <p className="text-zinc-400">
            Still have questions? 
            <button className="ml-2 cursor-pointer text-red-600 font-bold hover:text-white transition-colors underline decoration-red-600 underline-offset-4">
              Contact our expert team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;