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
    <section className="bg-white min-h-screen flex items-center" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 fade-in" data-delay="200" data-testid="hero-content">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Перманентный макияж, который выглядит{" "}
            <span className="text-primary">естественно</span> — как вы
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="hero-subtitle">
            Брови, губы, межресничка <span className="text-primary font-medium">+ -20% на первый визит</span>
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
            data-testid="button-book-consultation"
          >
            Записаться
          </Button>
        </div>
      </div>
    </section>
  );
}
