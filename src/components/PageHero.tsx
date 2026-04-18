import React from 'react';
import heroBg from '../assets/hero.jpg';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
};

export default function PageHero({ title, subtitle, image, className = '' }: PageHeroProps) {
  const src = image ?? heroBg;

  return (
    <section
      className={`relative flex min-h-[363px] items-center justify-center overflow-hidden px-4 text-center ${className}`}
    >
      {/* Background Wrapper */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="absolute inset-0 bg-[#04264D]/85 backdrop-blur-[0.5px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* العنوان بخط Asul */}
        <h1 
          className="text-5xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Asul', serif" }}
        >
          {title}
        </h1>

        {/* الوصف بخط Amiko وعلى سطر واحد */}
        {subtitle ? (
         <p 
  className="mx-auto mt-6 max-w-2xl px-4 text-lg font-medium text-white/95 md:text-xl break-words leading-relaxed"
  style={{ fontFamily: "'Amiko', sans-serif" }}
>
  {subtitle}
</p>
        ) : null}
      </div>
    </section>
  );
}