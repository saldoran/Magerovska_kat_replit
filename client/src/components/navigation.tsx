import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="text-white font-serif text-xl font-semibold" data-testid="logo-main">
              Magerovska Permanent
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-accent transition-colors duration-200"
                data-testid="nav-portfolio"
              >
                Портфолио
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-accent transition-colors duration-200"
                data-testid="nav-services"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-white hover:text-accent transition-colors duration-200"
                data-testid="nav-process"
              >
                Процесс
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-white hover:text-accent transition-colors duration-200"
                data-testid="nav-pricing"
              >
                Цены
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-accent transition-colors duration-200"
                data-testid="nav-contact"
              >
                Контакты
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu active fixed inset-0 z-40 gradient-hero flex flex-col items-center justify-center"
          data-testid="mobile-menu"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
            data-testid="button-close-menu"
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="space-y-8 text-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block text-white text-2xl font-light hover:text-accent transition-colors"
              data-testid="mobile-nav-portfolio"
            >
              Портфолио
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-white text-2xl font-light hover:text-accent transition-colors"
              data-testid="mobile-nav-services"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block text-white text-2xl font-light hover:text-accent transition-colors"
              data-testid="mobile-nav-process"
            >
              Процесс
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block text-white text-2xl font-light hover:text-accent transition-colors"
              data-testid="mobile-nav-pricing"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-white text-2xl font-light hover:text-accent transition-colors"
              data-testid="mobile-nav-contact"
            >
              Контакты
            </button>
          </div>
        </div>
      )}
    </>
  );
}
