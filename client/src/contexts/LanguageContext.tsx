import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'pl' | 'en' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navigation
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Перманентный макияж, который выглядит естественно — как вы',
    'hero.subtitle': 'Брови, губы, межресничка + 20% скидка на первый визит',
    'hero.slogan': 'Перманентный макияж, который выглядит естественно — как вы. Брови, губы, межресничка в Кракове.',
    'hero.cta': 'Записаться на процедуру',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Портфолио работ',
    'portfolio.subtitle': 'Реальные результаты наших клиенток',
    'portfolio.instagram': 'Больше работ в Instagram',
  // Testimonials
  'testimonials.title': 'Отзывы',
  'testimonials.item.1.name': 'Анна К.',
  'testimonials.item.1.date': '15 декабря 2023',
  'testimonials.item.1.text': 'Катерина - настоящий профессионал! Брови получились именно такими, как я хотела - естественными и красивыми. Процедура прошла комфортно, заживление быстрое. Рекомендую всем подругам!',
  'testimonials.item.2.name': 'Мария С.',
  'testimonials.item.2.date': '8 декабря 2023',
  'testimonials.item.2.text': 'Сделала lip blush у Кати - результат превзошел все ожидания! Губы выглядят естественно, но при этом очень выразительно. Теперь экономлю время на макияж каждое утро. Спасибо за профессионализм!',
  'testimonials.item.3.name': 'Елена Т.',
  'testimonials.item.3.date': '2 декабря 2023',
  'testimonials.item.3.text': 'Долго искала мастера для перманентного макияжа и не пожалела, что выбрала Катю. Очень внимательная к деталям, аккуратная работа, отличный результат. Приду обязательно на коррекцию и за другими процедурами!',
  // Portfolio items
  'portfolio.item.1.title': 'Пудровые брови',
  'portfolio.item.1.alt': 'Пудровые брови - работа мастера Екатерины Магеровской',
  'portfolio.item.2.title': 'Lip Blush',
  'portfolio.item.2.alt': 'Lip Blush - перманентный макияж губ',
  'portfolio.item.3.title': 'Брови Ombre',
  'portfolio.item.3.alt': 'Техника Ombre для бровей',
  'portfolio.item.4.title': 'Межресничка',
  'portfolio.item.4.alt': 'Межресничный татуаж',
  'portfolio.item.5.title': 'Коррекция бровей',
  'portfolio.item.5.alt': 'Коррекция формы и цвета бровей',
  'portfolio.item.6.title': 'Результаты работы',
  'portfolio.item.6.alt': 'Результаты работы мастера',
    
    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Профессиональный перманентный макияж с гарантией качества',
    'services.eyebrows.title': 'Брови',
    'services.eyebrows.desc': 'Натуральные брови с идеальной формой, подчеркивающей ваши черты лица.',
    'services.lips.title': 'Губы',
    'services.lips.desc': 'Естественный цвет губ с долговременным эффектом и красивым контуром.',
    'services.eyeliner.title': 'Межресничка',
    'services.eyeliner.desc': 'Деликатная межресничная татуировка для выразительного взгляда.',
    
    // Pricing
    'pricing.title': 'Цены',
    'pricing.subtitle': 'Прозрачные цены без скрытых доплат',
    'pricing.eyebrows': 'Брови',
    'pricing.lips': 'Губы',
    'pricing.eyeliner': 'Межресничка',
    'pricing.currency': 'злотых',
    'pricing.note': 'Цены включают первичную процедуру и коррекцию через 4-6 недель',
  // Pricing extra
  'pricing.popular': 'Популярно',
  'pricing.discountRibbon': '🎉 Скидка 20% на первый визит',
  'pricing.freeCorrection': 'Коррекция через 4-6 недель',
  'pricing.certifiedPigments': 'Сертифицированные пигменты',
  'pricing.bookButton': 'Записаться на процедуру',
  'pricing.packages.title': '💎 Комплексные предложения',
  'pricing.package.browsLips': 'Брови + Губы',
  'pricing.package.allZones': 'Все три зоны',
  // Pricing services
  'pricing.eyebrows.service.powder': 'Пудровые брови',
  'pricing.eyebrows.service.ombre': 'Ombré брови',
  'pricing.eyebrows.service.correction': 'Коррекция',
  'pricing.lips.service.lipBlush': 'Lip Blush',
  'pricing.lips.service.contour': 'Контур губ',
  'pricing.lips.service.correction': 'Коррекция',
  'pricing.eyeliner.service.upper': 'Межресничка верх',
  'pricing.eyeliner.service.lower': 'Межресничка низ',
  'pricing.eyeliner.service.correction': 'Коррекция',
    'pricing.correction': 'Коррекция',
    'pricing.correction.service.any': 'Любой зоны',
    
    // Contact
    'contact.title': 'Записаться на процедуру',
    'contact.subtitle': 'Оставьте заявку, и мы свяжемся с вами в течение 24 часов',
    'contact.form.name': 'Имя',
    'contact.form.phone': 'Телефон',
    'contact.form.service': 'Выберите услугу',
    'contact.form.service.eyebrows': 'Брови',
    'contact.form.service.lips': 'Губы', 
    'contact.form.service.eyeliner': 'Межресничка',
    'contact.form.message': 'Сообщение (необязательно)',
    'contact.form.submit': 'Отправить заявку',
  'contact.form.placeholder.name': 'Как к вам обращаться?',
  'contact.form.placeholder.phone': '+48 xxx xxx xxx',
  'contact.form.placeholder.message': 'Расскажите о ваших пожеланиях или задайте вопросы',
  'contact.form.service.complex': 'Комплексная процедура',
  'contact.form.service.consultation': 'Консультация',
  'contact.toast.successDescription': 'Ваша заявка была успешно отправлена. Мы свяжемся с вами в ближайшее время.',
  'contact.toast.errorTitle': 'Ошибка',
  'contact.toast.errorDescription': 'Не удалось отправить заявку. Попробуйте еще раз.',
    'contact.success': 'Спасибо! Ваша заявка отправлена.',
    
    // Footer
    'footer.address': 'Адрес',
    'footer.phone': 'Телефон',
    'footer.email': 'Email',
    'footer.social': 'Социальные сети',
    'footer.copyright': '© 2023 Magerovska Permanent. Все права защищены.',
  // Process
  'process.title': 'Процесс',
  'process.step1.title': 'Консультация',
  'process.step1.description': 'Обсуждаем ваши пожелания, анализируем форму лица, выбираем подходящую технику и цвет',
  'process.step2.title': 'Эскиз',
  'process.step2.description': 'Создаем идеальную форму с помощью замеров по золотому сечению и вашим индивидуальным особенностям',
  'process.step3.title': 'Пигментация',
  'process.step3.description': 'Процедура выполняется с использованием качественных пигментов и современного оборудования',
  'process.step4.title': 'Уход',
  'process.step4.description': 'Подробные рекомендации по уходу и коррекция через 4-6 недель при необходимости',
  // Services labels and durations
  'services.label.duration': 'Длительность:',
  'services.label.healing': 'Заживление:',
  'services.label.lasting': 'Держится:',
  'services.eyebrows.duration': '2-3 часа',
  'services.eyebrows.healing': '7-14 дней',
  'services.eyebrows.lasting': '1-2 года',
  'services.lips.duration': '2-2.5 часа',
  'services.lips.healing': '5-7 дней',
  'services.lips.lasting': '1-1.5 года',
  'services.eyeliner.duration': '1.5-2 часа',
  'services.eyeliner.healing': '3-5 дней',
  'services.eyeliner.lasting': '2-3 года',
  // FAQ
  'faq.title': 'Частые вопросы',
  'faq.item.1.question': 'Больно ли делать перманентный макияж?',
  'faq.item.1.answer': 'Процедура проходит под местной анестезией, поэтому дискомфорт минимален. Большинство клиенток описывают ощущения как легкое покалывание. Для особо чувствительных зон используются дополнительные обезболивающие средства.',
  'faq.item.2.question': 'Сколько держится результат?',
  'faq.item.2.answer': 'Длительность зависит от зоны: брови держатся 1-2 года, губы 1-1.5 года, межресничка 2-3 года. Со временем пигмент постепенно светлеет, что позволяет корректировать форму и цвет в соответствии с изменениями вашего стиля.',
  'faq.item.3.question': 'Какой нужен уход после процедуры?',
  'faq.item.3.answer': 'В первые дни важно избегать попадания воды, не трогать корочки, не загорать. Обрабатывать специальными средствами, которые я предоставлю. Полное заживление происходит за 7-14 дней. Подробные инструкции выдаются после процедуры.',
  'faq.item.4.question': 'Есть ли противопоказания?',
  'faq.item.4.answer': 'Да, есть ряд ограничений: беременность и лактация, онкология, сахарный диабет 1 типа, нарушения свертываемости крови, келоидные рубцы, острые воспалительные процессы. На консультации обязательно обсуждаем все нюансы и противопоказания.',
  'faq.item.5.question': 'Нужна ли коррекция?',
  'faq.item.5.answer': 'Коррекция рекомендуется через 4-6 недель после первой процедуры для достижения идеального результата. Это нормальная практика, так как кожа у всех заживает по-разному. В большинстве случаев одной коррекции достаточно на весь период носки.',
  },
  pl: {
    // Navigation
    'nav.services': 'Usługi',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Cennik',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Makijaż permanentny, który wygląda naturalnie — jak Ty',
    'hero.subtitle': 'Brwi, usta, kreska + 20% zniżki na pierwszą wizytę',
    'hero.slogan': 'Makijaż permanentny, który wygląda naturalnie — jak Ty. Brwi, usta, kreska w Krakowie.',
    'hero.cta': 'Umów zabieg',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Portfolio prac',
    'portfolio.subtitle': 'Prawdziwe rezultaty naszych klientek',
    'portfolio.instagram': 'Więcej prac na Instagram',
  // Testimonials
  'testimonials.title': 'Opinie',
  'testimonials.item.1.name': 'Anna K.',
  'testimonials.item.1.date': '15 grudnia 2023',
  'testimonials.item.1.text': 'Katerina jest prawdziwym profesjonalistą! Brwi wyszły dokładnie takie, jak chciałam - naturalne i piękne. Zabieg przebiegł komfortowo, gojenie szybkie. Polecam wszystkim przyjaciółkom!',
  'testimonials.item.2.name': 'Maria S.',
  'testimonials.item.2.date': '8 grudnia 2023',
  'testimonials.item.2.text': 'Zrobiłam lip blush u Katii - rezultat przerósł oczekiwania! Usta wyglądają naturalnie, ale jednocześnie bardzo wyraziste. Teraz oszczędzam czas na makijaż każdego ranka. Dziękuję za profesjonalizm!',
  'testimonials.item.3.name': 'Elena T.',
  'testimonials.item.3.date': '2 grudnia 2023',
  'testimonials.item.3.text': 'Długo szukałam mistrza do makijażu permanentnego i nie żałuję wyboru Katii. Bardzo dokładna, staranna praca, świetny efekt. Na pewno wrócę na korektę i inne zabiegi!',
    
    // Services
    'services.title': 'Nasze usługi',
    'services.subtitle': 'Profesjonalny makijaż permanentny z gwarancją jakości',
    'services.eyebrows.title': 'Brwi',
    'services.eyebrows.desc': 'Naturalne brwi o idealnym kształcie, podkreślającym rysy twarzy.',
    'services.lips.title': 'Usta',
    'services.lips.desc': 'Naturalny kolor ust z długotrwałym efektem i pięknym konturem.',
    'services.eyeliner.title': 'Kreska',
    'services.eyeliner.desc': 'Delikatny tatuaż między rzęsami dla wyrazistego spojrzenia.',
    
    // Pricing
    'pricing.title': 'Cennik',
    'pricing.subtitle': 'Przejrzyste ceny bez ukrytych dopłat',
    'pricing.eyebrows': 'Brwi',
    'pricing.lips': 'Usta',
    'pricing.eyeliner': 'Kreska',
    'pricing.currency': 'złotych',
    'pricing.note': 'Ceny obejmują zabieg podstawowy i korektę po 4-6 tygodniach',
    // Pricing extra
    'pricing.popular': 'Popularne',
    'pricing.discountRibbon': '🎉 20% zniżki na pierwszą wizytę',
    'pricing.freeCorrection': 'Korekta po 4-6 tygodniach',
    'pricing.certifiedPigments': 'Certyfikowane pigmenty',
    'pricing.bookButton': 'Umów zabieg',
    'pricing.packages.title': '💎 Oferty pakietowe',
    'pricing.package.browsLips': 'Brwi + Usta',
    'pricing.package.allZones': 'Wszystkie trzy strefy',
    // Pricing services
    'pricing.eyebrows.service.powder': 'Brwi pudrowe',
    'pricing.eyebrows.service.ombre': 'Ombré brwi',
    'pricing.eyebrows.service.correction': 'Korekta',
    'pricing.lips.service.lipBlush': 'Lip Blush',
    'pricing.lips.service.contour': 'Kontur ust',
    'pricing.lips.service.correction': 'Korekta',
    'pricing.eyeliner.service.upper': 'Międzyrzęsna góra',
    'pricing.eyeliner.service.lower': 'Międzyrzęsna dół',
    'pricing.eyeliner.service.correction': 'Korekta',
    'pricing.correction': 'Korekta',
    'pricing.correction.service.any': 'Dowolna strefa',
    
    // Contact
    'contact.title': 'Umów zabieg',
    'contact.subtitle': 'Zostaw zgłoszenie, a skontaktujemy się z Tobą w ciągu 24 godzin',
    'contact.form.name': 'Imię',
    'contact.form.phone': 'Telefon',
    'contact.form.service': 'Wybierz usługę',
    'contact.form.service.eyebrows': 'Brwi',
    'contact.form.service.lips': 'Usta',
    'contact.form.service.eyeliner': 'Kreska',
    'contact.form.message': 'Wiadomość (opcjonalnie)',
    'contact.form.submit': 'Wyślij zgłoszenie',
  'contact.form.placeholder.name': 'Jak się do Ciebie zwracać?',
  'contact.form.placeholder.phone': '+48 xxx xxx xxx',
  'contact.form.placeholder.message': 'Opisz swoje życzenia lub zadaj pytania',
  'contact.form.service.complex': 'Zabieg kompleksowy',
  'contact.form.service.consultation': 'Konsultacja',
  'contact.toast.successDescription': 'Twoje zgłoszenie zostało pomyślnie wysłane. Skontaktujemy się z Tobą wkrótce.',
  'contact.toast.errorTitle': 'Błąd',
  'contact.toast.errorDescription': 'Nie udało się wysłać zgłoszenia. Spróbuj ponownie.',
    'contact.success': 'Dziękujemy! Twoje zgłoszenie zostało wysłane.',
    
    // Footer
    'footer.address': 'Adres',
    'footer.phone': 'Telefon',
    'footer.email': 'Email',
    'footer.social': 'Media społecznościowe',
    'footer.copyright': '© 2023 Magerovska Permanent. Wszystkie prawa zastrzeżone.',
  // Not Found
  'notfound.title': '404 Strona nie znaleziona',
  'notfound.description': 'Czy вы забыли добавить страницу в маршрутизатор?',
  // Process
  'process.title': 'Proces',
  'process.step1.title': 'Konsultacja',
  'process.step1.description': 'Omówimy Twoje życzenia, przeanalizujemy kształt twarzy, wybierzemy odpowiednią technikę i kolor',
  'process.step2.title': 'Szkic',
  'process.step2.description': 'Tworzymy idealny kształt za pomocą pomiarów i indywidualnych cech',
  'process.step3.title': 'Pigmentacja',
  'process.step3.description': 'Zabieg wykonywany z użyciem wysokiej jakości pigmentów i nowoczesnego sprzętu',
  'process.step4.title': 'Pielęgnacja',
  'process.step4.description': 'Szczegółowe zalecenia pielęgnacyjne i korekta po 4-6 tygodniach w razie potrzeby',
  // Services labels and durations
  'services.label.duration': 'Czas trwania:',
  'services.label.healing': 'Okres gojenia:',
  'services.label.lasting': 'Utrzymuje się:',
  'services.eyebrows.duration': '2-3 godz.',
  'services.eyebrows.healing': '7-14 dni',
  'services.eyebrows.lasting': '1-2 lata',
  'services.lips.duration': '2-2.5 godz.',
  'services.lips.healing': '5-7 dni',
  'services.lips.lasting': '1-1.5 roku',
  'services.eyeliner.duration': '1.5-2 godz.',
  'services.eyeliner.healing': '3-5 dni',
  'services.eyeliner.lasting': '2-3 lata',
  // FAQ
  'faq.title': 'Najczęściej zadawane pytania',
  'faq.item.1.question': 'Czy makijaż permanentny boli?',
  'faq.item.1.answer': 'Zabieg wykonywany jest w znieczuleniu miejscowym, więc dyskomfort jest minimalny. Większość klientek opisuje odczucia jako lekkie kłucie. Dla szczególnie wrażliwych stref stosujemy dodatkowe środki przeciwbólowe.',
  'faq.item.2.question': 'Jak długo utrzymuje się efekt?',
  'faq.item.2.answer': 'Trwałość zależy od strefy: brwi utrzymują się 1-2 lata, usta 1-1.5 roku, kreska 2-3 lata. Z czasem pigment stopniowo blaknie, co pozwala korygować kształt i kolor zgodnie ze zmianami stylu.',
  'faq.item.3.question': 'Jaka pielęgnacja jest potrzebna po zabiegu?',
  'faq.item.3.answer': 'W pierwszych dniach ważne jest unikanie kontaktu z wodą, nie dotykanie strupków, nie opalanie. Należy aplikować specjalne środki, które otrzymasz. Pełne zagojenie następuje w ciągu 7-14 dni. Szczegółowe instrukcje wydawane są po zabiegu.',
  'faq.item.4.question': 'Czy są przeciwwskazania?',
  'faq.item.4.answer': 'Tak, istnieją ograniczenia: ciąża i laktacja, choroby nowotworowe, cukrzyca typu 1, zaburzenia krzepnięcia krwi, skłonność do bliznowców, ostre procesy zapalne. Na konsultacji omawiamy wszystkie niuanse i przeciwwskazania.',
  'faq.item.5.question': 'Czy potrzebna jest korekta?',
  'faq.item.5.answer': 'Korekta zalecana jest po 4-6 tygodniach od pierwszego zabiegu dla osiągnięcia idealnego rezultatu. To normalna praktyka, ponieważ skóra goi się u każdego inaczej. W większości przypadków jedna korekta wystarcza na cały okres noszenia.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Permanent makeup that looks natural — like you',
    'hero.subtitle': 'Eyebrows, lips, eyeliner + 20% off first visit',
    'hero.slogan': 'Permanent makeup that looks natural — like you. Eyebrows, lips, eyeliner in Krakow.',
    'hero.cta': 'Book procedure',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Portfolio of works',
    'portfolio.subtitle': 'Real results of our clients',
    'portfolio.instagram': 'More works on Instagram',
  // Testimonials
  'testimonials.title': 'Testimonials',
  'testimonials.item.1.name': 'Anna K.',
  'testimonials.item.1.date': '15 December 2023',
  'testimonials.item.1.text': 'Katerina is a true professional! My brows turned out exactly as I wanted — natural and beautiful. The procedure was comfortable and healed quickly. I recommend her to all my friends!',
  'testimonials.item.2.name': 'Maria S.',
  'testimonials.item.2.date': '8 December 2023',
  'testimonials.item.2.text': 'I had a lip blush by Katya — the result exceeded expectations! My lips look natural yet very expressive. I now save time on makeup every morning. Thank you for the professionalism!',
  'testimonials.item.3.name': 'Elena T.',
  'testimonials.item.3.date': '2 December 2023',
  'testimonials.item.3.text': 'I searched a long time for a permanent makeup artist and I don\'t regret choosing Katya. Very attentive to details, neat work, great result. I will definitely come back for a touch-up and other procedures!',
  // Portfolio items
  'portfolio.item.1.title': 'Powder brows',
  'portfolio.item.1.alt': "Powder brows - work by master Ekaterina Magerovska",
  'portfolio.item.2.title': 'Lip Blush',
  'portfolio.item.2.alt': 'Lip Blush - permanent lip makeup',
  'portfolio.item.3.title': 'Ombré brows',
  'portfolio.item.3.alt': 'Ombré technique for brows',
  'portfolio.item.4.title': 'Eyeliner',
  'portfolio.item.4.alt': 'Lashline tattoo',
  'portfolio.item.5.title': 'Brow correction',
  'portfolio.item.5.alt': 'Correction of brow shape and color',
  'portfolio.item.6.title': 'Work results',
  'portfolio.item.6.alt': "Master's work results",
    
    // Services
    'services.title': 'Our services',
    'services.subtitle': 'Professional permanent makeup with quality guarantee',
    'services.eyebrows.title': 'Eyebrows',
    'services.eyebrows.desc': 'Natural eyebrows with perfect shape that enhances your facial features.',
    'services.lips.title': 'Lips',
    'services.lips.desc': 'Natural lip color with long-lasting effect and beautiful contour.',
    'services.eyeliner.title': 'Eyeliner',
    'services.eyeliner.desc': 'Delicate lash line tattoo for expressive look.',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent prices with no hidden fees',
    'pricing.eyebrows': 'Eyebrows',
    'pricing.lips': 'Lips',
    'pricing.eyeliner': 'Eyeliner',
    'pricing.currency': 'PLN',
    'pricing.note': 'Prices include initial procedure and touch-up after 4-6 weeks',
    // Pricing extra
    'pricing.popular': 'Popular',
    'pricing.discountRibbon': '🎉 20% off first visit',
    'pricing.freeCorrection': 'Touch-up after 4-6 weeks',
    'pricing.certifiedPigments': 'Certified pigments',
    'pricing.bookButton': 'Book procedure',
    'pricing.packages.title': '💎 Package deals',
    'pricing.package.browsLips': 'Brows + Lips',
    'pricing.package.allZones': 'All three zones',
    // Pricing services
    'pricing.eyebrows.service.powder': 'Powder brows',
    'pricing.eyebrows.service.ombre': 'Ombré brows',
    'pricing.eyebrows.service.correction': 'Correction',
    'pricing.lips.service.lipBlush': 'Lip Blush',
    'pricing.lips.service.contour': 'Lip contour',
    'pricing.lips.service.correction': 'Correction',
    'pricing.eyeliner.service.upper': 'Upper lashline',
    'pricing.eyeliner.service.lower': 'Lower lashline',
    'pricing.eyeliner.service.correction': 'Correction',
    'pricing.correction': 'Correction',
    'pricing.correction.service.any': 'Any zone',
    
    // Contact
    'contact.title': 'Book procedure',
    'contact.subtitle': 'Leave a request and we will contact you within 24 hours',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Choose service',
    'contact.form.service.eyebrows': 'Eyebrows',
    'contact.form.service.lips': 'Lips',
    'contact.form.service.eyeliner': 'Eyeliner',
    'contact.form.message': 'Message (optional)',
    'contact.form.submit': 'Send request',
  'contact.form.placeholder.name': 'How shall we call you?',
  'contact.form.placeholder.phone': '+48 xxx xxx xxx',
  'contact.form.placeholder.message': 'Tell us your wishes or ask questions',
  'contact.form.service.complex': 'Complex procedure',
  'contact.form.service.consultation': 'Consultation',
  'contact.toast.successDescription': 'Your request has been successfully submitted. We will contact you shortly.',
  'contact.toast.errorTitle': 'Error',
  'contact.toast.errorDescription': 'Failed to send request. Please try again.',
    'contact.success': 'Thank you! Your request has been sent.',
    
    // Footer
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.social': 'Social media',
    'footer.copyright': '© 2023 Magerovska Permanent. All rights reserved.',
  // Not Found
  'notfound.title': '404 Page Not Found',
  'notfound.description': 'Did you forget to add the page to the router?',
  // Process
  'process.title': 'Process',
  'process.step1.title': 'Consultation',
  'process.step1.description': 'We discuss your wishes, analyze face shape, select the appropriate technique and color',
  'process.step2.title': 'Design',
  'process.step2.description': 'We create the perfect shape using measurements and your individual features',
  'process.step3.title': 'Pigmentation',
  'process.step3.description': 'The procedure is performed using quality pigments and modern equipment',
  'process.step4.title': 'Aftercare',
  'process.step4.description': 'Detailed aftercare recommendations and a touch-up after 4-6 weeks if needed',
  // Services labels and durations
  'services.label.duration': 'Duration:',
  'services.label.healing': 'Healing:',
  'services.label.lasting': 'Lasts:',
  'services.eyebrows.duration': '2-3 hours',
  'services.eyebrows.healing': '7-14 days',
  'services.eyebrows.lasting': '1-2 years',
  'services.lips.duration': '2-2.5 hours',
  'services.lips.healing': '5-7 days',
  'services.lips.lasting': '1-1.5 years',
  'services.eyeliner.duration': '1.5-2 hours',
  'services.eyeliner.healing': '3-5 days',
  'services.eyeliner.lasting': '2-3 years',
  // FAQ
  'faq.title': 'Frequently Asked Questions',
  'faq.item.1.question': 'Does permanent makeup hurt?',
  'faq.item.1.answer': 'The procedure is performed under local anesthesia, so discomfort is minimal. Most clients describe sensations as light tingling. For particularly sensitive areas, we use additional pain relief.',
  'faq.item.2.question': 'How long does the result last?',
  'faq.item.2.answer': 'Duration depends on the area: eyebrows last 1-2 years, lips 1-1.5 years, eyeliner 2-3 years. Over time, the pigment gradually fades, allowing you to adjust shape and color according to changes in your style.',
  'faq.item.3.question': 'What aftercare is needed?',
  'faq.item.3.answer': 'In the first days, it\'s important to avoid water contact, not touch scabs, avoid sun exposure. Apply special products I will provide. Complete healing takes 7-14 days. Detailed instructions are given after the procedure.',
  'faq.item.4.question': 'Are there any contraindications?',
  'faq.item.4.answer': 'Yes, there are restrictions: pregnancy and lactation, cancer, type 1 diabetes, blood clotting disorders, keloid scars, acute inflammatory processes. During consultation, we discuss all nuances and contraindications.',
  'faq.item.5.question': 'Is a touch-up needed?',
  'faq.item.5.answer': 'A touch-up is recommended 4-6 weeks after the first procedure to achieve the perfect result. This is normal practice since everyone\'s skin heals differently. In most cases, one touch-up is sufficient for the entire wearing period.',
  },
  uk: {
    // Navigation
    'nav.services': 'Послуги',
    'nav.portfolio': 'Портфоліо',
    'nav.pricing': 'Ціни',
    'nav.contact': 'Контакти',
    
    // Hero
    'hero.title': 'Перманентний макіяж, що виглядає природньо — як ви',
    'hero.subtitle': 'Брови, губи, міжвійкова + 20% знижка на перший візит',
    'hero.slogan': 'Перманентний макіяж, що виглядає природньо — як ви. Брови, губи, міжвійкова в Києві.',
    'hero.cta': 'Записатися на процедуру',
    'hero.brand': 'MAGEROVSKA PERMANENT',
    
    // Portfolio
    'portfolio.title': 'Портфоліо робіт',
    'portfolio.subtitle': 'Реальні результати наших клієнток',
    'portfolio.instagram': 'Більше робіт в Instagram',
    // Testimonials
    'testimonials.title': 'Відгуки',
    'testimonials.item.1.name': 'Анна К.',
    'testimonials.item.1.date': '15 грудня 2023',
    'testimonials.item.1.text': 'Катерина - справжній професіонал! Брови вийшли саме такими, як я хотіла - природними і красивими. Процедура пройшла комфортно, загоювання швидке. Рекомендую всім подругам!',
    'testimonials.item.2.name': 'Марія С.',
    'testimonials.item.2.date': '8 грудня 2023',
    'testimonials.item.2.text': 'Зробила lip blush у Каті - результат перевершив усі сподівання! Губи виглядають природньо, але при цьому дуже виразно. Тепер економлю час на макіяж кожного ранку. Дякую за професіоналізм!',
    'testimonials.item.3.name': 'Олена Т.',
    'testimonials.item.3.date': '2 грудня 2023',
    'testimonials.item.3.text': 'Довго шукала майстра для перманентного макіяжу і не пожалкувала, що обрала Катю. Дуже уважна до деталей, акуратна робота, відмінний результат. Прийду обов\'язково на корекцію та за іншими процедурами!',
    // Portfolio items
    'portfolio.item.1.title': 'Пудрові брови',
    'portfolio.item.1.alt': 'Пудрові брови - робота майстра Катерини Магеровської',
    'portfolio.item.2.title': 'Lip Blush',
    'portfolio.item.2.alt': 'Lip Blush - перманентний макіяж губ',
    'portfolio.item.3.title': 'Брови Ombre',
    'portfolio.item.3.alt': 'Техніка Ombre для брів',
    'portfolio.item.4.title': 'Міжвійкова',
    'portfolio.item.4.alt': 'Міжвійковий татуаж',
    'portfolio.item.5.title': 'Корекція брів',
    'portfolio.item.5.alt': 'Корекція форми та кольору брів',
    'portfolio.item.6.title': 'Результати роботи',
    'portfolio.item.6.alt': 'Результати роботи майстра',
      
    // Services
    'services.title': 'Наші послуги',
    'services.subtitle': 'Професійний перманентний макіяж з гарантією якості',
    'services.eyebrows.title': 'Брови',
    'services.eyebrows.desc': 'Натуральні брови з ідеальною формою, що підкреслює ваші риси обличчя.',
    'services.lips.title': 'Губи',
    'services.lips.desc': 'Природний колір губ з довготривалим ефектом і красивим контуром.',
    'services.eyeliner.title': 'Міжвійкова',
    'services.eyeliner.desc': 'Делікатна міжвійкова татуировка для виразного погляду.',
    
    // Pricing
    'pricing.title': 'Ціни',
    'pricing.subtitle': 'Прозорі ціни без прихованих доплат',
    'pricing.eyebrows': 'Брови',
    'pricing.lips': 'Губи',
    'pricing.eyeliner': 'Міжвійкова',
    'pricing.currency': 'гривень',
    'pricing.note': 'Ціни включають первинну процедуру і корекцію через 4-6 тижнів',
    // Pricing extra
    'pricing.popular': 'Популярно',
    'pricing.discountRibbon': '🎉 Знижка 20% на перший візит',
    'pricing.freeCorrection': 'Корекція через 4-6 тижнів',
    'pricing.certifiedPigments': 'Сертифіковані пігменти',
    'pricing.bookButton': 'Записатися на процедуру',
    'pricing.packages.title': '💎 Комплексні пропозиції',
    'pricing.package.browsLips': 'Брови + Губи',
    'pricing.package.allZones': 'Усі три зони',
    // Pricing services
    'pricing.eyebrows.service.powder': 'Пудрові брови',
    'pricing.eyebrows.service.ombre': 'Ombré брови',
    'pricing.eyebrows.service.correction': 'Корекція',
    'pricing.lips.service.lipBlush': 'Lip Blush',
    'pricing.lips.service.contour': 'Контур губ',
    'pricing.lips.service.correction': 'Корекція',
    'pricing.eyeliner.service.upper': 'Міжвійкова верх',
    'pricing.eyeliner.service.lower': 'Міжвійкова низ',
    'pricing.eyeliner.service.correction': 'Корекція',
    'pricing.correction': 'Корекція',
    'pricing.correction.service.any': 'Будь-якої зони',
    
    // Contact
    'contact.title': 'Записатися на процедуру',
    'contact.subtitle': 'Залиште заявку, і ми зв\'яжемось з вами протягом 24 годин',
    'contact.form.name': 'Ім\'я',
    'contact.form.phone': 'Телефон',
    'contact.form.service': 'Оберіть послугу',
    'contact.form.service.eyebrows': 'Брови',
    'contact.form.service.lips': 'Губи', 
    'contact.form.service.eyeliner': 'Міжвійкова',
    'contact.form.message': 'Повідомлення (необов\'язково)',
    'contact.form.submit': 'Надіслати заявку',
    'contact.form.placeholder.name': 'Як до вас звертатися?',
    'contact.form.placeholder.phone': '+380 xxx xxx xxx',
    'contact.form.placeholder.message': 'Розкажіть про ваші побажання або поставте питання',
    'contact.form.service.complex': 'Комплексна процедура',
    'contact.form.service.consultation': 'Консультація',
    'contact.toast.successDescription': 'Вашу заявку було успішно надіслано. Ми зв\'яжемось з вами найближчим часом.',
    'contact.toast.errorTitle': 'Помилка',
    'contact.toast.errorDescription': 'Не вдалося надіслати заявку. Спробуйте ще раз.',
    'contact.success': 'Дякуємо! Вашу заявку надіслано.',
    
    // Footer
    'footer.address': 'Адреса',
    'footer.phone': 'Телефон',
    'footer.email': 'Email',
    'footer.social': 'Соціальні мережі',
    'footer.copyright': '© 2023 Magerovska Permanent. Усі права захищені.',
    // Process
    'process.title': 'Процес',
    'process.step1.title': 'Консультація',
    'process.step1.description': 'Обговорюємо ваші побажання, аналізуємо форму обличчя, обираємо відповідну техніку та колір',
    'process.step2.title': 'Ескіз',
    'process.step2.description': 'Створюємо ідеальну форму за допомогою вимірювань по золотому перерізу та вашими індивідуальними особливостями',
    'process.step3.title': 'Пігментація',
    'process.step3.description': 'Процедура виконується з використанням якісних пігментів і сучасного обладнання',
    'process.step4.title': 'Догляд',
    'process.step4.description': 'Детальні рекомендації щодо догляду і корекція через 4-6 тижнів за необхідності',
    // Services labels and durations
    'services.label.duration': 'Тривалість:',
    'services.label.healing': 'Загоювання:',
    'services.label.lasting': 'Тримається:',
    'services.eyebrows.duration': '2-3 години',
    'services.eyebrows.healing': '7-14 днів',
    'services.eyebrows.lasting': '1-2 роки',
    'services.lips.duration': '2-2,5 години',
    'services.lips.healing': '5-7 днів',
    'services.lips.lasting': '1-1,5 року',
    'services.eyeliner.duration': '1,5-2 години',
    'services.eyeliner.healing': '3-5 днів',
    'services.eyeliner.lasting': '2-3 роки',
    // FAQ
    'faq.title': 'Часті питання',
    'faq.item.1.question': 'Чи болісно робити перманентний макіяж?',
    'faq.item.1.answer': 'Процедура проходить під місцевою анестезією, тому дискомфорт мінімальний. Більшість клієнток описують відчуття як легке покалювання. Для особливо чутливих зон використовуються додаткові знеболювальні засоби.',
    'faq.item.2.question': 'Скільки тримається результат?',
    'faq.item.2.answer': 'Тривалість залежить від зони: брови тримаються 1-2 роки, губи 1-1,5 року, міжвійкова 2-3 роки. З часом пігмент поступово світлішає, що дозволяє коригувати форму та колір відповідно до змін вашого стилю.',
    'faq.item.3.question': 'Який потрібен догляд після процедури?',
    'faq.item.3.answer': 'У перші дні важливо уникати попадання води, не чіпати кірочки, не засмагати. Обробляти спеціальними засобами, які я надам. Повне загоювання відбувається за 7-14 днів. Детальні інструкції видаються після процедури.',
    'faq.item.4.question': 'Чи є протипоказання?',
    'faq.item.4.answer': 'Так, є ряд обмежень: вагітність і лактація, онкологія, цукровий діабет 1 типу, порушення згортання крові, келоїдні рубці, гострі запальні процеси. На консультації обов\'язково обговорюємо усі нюанси та протипоказання.',
    'faq.item.5.question': 'Чи потрібна корекція?',
    'faq.item.5.answer': 'Корекція рекомендується через 4-6 тижнів після першої процедури для досягнення ідеального результату. Це нормальна практика, оскільки шкіра у всіх загоюється по-різному. У більшості випадків однієї корекції вистачає на весь період носіння.',
  },
};

// (testimonials keys merged into each language block above)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}