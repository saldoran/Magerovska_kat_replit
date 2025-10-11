import type { ComponentType } from 'react';
import { useEffect } from 'react';
import type { RouteComponentProps } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { resolveLanguageFromSegment } from '@/utils/languagePaths';

type LangRouteParams = {
  lang?: string;
};

export function withLocalizedLanguage(Component: ComponentType<any>) {
  return function LocalizedRoute({ params }: RouteComponentProps<LangRouteParams>) {
    const { setLanguage } = useLanguage();
    const langFromRoute = params?.lang;

    useEffect(() => {
      const resolved = resolveLanguageFromSegment(langFromRoute);
      if (resolved) {
        setLanguage(resolved);
      }
    }, [langFromRoute, setLanguage]);

    return <Component />;
  };
}
