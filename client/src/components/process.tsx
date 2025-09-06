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
    <section id="process" className="py-20 bg-background" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="process-header">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Процесс работы</h2>
          <p className="text-muted-foreground text-lg">4 этапа к идеальному результату</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="text-center fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`process-step-${step.id}`}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 relative text-primary">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border transform translate-x-0"></div>
                )}
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3" data-testid={`process-title-${step.id}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`process-description-${step.id}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in" data-testid="process-info">
          <div className="bg-accent bg-opacity-10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <Info className="inline w-5 h-5 text-accent mr-2" />
              Весь процесс проходит в стерильных условиях с использованием одноразовых материалов. 
              Применяется местная анестезия для вашего комфорта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
