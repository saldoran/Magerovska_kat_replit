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
    <section id="pricing" className="py-16 bg-gray-50" data-testid="pricing-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="pricing-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Цены</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg text-center fade-in" data-delay="100" data-testid="pricing-card-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="pricing-title-1">
              Пудровые брови
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">350 zł</div>
            <div className="text-sm text-red-600 font-medium mb-4" data-testid="discount-ribbon-1">
              -20% на первый визит
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>• Консультация и подбор формы</li>
              <li>• Пигментация</li>
              <li>• Коррекция через 4-6 недель</li>
            </ul>
            <Button
              onClick={scrollToContact}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md font-medium transition-colors duration-200"
              data-testid="button-book-1"
            >
              Записаться
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg text-center fade-in" data-delay="200" data-testid="pricing-card-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="pricing-title-2">
              Lip Blush
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">400 zł</div>
            <div className="text-sm text-red-600 font-medium mb-4" data-testid="discount-ribbon-2">
              -20% на первый визит
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>• Консультация и подбор оттенка</li>
              <li>• Пигментация</li>
              <li>• Коррекция через 4-6 недель</li>
            </ul>
            <Button
              onClick={scrollToContact}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md font-medium transition-colors duration-200"
              data-testid="button-book-2"
            >
              Записаться
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg text-center fade-in" data-delay="300" data-testid="pricing-card-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4" data-testid="pricing-title-3">
              Межресничка
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">300 zł</div>
            <div className="text-sm text-red-600 font-medium mb-4" data-testid="discount-ribbon-3">
              -20% на первый визит
            </div>
            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>• Консультация</li>
              <li>• Пигментация</li>
              <li>• Коррекция через 4-6 недель</li>
            </ul>
            <Button
              onClick={scrollToContact}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md font-medium transition-colors duration-200"
              data-testid="button-book-3"
            >
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
