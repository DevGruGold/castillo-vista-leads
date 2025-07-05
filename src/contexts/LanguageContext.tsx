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

    // Property Gallery
    propertyGalleryTitle: "The Property",
    propertyGallerySubtitle: "Explore this exceptional 4-unit property featuring breathtaking views, modern amenities, and a prime location in El Castillo",
    propertyDetailsTitle: "Property Details",
    propertyFeaturesTitle: "Key Features",
    price: "Price:",
    units: "Units:",
    propertyType: "Property Type:",
    status: "Status:",
    unitsValue: "4 Independent Rental Suites",
    propertyTypeValue: "Commercial Rental Investment",
    statusValue: "Turnkey Operation",

    // Location Section
    locationTitle: "The Location: Paradise in El Castillo",
    locationSubtitle: "El Castillo is a tranquil village known for its authentic Costa Rican charm and magnificent sunset and lakeviews, offering a peaceful alternative to nearby La Fortuna while providing easy access to world-class attractions.",
    bridgeTitle: "🌉 Game-Changing Infrastructure Development",
    bridgeSubtitle: "A new bridge is being built near El Castillo that will create a faster route from La Fortuna to Monteverde and the Pacific beaches!",
    bridgeDescription: "This will dramatically increase tourist traffic through the area, making properties here even more valuable and profitable for vacation rentals.",
    attractionsTitle: "Nearby Attractions That Draw Tourists Year-Round",
    locationBenefitsTitle: "Why El Castillo is Perfect for Vacation Rentals",
    authenticExperience: "Authentic Experience",
    authenticDescription: "Less crowded than La Fortuna, offering guests a more authentic Costa Rican experience",
    strategicLocation: "Strategic Location",
    strategicDescription: "With the new bridge, El Castillo will become a key transit point for tourists heading to Monteverde and beaches",
    picturePerfect: "Picture Perfect",
    pictureDescription: "Unobstructed sunset and lakeviews that guests travel from around the world to see",

    // Investment Opportunity
    investmentTitle: "A Smart Investment in",
    investmentTitleHighlight: "Paradise",
    investmentSubtitle: "Costa Rica's tourism market is booming, and this versatile property positions you perfectly to capitalize on growing opportunities - whether for vacation rentals, private residence, or commercial ventures.",
    whyInvestmentTitle: "Why This Investment Makes Sense",
    flexibleIncome: "Flexible Income Potential",
    flexibleIncomeDesc: "4 units ready for vacation rental operation, or convert to private residence, restaurant, or any business venture",
    infrastructureBoom: "Infrastructure Boom Coming",
    infrastructureBoomDesc: "New bridge will make El Castillo a key transit hub, dramatically increasing tourist traffic and property values",
    readyForVision: "Ready for Any Vision",
    readyForVisionDesc: "Blank slate property prepared for vacation rentals, private home, restaurant, or any business concept",
    perfectTiming: "Perfect Timing",
    perfectTimingDesc: "Get in before the bridge opens and property values surge with increased accessibility",
    investmentHighlights: "Investment Highlights",
    totalInvestment: "Total Investment",
    flexibleUsePotential: "Flexible Use Potential",
    futureValueMultiplier: "Future Value Multiplier",
    discussPotential: "💬 Discuss Potential",
    premiumLocation: "Premium Location",
    premiumLocationDesc: "Prime positioning with unmatched sunset and lakeviews perfect for any residential or commercial venture",
    explosiveGrowth: "Explosive Growth Potential",
    explosiveGrowthDesc: "Bridge construction will transform this area into a major tourist corridor",
    lifestyleInvestment: "Lifestyle Investment",
    lifestyleInvestmentDesc: "Own a piece of paradise with the flexibility to create your dream home, business, or investment property",

    // Contact Section
    contactTitle: "Contact Michael Copeland to Learn More",
    contactSubtitle: "Ready to take the next step? Get in touch to schedule a viewing or ask any questions about this exceptional investment opportunity.",
    fastestResponse: "Fastest Response via WhatsApp",
    whatsappDescription: "Get instant answers to your questions and schedule a property viewing directly with Michael.",
    clickToChat: "💬 Click Here to Chat on WhatsApp",
    messagePrefilled: "Message will be pre-filled with your inquiry details",
    sendEmail: "Or Send an Email",
    yourName: "Your Name",
    emailAddress: "Email Address",
    message: "Message",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "Enter your email address",
    messagePlaceholder: "Tell us about your interest in the property...",
    sendMessage: "Send Message",
    propertyOwner: "Property Owner & Investment Specialist",
    
    // ROI Calculator
    investmentCalculator: "💰 Investment Calculator",
    occupancyRate: "Occupancy Rate (%)",
    avgNightlyRate: "Avg Nightly Rate ($)",
    annualIncome: "Annual Income",
    roi: "ROI",
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

    // Property Gallery
    propertyGalleryTitle: "La Propiedad",
    propertyGallerySubtitle: "Explora esta excepcional propiedad de 4 unidades con vistas impresionantes, comodidades modernas y una ubicación privilegiada en El Castillo",
    propertyDetailsTitle: "Detalles de la Propiedad",
    propertyFeaturesTitle: "Características Principales",
    price: "Precio:",
    units: "Unidades:",
    propertyType: "Tipo de Propiedad:",
    status: "Estado:",
    unitsValue: "4 Suites de Alquiler Independientes",
    propertyTypeValue: "Inversión de Alquiler Comercial",
    statusValue: "Operación Lista para Usar",

    // Location Section
    locationTitle: "La Ubicación: Paraíso en El Castillo",
    locationSubtitle: "El Castillo es un pueblo tranquilo conocido por su auténtico encanto costarricense y magníficas vistas de atardecer y lago, ofreciendo una alternativa pacífica a la cercana La Fortuna mientras proporciona fácil acceso a atracciones de clase mundial.",
    bridgeTitle: "🌉 Desarrollo de Infraestructura que Cambia el Juego",
    bridgeSubtitle: "¡Se está construyendo un nuevo puente cerca de El Castillo que creará una ruta más rápida de La Fortuna a Monteverde y las playas del Pacífico!",
    bridgeDescription: "Esto aumentará dramáticamente el tráfico turístico en el área, haciendo que las propiedades aquí sean aún más valiosas y rentables para alquileres vacacionales.",
    attractionsTitle: "Atracciones Cercanas que Atraen Turistas Todo el Año",
    locationBenefitsTitle: "Por Qué El Castillo es Perfecto para Alquileres Vacacionales",
    authenticExperience: "Experiencia Auténtica",
    authenticDescription: "Menos concurrido que La Fortuna, ofreciendo a los huéspedes una experiencia costarricense más auténtica",
    strategicLocation: "Ubicación Estratégica",
    strategicDescription: "Con el nuevo puente, El Castillo se convertirá en un punto de tránsito clave para turistas que se dirigen a Monteverde y las playas",
    picturePerfect: "Perfecta para Fotos",
    pictureDescription: "Vistas despejadas de atardecer y lago por las que los huéspedes viajan desde todo el mundo",

    // Investment Opportunity
    investmentTitle: "Una Inversión Inteligente en el",
    investmentTitleHighlight: "Paraíso",
    investmentSubtitle: "El mercado turístico de Costa Rica está en auge, y esta propiedad versátil te posiciona perfectamente para capitalizar las oportunidades crecientes - ya sea para alquileres vacacionales, residencia privada o empresas comerciales.",
    whyInvestmentTitle: "Por Qué Esta Inversión Tiene Sentido",
    flexibleIncome: "Potencial de Ingresos Flexibles",
    flexibleIncomeDesc: "4 unidades listas para operación de alquiler vacacional, o convertir a residencia privada, restaurante o cualquier empresa comercial",
    infrastructureBoom: "Boom de Infraestructura Próximo",
    infrastructureBoomDesc: "El nuevo puente hará de El Castillo un centro de tránsito clave, aumentando dramáticamente el tráfico turístico y los valores de propiedades",
    readyForVision: "Lista Para Cualquier Visión",
    readyForVisionDesc: "Propiedad en blanco preparada para alquileres vacacionales, casa privada, restaurante o cualquier concepto de negocio",
    perfectTiming: "Momento Perfecto",
    perfectTimingDesc: "Entra antes de que abra el puente y los valores de propiedades aumenten con mayor accesibilidad",
    investmentHighlights: "Aspectos Destacados de la Inversión",
    totalInvestment: "Inversión Total",
    flexibleUsePotential: "Potencial de Uso Flexible",
    futureValueMultiplier: "Multiplicador de Valor Futuro",
    discussPotential: "💬 Discutir Potencial",
    premiumLocation: "Ubicación Premium",
    premiumLocationDesc: "Posicionamiento privilegiado con vistas inigualables de atardecer y lago perfectas para cualquier empresa residencial o comercial",
    explosiveGrowth: "Potencial de Crecimiento Explosivo",
    explosiveGrowthDesc: "La construcción del puente transformará esta área en un corredor turístico principal",
    lifestyleInvestment: "Inversión de Estilo de Vida",
    lifestyleInvestmentDesc: "Posee un pedazo de paraíso con la flexibilidad de crear la casa de tus sueños, negocio o propiedad de inversión",

    // Contact Section
    contactTitle: "Contacta a Michael Copeland para Saber Más",
    contactSubtitle: "¿Listo para dar el siguiente paso? Ponte en contacto para programar una visita o hacer cualquier pregunta sobre esta excepcional oportunidad de inversión.",
    fastestResponse: "Respuesta Más Rápida por WhatsApp",
    whatsappDescription: "Obtén respuestas instantáneas a tus preguntas y programa una visita a la propiedad directamente con Michael.",
    clickToChat: "💬 Haz Clic Aquí para Chatear en WhatsApp",
    messagePrefilled: "El mensaje será pre-llenado con los detalles de tu consulta",
    sendEmail: "O Envía un Correo Electrónico",
    yourName: "Tu Nombre",
    emailAddress: "Dirección de Correo Electrónico",
    message: "Mensaje",
    namePlaceholder: "Ingresa tu nombre completo",
    emailPlaceholder: "Ingresa tu dirección de correo electrónico",
    messagePlaceholder: "Cuéntanos sobre tu interés en la propiedad...",
    sendMessage: "Enviar Mensaje",
    propertyOwner: "Propietario e Especialista en Inversiones",
    
    // ROI Calculator
    investmentCalculator: "💰 Calculadora de Inversión",
    occupancyRate: "Tasa de Ocupación (%)",
    avgNightlyRate: "Tarifa Promedio por Noche ($)",
    annualIncome: "Ingresos Anuales",
    roi: "ROI",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detect user's language from browser with proper type checking
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = window.navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        setLanguage('es');
      }
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
