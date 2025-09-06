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
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 fade-in" data-delay="200" data-testid="hero-content">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Перманентный макияж, который выглядит{" "}
              <span className="text-accent">естественно</span> — как вы
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed" data-testid="hero-subtitle">
              Брови, губы, межресничка <span className="text-accent font-medium">+ скидка 20% на первый визит</span>
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="button-book-consultation"
            >
              Записаться на консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative fade-in" data-delay="400" data-testid="hero-portrait">
            <img
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
              alt="Екатерина Магеровская - Мастер перманентного макияжа"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              data-testid="img-hero-portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent via-50% to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-white opacity-10">
        <Sparkles className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-10 text-white opacity-10">
        <Leaf className="w-12 h-12" />
      </div>
    </section>
  );
}
