import gsap from "gsap";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function ServicesPage({ onNavigate }) {
  const servicesRef = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.from('.service-detail', {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30, // Using 'y' (vertical) often feels more natural for cards
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, servicesRef); // Scope selectors to the ref

  return () => ctx.revert(); // Cleanup!
}, []);
  const servicesList = [
    {
      title: 'Basic Wash Package',
      price: '$49',
      features: ['Exterior hand wash', 'Wheel cleaning', 'Tire shine', 'Window cleaning'],
    },
    {
      title: 'Premium Detail',
      price: '$149',
      features: ['Everything in Basic', 'Interior vacuuming', 'Leather conditioning', 'Engine bay cleaning', 'Wax application'],
    },
    {
      title: 'Ultimate Package',
      price: '$299',
      features: ['Everything in Premium', 'Paint correction', 'Ceramic coating', 'Headlight restoration', 'Odor elimination'],
    },
  ];

  return (
    <div>
      <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Choose the perfect package for your vehicle</p>
        </div>
      </div>

      <div ref={servicesRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="service-detail bg-white rounded-xl shadow-lg p-8 "
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Star className="h-5 w-5 text-red-600 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage