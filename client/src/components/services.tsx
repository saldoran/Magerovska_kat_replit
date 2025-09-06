import { Eye, Heart, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Брови",
      subtitle: "Пудровые и Ombré техники",
      duration: "2-3 часа",
      healing: "7-14 дней", 
      lasting: "1-2 года",
      description: "Создание идеальной формы бровей с помощью современных техник. Естественный результат без эффекта \"нарисованности\"."
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      title: "Lip Blush",
      subtitle: "Естественный цвет губ",
      duration: "2-2.5 часа",
      healing: "5-7 дней",
      lasting: "1-1.5 года",
      description: "Придание губам естественного румянца и выразительности. Подходит для создания эффекта \"губы без макияжа\"."
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: "Межресничка",
      subtitle: "Подчеркивание глаз",
      duration: "1.5-2 часа",
      healing: "3-5 дней",
      lasting: "2-3 года",
      description: "Деликатная прорисовка между ресницами для создания эффекта густых ресниц и выразительного взгляда."
    }
  ];

  return (
    <section id="services" className="py-20 gradient-section" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="services-header">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Услуги</h2>
          <p className="text-white text-opacity-90 text-lg">Профессиональные техники для естественной красоты</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`service-card-${service.id}`}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.subtitle}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Длительность:</span>
                  <span className="font-medium" data-testid={`service-duration-${service.id}`}>{service.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Заживление:</span>
                  <span className="font-medium" data-testid={`service-healing-${service.id}`}>{service.healing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Держится:</span>
                  <span className="font-medium" data-testid={`service-lasting-${service.id}`}>{service.lasting}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
