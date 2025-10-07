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
import { ChevronRight, Eye, Clock, Sparkles } from "lucide-react";

export default function Eyeliner() {
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
        title: "Перманентная межресничка Краков | Перманентная стрелка",
        description: "Профессиональный перманентный макияж век в Кракове. Межресничка, стрелки. Выразительный взгляд, безопасные пигменты.",
        keywords: "перманентная межресничка Краков, перманентная стрелка, татуаж век, перманентный макияж глаз цена"
      },
      pl: {
        title: "Kreska Międzyrzęsowa Kraków | Permanentny Eyeliner",
        description: "Profesjonalny makijaż permanentny powiek w Krakowie. Kreska międzyrzęsowa, eyeliner. Wyraziste spojrzenie, bezpieczne pigmenty.",
        keywords: "kreska międzyrzęsowa Kraków, permanentny eyeliner, tatuaż powiek, makijaż permanentny oczu cena"
      },
      en: {
        title: "Permanent Eyeliner Krakow | Lash Line Enhancement",
        description: "Professional permanent eyeliner in Krakow. Lash line enhancement, eyeliner. Expressive look, safe pigments.",
        keywords: "permanent eyeliner Krakow, lash line enhancement, eyelid tattoo, permanent eye makeup price"
      },
      uk: {
        title: "Перманентна міжвійка Краків | Перманентна стрілка",
        description: "Професійний перманентний макіяж повік у Кракові. Міжвійка, стрілки. Виразний погляд, безпечні пігменти.",
        keywords: "перманентна міжвійка Краків, перманентна стрілка, татуаж повік"
      }
    };
    return seoData[language] || seoData.en;
  };

  const getHeroData = () => {
    const heroData: Record<string, { title: string; subtitle: string; description: string }> = {
      ru: {
        title: "Перманентный макияж век",
        subtitle: "Выразительный взгляд без усилий",
        description: "Подчеркните красоту ваших глаз. Межресничка создает эффект густых ресниц, стрелка делает взгляд более выразительным."
      },
      pl: {
        title: "Makijaż Permanentny Powiek",
        subtitle: "Wyraziste spojrzenie bez wysiłku",
        description: "Podkreśl piękno swoich oczu. Kreska międzyrzęsowa tworzy efekt gęstych rzęs, eyeliner sprawia, że spojrzenie jest bardziej wyraziste."
      },
      en: {
        title: "Permanent Eyeliner",
        subtitle: "Expressive look effortlessly",
        description: "Enhance the beauty of your eyes. Lash line creates the effect of fuller lashes, eyeliner makes your look more expressive."
      },
      uk: {
        title: "Перманентний макіяж повік",
        subtitle: "Виразний погляд без зусиль",
        description: "Підкресліть красу ваших очей. Міжвійка створює ефект густих вій, стрілка робить погляд більш виразним."
      }
    };
    return heroData[language] || heroData.en;
  };

  const getBenefits = () => {
    const benefits: Record<string, Array<{ icon: any; title: string; description: string }>> = {
      ru: [
        { icon: Eye, title: "Выразительный взгляд", description: "Глаза выглядят ярче без подводки" },
        { icon: Clock, title: "Экономия времени", description: "Забудьте о ежедневной подводке" },
        { icon: Sparkles, title: "Эффект густых ресниц", description: "Межресничка создает объем" }
      ],
      pl: [
        { icon: Eye, title: "Wyraziste spojrzenie", description: "Oczy wyglądają jaśniej bez eyelinera" },
        { icon: Clock, title: "Oszczędność czasu", description: "Zapomnij o codziennym kreśleniu" },
        { icon: Sparkles, title: "Efekt gęstych rzęs", description: "Kreska międzyrzęsowa dodaje objętości" }
      ],
      en: [
        { icon: Eye, title: "Expressive look", description: "Eyes look brighter without liner" },
        { icon: Clock, title: "Time saving", description: "Forget about daily eyeliner" },
        { icon: Sparkles, title: "Fuller lash effect", description: "Lash line creates volume" }
      ],
      uk: [
        { icon: Eye, title: "Виразний погляд", description: "Очі виглядають яскравіше без підводки" },
        { icon: Clock, title: "Економія часу", description: "Забудьте про щоденну підводку" },
        { icon: Sparkles, title: "Ефект густих вій", description: "Міжвійка створює об'єм" }
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
        canonicalUrl="https://magerovska.com/services/eyeliner"
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
                data-testid="button-book-eyeliner"
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
