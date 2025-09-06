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
    <section className="bg-white py-20" data-testid="hero-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 fade-in" data-delay="200" data-testid="hero-content">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Перманентный макияж, который выглядит естественно — как вы
          </h1>
          <p className="text-lg text-gray-600" data-testid="hero-subtitle">
            Брови, губы, межресничка + -20% на первый визит
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            data-testid="button-book-consultation"
          >
            Записаться
          </Button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-medium">Magerovska permanent</p>
        </div>
      </div>
    </section>
  );
}
