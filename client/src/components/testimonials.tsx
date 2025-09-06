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
    <section className="py-20 bg-gray-50" data-testid="testimonials-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="testimonials-header">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Отзывы</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white border rounded-lg p-6 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="mb-4">
                <div className="font-medium text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`testimonial-date-${testimonial.id}`}>
                  {testimonial.date}
                </div>
              </div>
              <blockquote className="text-muted-foreground text-sm leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
