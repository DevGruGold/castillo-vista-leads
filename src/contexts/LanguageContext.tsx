
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero section
    heroTitle: "Own a Versatile 4-Unit Property in Costa Rican Paradise",
    heroSubtitle: "A flexible property with spectacular sunset and lakeview - perfect for vacation rentals, private residence, or commercial use",
    heroPrice: "Asking Price: $499,000 USD",
    heroButton: "💬 Inquire on WhatsApp",
    
    // Key Features
    keyFeaturesTitle: "Why This Property?",
    keyFeaturesSubtitle: "A rare opportunity to own a profitable vacation rental business in paradise",
    feature1Title: "4 Flexible Units",
    feature1Description: "Versatile property ready for vacation rentals, private residence, restaurant, or any vision you have",
    feature2Title: "Spectacular Sunset & Lakeview",
    feature2Description: "Breathtaking views of stunning sunsets over Lake Arenal",
    feature3Title: "Ready for Your Vision",
    feature3Description: "Blank slate property prepared for whatever use you envision",
    feature4Title: "Strategic Future Location",
    feature4Description: "New bridge will create faster route to Monteverde & beaches, increasing tourist traffic",
  },
  es: {
    // Hero section
    heroTitle: "Posee una Propiedad Versátil de 4 Unidades en el Paraíso Costarricense",
    heroSubtitle: "Una propiedad flexible con espectaculares vistas de atardecer y lago - perfecta para alquileres vacacionales, residencia privada o uso comercial",
    heroPrice: "Precio de Venta: $499,000 USD",
    heroButton: "💬 Consultar por WhatsApp",
    
    // Key Features
    keyFeaturesTitle: "¿Por Qué Esta Propiedad?",
    keyFeaturesSubtitle: "Una oportunidad única de poseer un negocio rentable de alquiler vacacional en el paraíso",
    feature1Title: "4 Unidades Flexibles",
    feature1Description: "Propiedad versátil lista para alquileres vacacionales, residencia privada, restaurante o cualquier visión que tengas",
    feature2Title: "Espectaculares Vistas de Atardecer y Lago",
    feature2Description: "Vistas impresionantes de atardeceres sobre el Lago Arenal",
    feature3Title: "Lista Para Tu Visión",
    feature3Description: "Propiedad en blanco preparada para cualquier uso que imagines",
    feature4Title: "Ubicación Estratégica Futura",
    feature4Description: "Un nuevo puente creará una ruta más rápida a Monteverde y las playas, aumentando el tráfico turístico",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect user's language from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLanguage('es');
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
