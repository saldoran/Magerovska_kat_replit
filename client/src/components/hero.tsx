import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 py-32" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 fade-in" data-delay="200" data-testid="hero-content">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-gray-200" data-testid="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
            data-testid="button-book-consultation"
          >
            {t('hero.cta')}
          </Button>
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-300 font-medium tracking-wide">{t('hero.brand')}</p>
        </div>
      </div>
    </section>
  );
}
