import { CTASection } from "@/components/home/cta-section";
import { FAQSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { StatsSection } from "@/components/home/stats-section";
import { TechnologiesSection } from "@/components/home/technologies-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <Hero locale={safeLocale} messages={messages} />
      <ServicesSection locale={safeLocale} messages={messages} />
      <ProcessSection messages={messages} />
      <PortfolioSection locale={safeLocale} messages={messages} />
      <TechnologiesSection messages={messages} />
      <StatsSection messages={messages} />
      <TestimonialsSection messages={messages} />
      <FAQSection messages={messages} />
      <CTASection messages={messages} />
    </>
  );
}
