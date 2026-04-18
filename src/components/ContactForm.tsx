import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contact from '../assets/contact.jpg';
import { api } from '../lib/api';

/**
 * التعديل هنا ليكون للحقول بوردر كامل (Border All Sides)
 * مع زوايا مستديرة وخلفية شفافة كما في تصميم الكارت
 */
const fieldClass =
  'w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-[#4496F9] focus:bg-white/10 text-[15px] font-light';

const ContactForm = () => {
  // البيانات المطلوبة في الـ API
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    message: '' 
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ربط مع الـ API الفعلي
      const response = await api.submitContactForm(formData);
      setSuccessMessage(response.message || 'Vielen Dank! Ihre Nachricht wurde gesendet.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 scroll-mt-20 flex items-center min-h-[750px]">
      {/* طبقة الخلفية باللون الكحلي المعتمد #04264D */}
      <div className="absolute inset-0 z-0">
        <img src={contact} className="h-full w-full object-cover" alt="" />
        <div 
          className="absolute inset-0 opacity-95" 
          style={{ backgroundColor: '#04264D' }} 
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1140px] w-full flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* الجانب الأيسر: العناوين (خط Asul) */}
        <div className="flex-1 text-white">
          <h2 style={{ fontFamily: 'Asul, serif' }} className="text-[42px] md:text-[52px] font-bold leading-tight mb-4">
            Kontaktieren Sie uns
          </h2>
          <div className="h-[2px] w-16 bg-[#2BD4F9] mb-8" />
          <p style={{ fontFamily: 'Amiko, sans-serif' }} className="text-[18px] text-white/70 max-w-sm leading-relaxed">
            Wir sind gerne für Sie da und beantworten Ihre Fragen.
          </p>
        </div>

        {/* الجانب الأيمن: الكارت والبوردر الخاص بالفورم */}
        <div className="w-full lg:w-[500px] bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl backdrop-blur-sm shadow-2xl">
          <AnimatePresence mode="wait">
            {successMessage ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Gesendet!</h3>
                <p className="text-white/60 mb-6">{successMessage}</p>
                <button onClick={() => setSuccessMessage('')} className="text-[#4496F9] hover:underline">Neue Nachricht</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: 'Amiko, sans-serif' }}>
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-white/80 ml-1">Ihr Name</label>
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Geben Sie Ihren Namen ein"
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-white/80 ml-1">Telefonnummer</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefonnummer eingeben"
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-white/80 ml-1">E-Mail-Adresse</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail-Adresse eingeben"
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-white/80 ml-1">Ihre Mitteilung</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht hier eingeben..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#4496F9] text-white py-4 rounded-md font-bold text-[16px] tracking-wide transition-all hover:bg-[#2BD4F9] hover:shadow-[0_0_20px_rgba(68,150,249,0.3)] disabled:opacity-50"
                >
                  {loading ? 'Wird gesendet...' : 'Senden'}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;