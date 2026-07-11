import ar from "@/messages/ar.json";
import en from "@/messages/en.json";
import type { Locale } from "@/types/content";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

const messages = {
  ar,
  en
};

export type Messages = typeof ar;

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getOppositeLocale(locale: Locale) {
  return locale === "ar" ? "en" : "ar";
}
