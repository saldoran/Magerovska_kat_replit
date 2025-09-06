import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Анна К.",
      date: "15 декабря 2023",
      text: "Катерина - настоящий профессионал! Брови получились именно такими, как я хотела - естественными и красивыми. Процедура прошла комфортно, заживление быстрое. Рекомендую всем подругам!"
    },
    {
      id: 2,
      name: "Мария С.", 
      date: "8 декабря 2023",
      text: "Сделала lip blush у Кати - результат превзошел все ожидания! Губы выглядят естественно, но при этом очень выразительно. Теперь экономлю время на макияж каждое утро. Спасибо за профессионализм!"
    },
    {
      id: 3,
      name: "Елена Т.",
      date: "2 декабря 2023", 
      text: "Долго искала мастера для перманентного макияжа и не пожалела, что выбрала Катю. Очень внимательная к деталям, аккуратная работа, отличный результат. Приду обязательно на коррекцию и за другими процедурами!"
    }
  ];

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-current text-accent" />
    ));
  };

  return (
    <section className="py-20 bg-background" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="testimonials-header">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Отзывы клиенток</h2>
          <p className="text-muted-foreground text-lg">Что говорят о работе наши довольные клиентки</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4" data-testid={`rating-${testimonial.id}`}>
                <div className="flex text-accent">
                  {renderStars()}
                </div>
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-medium text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-date-${testimonial.id}`}>
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in" data-testid="testimonials-stats">
          <div className="bg-accent bg-opacity-10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground flex items-center justify-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Более 200 довольных клиенток за последний год
              <svg className="w-5 h-5 text-accent ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
