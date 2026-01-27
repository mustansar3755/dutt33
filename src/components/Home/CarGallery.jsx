import React from "react";
import assets from "../../assets/assets";

const CarGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Ceramic Coating",
      category: "Luxury Sedan",
      img: assets.Car_1,
    },
    { id: 2, title: "Interior Detailing", category: "SUV", img: assets.Car_2 },
    {
      id: 3,
      title: "Paint Correction",
      category: "Sports Car",
      img: assets.Car_3,
    },
    { id: 4, title: "Deep Wash", category: "Vintage", img: assets.Car_4 },
    {
      id: 5,
      title: "Wheel Restoration",
      category: "Off-road",
      img: assets.Car_5,
    },
    { id: 6, title: "Full Protection", category: "Coupe", img: assets.Car_6 },
  ];

  return (
    <section className="bg-zinc-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm">
            Our Work
          </h2>
          <h3 className="text-white text-4xl font-extrabold mt-2">
            Recent Detailing Projects
          </h3>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-black cursor-pointer shadow-2xl"
            >
              {/* Image with Zoom Effect */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
              />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-red-500 text-xs font-bold uppercase tracking-widest mb-1">
                  {project.category}
                </span>
                <h4 className="text-white text-xl font-bold">
                  {project.title}
                </h4>
                <button className="mt-4 text-white text-sm border-b border-red-600 w-fit hover:text-red-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGallery;
