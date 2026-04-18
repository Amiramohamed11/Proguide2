import React from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function Impressum() {
  return (
    <div className="bg-white font-sans">
      <PageHero title="Impressum" />
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-center text-slate-500">
          Angaben gemäß § 5 TMG folgen hier. Bei Rückfragen nutzen Sie bitte die Kontaktdaten im
          Footer oder das Formular unten.
        </p>
      </section>
      <ContactForm />
    </div>
  );
}
