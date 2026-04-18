import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { api, FAQItem } from '../lib/api'; 
import PageHero from './PageHero';
import ContactForm from './ContactForm';

const FAQ: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const data = await api.getFaq();
        if (data) {
          setFaqItems(data);
        }
      } catch (error) {
        console.error('Failed to fetch FAQ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFAQ();
  }, []);

  return (
    // تم إضافة font-asul هنا لتطبيق الخط على كامل الصفحة
    <div className="bg-white font-asul overflow-x-hidden">
      {/* قسم الهيرو العلوي */}
      <PageHero 
        title="FAQ" 
      />

      <section id="faq" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          
          {loading ? (
            /* Skeleton Loading أثناء التحميل */
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 animate-pulse rounded-xl bg-slate-50 border border-slate-100" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {faqItems.length === 0 ? (
                <div className="py-10 text-center text-slate-500 italic bg-slate-50 rounded-2xl">
                  Es gibt momentan keine FAQs.
                </div>
              ) : (
                faqItems.map((item) => (
                  <div key={item.id} className="group">
                    {/* زر السؤال */}
                    <button
                      type="button"
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-6 py-5 text-left transition-all duration-300 shadow-sm ${
                        expandedId === item.id 
                        ? 'bg-[#E3F8FF] text-[#04264D] ring-1 ring-[#53D1FB]/30' 
                        : 'bg-white border border-slate-100 text-[#04264D] hover:bg-[#F4FBFE]'
                      }`}
                    >
                      <span className="text-lg font-bold pr-4 leading-snug">
                        {item.question}
                      </span>
                      <div className={`p-1.5 rounded-full transition-all duration-300 ${
                        expandedId === item.id ? 'bg-[#04264D] rotate-180' : 'bg-slate-100'
                      }`}>
                        <ChevronDown className={`h-4 w-4 ${
                          expandedId === item.id ? 'text-white' : 'text-[#53D1FB]'
                        }`} />
                      </div>
                    </button>

                    {/* محتوى الإجابة مع أنيميشن سلس */}
                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          {/* تم تحسين تباين النص ليتناسب مع خط Asul */}
                          <div className="px-8 py-5 text-gray-700 font-normal leading-relaxed border-l-4 border-[#53D1FB] ml-4 my-2 bg-slate-50/50 rounded-r-xl">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* قسم التواصل السفلي */}
      <section className="relative overflow-hidden bg-[#04264D] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
           <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default FAQ;