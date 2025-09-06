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
    'services.eyebrows.title': 'Брови',
    'services.eyebrows.desc': 'Натуральные брови с идеальной формой, подчеркивающей ваши черты лица.',
    'services.lips.title': 'Губы',
    'services.lips.desc': 'Естественный цвет губ с долговременным эффектом и красивым контуром.',
    'services.eyeliner.title': 'Межресничка',
    'services.eyeliner.desc': 'Деликатная межресничная татуировка для выразительного взгляда.',
    
    // Pricing
    'pricing.title': 'Цены',
    'pricing.subtitle': 'Прозрачные цены без скрытых доплат',
    'pricing.eyebrows': 'Брови',
    'pricing.lips': 'Губы',
    'pricing.eyeliner': 'Межресничка',
    'pricing.currency': 'злотых',
    'pricing.note': 'Цены включают первичную процедуру и коррекцию через 4-6 недель',
    
    // Contact
    'contact.title': 'Записаться на консультацию',
    'contact.subtitle': 'Оставьте заявку, и мы свяжемся с вами в течение 24 часов',
    'contact.form.name': 'Имя',
    'contact.form.phone': 'Телефон',
    'contact.form.service': 'Выберите услугу',
    'contact.form.service.eyebrows': 'Брови',
    'contact.form.service.lips': 'Губы', 
    'contact.form.service.eyeliner': 'Межресничка',
    'contact.form.message': 'Сообщение (необязательно)',
    'contact.form.submit': 'Отправить заявку',
    'contact.success': 'Спасибо! Ваша заявка отправлена.',
    
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
    'services.eyebrows.title': 'Brwi',
    'services.eyebrows.desc': 'Naturalne brwi o idealnym kształcie, podkreślającym rysy twarzy.',
    'services.lips.title': 'Usta',
    'services.lips.desc': 'Naturalny kolor ust z długotrwałym efektem i pięknym konturem.',
    'services.eyeliner.title': 'Kreska',
    'services.eyeliner.desc': 'Delikatny tatuaż między rzęsami dla wyrazistego spojrzenia.',
    
    // Pricing
    'pricing.title': 'Cennik',
    'pricing.subtitle': 'Przejrzyste ceny bez ukrytych dopłat',
    'pricing.eyebrows': 'Brwi',
    'pricing.lips': 'Usta',
    'pricing.eyeliner': 'Kreska',
    'pricing.currency': 'złotych',
    'pricing.note': 'Ceny obejmują zabieg podstawowy i korektę po 4-6 tygodniach',
    
    // Contact
    'contact.title': 'Umów konsultację',
    'contact.subtitle': 'Zostaw zgłoszenie, a skontaktujemy się z Tobą w ciągu 24 godzin',
    'contact.form.name': 'Imię',
    'contact.form.phone': 'Telefon',
    'contact.form.service': 'Wybierz usługę',
    'contact.form.service.eyebrows': 'Brwi',
    'contact.form.service.lips': 'Usta',
    'contact.form.service.eyeliner': 'Kreska',
    'contact.form.message': 'Wiadomość (opcjonalnie)',
    'contact.form.submit': 'Wyślij zgłoszenie',
    'contact.success': 'Dziękujemy! Twoje zgłoszenie zostało wysłane.',
    
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
    'services.eyebrows.title': 'Eyebrows',
    'services.eyebrows.desc': 'Natural eyebrows with perfect shape that enhances your facial features.',
    'services.lips.title': 'Lips',
    'services.lips.desc': 'Natural lip color with long-lasting effect and beautiful contour.',
    'services.eyeliner.title': 'Eyeliner',
    'services.eyeliner.desc': 'Delicate lash line tattoo for expressive look.',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent prices with no hidden fees',
    'pricing.eyebrows': 'Eyebrows',
    'pricing.lips': 'Lips',
    'pricing.eyeliner': 'Eyeliner',
    'pricing.currency': 'PLN',
    'pricing.note': 'Prices include initial procedure and touch-up after 4-6 weeks',
    
    // Contact
    'contact.title': 'Book consultation',
    'contact.subtitle': 'Leave a request and we will contact you within 24 hours',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Choose service',
    'contact.form.service.eyebrows': 'Eyebrows',
    'contact.form.service.lips': 'Lips',
    'contact.form.service.eyeliner': 'Eyeliner',
    'contact.form.message': 'Message (optional)',
    'contact.form.submit': 'Send request',
    'contact.success': 'Thank you! Your request has been sent.',
    
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
    return (translations[language] as any)[key] || key;
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