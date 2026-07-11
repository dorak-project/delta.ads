import { ServiceDetailPage } from "@/components/services/service-detail-page";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function WebDevelopmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  return <ServiceDetailPage locale={safeLocale} messages={getMessages(safeLocale)} slug="web-development" />;
}
