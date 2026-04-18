
import axios from 'axios';
import { mockHeroSettings, mockServices, mockTestimonials, mockGallery, mockFaq } from '../data/mockData';

const API_BASE_URL = 'https://proaktivphysio.de/api/v1';

// ================= TYPES =================
export interface HeroSettings {
  hero: {
    title: string;
    subtitle: string;
    button_text: string;
    button_url: string;
    background_image: string | null;
  };
  home_visit: {
    title: string;
    description: string;
    button_text: string;
    button_url: string;
    image: string | null;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string | null;
  features: string[];
  button_text: string;
  button_url?: string | null;
  order?: number;
}

export interface Testimonial {
  id: number;
  patient_name: string;
  content: string;
  image: string | null;
  rating: number;
}

export interface GalleryItem {
  id: number;
  image: string | null;
  caption: string;
  order: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  order: number;
}

export interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  rating: number;
  order: number;
}

export interface TeamMember {
  id: number;
  name: string;
  image: string | null;
  description: string;
}

// ================= API FUNCTIONS =================
export const getSettings = async (): Promise<HeroSettings> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/settings`);
    return response.data.data || response.data;
  } catch (error) {
    console.error("API Error - Settings:", error);
    return mockHeroSettings.data;
  }
};

export const getServices = async (): Promise<Service[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/services`);
    const data = response.data.data || response.data;

    return Array.isArray(data) ? data : (data.services || []);
  } catch (error) {
    console.error("API Error - Services:", error);
    return mockServices.data;
  }
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`);
    const data = response.data.data || response.data;

    return Array.isArray(data) ? data : (data.testimonials || []);
  } catch (error) {
    console.error("API Error - Testimonials:", error);
    return mockTestimonials.data;
  }
};

export const getGallery = async (): Promise<GalleryItem[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/gallery`);
    const data = response.data.data || response.data;

    return Array.isArray(data) ? data : (data.gallery || []);
  } catch (error) {
    console.error("API Error - Gallery:", error);
    return mockGallery.data;
  }
};

export const getFaq = async (): Promise<FAQItem[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/faq`);
    const data = response.data.data || response.data;

    return Array.isArray(data) ? data : (data.faq || []);
  } catch (error) {
    console.error("API Error - FAQ:", error);
    return mockFaq.data;
  }
};

export const getReviews = async (): Promise<Review[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Reviews`);
    const data = response.data.data || response.data;

    return Array.isArray(data) ? data : (data.reviews || []);
  } catch (error) {
    console.error("API Error - Reviews:", error);
    return [];
  }
};

export const getTeam = async (): Promise<TeamMember[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team`); // تأكد من المسار الصحيح من الـ Backend
    const data = response.data.data || response.data;
    return Array.isArray(data) ? data : (data.team || []);
  } catch (error) {
    console.error("API Error - Team:", error);
    return []; // أو أعد بيانات تجريبية (Mock Data)
  }
};


export const submitContactForm = async (formData: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  try {
const response = await axios.post(`${API_BASE_URL}/contact/submit`, formData);
    return response.data;
  } catch (error) {
    console.error("API Error - Contact Form:", error);
    throw error;
  }
};

// ================= API OBJECT =================
export const api = {
  getSettings,
  getServices,
  getTestimonials,
  getGallery,
  getFaq,
 getReviews,
  submitContactForm,
  getTeam
};