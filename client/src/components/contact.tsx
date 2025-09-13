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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
      // For static deployment, simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', data);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: t('contact.success'),
        description: t('contact.toast.successDescription'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t('contact.toast.errorTitle'),
        description: t('contact.toast.errorDescription'),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitContact.mutate(data);
  };

  return (
    <section id="contact" className="py-12 bg-gray-50" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in" data-testid="contact-header">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.title')}</h2>
          <p className="text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Contact Form */}
          <div className="fade-in" data-delay="100" data-testid="contact-form">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{t('contact.title')}</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.form.placeholder.name')}
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
                        <FormLabel>{t('contact.form.phone')}</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder={t('contact.form.placeholder.phone')}
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
                        <FormLabel>{t('contact.form.service')}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-service">
                              <SelectValue placeholder={t('contact.form.service')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="brows-powder">{t('contact.form.service.eyebrows')}</SelectItem>
                            <SelectItem value="brows-ombre">{t('contact.form.service.eyebrows')}</SelectItem>
                            <SelectItem value="lip-blush">{t('contact.form.service.lips')}</SelectItem>
                            <SelectItem value="lip-contour">{t('contact.form.service.lips')}</SelectItem>
                            <SelectItem value="lash-line-top">{t('contact.form.service.eyeliner')}</SelectItem>
                            <SelectItem value="lash-line-bottom">{t('contact.form.service.eyeliner')}</SelectItem>
                            <SelectItem value="complex">{t('contact.form.service.complex')}</SelectItem>
                            <SelectItem value="consultation">{t('contact.form.service.consultation')}</SelectItem>
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
                        <FormLabel>{t('contact.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t('contact.form.placeholder.message')}
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
                    className="w-full text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                    style={{ backgroundColor: '#3a3a3a' }}
                    onMouseEnter={(e) => !submitContact.isPending && (e.currentTarget.style.backgroundColor = '#4a4a4a')}
                    onMouseLeave={(e) => !submitContact.isPending && (e.currentTarget.style.backgroundColor = '#3a3a3a')}
                    data-testid="button-submit-form"
                  >
                    {submitContact.isPending ? "..." : t('contact.form.submit')}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
