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
    <section id="services" className="py-16 bg-gray-50" data-testid="services-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="services-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Услуги</h2>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg fade-in" data-delay="100" data-testid="service-card-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="service-title-1">
              Пудровые/Ombré брови
            </h3>
            <p className="text-gray-600 mb-4">
              Естественный эффект с мягким градиентом цвета, идеально подходит для любого типа кожи.
            </p>
            <div className="text-sm text-gray-500">
              <div className="inline-block mr-6">
                <span className="font-medium">Длительность: </span>
                <span data-testid="service-duration-1">2-3 часа</span>
              </div>
              <div className="inline-block">
                <span className="font-medium">Заживление: </span>
                <span data-testid="service-healing-1">7-10 дней</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg fade-in" data-delay="200" data-testid="service-card-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="service-title-2">
              Lip Blush
            </h3>
            <p className="text-gray-600 mb-4">
              Нежное тонирование губ с эффектом увеличения объема и коррекцией асимметрии.
            </p>
            <div className="text-sm text-gray-500">
              <div className="inline-block mr-6">
                <span className="font-medium">Длительность: </span>
                <span data-testid="service-duration-2">2-3 часа</span>
              </div>
              <div className="inline-block">
                <span className="font-medium">Заживление: </span>
                <span data-testid="service-healing-2">7-14 дней</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg fade-in" data-delay="300" data-testid="service-card-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid="service-title-3">
              Межресничка
            </h3>
            <p className="text-gray-600 mb-4">
              Создает эффект густых ресниц и выразительного взгляда без необходимости использования туши.
            </p>
            <div className="text-sm text-gray-500">
              <div className="inline-block mr-6">
                <span className="font-medium">Длительность: </span>
                <span data-testid="service-duration-3">1-2 часа</span>
              </div>
              <div className="inline-block">
                <span className="font-medium">Заживление: </span>
                <span data-testid="service-healing-3">5-7 дней</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
