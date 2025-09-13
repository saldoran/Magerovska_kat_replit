// Import real portfolio images
import portfolioImage1 from "@assets/1_1757168233012.jpeg";
import portfolioImage2 from "@assets/2_1757168245430.jpeg";
import portfolioImage3 from "@assets/3_1757168245412.jpeg";
import portfolioImage4 from "@assets/4_1757168245430.jpeg";
import portfolioImage5 from "@assets/4_1_1757168245430.jpeg";
import portfolioImage6 from "@assets/5_1757168245430.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const portfolioItems = [
    {
      id: 1,
      image: portfolioImage1,
      titleKey: 'portfolio.item.1.title',
      altKey: 'portfolio.item.1.alt',
    },
    {
      id: 2,
      image: portfolioImage2,
      titleKey: 'portfolio.item.2.title',
      altKey: 'portfolio.item.2.alt',
    },
    {
      id: 3,
      image: portfolioImage3,
      titleKey: 'portfolio.item.3.title',
      altKey: 'portfolio.item.3.alt',
    },
    {
      id: 4,
      image: portfolioImage4,
      titleKey: 'portfolio.item.4.title',
      altKey: 'portfolio.item.4.alt',
    },
    {
      id: 5,
      image: portfolioImage5,
      titleKey: 'portfolio.item.5.title',
      altKey: 'portfolio.item.5.alt',
    },
    {
      id: 6,
      image: portfolioImage6,
      titleKey: 'portfolio.item.6.title',
      altKey: 'portfolio.item.6.alt',
    }
  ];

  return (
    <section id="portfolio" className="py-12 bg-gray-50" data-testid="portfolio-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in" data-testid="portfolio-header">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('portfolio.title')}</h2>
          <p className="text-gray-600 text-lg">{t('portfolio.subtitle')}</p>
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
                alt={t(item.altKey as string)}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                data-testid={`img-portfolio-${item.id}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-lg font-semibold">{t(item.titleKey as string)}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in" data-testid="portfolio-link">
          <a
            href="https://instagram.com/magerovska_permanent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            data-testid="link-instagram"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {t('portfolio.instagram')}
          </a>
        </div>
      </div>
    </section>
  );
}
