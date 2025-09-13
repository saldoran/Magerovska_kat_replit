import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image-hq.png";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden" 
      data-testid="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      

      {/* Hero Text positioned at the bottom */}
      <div className="absolute bottom-16 left-8 right-8 z-20 max-w-lg md:left-12 md:right-auto md:bottom-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          {t('hero.subtitle')}
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors duration-200 shadow-lg"
          data-testid="button-book-consultation"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
}
