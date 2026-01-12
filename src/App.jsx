import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar.jsx'
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModel.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="bg-white min-h-screen font-sans text-slate-900">
<Navbar onOpenBooking={() => setIsModalOpen(true)} />        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        {/* Booking Model */}
        <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      </div>
    </div>
  );
}

export default App;