import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { api, Testimonial } from '../lib/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.getTestimonials();
        
        /**
         * حل مشكلة Property 'data' does not exist:
         * نقوم بفحص ما إذا كانت الاستجابة مصفوفة مباشرة أو تحتوي على حقل data
         */
        const data = Array.isArray(response) ? response : (response as any).data;
        
        if (data) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // تحريك السلايدر تلقائياً كل 5 ثوانٍ
  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-[#53b9ff] via-[#48afff] to-[#5ec1ff] flex justify-center items-center min-h-[500px]">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-8 bg-white/20 rounded w-64"></div>
          <div className="h-20 bg-white/20 rounded w-96"></div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-[#53b9ff] via-[#48afff] to-[#5ec1ff] text-white overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Das sagen unsere Patienten
        </h2>

        {/* حاوية السلايدر المتحرك */}
        <div className="relative w-full h-[350px] md:h-[280px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center"
            >
              {/* نص المراجعة */}
              <blockquote className="text-lg md:text-2xl font-light italic leading-relaxed max-w-3xl mb-10 opacity-95">
                „{current.content}“
              </blockquote>

              {/* البروفايل: الصورة والاسم والنجوم */}
              <div className="flex flex-col items-center">
                <img
                  src={current.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"}
                  alt={current.patient_name}
                  className="w-16 h-16 rounded-full border-4 border-white/20 object-cover shadow-2xl mb-4"
                />
                
                <cite className="not-italic font-semibold text-lg tracking-wider">
                  {current.patient_name}
                </cite>

                {/* النجوم مع المسافة المطلوبة mt-6 */}
                <div className="flex items-center gap-1.5 mt-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'
                      }`}
                    />
                  ))}
                </div>
                
                {/* الخط السفلي الجمالي */}
                <div className="w-12 h-0.5 bg-white/40 mt-4 rounded-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* نقاط التنقل (Dots) */}
        <div className="flex gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full h-1.5 ${
                index === currentIndex 
                ? "w-10 bg-slate-900" 
                : "w-4 bg-slate-900/20 hover:bg-slate-900/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;