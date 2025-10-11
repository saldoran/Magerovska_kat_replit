import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedPath } from "@/utils/languagePaths";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  const { t, language } = useLanguage();
  const localizedHomePath = getLocalizedPath(language, "/");
  const contactHref = localizedHomePath === "/" ? "/#contact" : `${localizedHomePath}#contact`;

  return (
    <>
      <SEO
        title={`404 | ${t('site.title')}`}
        description={t('notfound.description')}
        canonicalUrl="https://magerovska.com/404"
      />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <Card className="w-full max-w-xl shadow-lg">
            <CardContent className="pt-10 pb-12">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-10 w-10 text-red-500" aria-hidden="true" />
                  <h1 className="text-3xl font-semibold text-gray-900">{t('notfound.title')}</h1>
                </div>
                <p className="text-base text-gray-600 max-w-lg">{t('notfound.description')}</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center">
                  <Link href={localizedHomePath} className="flex-1 sm:flex-none">
                    <Button className="w-full">
                      <ArrowLeft className="h-4 w-4" />
                      {t('notfound.backHome')}
                    </Button>
                  </Link>
                  <Button asChild variant="outline" className="flex-1 sm:flex-none">
                    <a href={contactHref}>
                      <MessageCircle className="h-4 w-4" />
                      {t('notfound.contact')}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}
