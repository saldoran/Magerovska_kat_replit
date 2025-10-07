import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import booksyIcon from "@assets/images_1758392876913.png";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer data-testid="footer-section">
      {/* Social Network Part - Email and Icons */}
      <div style={{ backgroundColor: '#2d2d2d' }} className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Left side: Email and Social Media */}
            <div>
              {/* Email Section */}
              <div className="text-center mb-8">
                <h3 className="text-white text-2xl font-semibold mb-3" data-testid="footer-email-title">
                  Email
                </h3>
                <a 
                  href="mailto:Magerovskayakate@gmail.com" 
                  className="text-gray-300 text-lg hover:text-white transition-colors underline"
                  data-testid="footer-email-address"
                >
                  Magerovskayakate@gmail.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="text-center">
                <h3 className="text-white text-2xl font-semibold mb-4" data-testid="footer-social-title">
                  {t('footer.social')}
                </h3>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://wa.me/380938203764" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#3a3a3a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3a3a3a'}
                    data-testid="social-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com/magerovska_permanent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#3a3a3a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3a3a3a'}
                    data-testid="social-instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://t.me/magerovska_permanent" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#3a3a3a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3a3a3a'}
                    data-testid="social-telegram"
                  >
                    <FaTelegram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://theahstudio.booksy.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: '#3a3a3a' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3a3a3a'}
                    data-testid="social-booksy"
                  >
                    <img src={booksyIcon} alt="Booksy" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Contact Information */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm" data-testid="footer-address-value">{t('footer.addressValue')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <a 
                  href={`tel:${t('footer.phoneValue')}`} 
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                  data-testid="footer-phone-value"
                >
                  {t('footer.phoneValue')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm" data-testid="footer-hours-value">{t('footer.hoursValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Part - Brand Name and Description */}
      <div style={{ backgroundColor: '#222222' }} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Brand Name with Cursive Font */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: 'LiuJianMaoCao, cursive' }}>
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
      </div>
    </footer>
  );
}
