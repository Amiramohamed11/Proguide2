import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { api, Testimonial } from '../lib/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await api.getTestimonials();
        setTestimonials(response);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold mb-8">Das sagen unsere Patienten</h3>
        
        {loading ? (
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-16 bg-white/20 rounded w-full mb-10"></div>
            <div className="w-20 h-20 bg-white/20 rounded-full mb-4"></div>
            <div className="h-6 bg-white/20 rounded w-32"></div>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 last:mb-0"
            >
              <blockquote className="text-xl md:text-2xl italic mb-10 leading-relaxed">
                „{testimonial.content}“
              </blockquote>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"} 
                  alt={testimonial.patient_name} 
                  className="w-20 h-20 rounded-full border-4 border-white/20 mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="font-bold text-lg">{testimonial.patient_name}</div>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default Testimonials;
