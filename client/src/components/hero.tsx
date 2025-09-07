import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.png";

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
      
      {/* Logo positioned in top right */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold italic tracking-wide">
            Magerovska
          </h2>
          <p className="text-sm md:text-base font-light tracking-wider">
            permanent
          </p>
        </div>
      </div>

      {/* CTA Button positioned in bottom center */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <Button
          onClick={scrollToContact}
          className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200 shadow-lg"
          data-testid="button-book-consultation"
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
}
