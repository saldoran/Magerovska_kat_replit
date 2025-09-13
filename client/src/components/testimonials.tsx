import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { id: 1, nameKey: 'testimonials.item.1.name', date: '15 декабря 2023', textKey: 'testimonials.item.1.text' },
    { id: 2, nameKey: 'testimonials.item.2.name', date: '8 декабря 2023', textKey: 'testimonials.item.2.text' },
    { id: 3, nameKey: 'testimonials.item.3.name', date: '2 декабря 2023', textKey: 'testimonials.item.3.text' },
  ];

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => <Star key={i} className="w-5 h-5 fill-current text-accent" />);
  };

  return (
    <section className="py-16 bg-white" data-testid="testimonials-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="testimonials-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('testimonials.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="mb-3">
                <div className="font-semibold text-gray-900" data-testid={`testimonial-name-${testimonial.id}`}>
                  {t(testimonial.nameKey)}
                </div>
                <div className="text-sm text-gray-500" data-testid={`testimonial-date-${testimonial.id}`}>
                  {testimonial.date}
                </div>
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                "{t(testimonial.textKey)}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
