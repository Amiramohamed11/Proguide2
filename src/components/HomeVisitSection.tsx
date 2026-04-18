import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// استيراد الصورة المحلية
import doctorPatientImg from '../assets/wir.png'; 
import { api, HeroSettings } from '../lib/api';

const HomeVisitSection = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.getSettings();
        // معالجة البيانات القادمة من API
        const data = (response as any).data || response;
        setSettings(data);
      } catch (error) {
        console.error("Failed to fetch settings", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  // وظيفة الانتقال السلس (Smooth Scroll) لقسم الاتصال
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // في حال لم يكن القسم في الصفحة الحالية
      window.location.hash = 'contact';
    }
  };

  // البيانات الافتراضية مطابقة للنصوص المطلوبة تماماً
  const homeVisitData = settings?.home_visit || {
    title: "Wir sind für Sie da – zu Hause oder in unserer Praxis",
    description: "Ob bei Ihnen zu Hause أو في مؤسسة رعاية: نقدم أيضاً زيارات منزلية ونأتي إليك حيث تحتاج لدعمنا. مع رعاية شخصية وعلاج طبيعي احترافي، نحن بجانبك بشكل موثوق. لا تتردد في الاتصال بنا.",
    button_text: "Kontaktieren Sie uns!"
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* الحاوية الرئيسية بعرض 1140px لضمان التناسق مع باقي الموقع */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* الجانب الأيسر: الصورة مع حواف مستديرة shadow احترافي */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            {loading ? (
              <div className="animate-pulse bg-slate-100 rounded-[1.25rem] w-full aspect-[4/3]"></div>
            ) : (
              <div className="relative group">
                {/* تأثير خلفية بسيط لزيادة العمق */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4496F9]/10 to-[#2BD4F9]/10 rounded-[1.5rem] blur-xl group-hover:opacity-75 transition duration-500"></div>
                <img
                  src={homeVisitData.image || doctorPatientImg}
                  alt="Physiotherapy Home Visit"
                  className="relative w-full h-full object-cover aspect-[4/3] rounded-[1.25rem] shadow-lg border border-slate-50 transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            )}
          </motion.div>

          {/* الجانب الأيمن: المحتوى النصي مع أنواع الخطوط والأحجام المحددة */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            {loading ? (
              <div className="w-full space-y-5">
                <div className="h-12 bg-slate-50 rounded w-full"></div>
                <div className="h-24 bg-slate-50 rounded w-[90%]"></div>
                <div className="h-12 bg-slate-100 rounded-xl w-48"></div>
              </div>
            ) : (
              <>
                {/* العنوان: Asul | Size: 40px | Weight: 700 | Color: #1a2b4b */}
                <h2 
                  style={{ fontFamily: 'Asul, serif' }}
                  className="text-[32px] md:text-[40px] font-[700] text-[#1a2b4b] leading-[1.15] mb-6 tracking-tight"
                >
                  {homeVisitData.title}
                </h2>
                
                {/* الوصف: Amiko | Size: 18px | Weight: 400 | Color: #526071 */}
                <p 
                  style={{ fontFamily: 'Amiko, sans-serif' }}
                  className="text-[16px] md:text-[18px] font-[400] text-[#526071] leading-[1.65] mb-10"
                >
                  {homeVisitData.description}
                </p>
                
                {/* الزر بالتدرج المطلوب #4496F9 -> #2BD4F9 */}
                <button
                  onClick={handleContactClick}
                  style={{ fontFamily: 'Amiko, sans-serif' }}
                  className="bg-gradient-to-r from-[#4496F9] to-[#2BD4F9] text-white px-9 py-4 rounded-xl font-[700] text-[15px] shadow-xl shadow-blue-200/40 hover:brightness-105 transition-all active:scale-95"
                >
                  {homeVisitData.button_text}
                </button>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeVisitSection;