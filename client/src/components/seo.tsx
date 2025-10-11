import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type SupportedLanguage = 'ru' | 'pl' | 'en' | 'uk';

const DEFAULT_PAGE_META: Record<string, Record<SupportedLanguage, { title: string; description: string; keywords: string }>> = {
  '/services/eyebrows': {
    ru: {
      title: 'Перманентный макияж бровей Краков | Микроблейдинг, Пудровые брови',
      description:
        'Профессиональный перманентный макияж бровей в Кракове. Волосковая техника, пудровые брови, омбре. Естественный результат, безопасные пигменты.',
      keywords:
        'перманент бровей Краков, микроблейдинг, пудровые брови, татуаж бровей, волосковая техника, омбре брови, перманентный макияж бровей цена',
    },
    pl: {
      title: 'Makijaż Permanentny Brwi Kraków | Microblading, Brwi Pudrowe',
      description:
        'Profesjonalny makijaż permanentny brwi w Krakowie. Technika włoskowa, brwi pudrowe, ombre. Naturalny efekt, bezpieczne pigmenty.',
      keywords:
        'brwi permanentne Kraków, microblading, brwi pudrowe, tatuaż brwi, technika włoskowa, brwi ombre, makijaż permanentny brwi cena',
    },
    en: {
      title: 'Permanent Eyebrow Makeup Krakow | Microblading, Powder Brows',
      description:
        'Professional permanent eyebrow makeup in Krakow. Hair stroke technique, powder brows, ombre. Natural results, safe pigments.',
      keywords:
        'permanent eyebrows Krakow, microblading, powder brows, eyebrow tattoo, hair stroke technique, ombre brows, permanent eyebrow makeup price',
    },
    uk: {
      title: 'Перманентний макіяж брів Краків | Мікроблейдінг, Пудрові брови',
      description:
        'Професійний перманентний макіяж брів у Кракові. Волоскова техніка, пудрові брови, омбре. Природний результат, безпечні пігменти.',
      keywords:
        'перманент брів Краків, мікроблейдінг, пудрові брови, татуаж брів, волоскова техніка, омбре брови',
    },
  },
  '/services/lips': {
    ru: {
      title: 'Перманентный макияж губ Краков | Акварельные губы, Lip Blush',
      description:
        'Профессиональный перманентный макияж губ в Кракове. Эффекты lip blush, акварельные губы, контур с растушёвкой. Натуральные оттенки, безопасные пигменты.',
      keywords:
        'перманент губ Краков, lip blush, акварельные губы, перманентный макияж губ цена, перманент губ мастер, коррекция перманента губ',
    },
    pl: {
      title: 'Makijaż Permanentny Ust Kraków | Lip Blush, Usta Akwarelowe',
      description:
        'Profesjonalny makijaż permanentny ust w Krakowie. Efekt lip blush, usta akwarelowe, kontur z cieniowaniem. Naturalne odcienie, bezpieczne pigmenty.',
      keywords:
        'usta permanentne Kraków, lip blush, usta akwarelowe, makijaż permanentny ust cena, makijaż ust Kraków, korekta makijażu ust',
    },
    en: {
      title: 'Permanent Lip Makeup Krakow | Lip Blush & Aquarelle Lips',
      description:
        'Professional permanent lip makeup in Krakow. Lip blush, aquarelle lips, contour with shading. Natural shades and safe pigments for perfect lips.',
      keywords:
        'permanent lips Krakow, lip blush, aquarelle lips, permanent lip makeup price, lip tattoo Krakow, lip color correction',
    },
    uk: {
      title: 'Перманентний макіяж губ Краків | Lip Blush, Акварельні губи',
      description:
        'Професійний перманентний макіяж губ у Кракові. Ефект lip blush, акварельні губи, контур з розтушовкою. Природні відтінки та безпечні пігменти.',
      keywords:
        'перманент губ Краків, lip blush, акварельні губи, перманентний макіяж губ ціна, татуаж губ Краків, корекція перманента губ',
    },
  },
  '/services/eyeliner': {
    ru: {
      title: 'Перманентный макияж глаз Краков | Межресничка и Стрелки',
      description:
        'Аккуратный перманентный макияж глаз в Кракове. Межресничная стрелка, верхние и нижние стрелки, растушевка. Чёткий взгляд без ежедневного макияжа.',
      keywords:
        'перманент глаз Краков, межресничка, перманент стрелок, татуаж век, стрелки с растушевкой, перманентная стрелка цена',
    },
    pl: {
      title: 'Makijaż Permanentny Oka Kraków | Kreska Międzyrzęsowa',
      description:
        'Precyzyjny makijaż permanentny oka w Krakowie. Kreska międzyrzęsowa, kreski górne i dolne, cieniowanie. Wyraziste spojrzenie bez codziennego makijażu.',
      keywords:
        'kreska permanentna Kraków, kreska międzyrzęsowa, makijaż permanentny oka, kreska z cieniowaniem, eyeliner permanentny cena',
    },
    en: {
      title: 'Permanent Eyeliner Krakow | Lash Line Enhancement & Wings',
      description:
        'Precision permanent eyeliner in Krakow. Lash line enhancement, upper and lower eyeliner, shaded wings. Defined eyes without daily makeup.',
      keywords:
        'permanent eyeliner Krakow, lash line tattoo, eyeliner tattoo Krakow, shaded eyeliner, permanent eye makeup price',
    },
    uk: {
      title: 'Перманентний макіяж очей Краків | Міжвійка та Стрілки',
      description:
        'Точний перманентний макіяж очей у Кракові. Міжвійна стрілка, верхні та нижні стрілки, розтушовка. Виразний погляд без щоденного макіяжу.',
      keywords:
        'перманент очей Краків, міжвійка, перманентні стрілки, татуаж повік, стрілка з розтушовкою, перманентний макіяж очей ціна',
    },
  },
};

const LANGUAGE_HREFLANG: Record<SupportedLanguage, string> = {
  ru: 'ru',
  pl: 'pl-PL',
  en: 'en',
  uk: 'uk',
};

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

  const languageKey = (Object.keys(LANGUAGE_HREFLANG) as SupportedLanguage[]).includes(
    language as SupportedLanguage,
  )
    ? (language as SupportedLanguage)
    : 'en';
  const currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const normalizedPath = normalizePathname(currentPathname);
  const defaultMeta = getDefaultMetaForPath(normalizedPath, languageKey);

  const seoTitle = title || defaultMeta?.title || t('site.title');
  const seoDescription = description || defaultMeta?.description || t('hero.slogan');
  const seoKeywords = keywords || defaultMeta?.keywords || getSEOKeywords(languageKey);
  const siteName = 'Magerovska Permanent';
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://magerovska.com';
  const canonicalPath = normalizedPath === '/' ? '/' : normalizedPath;
  const canonical = canonicalUrl || `${baseUrl}${canonicalPath}`;
  const structuredDataSignature = JSON.stringify(structuredData ?? []);

  useEffect(() => {
    document.title = seoTitle;
    document.documentElement.lang = languageKey;

    updateMetaTag('name', 'description', seoDescription);
    updateMetaTag('name', 'keywords', seoKeywords);

    updateMetaTag('property', 'og:title', seoTitle);
    updateMetaTag('property', 'og:description', seoDescription);
    updateMetaTag('property', 'og:image', `${baseUrl}${ogImage}`);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:locale', getOGLocale(languageKey));

    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seoTitle);
    updateMetaTag('name', 'twitter:description', seoDescription);
    updateMetaTag('name', 'twitter:image', `${baseUrl}${ogImage}`);

    updateLinkTag('canonical', canonical);

    updateAlternateLinks(languageKey, baseUrl, normalizedPath);

    updateStructuredData(languageKey, seoDescription, baseUrl, normalizedPath, structuredData ?? []);
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    ogImage,
    canonical,
    languageKey,
    siteName,
    baseUrl,
    normalizedPath,
    structuredDataSignature,
  ]);

  return null;
}

function normalizePathname(pathname: string): string {
  if (!pathname) {
    return '/';
  }

  const trimmed = pathname.split('?')[0]?.split('#')[0] ?? '/';
  const normalized = trimmed.replace(/\/+$/, '');

  return normalized === '' ? '/' : normalized;
}

function getDefaultMetaForPath(pathname: string, language: SupportedLanguage) {
  const pageMeta = DEFAULT_PAGE_META[pathname];

  if (!pageMeta) {
    return undefined;
  }

  return pageMeta[language] || pageMeta.en;
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

function updateAlternateLinks(currentLang: SupportedLanguage, baseUrl: string, pathname: string) {
  const normalizedPath = normalizePathname(pathname);

  (Object.keys(LANGUAGE_HREFLANG) as SupportedLanguage[]).forEach((lang) => {
    const hreflang = LANGUAGE_HREFLANG[lang];
    let element = document.querySelector(
      `link[rel="alternate"][hreflang="${hreflang}"]`,
    ) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'alternate');
      element.setAttribute('hreflang', hreflang);
      document.head.appendChild(element);
    }

    element.setAttribute('href', buildAlternateHref(baseUrl, normalizedPath, lang));
  });

  let xDefault = document.querySelector('link[hreflang="x-default"]') as HTMLLinkElement;
  if (!xDefault) {
    xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    document.head.appendChild(xDefault);
  }
  xDefault.setAttribute('href', `${baseUrl}${normalizedPath}`);
}

function buildAlternateHref(baseUrl: string, pathname: string, language: SupportedLanguage) {
  const languageSuffix = language === 'ru' ? '' : `?lang=${language}`;
  return `${baseUrl}${pathname}${languageSuffix}`;
}

function updateStructuredData(
  language: SupportedLanguage,
  description: string,
  baseUrl: string,
  pathname: string,
  additionalData: Array<Record<string, any>>,
) {
  const localBusiness = createLocalBusinessData(language, description, baseUrl);
  const website = createWebsiteData(language, description, baseUrl);
  const webPage = createWebPageData(language, description, baseUrl, pathname);
  const combinedData = [website, webPage, localBusiness, ...additionalData];

  let scriptTag = document.querySelector('script[data-structured-data="primary"]');

  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.setAttribute('type', 'application/ld+json');
    scriptTag.setAttribute('data-structured-data', 'primary');
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(combinedData.length === 1 ? combinedData[0] : combinedData);
}

function createLocalBusinessData(language: SupportedLanguage, description: string, baseUrl: string) {
  const socialProfiles = [
    'https://instagram.com/magerovska_permanent',
    'https://wa.me/380938203764',
    'https://t.me/magerovska_permanent',
    'https://theahstudio.booksy.com',
  ];

  const offers = ['eyebrows', 'lips', 'eyeliner'].map((service) => ({
    '@type': 'Offer',
    'priceCurrency': 'PLN',
    'price': getServicePrice(service),
    'availability': 'https://schema.org/InStock',
    'url': `${baseUrl}/services/${service}`,
    'itemOffered': {
      '@type': 'Service',
      'name': getServiceName(language, service),
      'description': getServiceDescription(language, service),
      'serviceType': getServiceName(language, service),
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
  }));

  return {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'LocalBusiness', 'Organization'],
    '@id': `${baseUrl}/#magerovska-permanent`,
    'name': 'Magerovska Permanent',
    'image': `${baseUrl}/og-image.jpg`,
    'logo': `${baseUrl}/favicon.png`,
    'description': description,
    'url': baseUrl,
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
    'knowsLanguage': ['pl', 'ru', 'uk', 'en'],
  };
}

function createWebsiteData(language: SupportedLanguage, description: string, baseUrl: string) {
  const contactLabels: Record<SupportedLanguage, string> = {
    ru: 'Записаться на консультацию',
    pl: 'Umów się na konsultację',
    en: 'Book a consultation',
    uk: 'Записатися на консультацію',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    'url': baseUrl,
    'name': 'Magerovska Permanent',
    'description': description,
    'inLanguage': language,
    'potentialAction': {
      '@type': 'ContactAction',
      'target': `${baseUrl}/#contact`,
      'name': contactLabels[language] || contactLabels.en,
    },
  };
}

function createWebPageData(
  language: SupportedLanguage,
  description: string,
  baseUrl: string,
  pathname: string,
) {
  const normalizedPath = normalizePathname(pathname);
  const pageUrl = `${baseUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    'url': pageUrl,
    'name': document.title,
    'inLanguage': language,
    'description': description,
    'isPartOf': { '@id': `${baseUrl}/#website` },
  };
}

function getOGLocale(language: SupportedLanguage): string {
  const locales: Record<SupportedLanguage, string> = {
    ru: 'ru_RU',
    pl: 'pl_PL',
    en: 'en_US',
    uk: 'uk_UA',
  };
  return locales[language] || 'en_US';
}

function getSEOKeywords(language: SupportedLanguage): string {
  const keywords: Record<SupportedLanguage, string> = {
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
