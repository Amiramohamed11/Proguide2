import React, { useEffect, useState } from 'react';
import { api, HeroSettings } from '../lib/api';
import { mockHeroSettings } from '../data/mockData';
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await api.getSettings();
        setSettings(data);
      } catch (error) {
        // استخدام البيانات التجريبية في حال فشل الـ API
        setSettings(mockHeroSettings.data || mockHeroSettings);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center text-white bg-navy">Loading...</div>;
  if (!settings) return null;

  // رقم الواتساب الخاص بكِ (تأكدي من تعديله)
  const whatsappNumber = "2010XXXXXXXX"; 
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدمات العلاج الطبيعي.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  // وظيفة لتقسيم العنوان وتلوين كلمة "Herz" باللون السماوي
  const renderTitle = (title: string) => {
    const parts = title.split(/(Herz)/gi);
    return parts.map((part, index) => 
      part.toLowerCase() === 'herz' 
        ? <span key={index} className="text-[#3db2f2]">{part}</span> 
        : part
    );
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-center px-4" 
      style={{ backgroundImage: `url(${settings.hero.background_image || '/default-bg.jpg'})` }}
    >
      {/* طبقة التعتيم الكحلية العميقة (Navy) بنسبة 85% */}
      <div className="absolute inset-0 bg-navy/85 backdrop-blur-[0.5px]"></div>

      <div className="container relative z-10 mx-auto">
        {/* العنوان: خط Sans عريض جداً وحجم ضخم */}
        <h1 className="text-5xl md:text-[85px] font-sans font-black mb-6 max-w-6xl mx-auto leading-[1.05] tracking-tight text-white normal-case drop-shadow-2xl">
          {renderTitle(settings.hero.title)}
        </h1>

        {/* النص الوصفي: أبيض ناصع وخط متوسط الوضوح */}
        <p className="text-lg md:text-[22px] mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-white/95">
          {settings.hero.subtitle}
        </p>

        {/* الزر: بيضاوي بالكامل (Rounded-full) ولون سماوي */}
       <a 
  href="#" 
  onClick={(e) => e.preventDefault()} // هذا السطر يمنع الانتقال
  className="inline-block bg-[#29abe2] hover:bg-[#1e8dbd] text-white px-14 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 active:scale-95 cursor-default"
>
  {settings.hero.button_text}
</a>
      </div>

       <a
      href="https://wa.me/201234567890" // ضع رقمك هنا بدلاً من هذا الرقم
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
      <FaWhatsapp size={32} />
    </a>
    </section>
  );
};

export default Hero;