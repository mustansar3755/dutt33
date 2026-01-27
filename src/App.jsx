import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/common/Footer.jsx";
import BookingModal from "./components/common/BookingModel.jsx";
import AboutUs from "./pages/AboutUs.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="bg-white min-h-screen font-sans text-slate-900">
        <Navbar onOpenBooking={() => setIsModalOpen(true)} />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
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
