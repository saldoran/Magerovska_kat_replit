import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Instagram } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#222222' }} className="py-16" data-testid="footer-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Name with Cursive Font */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: 'LiuJianMaoCao, cursive' }}>
            Magerovska permanent
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('hero.slogan')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Email Section */}
          <div className="text-left">
            <h3 className="text-white text-2xl font-semibold mb-4" data-testid="footer-email-title">
              Email
            </h3>
            <p className="text-gray-300 text-lg" data-testid="footer-email-address">
              info@magerovska.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-left">
            <h3 className="text-white text-2xl font-semibold mb-4" data-testid="footer-social-title">
              {t('footer.social')}
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/48123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-whatsapp"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://instagram.com/magerovska_permanent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://t.me/magerovska_permanent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                data-testid="social-telegram"
              >
                <FaTelegram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
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
