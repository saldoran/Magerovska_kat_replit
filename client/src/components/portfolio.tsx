export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Пудровые брови",
      alt: "Пудровые брови - до и после"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Lip Blush",
      alt: "Lip Blush - естественный цвет губ"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Межресничка",
      alt: "Межресничка - естественное подчеркивание глаз"
    },
    {
      id: 4,
      image: "https://pixabay.com/get/gdb59d125c92e51a11dca55f6ae34336529a93dbb2c146cafc4c78cf664d0bfa2218a058f5ac422c7b422a867ac94307c96269aa1420d4ff507e9c85ed01ff578_1280.jpg",
      title: "Ombré брови",
      alt: "Ombré брови - градиентная техника"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Комплексная работа",
      alt: "Комплексная работа - брови и губы"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "После заживления",
      alt: "Результат через месяц после заживления"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white" data-testid="portfolio-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="portfolio-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Портфолио</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="fade-in" data-delay="100" data-testid="portfolio-item-1">
            <h3 className="text-lg font-medium text-gray-900">Пудровые брови</h3>
          </div>
          <div className="fade-in" data-delay="200" data-testid="portfolio-item-2">
            <h3 className="text-lg font-medium text-gray-900">Lip Blush</h3>
          </div>
          <div className="fade-in" data-delay="300" data-testid="portfolio-item-3">
            <h3 className="text-lg font-medium text-gray-900">Межресничка</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
