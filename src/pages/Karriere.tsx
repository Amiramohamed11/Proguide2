import React from 'react';
import { Check, Wallet, Clock, Star, BadgePercent } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

const Karriere: React.FC = () => {
  const columnLeft = [
    'Abgeschlossene Ausbildung im Bereich Massage oder Physiotherapie',
    'Berufserfahrung ist von Vorteil, aber keine Voraussetzung.',
    'Zusatzfortbildungen wie MT, MLD (aber kein Muss)',
    'Leidenschaft für die Unterstützung von মানুষের und deren Gesundheit.',
  ];

  const columnRight = [
    'Schwerpunkt u. a. Rückenschmerzen',
    'Beschäftigung in Voll-, Teilzeit oder Minijob',
    'Teamgeist, Eigenverantwortung und Lust auf Weiterentwicklung',
  ];

  const benefits = [
    { title: 'Faire Bezahlung', icon: Wallet },
    { title: 'Flexible Arbeitszeiten', icon: Clock },
    { title: 'Ausführliche Einarbeitung', icon: Star },
    { title: 'Wechselprämie', icon: BadgePercent },
  ];

  return (
    <div className="bg-white antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Asul:wght@400;700&family=Amiko:wght@400;600;700&display=swap');
        .font-asul { font-family: 'Asul', serif; }
        .font-amiko { font-family: 'Amiko', sans-serif; }
        .bg-gradient-pro { background: linear-gradient(135deg, #4396F9 0%, #28DAF9 100%); }
      `}} />

      <PageHero title="Karriere" className="min-h-[363px]" />

      {/* --- Requirements Section --- */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-14 text-center text-4xl font-bold tracking-tight text-[#04264D] md:text-5xl font-asul">
          Wir suchen dich!
        </h2>
        
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
          {[columnLeft, columnRight].map((col, ci) => (
            <ul key={ci} className="space-y-6">
              {col.map((item, index) => (
                <li key={index} className="group flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-pro shadow-md transition-transform group-hover:scale-110">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                  </div>
                  <p className="font-amiko text-lg font-normal leading-relaxed text-[#04264D]/90">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* --- Benefits Section --- */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-[#04264D] md:text-5xl font-asul">
            Deine Benefits
          </h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="group flex flex-col items-center rounded-2xl bg-[#EBFCFE] px-6 py-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[#4396F9]/10"
              >
                {/* أيقونة بيضاء تبرز فوق الخلفية السماوية وتتحول لتدرج عند الـ Hover */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-gradient-pro">
                  <Icon 
                    className="h-8 w-8 text-[#4396F9] transition-colors duration-300 group-hover:text-white" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="font-asul text-lg font-bold text-[#04264D] leading-tight">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="scroll-mt-20">
         <ContactForm />
      </section>
    </div>
  );
};

export default Karriere;