import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { site } from "@/constants/site";
import { getDirection, getMessages, isLocale, locales } from "@/lib/i18n";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Locale } from "@/types/content";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return {
    metadataBase: new URL(site.url),
    title: messages.meta.title,
    description: messages.meta.description,
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: site.url,
      siteName: site.name,
      locale: safeLocale === "ar" ? "ar_EG" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description
    }
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);
  const direction = getDirection(locale);

  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <div className="page-shell" dir={direction} lang={locale}>
          <div className="noise-layer" />
          <Navbar locale={locale} messages={messages} />
          <main>{children}</main>
          <Footer locale={locale} messages={messages} />
        </div>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
