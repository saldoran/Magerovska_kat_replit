import { Language } from '@/contexts/LanguageContext';

const LANGUAGE_SLUGS: Record<Language, string> = {
  ru: '',
  pl: 'pl',
  en: 'en',
  uk: 'ua',
};

const SEGMENT_TO_LANGUAGE: Record<string, Language> = {
  ru: 'ru',
  pl: 'pl',
  en: 'en',
  ua: 'uk',
  uk: 'uk',
};

const LOCALE_PREFIX_PATTERN = /^\/(ru|pl|en|ua|uk)(?=\/|$)/i;

export function getLanguageSlug(language: Language): string {
  return LANGUAGE_SLUGS[language];
}

export function getHrefLang(language: Language): string {
  return language === 'uk' ? 'uk' : language;
}

export function getLocalizedPath(language: Language, path: string): string {
  const slug = getLanguageSlug(language);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!slug) {
    return normalizedPath === '/' ? '/' : normalizedPath;
  }

  if (normalizedPath === '/') {
    return `/${slug}`;
  }

  return `/${slug}${normalizedPath}`;
}

export function getLocalizedUrl(language: Language, path: string, baseUrl = 'https://magerovska.com'): string {
  const localizedPath = getLocalizedPath(language, path);
  if (localizedPath === '/') {
    return baseUrl;
  }
  return `${baseUrl}${localizedPath}`;
}

export function stripLocaleFromPath(pathname: string): string {
  if (!pathname) {
    return '/';
  }

  const match = pathname.match(LOCALE_PREFIX_PATTERN);
  if (match) {
    const stripped = pathname.replace(LOCALE_PREFIX_PATTERN, '');
    return stripped === '' ? '/' : stripped;
  }

  return pathname;
}

export function resolveLanguageFromSegment(segment?: string): Language | undefined {
  if (!segment) {
    return undefined;
  }

  const normalized = segment.toLowerCase();
  return SEGMENT_TO_LANGUAGE[normalized];
}

export const SUPPORTED_LANGUAGE_SEGMENTS = Object.keys(SEGMENT_TO_LANGUAGE);
