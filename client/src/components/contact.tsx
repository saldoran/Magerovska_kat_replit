import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContact.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="contact-header">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Контакты</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="fade-in" data-delay="100" data-testid="contact-form">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Записаться на процедуру</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ваше имя</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Как к вам обращаться?"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+48 xxx xxx xxx"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Выберите услугу</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="brows-powder">Пудровые брови</SelectItem>
                            <SelectItem value="brows-ombre">Ombré брови</SelectItem>
                            <SelectItem value="lip-blush">Lip Blush</SelectItem>
                            <SelectItem value="lip-contour">Контур губ</SelectItem>
                            <SelectItem value="lash-line-top">Межресничка верх</SelectItem>
                            <SelectItem value="lash-line-bottom">Межресничка низ</SelectItem>
                            <SelectItem value="complex">Комплексная процедура</SelectItem>
                            <SelectItem value="consultation">Консультация</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Расскажите о ваших пожеланиях или задайте вопросы"
                            className="resize-none"
                            rows={4}
                            {...field}
                            value={field.value || ""}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={submitContact.isPending}
                    className="w-full bg-primary hover:bg-accent text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    data-testid="button-submit-form"
                  >
                    {submitContact.isPending ? "Отправляю..." : "Отправить заявку"}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="fade-in" data-delay="200" data-testid="contact-info">
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Адрес</h4>
                    <p className="text-muted-foreground" data-testid="text-address">
                      Краков, Польша<br />
                      Ул. Przykładowa 123<br />
                      30-000 Kraków
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Телефон</h4>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+48123456789"
                        className="hover:text-primary transition-colors"
                        data-testid="link-phone"
                      >
                        +48 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-2">Часы работы</h4>
                    <div className="text-muted-foreground space-y-1" data-testid="text-working-hours">
                      <div>Пн-Пт: 10:00 - 19:00</div>
                      <div>Сб: 10:00 - 16:00</div>
                      <div>Вс: выходной</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Share2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-4">Социальные сети</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/magerovska_permanent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
                        data-testid="link-instagram-social"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/48123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                        data-testid="link-whatsapp"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white border rounded-lg p-6">
                <h4 className="font-semibold text-foreground text-lg mb-4">Местоположение</h4>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                    alt="Краков, Польша - карта местоположения"
                    className="w-full h-full object-cover rounded-lg"
                    data-testid="img-location-map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
