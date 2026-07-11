import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/constants/site";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.contact.title} description={messages.pages.contact.description} />
      <section className="section-pad">
        <div className="container-x grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4">
            {[
              { icon: Mail, label: site.email },
              { icon: Phone, label: site.phone },
              { icon: MapPin, label: site.address }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="glass-panel flex items-center gap-4 rounded-lg p-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/12 text-orange-300">
                  <Icon className="h-5 w-5" />
                </span>
                <strong className="text-white">{label}</strong>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
