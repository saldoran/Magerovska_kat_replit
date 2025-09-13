import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { id: 1, questionKey: 'faq.item.1.question', answerKey: 'faq.item.1.answer' },
    { id: 2, questionKey: 'faq.item.2.question', answerKey: 'faq.item.2.answer' },
    { id: 3, questionKey: 'faq.item.3.question', answerKey: 'faq.item.3.answer' },
    { id: 4, questionKey: 'faq.item.4.question', answerKey: 'faq.item.4.answer' },
    { id: 5, questionKey: 'faq.item.5.question', answerKey: 'faq.item.5.answer' },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="faq-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('faq.title')}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border rounded-lg overflow-hidden fade-in"
              data-delay={100 * (index + 1)}
              data-testid={`faq-item-${faq.id}`}
            >
              <Button
                variant="ghost"
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
                onClick={() => toggleFaq(faq.id)}
                data-testid={`faq-trigger-${faq.id}`}
              >
                <h3 className="font-medium text-gray-900 pr-4">{t(faq.questionKey)}</h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </Button>
              {openFaq === faq.id && (
                <div className="px-6 pb-4" data-testid={`faq-content-${faq.id}`}>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(faq.answerKey)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
