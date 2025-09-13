import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'ru' as Language, name: 'RU', flag: '🇷🇺' },
    { code: 'pl' as Language, name: 'PL', flag: '🇵🇱' },
    { code: 'en' as Language, name: 'EN', flag: '🇺🇸' },
  ];

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-10" data-testid="navbar-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-white text-xl" style={{ fontFamily: 'LiuJianMaoCao, cursive' }} data-testid="logo-main">
              Magerovska Permanent
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white border-t-2 border-transparent hover:border-white transition-colors duration-200"
                data-testid="nav-portfolio"
              >
                {t('nav.portfolio')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white border-t-2 border-transparent hover:border-white transition-colors duration-200"
                data-testid="nav-services"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white border-t-2 border-transparent hover:border-white transition-colors duration-200"
                data-testid="nav-pricing"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white border-t-2 border-transparent hover:border-white transition-colors duration-200"
                data-testid="nav-contact"
              >
                {t('nav.contact')}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-white bg-transparent hover:bg-transparent border border-white border-opacity-20 hover:border-opacity-40"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  data-testid="button-language-dropdown"
                >
                  {languages.find(lang => lang.code === language)?.flag} {languages.find(lang => lang.code === language)?.name}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg border border-gray-200 z-50" data-testid="language-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left border-t-2 border-transparent hover:border-gray-900 hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'bg-gray-100 font-medium' : ''
                        }`}
                        data-testid={`language-option-${lang.code}`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white bg-transparent hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu active fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-md flex flex-col items-center justify-center"
          data-testid="mobile-menu"
        >
          
          <div className="space-y-8 text-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block text-white text-2xl font-light hover:text-white transition-colors"
              data-testid="mobile-nav-portfolio"
            >
              {t('nav.portfolio')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-white text-2xl font-light hover:text-white transition-colors"
              data-testid="mobile-nav-services"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block text-white text-2xl font-light hover:text-white transition-colors"
              data-testid="mobile-nav-pricing"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-white text-2xl font-light hover:text-white transition-colors"
              data-testid="mobile-nav-contact"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
