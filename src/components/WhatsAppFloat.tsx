import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/** Matches footer WhatsApp; adjust in one place */
const WHATSAPP_E164 = '4915251856440';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
    'Hallo, ich habe eine Frage zu Proaktiv.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}
