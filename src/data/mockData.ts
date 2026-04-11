export const mockHeroSettings = {
  data: {
    hero: {
      title: "Physiotherapie mit Herz und Kompetenz",
      subtitle: "Bei uns stehen Sie im Mittelpunkt. Mit individueller Betreuung und modernen, ganzheitlichen Therapien begleiten wir Sie zu mehr Beweglichkeit und besserer Lebensqualität.",
      button_text: "Kontaktieren Sie uns!",
      button_url: "/contact",
      background_image: null
    },
    home_visit: {
      title: "Wir sind für Sie da – zu Hause oder in unserer Praxis",
      description: "Ob bei Ihnen zu Hause oder in einer Pflegeeinrichtung: Wir bieten auch Hausbesuche an und kommen dorthin, wo Sie unsere Unterstützung benötigen.",
      button_text: "Kontaktieren Sie uns",
      button_url: "/contact",
      image: null
    }
  }
};

export const mockServices = {
  data: [
    {
      id: 1,
      title: "Krankengymnastik",
      description: "Individuelle Therapie zur Verbesserung von Kraft, Ausdauer und Beweglichkeit.",
      features: ["Nach Operationen", "Muskuläre Defizite", "Bewegungseinschränkungen", "Rückenbeschwerden (z. B. Bandscheibenvorfall)"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 1
    },
    {
      id: 2,
      title: "CMD Behandlung (Kiefergelenkstherapie)",
      description: "Spezialisierte Therapie bei Beschwerden im Kiefer- und Kopfbereich.",
      features: ["Zähneknirschen (Bruxismus)", "Kiefergelenkknacken", "Verspannungen im Kiefer-, Nacken- und Schulterbereich", "Kieferfehlstellungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 2
    },
    {
      id: 3,
      title: "Manuelle Therapie",
      description: "Spezielle Techniken zur Behandlung von Gelenk- und Funktionsstörungen.",
      features: ["Wirbelsäulenbeschwerden", "Gelenkblockaden", "Funktionsstörungen des Bewegungsapparates", "Bewegungseinschränkungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 3
    },
    {
      id: 4,
      title: "Manuelle Lymphdrainage",
      description: "Sanfte Therapie zur Förderung des Lymphflusses und zur Schwellungsreduktion.",
      features: ["Lymphödem (primär / sekundär)", "Lipödem / Lipo-Lymphödem", "Postoperative oder posttraumatische Ödeme", "Phlebo-lymphatische Ödeme"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 4
    },
    {
      id: 5,
      title: "Gerätegestütztes Training",
      description: "Medizinisches Training zur Stärkung und Verbesserung der Ausdauer.",
      features: ["Nach Operationen", "Chronische Rücken- oder Gelenkbeschwerden", "Haltungsschwächen und muskuläre Dysbalancen", "Sturzprophylaxe im Alter"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 5
    },
    {
      id: 6,
      title: "Wärmeanwendung / Fango",
      description: "Tiefenwirksame Wärme zur Entspannung der Muskulatur und Schmerzlinderung.",
      features: ["Muskelverspannungen", "Chronische Gelenkbeschwerden", "Rückenschmerzen", "Vorbereitung auf physiotherapeutische Behandlungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 6
    },
    {
      id: 7,
      title: "Faszientherapie",
      description: "Bindegewebebehandlung zur Schmerzlinderung und besseren Beweglichkeit.",
      features: ["Chronische Schmerzen", "Bewegungseinschränkungen", "Muskuläre Dysbalancen", "Nach Sportverletzungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 7
    },
    {
      id: 8,
      title: "Kinesio-Taping",
      description: "Tapes zur Unterstützung von Muskeln und Gelenken.",
      features: ["Muskelverspannungen", "Stabilisierung nach Verletzungen", "Schwellungen und Lymphabflussstörungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 8
    },
    {
      id: 9,
      title: "Elektrotherapie",
      description: "Therapie mit elektrischen Impulsen zur Muskelstimulation und Schmerzlinderung.",
      features: ["Akute und chronische Schmerzen", "Muskelverletzungen oder Lähmungen", "Durchblutungsstörungen", "Gelenkentzündungen"],
      image: null,
      button_text: "Kontaktieren Sie uns!",
      button_url: null,
      order: 9
    }
  ]
};

export const mockTestimonials = {
  data: [
    {
      id: 1,
      patient_name: "Gerhard Schröder",
      content: "Ich habe mich vom ersten Termin an sehr gut aufgehoben gefühlt. Die Behandlung war individuell auf meine Beschwerden abgestimmt und bereits nach wenigen Sitzungen spürte ich eine deutliche Verbesserung. Das Team ist freundlich, kompetent und sehr engagiert. Absolute Empfehlung!",
      image: null,
      rating: 5,
      order: 1
    }
  ]
};

export const mockGallery = {
  data: [
    { id: 1, image: null, caption: "Therapieraum 1", order: 1 },
    { id: 2, image: null, caption: "Therapieraum 2", order: 2 },
    { id: 3, image: null, caption: "Therapieraum 3", order: 3 },
    { id: 4, image: null, caption: "Therapieraum 4", order: 4 },
    { id: 5, image: null, caption: "Therapieraum 5", order: 5 }
  ]
};

export const mockFaq = {
  data: [
    {
      id: 1,
      question: "Gibt es eine kostenlose Erstberatung?",
      answer: "Ja, wir bieten eine unverbindliche Beratung an.",
      order: 1
    }
  ]
};

export const mockContactInfo = {
  data: {
    address: "Musterstraße 1, 12345 Berlin",
    phone: "+49 30 123456789",
    email: "info@pro-activ.de",
    opening_hours: [
      { day: "Montag – Freitag", hours: "08:00 – 20:00 Uhr" },
      { day: "Samstag", hours: "09:00 – 14:00 Uhr" },
      { day: "Sonntag", hours: "Geschlossen" }
    ],
    social_links: {
      facebook: "",
      instagram: "",
      youtube: ""
    }
  }
};
