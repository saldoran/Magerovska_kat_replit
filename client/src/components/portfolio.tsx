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
    <section id="portfolio" className="py-20 bg-background" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="portfolio-header">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Портфолио работ</h2>
          <p className="text-muted-foreground text-lg">Естественная красота в каждой детали</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`portfolio-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`img-portfolio-${item.id}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in" data-testid="portfolio-link">
          <a
            href="https://instagram.com/magerovska_permanent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-accent transition-colors duration-200"
            data-testid="link-instagram"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Больше работ в Instagram
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
