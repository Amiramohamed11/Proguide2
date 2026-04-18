import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api, Testimonial } from '../lib/api';

const Reviews = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.getTestimonials();
        const data = Array.isArray(response) ? response : (response as any).data;
        if (data && Array.isArray(data)) {
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
      <section className="flex min-h-[550px] items-center justify-center bg-gradient-to-r from-[#4496F9] to-[#2BD4F9] py-24">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-10 bg-white/20 rounded w-64"></div>
          <div className="h-32 bg-white/20 rounded w-80"></div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    /* الخلفية بالتدرج المطلوب */
    <section className="flex min-h-[550px] items-center overflow-hidden bg-gradient-to-r from-[#4496F9] to-[#2BD4F9] py-24">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* العنوان: خط Asul، حجم 40px، وزن 700 */}
        <h2 className="mb-16 font-asul text-[40px] font-[700] text-[#02033B] tracking-tight leading-tight">
          Das sagen unsere Patienten
        </h2>

        {/* السلايدر */}
        <div className="relative w-full min-h-[220px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* البراجراف: خط Amiko، حجم 20px، وزن 400، لون #02033B */}
              <blockquote className="font-amiko text-[20px] font-[400] text-[#02033B] leading-[1.6] max-w-3xl mb-10 italic">
                „{current.content}“
              </blockquote>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={current.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100"}
                  alt={current.patient_name}
                  className="w-16 h-16 rounded-full border-4 border-white/40 object-cover shadow-lg"
                />
                <cite className="not-italic font-amiko font-bold text-lg text-[#1a2b4b]">
                  {current.patient_name}
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* نقاط التحكم المستطيلة */}
        <div className="flex gap-2.5 mt-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[4px] rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10 bg-white shadow-md'
                  : 'w-6 bg-[#02033B]/30 hover:bg-[#02033B]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;