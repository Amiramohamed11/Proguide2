import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
import motor from '../assets/motor1-img.jpg'
import motor2 from '../assets/motor2.jpg'
import motor3 from '../assets/motor3.png'
import motor4 from '../assets/motor4.png'
import motor5 from '../assets/motor5.png'
import motor6 from '../assets/motor6.png'
import motor7 from '../assets/motor7.png'
import motor8 from '../assets/motor8.png'
import motor9 from '../assets/motor9.png'

const localImages = [motor, motor2, motor3, motor4, motor5, motor6, motor7, motor8, motor9];

import { api, Service as ApiService } from '../lib/api';

const Services = () => {
  const [services, setServices] = React.useState<ApiService[]>([]);
  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const response = await api.getServices();
  //       setServices(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch services", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchServices();
  // }, []);
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

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-navy mb-4 uppercase tracking-wider">
Kontaktieren Sie uns            </h2>
          <div className="w-20 h-1 bg-sky mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Unser Team vereint junge Talente und erfahrene Spezialisten für Ihre beste Behandlung.
          </p>
        </div>

        <div className="space-y-16">
          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3].map((skeleton) => (
                <div key={skeleton} className="animate-pulse flex flex-col lg:flex-row gap-8 rounded-3xl overflow-hidden shadow-xl bg-slate-50 border border-slate-100 p-4">
                  <div className="w-full lg:w-1/2 h-80 bg-slate-200 rounded-2xl"></div>
                  <div className="w-full lg:w-1/2 py-8 px-4 flex flex-col">
                    <div className="h-4 bg-slate-200 w-32 mb-4 rounded"></div>
                    <div className="h-8 bg-slate-200 w-3/4 mb-6 rounded"></div>
                    <div className="space-y-3 mb-8">
                      <div className="h-4 bg-slate-200 w-full rounded"></div>
                      <div className="h-4 bg-slate-200 w-5/6 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={cn(
                  "flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden shadow-xl shadow-navy/5 bg-light-sky border border-navy/5",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="w-full lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                  <img 
                    src={service.image || localImages[index % localImages.length]} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                  <span className="text-sky font-bold text-sm uppercase tracking-widest mb-2">Physiotherapie</span>
                  <h4 className="text-3xl font-bold text-navy mb-6">{service.title}</h4>
                  <p className="text-slate-600 mb-8 text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="mt-1 bg-sky/10 rounded-full p-1">
                          <Check size={14} className="text-sky" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-sky transition-all self-start shadow-lg shadow-navy/20">
                    {service.button_text}
                  </button>
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
