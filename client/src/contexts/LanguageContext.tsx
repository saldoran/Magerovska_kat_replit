import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Перманентный макияж, который выглядит естественно — как вы',
    'hero.subtitle': 'Брови, губы, межресничка + 20% скидка на первый визит',
    'hero.cta': 'Записаться на консультацию',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Портфолио работ',
    'portfolio.subtitle': 'Реальные результаты наших клиенток',
    'portfolio.instagram': 'Больше работ в Instagram',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Профессиональный перманентный макияж с гарантией качества',
    
    // Footer
    'footer.address': 'Адрес',
    'footer.phone': 'Телефон',
    'footer.email': 'Email',
    'footer.social': 'Социальные сети',
    'footer.copyright': '© 2023 Magerovska Permanent. Все права защищены.',
  },
  pl: {
    // Navigation
    'nav.services': 'Usługi',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Cennik',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Makijaż permanentny, który wygląda naturalnie — jak Ty',
    'hero.subtitle': 'Brwi, usta, kreska + 20% zniżki na pierwszą wizytę',
    'hero.cta': 'Umów konsultację',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Portfolio prac',
    'portfolio.subtitle': 'Prawdziwe rezultaty naszych klientek',
    'portfolio.instagram': 'Więcej prac na Instagram',
    
    // Services
    'services.title': 'Nasze usługi',
    'services.subtitle': 'Profesjonalny makijaż permanentny z gwarancją jakości',
    
    // Footer
    'footer.address': 'Adres',
    'footer.phone': 'Telefon',
    'footer.email': 'Email',
    'footer.social': 'Media społecznościowe',
    'footer.copyright': '© 2023 Magerovska Permanent. Wszystkie prawa zastrzeżone.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Permanent makeup that looks natural — like you',
    'hero.subtitle': 'Eyebrows, lips, eyeliner + 20% off first visit',
    'hero.cta': 'Book consultation',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Portfolio of works',
    'portfolio.subtitle': 'Real results of our clients',
    'portfolio.instagram': 'More works on Instagram',
    
    // Services
    'services.title': 'Our services',
    'services.subtitle': 'Professional permanent makeup with quality guarantee',
    
    // Footer
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.social': 'Social media',
    'footer.copyright': '© 2023 Magerovska Permanent. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}