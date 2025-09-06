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
    <section id="pricing" className="py-20 gradient-section" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="pricing-header">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Цены</h2>
          <p className="text-white text-opacity-90 text-lg">Прозрачное ценообразование без скрытых доплат</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <div
              key={card.id}
              className="relative bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`pricing-card-${card.id}`}
            >
              {/* Discount Ribbon */}
              <div className="absolute -top-3 -right-3 bg-destructive text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-12" data-testid={`discount-ribbon-${card.id}`}>
                -20% первый визит
              </div>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {card.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2" data-testid={`pricing-title-${card.id}`}>
                  {card.title}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {card.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-center">
                    <span className="text-muted-foreground" data-testid={`service-name-${card.id}-${serviceIndex}`}>
                      {service.name}
                    </span>
                    <span className="font-semibold" data-testid={`service-price-${card.id}-${serviceIndex}`}>
                      {service.price}
                    </span>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center text-primary font-bold">
                    <span>Со скидкой 20%</span>
                    <span data-testid={`discount-price-${card.id}`}>{card.discountPrice}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-accent text-white py-3 rounded-lg font-medium transition-colors duration-200"
                data-testid={`button-book-${card.id}`}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in" data-testid="pricing-packages">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-white mb-4">
              <svg className="inline w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
              </svg>
              <strong>Комплексные предложения:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-sm">
              <div data-testid="package-brows-lips">Брови + Губы = <strong>750 zł</strong> (вместо 850 zł)</div>
              <div data-testid="package-all-zones">Все три зоны = <strong>950 zł</strong> (вместо 1150 zł)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
