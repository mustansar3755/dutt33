import React from "react";
import Hero from "../components/AboutUs/Hero";
import WhyChooseUs from "../components/common/WhyChooseUs";
import DetailingProcess from "../components/AboutUs/DetailingProcess";
import StatsBar from "../components/AboutUs/Status";

const AboutUs = () => {
  return (
    <div>
      <div className=" px-20 py-16">
        <Hero />
      </div>
      <StatsBar/>
      <WhyChooseUs />
      <DetailingProcess/>
    </div>
  );
};

export default AboutUs;
