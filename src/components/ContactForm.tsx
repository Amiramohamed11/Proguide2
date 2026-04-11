import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contact from '../assets/contact.jpg'
import { api } from '../lib/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    try {
      const response = await api.submitContactForm(formData);
      setSuccessMessage(response.message);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 bg-[#001f3f] overflow-hidden font-sans"> 
      
      <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div> 

      <div className="absolute inset-0 opacity-15"> 
        <img src={contact} className="w-full h-full object-cover" alt="Background" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start z-10">
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Kontaktieren Sie uns</h2>
          <div className="w-20 h-1 bg-sky-500"></div>
          <p className="text-slate-300 text-lg">
            Wir sind gerne für Sie da und beantworten Ihre Fragen.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
          {successMessage ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Vielen Dank!</h3>
              <p className="text-slate-300">{successMessage}</p>
              <button 
                onClick={() => setSuccessMessage('')}
                className="mt-6 text-sky-400 hover:text-sky-300 font-medium"
              >
                Weitere Nachricht senden
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Ihr Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Telefonnummer" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
              <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="E-Mail" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none" />
              <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Ihre Mitteilung" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-sky-500 outline-none resize-none"></textarea>
              <button disabled={loading} type="submit" className="w-full bg-sky-500 hover:bg-sky-600 disabled:opacity-50 disabled:hover:bg-sky-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center">
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Senden"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;