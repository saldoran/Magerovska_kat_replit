import { MessageCircle, Ruler, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      id: 2,
      icon: <Ruler className="w-8 h-8" />,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      id: 3,
      icon: <Sparkles className="w-8 h-8" />,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
    },
  ];

  return (
    <section id="process" className="py-16 bg-white" data-testid="process-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="process-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('process.title')}</h2>
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
