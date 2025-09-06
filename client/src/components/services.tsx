import { Eye, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      titleKey: "services.eyebrows.title",
      descKey: "services.eyebrows.desc",
      duration: "2-3 часа",
      healing: "7-14 дней", 
      lasting: "1-2 года"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      titleKey: "services.lips.title",
      descKey: "services.lips.desc",
      duration: "2-2.5 часа",
      healing: "5-7 дней",
      lasting: "1-1.5 года"
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      titleKey: "services.eyeliner.title",
      descKey: "services.eyeliner.desc",
      duration: "1.5-2 часа",
      healing: "3-5 дней",
      lasting: "2-3 года"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="services-header">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-gray-600 text-lg">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`service-card-${service.id}`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`service-title-${service.id}`}>
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm">{t(service.descKey)}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Длительность:</span>
                  <span className="font-medium" data-testid={`service-duration-${service.id}`}>{service.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Заживление:</span>
                  <span className="font-medium" data-testid={`service-healing-${service.id}`}>{service.healing}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Держится:</span>
                  <span className="font-medium" data-testid={`service-lasting-${service.id}`}>{service.lasting}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed" data-testid={`service-description-${service.id}`}>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
