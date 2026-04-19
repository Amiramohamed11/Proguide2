import React, { useState, useEffect } from 'react';
import { api } from '../lib/api'; // استيراد الـ api
import { Phone } from 'lucide-react'; // أو أيقونة الواتس التي تستخدمها

const WhatsAppFloat = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await api.getContactInfo();
        setPhone(data.phone); // جلب رقم الهاتف
      } catch (error) {
        console.error("Error fetching phone:", error);
      }
    };
    fetchContact();
  }, []);

  if (!phone) return null; // لا تظهر الأيقونة حتى يتم تحميل الرقم

  return (
    <a 
      href={`https://wa.me/${phone.replace(/\s/g, '')}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
    >
      <Phone className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppFloat;