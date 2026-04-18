import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, HeroSettings } from '../lib/api';
import { mockHeroSettings } from '../data/mockData';

const Hero = () => {
  const [settings, setSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await api.getSettings();
        setSettings(data);
      } catch {
        const fallback = mockHeroSettings as { data?: HeroSettings };
        setSettings(fallback.data ?? (mockHeroSettings as unknown as HeroSettings));
      } finally {
        setLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-navy text-white">
        Laden…
      </div>
    );
  }
  if (!settings) return null;

  return (
   <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-cover bg-center px-4 text-center"
      style={{ backgroundImage: `url(${settings.hero.background_image || '/default-bg.jpg'})` }}
    >
      {/* التعديل هنا: استخدام لون مخصص مع شفافية أعلى */}
      <div className="absolute inset-0 bg-[#0a1d3a]/85" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h1 className="mb-6 font-hero-title text-[46px] font-bold leading-[1.15] tracking-[0.01em] text-white md:text-[58px] lg:text-[64px]">
          {settings.hero.title}
        </h1>

        <p className="mx-auto mb-10 max-w-4xl font-hero-subtitle text-base font-normal leading-relaxed text-white/90 md:text-[22px]">
          {settings.hero.subtitle}
        </p>

<Link
  to="/contact"
  className="inline-block rounded-lg bg-gradient-to-r from-[#4396f9] to-[#28daf9] px-9 py-3 font-hero-subtitle text-sm font-semibold text-navy shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
>
  {settings.hero.button_text}
</Link>
      </div>
    </section>
  );
};

export default Hero;
