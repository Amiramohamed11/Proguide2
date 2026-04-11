import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png' // تأكد من أن هذا هو مسار شعارك

const Footer = () => {
  return (
     <footer className="bg-[#121640] text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        
        {/* العمود الأول: الشعار (مكبر وبدون اسم)، النص، الأيقونات الاجتماعية */}
        <div className="space-y-6 md:col-span-1">
          <div className="pb-2"> {/* تم حذف اسم الشركة وزيادة حجم الشعار */}
            <img src={logo} alt="Proaktiv Logo" className="w-40 h-auto" /> {/* تم زيادة العرض من w-24 إلى w-40 لتكبيره */}
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed">
          Seit über [X] Jahren unterstützen wir Patienten mit Kompetenz und Einfühlungsvermögen. Unsere Physiotherapeuten begleiten Sie auf Ihrem Weg zu mehr Beweglichkeit und weniger Schmerzen.           
          </p>

          <div className="flex gap-4 pt-4">
            {/* أيقونات التواصل الاجتماعي بيضاء وتتفاعل باللون الأزرق */}
            <Facebook className="w-5 h-5 text-white hover:text-sky-500 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white hover:text-sky-500 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white hover:text-sky-500 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-white hover:text-sky-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* العمود الثاني: فراغ مطابق لتوزيع الصورة */}
        <div className="hidden md:block"></div>

        {/* العمود الثالث: قائمة "Seiten" كاملة */}
        <div>
          <h3 className="text-lg font-bold mb-8 text-white">Seiten</h3>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Unsere Leistungen</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Karriere</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Unser Team</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Kontaktieren Sie uns</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Datenschutz</li>
            <li className="hover:text-sky-500 cursor-pointer transition-colors">Impressum</li>
          </ul>
        </div>

        {/* العمود الرابع: معلومات الاتصال الدقيقة */}
        <div>
          <h3 className="text-lg font-bold mb-8 text-white">Kontakt</h3>
          <ul className="space-y-5 text-slate-300 text-sm">
            {/* رقم الهاتف الأول */}
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sky-500" /> 
              0202/2522648
            </li>

            {/* رقم واتساب المميز باللون الأخضر */}
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center p-0.5">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              +4915251856440
            </li>

            {/* البريد الإلكتروني */}
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-500" /> 
              proactive@gmail.com
            </li>

            {/* العنوان في سطرين */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" /> 
              <div className="flex flex-col gap-1">
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