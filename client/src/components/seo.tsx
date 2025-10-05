import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl
}: SEOProps) {
  const { t, language } = useLanguage();

  const seoTitle = title || t('site.title');
  const seoDescription = description || t('hero.slogan');
  const seoKeywords = keywords || getSEOKeywords(language);
  const siteName = 'Magerovska Permanent';
  const siteUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  useEffect(() => {
    document.title = seoTitle;
    document.documentElement.lang = language;
    
    updateMetaTag('name', 'description', seoDescription);
    updateMetaTag('name', 'keywords', seoKeywords);
    
    updateMetaTag('property', 'og:title', seoTitle);
    updateMetaTag('property', 'og:description', seoDescription);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', siteUrl);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:locale', getOGLocale(language));
    
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seoTitle);
    updateMetaTag('name', 'twitter:description', seoDescription);
    updateMetaTag('name', 'twitter:image', ogImage);
    
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
    }
    
    updateAlternateLinks(language);
    
    updateStructuredData(language, seoTitle, seoDescription);
  }, [seoTitle, seoDescription, seoKeywords, ogImage, siteUrl, language, canonicalUrl, siteName]);

  return null;
}

function updateMetaTag(attr: string, attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

function updateAlternateLinks(currentLang: string) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const languages = ['ru', 'pl', 'en', 'uk'];
  
  languages.forEach(lang => {
    const hreflang = lang === 'en' ? 'en' : lang;
    let element = document.querySelector(`link[hreflang="${hreflang}"]`) as HTMLLinkElement;
    
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'alternate');
      element.setAttribute('hreflang', hreflang);
      document.head.appendChild(element);
    }
    
    element.setAttribute('href', `${baseUrl}?lang=${lang}`);
  });
  
  let xDefault = document.querySelector('link[hreflang="x-default"]') as HTMLLinkElement;
  if (!xDefault) {
    xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(xDefault);
  }
  xDefault.setAttribute('href', baseUrl);
}

function updateStructuredData(language: string, title: string, description: string) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Magerovska Permanent",
    "image": typeof window !== 'undefined' ? `${window.location.origin}/og-image.jpg` : '',
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kraków",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0647",
      "longitude": "19.9450"
    },
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "telephone": "+48-XXX-XXX-XXX",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Kraków"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": getServiceName(language, "eyebrows"),
          "description": getServiceDescription(language, "eyebrows")
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": getServiceName(language, "lips"),
          "description": getServiceDescription(language, "lips")
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": getServiceName(language, "eyeliner"),
          "description": getServiceDescription(language, "eyeliner")
        }
      }
    ]
  };

  let scriptTag = document.querySelector('script[type="application/ld+json"]');
  
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptTag);
  }
  
  scriptTag.textContent = JSON.stringify(structuredData);
}

function getOGLocale(language: string): string {
  const locales: Record<string, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US',
    uk: 'uk_UA'
  };
  return locales[language] || 'en_US';
}

function getSEOKeywords(language: string): string {
  const keywords: Record<string, string> = {
    ru: 'перманентный макияж Краков, перманент бровей, перманент губ, микроблейдинг, татуаж, пудровые брови, lip blush, перманентный макияж цена Краков, мастер перманентного макияжа, записаться на перманент, перманент межресничка, волосковая техника, теневая растушевка, омбре брови, акварельные губы, естественный перманент, перманентный макияж Казимеж, татуаж бровей Краков, коррекция перманента, удаление татуажа, профессиональный перманент, безопасный перманент, заживление перманента, уход после перманента',
    pl: 'makijaż permanentny Kraków, brwi permanentne, usta permanentne, microblading, tatuaż, brwi pudrowe, lip blush, makijaż permanentny cena Kraków, mistrz makijażu permanentnego, umówić się na makijaż permanentny, kreska międzyrzęsowa, technika włoskowa, cieniowanie, brwi ombre, naturalny makijaż permanentny, makijaż permanentny Kazimierz, tatuaż brwi Kraków, korekta makijażu permanentnego, usuwanie tatuażu, profesjonalny makijaż permanentny, bezpieczny makijaż permanentny, gojenie makijażu permanentnego, pielęgnacja po makijażu permanentnym, makijaż permanentny opinie',
    en: 'permanent makeup Krakow, eyebrow tattoo, lip blush, microblading, powder brows, permanent cosmetics, permanent makeup price Krakow, permanent makeup artist, book permanent makeup, eyeliner tattoo, hair stroke technique, ombre brows, natural permanent makeup, permanent makeup Kazimierz, eyebrow tattoo Krakow, permanent makeup correction, tattoo removal, professional permanent makeup, safe permanent makeup, permanent makeup healing, aftercare permanent makeup, permanent makeup reviews',
    uk: 'перманентний макіяж Краків, перманент брів, перманент губ, мікроблейдінг, пудрові брови, перманентний макіяж ціна Краків, майстер перманентного макіяжу, записатися на перманент, перманент міжвійки, волоскова техніка, тіньова розтушовка, омбре брови, акварельні губи, природний перманент, татуаж брів Краків, корекція перманенту, професійний перманент, безпечний перманент, загоєння перманенту, догляд після перманенту'
  };
  return keywords[language] || keywords.en;
}

function getServiceName(language: string, service: string): string {
  const names: Record<string, Record<string, string>> = {
    eyebrows: {
      ru: 'Перманентный макияж бровей',
      pl: 'Makijaż permanentny brwi',
      en: 'Permanent Eyebrow Makeup',
      uk: 'Перманентний макіяж брів'
    },
    lips: {
      ru: 'Перманентный макияж губ',
      pl: 'Makijaż permanentny ust',
      en: 'Permanent Lip Makeup',
      uk: 'Перманентний макіяж губ'
    },
    eyeliner: {
      ru: 'Перманентная стрелка',
      pl: 'Kreska permanentna',
      en: 'Permanent Eyeliner',
      uk: 'Перманентна стрілка'
    }
  };
  return names[service]?.[language] || names[service]?.en || '';
}

function getServiceDescription(language: string, service: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    eyebrows: {
      ru: 'Профессиональный перманентный макияж бровей в Кракове',
      pl: 'Profesjonalny makijaż permanentny brwi w Krakowie',
      en: 'Professional permanent eyebrow makeup in Krakow',
      uk: 'Професійний перманентний макіяж брів у Кракові'
    },
    lips: {
      ru: 'Перманентный макияж губ с эффектом lip blush',
      pl: 'Makijaż permanentny ust z efektem lip blush',
      en: 'Permanent lip makeup with lip blush effect',
      uk: 'Перманентний макіяж губ з ефектом lip blush'
    },
    eyeliner: {
      ru: 'Перманентная межресничка и стрелки',
      pl: 'Permanentna kreska międzyrzęsowa',
      en: 'Permanent eyeliner and lash line enhancement',
      uk: 'Перманентна міжвійна та стрілки'
    }
  };
  return descriptions[service]?.[language] || descriptions[service]?.en || '';
}
