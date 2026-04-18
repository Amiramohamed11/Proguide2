import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { api, Service as ApiService } from '../lib/api';

// استيراد الصور المحلية
import motor from '../assets/motor1-img.jpg';
import motor2 from '../assets/motor2.jpg';
import motor3 from '../assets/motor3.png';
import motor4 from '../assets/motor4.png';
import motor5 from '../assets/motor5.png';
import motor6 from '../assets/motor6.png';
import motor7 from '../assets/motor7.png';
import motor8 from '../assets/motor8.png';
import motor9 from '../assets/motor9.png';

const localImages = [motor, motor2, motor3, motor4, motor5, motor6, motor7, motor8, motor9];

const Services = () => {
  const [services, setServices] = React.useState<ApiService[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.getServices();
        setServices(response);
      } catch (error) {
        console.error("Failed to fetch services", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // وظيفة للانتقال السلس إلى قسم الاتصال
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // إذا لم يكن القسم موجوداً في نفس الصفحة، يمكنك التوجيه لصفحة أخرى
      window.location.href = '#contact';
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[40px] font-asul font-bold text-[#1a2b4b] tracking-tight">
            Kontaktieren Sie uns
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4396f9] to-[#28daf9] mx-auto mb-6"></div>
         <p className="text-slate-600 text-lg font-amiko max-w-2xl mx-auto leading-relaxed break-words px-4">
                      Unser Team vereint junge Talente und erfahrene Spezialisten für beste Behandlung.

         </p>
         

        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8">
          {loading ? (
            <div className="flex justify-center items-center h-64 font-amiko text-navy text-xl">
              Laden...
            </div>
          ) : (
            services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[1.2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-md",
                  index % 2 === 0 ? "bg-[#f0fbff] lg:flex-row-reverse" : "bg-white"
                )}
              >
                {/* Content Section */}
                <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-[26px] font-asul font-bold text-[#1a2b4b] mb-3 leading-tight">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-500 font-amiko text-[15px] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3 text-[15px] font-amiko text-slate-700">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#4396f9] to-[#28daf9] flex items-center justify-center shadow-sm">
                          <Check size={12} className="text-white stroke-[4px]" />
                        </div>
                        <span className="font-medium text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* التعديل هنا: إضافة onClick للزر */}
                  <button 
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-[#4396f9] to-[#28daf9] text-white px-8 py-3 rounded-xl font-amiko font-bold text-[14px] shadow-lg shadow-blue-200/50 hover:brightness-105 transition-all self-start"
                  >
                    {service.button_text || "Kontaktieren Sie uns!"}
                  </button>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[45%] overflow-hidden relative min-h-[350px]">
                  <motion.img 
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={service.image || localImages[index % localImages.length]} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;