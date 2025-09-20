import { Sparkles, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();
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
      titleKey: "pricing.eyebrows",
      services: [
        { nameKey: 'pricing.eyebrows.service.powder', price: "450 zł" },
        { nameKey: 'pricing.eyebrows.service.ombre', price: "500 zł" },
        { nameKey: 'pricing.eyebrows.service.correction', price: "150 zł" }
      ],
      discountPrice: "от 360 zł"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      titleKey: "pricing.lips",
      services: [
        { nameKey: 'pricing.lips.service.lipBlush', price: "450 zł" },
        { nameKey: 'pricing.lips.service.contour', price: "350 zł" },
        { nameKey: 'pricing.lips.service.correction', price: "120 zł" }
      ],
      discountPrice: "от 280 zł"
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      titleKey: "pricing.eyeliner",
      services: [
        { nameKey: 'pricing.eyeliner.service.upper', price: "350 zł" },
        { nameKey: 'pricing.eyeliner.service.lower', price: "200 zł" },
        { nameKey: 'pricing.eyeliner.service.correction', price: "100 zł" }
      ],
      discountPrice: "от 240 zł"
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8" />,
      titleKey: "pricing.correction",
      services: [
        { nameKey: 'pricing.correction.service.any', price: "200 zł" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-12 bg-gray-50" data-testid="pricing-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="pricing-header">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-gray-600 text-lg">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingCards.map((card, index) => (
            <div
              key={card.id}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in flex flex-col h-full"
              data-delay={100 * (index + 1)}
              data-testid={`pricing-card-${card.id}`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span 
                    className="text-white px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: 'hsl(6, 78%, 67%)' }}
                  >
                    {t('pricing.popular')}
                  </span>
                </div>
              )}
              
              <div className="text-center flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid={`pricing-title-${card.id}`}>
                  {t(card.titleKey)}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {card.services[0]?.price || "350 zł"}
                  </span>
                </div>

                {card.discountPrice && (
                  <div className="bg-red-50 text-red-700 text-sm font-medium py-2 px-4 rounded-lg mb-6" data-testid={`discount-ribbon-${card.id}`}>
                    {t('pricing.discountRibbon')}
                  </div>
                )}

                <ul className="text-left space-y-3 mb-8 flex-grow">
                  {card.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start min-w-0">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600 truncate flex-1 min-w-0" data-testid={`service-name-${card.id}-${serviceIndex}`}>
                        {service.nameKey ? t(service.nameKey) : ''}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">
                        {t('pricing.freeCorrection')}
                      </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {t('pricing.certifiedPigments')}
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                  style={{ 
                    backgroundColor: '#3a3a3a',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3a3a3a'}
                  data-testid={`button-book-${card.id}`}
                  title={t('pricing.bookButton')}
                >
                  <span style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    display: 'block'
                  }}>
                    {t('pricing.bookButton')}
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in" data-testid="pricing-packages">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('pricing.packages.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-4" data-testid="package-brows-lips">
                <div className="text-lg font-bold text-gray-900">{t('pricing.package.browsLips')}</div>
                <div className="text-sm text-gray-600 line-through">850 zł</div>
                <div className="text-xl font-bold text-red-600">750 zł</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4" data-testid="package-all-zones">
                <div className="text-lg font-bold text-gray-900">{t('pricing.package.allZones')}</div>
                <div className="text-sm text-gray-600 line-through">1150 zł</div>
                <div className="text-xl font-bold text-red-600">950 zł</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
