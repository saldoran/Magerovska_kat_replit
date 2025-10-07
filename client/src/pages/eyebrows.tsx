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
import { ChevronRight, Clock, Star, Shield } from "lucide-react";

export default function Eyebrows() {
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
        title: "Перманентный макияж бровей Краков | Микроблейдинг, Пудровые брови",
        description: "Профессиональный перманентный макияж бровей в Кракове. Волосковая техника, пудровые брови, омбре. Естественный результат, безопасные пигменты.",
        keywords: "перманент бровей Краков, микроблейдинг, пудровые брови, татуаж бровей, волосковая техника, омбре брови, перманентный макияж бровей цена"
      },
      pl: {
        title: "Makijaż Permanentny Brwi Kraków | Microblading, Brwi Pudrowe",
        description: "Profesjonalny makijaż permanentny brwi w Krakowie. Technika włoskowa, brwi pudrowe, ombre. Naturalny efekt, bezpieczne pigmenty.",
        keywords: "brwi permanentne Kraków, microblading, brwi pudrowe, tatuaż brwi, technika włoskowa, brwi ombre, makijaż permanentny brwi cena"
      },
      en: {
        title: "Permanent Eyebrow Makeup Krakow | Microblading, Powder Brows",
        description: "Professional permanent eyebrow makeup in Krakow. Hair stroke technique, powder brows, ombre. Natural results, safe pigments.",
        keywords: "permanent eyebrows Krakow, microblading, powder brows, eyebrow tattoo, hair stroke technique, ombre brows, permanent eyebrow makeup price"
      },
      uk: {
        title: "Перманентний макіяж брів Краків | Мікроблейдінг, Пудрові брови",
        description: "Професійний перманентний макіяж брів у Кракові. Волоскова техніка, пудрові брови, омбре. Природний результат, безпечні пігменти.",
        keywords: "перманент брів Краків, мікроблейдінг, пудрові брови, татуаж брів, волоскова техніка, омбре брови"
      }
    };
    return seoData[language] || seoData.en;
  };

  const getHeroData = () => {
    const heroData: Record<string, { title: string; subtitle: string; description: string }> = {
      ru: {
        title: "Перманентный макияж бровей",
        subtitle: "Идеальные брови каждый день",
        description: "Создайте естественные, симметричные брови с помощью профессионального перманентного макияжа. Техники: волосковая, пудровая, омбре."
      },
      pl: {
        title: "Makijaż Permanentny Brwi",
        subtitle: "Idealne brwi każdego dnia",
        description: "Stwórz naturalne, symetryczne brwi dzięki profesjonalnemu makijażowi permanentnemu. Techniki: włoskowa, pudrowa, ombre."
      },
      en: {
        title: "Permanent Eyebrow Makeup",
        subtitle: "Perfect brows every day",
        description: "Create natural, symmetrical eyebrows with professional permanent makeup. Techniques: hair stroke, powder, ombre."
      },
      uk: {
        title: "Перманентний макіяж брів",
        subtitle: "Ідеальні брови щодня",
        description: "Створіть природні, симетричні брови за допомогою професійного перманентного макіяжу. Техніки: волоскова, пудрова, омбре."
      }
    };
    return heroData[language] || heroData.en;
  };

  const getBenefits = () => {
    const benefits: Record<string, Array<{ icon: any; title: string; description: string }>> = {
      ru: [
        { icon: Clock, title: "Экономия времени", description: "Забудьте о ежедневном макияже бровей" },
        { icon: Star, title: "Естественный результат", description: "Брови выглядят как натуральные" },
        { icon: Shield, title: "Безопасные пигменты", description: "Сертифицированные материалы премиум-класса" }
      ],
      pl: [
        { icon: Clock, title: "Oszczędność czasu", description: "Zapomnij o codziennym malowaniu brwi" },
        { icon: Star, title: "Naturalny efekt", description: "Brwi wyglądają jak naturalne" },
        { icon: Shield, title: "Bezpieczne pigmenty", description: "Certyfikowane materiały premium" }
      ],
      en: [
        { icon: Clock, title: "Time saving", description: "Forget about daily eyebrow makeup" },
        { icon: Star, title: "Natural result", description: "Eyebrows look natural" },
        { icon: Shield, title: "Safe pigments", description: "Certified premium materials" }
      ],
      uk: [
        { icon: Clock, title: "Економія часу", description: "Забудьте про щоденний макіяж брів" },
        { icon: Star, title: "Природний результат", description: "Брови виглядають натурально" },
        { icon: Shield, title: "Безпечні пігменти", description: "Сертифіковані матеріали преміум-класу" }
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
        canonicalUrl="https://magerovska.com/services/eyebrows"
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
                data-testid="button-book-eyebrows"
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
