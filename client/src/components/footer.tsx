import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-800 py-16" data-testid="footer-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Name with Cursive Font */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'LiuJianMaoCao, cursive' }}>
            Magerovska permanent
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('hero.slogan')}
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
