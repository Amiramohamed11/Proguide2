import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { api } from '../lib/api'; 
import logo from '../assets/logo.png';

const Footer = () => {
  // نقوم بتعريف الحالة لتخزين البيانات القادمة من الـ API
  const [contact, setContact] = useState(null);

  const pageLinks = [
    { label: 'Unsere Leistungen', to: '/services' },
    { label: 'Karriere', to: '/karriere' },
    { label: 'Unser Team', to: '/team' },
    { label: 'Kontaktieren Sie uns', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Datenschutz', to: '/datenschutz' },
    { label: 'Impressum', to: '/impressum' },
  ];

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await api.getContactInfo();
        // نقوم بتخزين الـ data مباشرة (بناءً على هيكل الـ JSON الذي أرسلته)
        setContact(response); 
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };
    fetchContact();
  }, []);

  return (
    <footer className="w-full bg-[#0D1B3E] text-white h-auto md:h-[320px] flex items-center py-10 md:py-0 px-4 md:px-12 lg:px-20 font-['Roboto']">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full items-start">
        
        {/* العمود الأول */}
        <div className="flex flex-col items-start text-left">
          <div className="mb-4 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Proaktiv" className="h-auto w-[160px] object-contain" />
          </div>
          <p className="text-[12px] leading-relaxed text-gray-300 max-w-[300px] mb-6">
            {/* بقاء التصميم القديم كما هو */}
          </p>
          
          <div className="flex gap-4">
            <a href={contact?.social_links?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4DA8FF] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <Facebook className="h-5 w-5 cursor-pointer" />
            </a>
            <a href={contact?.social_links?.twitter || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4DA8FF] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <Twitter className="h-5 w-5 cursor-pointer" />
            </a>
            <a href={contact?.social_links?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4DA8FF] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <Linkedin className="h-5 w-5 cursor-pointer" />
            </a>
            <a href={contact?.social_links?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4DA8FF] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <Instagram className="h-5 w-5 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] font-['Amiko'] font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#4DA8FF]">Seiten</h3>
          <ul className="space-y-2">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-[13px] text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث */}
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] font-['Amiko'] font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#4DA8FF]">Kontakt</h3>
          <ul className="space-y-4">
            {/* إضافة العنوان */}
            <li className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <MapPin className="h-4 w-4 text-[#4DA8FF]" />
              <span>{contact?.address || "Laden..."}</span>
            </li>
            
            <li className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <Phone className="h-4 w-4 text-[#4DA8FF] group-hover:rotate-12 transition-transform" />
              <span>{contact?.phone || "Laden..."}</span>
            </li>
            
            <li>
              <a href={`https://wa.me/${contact?.phone?.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group">
                <div className="bg-[#25D366] p-1 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="h-3 w-3 text-white fill-current" />
                </div>
                <span>{contact?.phone || "Laden..."}</span>
              </a>
            </li>

            <li className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <Mail className="h-4 w-4 text-[#4DA8FF] group-hover:scale-110 transition-transform" />
              <span>{contact?.email || "Laden..."}</span>
            </li>

            {/* جزء المواعيد المحدث */}
            <li className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="text-[14px] text-white font-semibold mb-2">Öffnungszeiten</h4>
              {contact?.opening_hours?.map((item, index) => (
                <div key={index} className="flex justify-between text-[12px] text-gray-400 mb-1 w-full max-w-[250px]">
                  <span>{item.day}</span>
                  <span className="text-white">{item.hours}</span>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;