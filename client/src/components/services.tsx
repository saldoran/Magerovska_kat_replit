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
    <section id="services" className="py-20 bg-white" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="services-header">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Услуги</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="text-center border rounded-lg p-6 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`service-card-${service.id}`}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4" data-testid={`service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Длительность: </span>
                  <span data-testid={`service-duration-${service.id}`}>{service.duration}</span>
                </div>
                <div>
                  <span className="font-medium">Заживление: </span>
                  <span data-testid={`service-healing-${service.id}`}>{service.healing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
