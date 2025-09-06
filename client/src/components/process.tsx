import { MessageCircle, Ruler, Sparkles, Heart } from "lucide-react";
import { Info } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Консультация",
      description: "Обсуждаем ваши пожелания, анализируем форму лица, выбираем подходящую технику и цвет"
    },
    {
      id: 2,
      icon: <Ruler className="w-8 h-8" />,
      title: "Эскиз",
      description: "Создаем идеальную форму с помощью замеров по золотому сечению и вашим индивидуальным особенностям"
    },
    {
      id: 3,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Пигментация",
      description: "Процедура выполняется с использованием качественных пигментов и современного оборудования"
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: "Уход",
      description: "Подробные рекомендации по уходу и бесплатная коррекция через 4-6 недель при необходимости"
    }
  ];

  return (
    <section id="process" className="py-16 bg-white" data-testid="process-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="process-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Процесс</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="text-center fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`process-step-${step.id}`}
            >
              <h3 className="font-medium text-gray-900 mb-2" data-testid={`process-title-${step.id}`}>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm" data-testid={`process-description-${step.id}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
