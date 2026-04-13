import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
// تأكد من أن ملف الصورة الجديدة موجود في هذا المسار
import doctorPatientImg from '../assets/wir.png'; 
import { api, HeroSettings } from '../lib/api';

const HomeVisitSection = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
  try {
    const response = await api.getSettings();
    
    // الحل هنا: نستخدم (response as any) لتجاوز فحص الأنواع الصارم
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

  // بيانات افتراضية تطابق الصورة والنص تماماً في حال فشل التحميل
  const homeVisitData = settings?.home_visit || {
    title: "Wir sind für Sie da – zu Hause oder in unserer Praxis",
    description: "Ob bei Ihnen zu Hause oder in einer Pflegeeinrichtung: Wir bieten auch Hausbesuche an und kommen dorthin, wo Sie unsere Unterstützung benötigen. Mit persönlicher Betreuung und professioneller Physiotherapie stehen wir Ihnen zuverlässig zur Seite. Sprechen Sie uns gerne an.",
    button_text: "Kontaktieren Sie uns!",
    // تعيين الصورة الافتراضية لتكون الصورة الجديدة
    image: doctorPatientImg 
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* الجزء الأيسر: الصورة */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {loading ? (
            <div className="animate-pulse bg-slate-200 rounded-[2.5rem] w-full aspect-[4/3]"></div>
          ) : (
            <div className="relative">
               {/* ظل خلفي خفيف ليعطي عمق للصورة */}
              <div className="absolute -inset-4 bg-sky-50 rounded-[3rem] -z-10 transform rotate-1"></div>
              <img 
                // هنا نستخدم الصورة الجديدة مباشرة
                src ={doctorPatientImg}
                // التنسيق الدائري والظلال مطابق للسكرين شوت تماماً
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </motion.div>

        {/* الجزء الأيمن: النصوص (مطابق تماماً للسكرين شوت) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-slate-100 rounded w-full"></div>
              <div className="h-6 bg-slate-100 rounded w-5/6"></div>
              <div className="h-14 bg-slate-100 rounded-2xl w-48 mt-4"></div>
            </div>
          ) : (
            <>
              {/* العنوان بلون غامق وحجم مناسب */}
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] leading-[1.2] tracking-tight">
                {homeVisitData.title}
              </h2>
              
              {/* الوصف بلون رمادي مريح للعين */}
              <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-normal">
                {homeVisitData.description}
              </p>
              
              {/* الزر السماوي المتدرج */}
              <div className="pt-2">
                <button className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-sky-100 flex items-center gap-3 group w-fit">
                  {homeVisitData.button_text}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeVisitSection;