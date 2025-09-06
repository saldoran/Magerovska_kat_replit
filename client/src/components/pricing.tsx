import { Sparkles, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pricingCards = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Брови",
      services: [
        { name: "Пудровые брови", price: "450 zł" },
        { name: "Ombré брови", price: "500 zł" },
        { name: "Коррекция", price: "150 zł" }
      ],
      discountPrice: "от 360 zł"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      title: "Губы",
      services: [
        { name: "Lip Blush", price: "400 zł" },
        { name: "Контур губ", price: "350 zł" },
        { name: "Коррекция", price: "120 zł" }
      ],
      discountPrice: "от 280 zł"
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: "Глаза",
      services: [
        { name: "Межресничка верх", price: "300 zł" },
        { name: "Межресничка низ", price: "200 zł" },
        { name: "Коррекция", price: "100 zł" }
      ],
      discountPrice: "от 240 zł"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white" data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="pricing-header">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Цены</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <div
              key={card.id}
              className="border rounded-lg p-6 text-center fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`pricing-card-${card.id}`}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4" data-testid={`pricing-title-${card.id}`}>
                {card.title}
              </h3>
              
              <div className="space-y-2 mb-6">
                {card.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="text-sm">
                    <span className="text-muted-foreground" data-testid={`service-name-${card.id}-${serviceIndex}`}>
                      {service.name}: 
                    </span>
                    <span className="font-medium ml-1" data-testid={`service-price-${card.id}-${serviceIndex}`}>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-primary font-bold text-lg mb-6" data-testid={`discount-ribbon-${card.id}`}>
                -20% на первый визит
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-accent text-white py-2 rounded-lg font-medium transition-colors duration-200"
                data-testid={`button-book-${card.id}`}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
