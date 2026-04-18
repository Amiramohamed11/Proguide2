import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop'; // 1. استيراد المكون

import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import HomeVisitSection from './components/HomeVisitSection';
import Team from './pages/Team';
import Karriere from './pages/Karriere';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* 2. ضعه هنا ليعمل على مراقبة تغيير المسارات في Routes */}
      <ScrollToTop />

      <Navbar />

      <main className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Reviews />
                <HomeVisitSection />
                <Gallery />
                <ContactForm />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Services />
                <ContactForm />
              </>
            }
          />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}