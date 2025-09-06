import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 fade-in" data-delay="200" data-testid="hero-content">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Перманентный макияж, который выглядит естественно — как вы
          </h1>
          <p className="text-lg text-gray-200" data-testid="hero-subtitle">
            Брови, губы, межресничка + 20% скидка на первый визит
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
            data-testid="button-book-consultation"
          >
            Записаться на консультацию
          </Button>
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-300 font-medium tracking-wide">MAGEROVSKA PERMANENT</p>
        </div>
      </div>
    </section>
  );
}
