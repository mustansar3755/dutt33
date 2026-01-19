import React from 'react'
import { CheckCircle2 } from 'lucide-react';
const packages = [
  { name: 'Bronze Wash', price: '£45', features: ['Hand Wash', 'Wheels Cleaned', 'Tire Dressing', 'Vacuum'] },
  { name: 'Gold Detail', price: '£120', features: ['Hand Wash', 'Full Clay Bar', 'Interior Steam', 'Wax Protection'] },
  { name: 'Diamond Ceramic', price: '£350', features: ['Full Decon', 'Paint Correction', '9H Coating', 'Interior Protect'] },
];

const ServiceHero = () => {

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black italic uppercase">Our <span className="text-red-600">Services</span></h2>
          <div className="h-1.5 w-20 bg-red-600 mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-10 border-t-4 border-red-600 shadow-sm hover:shadow-xl transition-all group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600">{pkg.name}</h3>
              <p className="text-4xl font-black mb-8">{pkg.price}</p>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-red-600" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full border-2 border-red-600 text-red-600 py-3 font-bold hover:bg-red-600 hover:text-white transition">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceHero