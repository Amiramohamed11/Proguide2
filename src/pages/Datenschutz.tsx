import React from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function Datenschutz() {
  return (
    <div className="bg-white font-sans">
      <PageHero title="Datenschutz" />
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-center text-slate-500">
          Hier finden Sie in Kürze die vollständige Datenschutzerklärung. Bei Fragen erreichen Sie uns
          über das Kontaktformular.
        </p>
      </section>
      <ContactForm />
    </div>
  );
}
