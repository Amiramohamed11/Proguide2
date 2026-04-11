import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { api } from '../lib/api';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  order: number;
}

interface FAQResponse {
  data: FAQItem[];
}

const FAQ: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await api.getFaq() as unknown as FAQResponse;
        setFaqItems(response.data);
      } catch (error) {
        console.error("Failed to fetch FAQ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFAQ();
  }, []);

  return (
    <section className="py-24 bg-slate-50 px-6 font-sans">
      {/* <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Häufig gestellte Fragen
        </h2>
        <p className="text-center text-slate-600 mb-16">Finden Sie Antworten auf die häufigsten Fragen</p>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="animate-pulse bg-slate-200 rounded-lg h-16"></div>
            ))}
          </div>
        ) : 
        (
          <div className="space-y-4">
            {faqItems.length === 0 ? (
              <p className="text-center text-slate-600">Es gibt noch keine FAQs</p>
            ) : (
              faqItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors font-semibold text-slate-800"
                  >
                    {item.question}
                    <ChevronDown 
                      className={`w-5 h-5 text-sky-500 transition-transform ${
                        expandedId === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        )
        }
      </div> */}
    </section>
  );
};

export default FAQ;