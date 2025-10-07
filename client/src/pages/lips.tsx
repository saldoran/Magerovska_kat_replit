import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Heart, Palette } from "lucide-react";

export default function Lips() {
  const { t, language } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getSEOData = () => {
    const seoData: Record<string, { title: string; description: string; keywords: string }> = {
      ru: {
        title: "Перманентный макияж губ Краков | Lip Blush, Акварельные губы",
        description: "Профессиональный перманентный макияж губ в Кракове. Lip blush, акварельные губы, контур. Естественный цвет, безопасные пигменты.",
        keywords: "перманент губ Краков, lip blush, акварельные губы, татуаж губ, контур губ, перманентный макияж губ цена"
      },
      pl: {
        title: "Makijaż Permanentny Ust Kraków | Lip Blush, Usta Akwarelowe",
        description: "Profesjonalny makijaż permanentny ust w Krakowie. Lip blush, usta akwarelowe, kontur. Naturalny kolor, bezpieczne pigmenty.",
        keywords: "usta permanentne Kraków, lip blush, usta akwarelowe, tatuaż ust, kontur ust, makijaż permanentny ust cena"
      },
      en: {
        title: "Permanent Lip Makeup Krakow | Lip Blush, Watercolor Lips",
        description: "Professional permanent lip makeup in Krakow. Lip blush, watercolor lips, lip liner. Natural color, safe pigments.",
        keywords: "permanent lips Krakow, lip blush, watercolor lips, lip tattoo, lip liner, permanent lip makeup price"
      },
      uk: {
        title: "Перманентний макіяж губ Краків | Lip Blush, Акварельні губи",
        description: "Професійний перманентний макіяж губ у Кракові. Lip blush, акварельні губи, контур. Природний колір, безпечні пігменти.",
        keywords: "перманент губ Краків, lip blush, акварельні губи, татуаж губ, контур губ"
      }
    };
    return seoData[language] || seoData.en;
  };

  const getHeroData = () => {
    const heroData: Record<string, { title: string; subtitle: string; description: string }> = {
      ru: {
        title: "Перманентный макияж губ",
        subtitle: "Соблазнительные губы 24/7",
        description: "Подчеркните естественную красоту ваших губ. Lip blush создает мягкий оттенок, контур придает четкость, акварельная техника - объем."
      },
      pl: {
        title: "Makijaż Permanentny Ust",
        subtitle: "Kusząсe usta 24/7",
        description: "Podkreśl naturalną urodę swoich ust. Lip blush tworzy delikatny odcień, kontur dodaje wyrazistości, technika akwarelowa - objętości."
      },
      en: {
        title: "Permanent Lip Makeup",
        subtitle: "Gorgeous lips 24/7",
        description: "Enhance the natural beauty of your lips. Lip blush creates a soft tint, liner adds definition, watercolor technique adds volume."
      },
      uk: {
        title: "Перманентний макіяж губ",
        subtitle: "Спокусливі губи 24/7",
        description: "Підкресліть природну красу ваших губ. Lip blush створює м'який відтінок, контур надає чіткості, акварельна техніка - об'єм."
      }
    };
    return heroData[language] || heroData.en;
  };

  const getBenefits = () => {
    const benefits: Record<string, Array<{ icon: any; title: string; description: string }>> = {
      ru: [
        { icon: Sparkles, title: "Всегда ухожены", description: "Губы выглядят свежими без помады" },
        { icon: Heart, title: "Естественный оттенок", description: "Цвет подбирается индивидуально" },
        { icon: Palette, title: "Коррекция формы", description: "Визуальное увеличение и симметрия" }
      ],
      pl: [
        { icon: Sparkles, title: "Zawsze zadbane", description: "Usta wyglądają świeżo bez szminki" },
        { icon: Heart, title: "Naturalny odcień", description: "Kolor dobierany indywidualnie" },
        { icon: Palette, title: "Korekta kształtu", description: "Wizualne powiększenie i symetria" }
      ],
      en: [
        { icon: Sparkles, title: "Always groomed", description: "Lips look fresh without lipstick" },
        { icon: Heart, title: "Natural shade", description: "Color selected individually" },
        { icon: Palette, title: "Shape correction", description: "Visual enhancement and symmetry" }
      ],
      uk: [
        { icon: Sparkles, title: "Завжди доглянуті", description: "Губи виглядають свіжими без помади" },
        { icon: Heart, title: "Природний відтінок", description: "Колір підбирається індивідуально" },
        { icon: Palette, title: "Корекція форми", description: "Візуальне збільшення та симетрія" }
      ]
    };
    return benefits[language] || benefits.en;
  };

  const seo = getSEOData();
  const hero = getHeroData();
  const benefits = getBenefits();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl="https://magerovska.com/services/lips"
      />
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-foreground" data-testid="text-page-title">
                {hero.title}
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-medium mb-6" data-testid="text-page-subtitle">
                {hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-page-description">
                {hero.description}
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="text-lg px-8" 
                data-testid="button-book-lips"
              >
                {t('hero.cta')} <ChevronRight className="ml-2" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in" data-delay="200">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg bg-card border" data-testid={`card-benefit-${index}`}>
                    <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>{benefit.title}</h3>
                    <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
