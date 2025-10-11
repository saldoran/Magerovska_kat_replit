import { useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { getHrefLang, getLocalizedPath, getLocalizedUrl, stripLocaleFromPath } from '@/utils/languagePaths';

type ServiceLabelKey = 'duration' | 'healing' | 'lasting';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Array<Record<string, any>>;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
  structuredData,
}: SEOProps) {
  const { t, language } = useLanguage();

  const seoTitle = title || t('site.title');
  const seoDescription = description || t('hero.slogan');
  const seoKeywords = keywords || getSEOKeywords(language);
  const siteName = 'Magerovska Permanent';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://magerovska.com';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const canonical = canonicalUrl || `${baseUrl}${pathname}`;
  const structuredDataSignature = JSON.stringify(structuredData ?? []);

  useEffect(() => {
    document.title = seoTitle;
    document.documentElement.lang = language;

    updateMetaTag('name', 'description', seoDescription);
    updateMetaTag('name', 'keywords', seoKeywords);
    
    updateMetaTag('property', 'og:title', seoTitle);
    updateMetaTag('property', 'og:description', seoDescription);
    updateMetaTag('property', 'og:image', `${baseUrl}${ogImage}`);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:locale', getOGLocale(language));
    
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seoTitle);
    updateMetaTag('name', 'twitter:description', seoDescription);
    updateMetaTag('name', 'twitter:image', `${baseUrl}${ogImage}`);

    updateLinkTag('canonical', canonical);

    updateAlternateLinks(language, baseUrl, pathname);

    updateStructuredData(language, seoDescription, baseUrl, structuredData ?? []);
  }, [seoTitle, seoDescription, seoKeywords, ogImage, canonical, language, siteName, baseUrl, pathname, structuredDataSignature]);

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

function updateAlternateLinks(_currentLang: Language, baseUrl: string, pathname: string) {
  const languages: Language[] = ['ru', 'pl', 'en', 'uk'];
  const normalizedPath = stripLocaleFromPath(pathname);

  // Remove legacy hreflang entries that may remain from previous deployments
  document.querySelectorAll('link[rel="alternate"][hreflang="uk"]').forEach((node) => node.remove());

  languages.forEach((lang) => {
    const hreflang = getHrefLang(lang);
    const localizedPath = getLocalizedPath(lang, normalizedPath);
    let element = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'alternate');
      element.setAttribute('hreflang', hreflang);
      document.head.appendChild(element);
    }

    const href = `${baseUrl}${localizedPath === '/' ? '/' : localizedPath}`;
    element.setAttribute('href', href);
  });

  let xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement;
  if (!xDefault) {
    xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(xDefault);
  }

  const defaultHref = `${baseUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
  xDefault.setAttribute('href', defaultHref);
}

function updateStructuredData(
  language: Language,
  description: string,
  baseUrl: string,
  additionalData: Array<Record<string, any>>,
) {
  const localBusiness = createLocalBusinessData(language, description, baseUrl);
  const combinedData = [localBusiness, ...additionalData];

  let scriptTag = document.querySelector('script[data-structured-data="primary"]');

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.setAttribute('data-structured-data', 'primary');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(combinedData.length === 1 ? combinedData[0] : combinedData);
}

function createLocalBusinessData(language: Language, description: string, baseUrl: string) {
  const socialProfiles = [
    'https://instagram.com/magerovska_permanent',
    'https://wa.me/380938203764',
    'https://t.me/magerovska_permanent',
    'https://theahstudio.booksy.com',
  ];

  const businessUrl = getLocalizedUrl(language, '/', baseUrl);
  const offers = ['eyebrows', 'lips', 'eyeliner'].map((service) => {
    const servicePath = `/services/${service}`;
    const serviceUrl = getLocalizedUrl(language, servicePath, baseUrl);

    return {
      '@type': 'Offer',
      'priceCurrency': 'PLN',
      'price': getServicePrice(service),
      'availability': 'https://schema.org/InStock',
      'url': serviceUrl,
      'itemOffered': {
        '@type': 'Service',
        'name': getServiceName(language, service),
        'description': getServiceDescription(language, service),
        'serviceType': getServiceName(language, service),
        'url': serviceUrl,
        'additionalProperty': [
          {
            '@type': 'PropertyValue',
            'name': getLocalizedLabel(language, 'duration'),
            'value': getServiceDuration(language, service),
          },
          {
            '@type': 'PropertyValue',
            'name': getLocalizedLabel(language, 'healing'),
            'value': getServiceHealing(language, service),
          },
          {
            '@type': 'PropertyValue',
            'name': getLocalizedLabel(language, 'lasting'),
            'value': getServiceLasting(language, service),
          },
        ],
      },
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'LocalBusiness'],
    '@id': `${businessUrl}#magerovska-permanent`,
    'name': 'Magerovska Permanent',
    'image': `${baseUrl}/og-image.jpg`,
    'description': description,
    'url': businessUrl,
    'telephone': '+380938203764',
    'priceRange': '200-500 PLN',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Kamienna 19b, lokal L3',
      'addressLocality': 'Kraków',
      'postalCode': '30-001',
      'addressRegion': 'Małopolskie',
      'addressCountry': 'PL',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '50.074180',
      'longitude': '19.944990',
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00',
      },
    ],
    'areaServed': {
      '@type': 'City',
      'name': 'Kraków',
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+380938203764',
        'contactType': 'customer service',
        'areaServed': ['PL', 'UA'],
        'availableLanguage': ['pl', 'ru', 'uk', 'en'],
      },
    ],
    'sameAs': socialProfiles,
    'makesOffer': offers,
  };
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

function getLocalizedLabel(language: string, key: ServiceLabelKey): string {
  const labels: Record<ServiceLabelKey, Record<string, string>> = {
    duration: {
      ru: 'Длительность',
      pl: 'Czas trwania',
      en: 'Duration',
      uk: 'Тривалість',
    },
    healing: {
      ru: 'Заживление',
      pl: 'Goienie',
      en: 'Healing',
      uk: 'Загоєння',
    },
    lasting: {
      ru: 'Долговечность',
      pl: 'Trwałość',
      en: 'Longevity',
      uk: 'Тривалість ефекту',
    },
  };

  return labels[key][language] || labels[key].en;
}

function getServiceDuration(language: string, service: string): string {
  const durations: Record<string, Record<string, string>> = {
    eyebrows: {
      ru: '2-3 часа',
      pl: '2-3 godziny',
      en: '2-3 hours',
      uk: '2-3 години',
    },
    lips: {
      ru: '2-2.5 часа',
      pl: '2-2.5 godziny',
      en: '2-2.5 hours',
      uk: '2-2.5 години',
    },
    eyeliner: {
      ru: '1.5-2 часа',
      pl: '1.5-2 godziny',
      en: '1.5-2 hours',
      uk: '1.5-2 години',
    },
  };

  return durations[service]?.[language] || durations[service]?.en || '';
}

function getServiceHealing(language: string, service: string): string {
  const healing: Record<string, Record<string, string>> = {
    eyebrows: {
      ru: '7-14 дней',
      pl: '7-14 dni',
      en: '7-14 days',
      uk: '7-14 днів',
    },
    lips: {
      ru: '5-7 дней',
      pl: '5-7 dni',
      en: '5-7 days',
      uk: '5-7 днів',
    },
    eyeliner: {
      ru: '3-5 дней',
      pl: '3-5 dni',
      en: '3-5 days',
      uk: '3-5 днів',
    },
  };

  return healing[service]?.[language] || healing[service]?.en || '';
}

function getServiceLasting(language: string, service: string): string {
  const lasting: Record<string, Record<string, string>> = {
    eyebrows: {
      ru: '1-2 года',
      pl: '1-2 lata',
      en: '1-2 years',
      uk: '1-2 роки',
    },
    lips: {
      ru: '1-1.5 года',
      pl: '1-1.5 roku',
      en: '1-1.5 years',
      uk: '1-1.5 року',
    },
    eyeliner: {
      ru: '2-3 года',
      pl: '2-3 lata',
      en: '2-3 years',
      uk: '2-3 роки',
    },
  };

  return lasting[service]?.[language] || lasting[service]?.en || '';
}

function getServicePrice(service: string): string {
  const prices: Record<string, string> = {
    eyebrows: '450',
    lips: '450',
    eyeliner: '350',
  };

  return prices[service] || '0';
}
