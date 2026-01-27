import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const packages = [
  { 
    name: 'Interior & Valet', 
    price: 'Quote Required', 
    isStarting: false,
    features: ['Deep Steam Cleaning', 'Leather Conditioning', 'Pet Hair Removal', 'Seat Stain Removal'] 
  },
  { 
    name: 'Machine Polish', 
    price: '£380', 
    isStarting: true,
    features: ['Single Stage Polish', 'Paint Enhancement', 'Swirl Removal', 'Gloss Boost'] 
  },
  { 
    name: 'Ceramic Coating', 
    price: '£380', 
    isStarting: false,
    features: ['9H Hardness Protection', 'Hydrophobic Surface', 'UV Resistance', '5-Year Durability'] 
  },
];

const ServiceHero = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black italic uppercase">Our <span className="text-red-600">Services</span></h2>
          <div className="h-1.5 w-20 bg-red-600 mt-2 mb-8"></div>
          
          {/* Alert Style Note */}
          <div className="flex items-center gap-3 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md shadow-sm max-w-2xl">
            <AlertTriangle className="text-amber-500 flex-shrink-0" size={20} />
            <p className="text-amber-800 text-sm font-medium">
              <span className="font-bold">Important:</span> Final pricing depends on your vehicle's manufacturer, model, and overall condition.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-10 border-t-4 border-red-600 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600">{pkg.name}</h3>
              
              <div className="mb-8">
                {pkg.isStarting && <span className="text-sm text-gray-500 block">Starting From</span>}
                <p className="text-4xl font-black">{pkg.price}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-red-600" /> {feat}
                  </li>
                ))}
              </ul>

              {/* Fixed Bottom CTA Button with padding */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <button className="w-full border-2 border-red-600 text-red-600 py-3 font-bold hover:bg-red-600 hover:text-white transition uppercase tracking-wider">
                  {pkg.price === 'Quote Required' ? 'Get A Quote' : 'Book This Service'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;