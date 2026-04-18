import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const pageLinks = [
    { label: 'Unsere Leistungen', to: '/services' },
    { label: 'Karriere', to: '/karriere' },
    { label: 'Unser Team', to: '/team' },
    { label: 'Kontaktieren Sie uns', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Datenschutz', to: '/datenschutz' },
    { label: 'Impressum', to: '/impressum' },
  ];

  return (
    <footer className="w-full bg-[#0D1B3E] text-white h-auto md:h-[320px] flex items-center py-10 md:py-0 px-4 md:px-12 lg:px-20 font-['Roboto']">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full items-start">
        
        {/* العمود الأول: الشعار والوصف */}
        <div className="flex flex-col items-start text-left">
          <div className="mb-4 transition-transform duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="Proaktiv" 
              className="h-auto w-[160px] object-contain" 
            />
          </div>
          
          <p className="text-[12px] leading-relaxed text-gray-300 max-w-[300px] mb-6">
            Seit über [X] Jahren unterstützen wir Patienten mit Kompetenz und Einfühlungsvermögen. 
            Unsere Physiotherapeuten begleiten Sie auf Ihrem Weg.
          </p>
          
          {/* أيقونات التواصل الاجتماعي مع أكشن الهوفر */}
          <div className="flex gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "#" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="text-gray-400 hover:text-[#4DA8FF] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
              >
                <social.Icon className="h-5 w-5 cursor-pointer" />
              </a>
            ))}
          </div>
        </div>

        {/* العمود الثاني: الصفحات */}
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] font-['Amiko'] font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#4DA8FF]">
            Seiten
          </h3>
          <ul className="space-y-2">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.to} 
                  className="text-[13px] text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 ease-in-out block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: معلومات التواصل */}
        <div className="flex flex-col items-start">
          <h3 className="text-[16px] font-['Amiko'] font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#4DA8FF]">
            Kontakt
          </h3>
          <ul className="space-y-4">
            {/* رقم الهاتف العادي */}
            <li className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <Phone className="h-4 w-4 text-[#4DA8FF] group-hover:rotate-12 transition-transform" />
              <span>0202/2522648</span>
            </li>
            
            {/* واتساب - أكشن فتح المحادثة مباشرة */}
            <li>
              <a 
                href="https://wa.me/4915251856440" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group"
              >
                <div className="bg-[#25D366] p-1 rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-[15deg] transition-transform">
                  <Phone className="h-3 w-3 text-white fill-current" />
                </div>
                <span>+4915251856440</span>
              </a>
            </li>
            
            {/* البريد الإلكتروني */}
            <li className="flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <Mail className="h-4 w-4 text-[#4DA8FF] group-hover:scale-110 transition-transform" />
              <span>proactive@gmail.com</span>
            </li>
            
            {/* العنوان */}
            <li className="flex items-start gap-3 text-[13px] text-gray-400 hover:text-white transition-colors group cursor-pointer">
              <MapPin className="h-4 w-4 text-[#4DA8FF] mt-0.5 group-hover:bounce transition-transform" />
              <div className="flex flex-col leading-tight">
                <span>Westkotter Str.</span>
                <span>17342277 Wuppertal</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;