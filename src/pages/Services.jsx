import React from 'react';

import ServiceHero from '../components/Services/ServiceHero';
import ServiceFAQ from '../components/Services/ServiceFAQ';
import { BeforeAfter } from '../components/Services/BeforeAfter';



const Services = () => {
  return (
    <>
    <ServiceHero/>
    <BeforeAfter/>
    <ServiceFAQ/>
    </>
  );
};

export default Services;