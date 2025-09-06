import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Больно ли делать перманентный макияж?",
      answer: "Процедура проходит под местной анестезией, поэтому дискомфорт минимален. Большинство клиенток описывают ощущения как легкое покалывание. Для особо чувствительных зон используются дополнительные обезболивающие средства."
    },
    {
      id: 2,
      question: "Сколько держится результат?",
      answer: "Длительность зависит от зоны: брови держатся 1-2 года, губы 1-1.5 года, межресничка 2-3 года. Со временем пигмент постепенно светлеет, что позволяет корректировать форму и цвет в соответствии с изменениями вашего стиля."
    },
    {
      id: 3,
      question: "Какой нужен уход после процедуры?",
      answer: "В первые дни важно избегать попадания воды, не трогать корочки, не загорать. Обрабатывать специальными средствами, которые я предоставлю. Полное заживление происходит за 7-14 дней. Подробные инструкции выдаются после процедуры."
    },
    {
      id: 4,
      question: "Есть ли противопоказания?",
      answer: "Да, есть ряд ограничений: беременность и лактация, онкология, сахарный диабет 1 типа, нарушения свертываемости крови, келоидные рубцы, острые воспалительные процессы. На консультации обязательно обсуждаем все нюансы и противопоказания."
    },
    {
      id: 5,
      question: "Нужна ли коррекция?",
      answer: "Коррекция рекомендуется через 4-6 недель после первой процедуры для достижения идеального результата. Это нормальная практика, так как кожа у всех заживает по-разному. В большинстве случаев одной коррекции достаточно на весь период носки."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="faq-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Частые вопросы</h2>
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
                <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </Button>
              {openFaq === faq.id && (
                <div className="px-6 pb-4" data-testid={`faq-content-${faq.id}`}>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
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
