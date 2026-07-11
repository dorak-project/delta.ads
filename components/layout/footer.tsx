import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { navAnchors, site } from "@/constants/site";
import type { Messages } from "@/lib/i18n";
import type { Locale } from "@/types/content";

type FooterProps = {
  locale: Locale;
  messages: Messages;
};

export function Footer({ locale, messages }: FooterProps) {
  const quickLinks = navAnchors.slice(0, 6);
  const serviceLinks = messages.services.items.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-[#030916] pb-8 pt-12" id="contact">
      <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_.8fr_.9fr_.9fr]">
        <div>
          <Link href={`/${locale}`} className="mb-5 flex items-center gap-3">
            <Image src="/logos/delta-ads-logo.png" alt="Delta.Ads logo" width={64} height={40} className="h-10 w-auto" />
            <span className="text-xl font-black">
              Delta.<span className="text-orange-400">Ads</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-white/64">{messages.footer.description}</p>
          <div className="mt-6 flex gap-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link
                href="#"
                key={index}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/62 transition hover:border-orange-400/70 hover:text-orange-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-base font-black text-white">{messages.footer.quickLinks}</h3>
          <ul className="space-y-2 text-sm text-white/62">
            {quickLinks.map((item) => (
              <li key={item.key}>
                <Link href={`/${locale}${item.href}`} className="transition hover:text-orange-300">
                  {messages.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-black text-white">{messages.footer.services}</h3>
          <ul className="space-y-2 text-sm text-white/62">
            {serviceLinks.map((item) => (
              <li key={item.title}>
                <Link href={`/${locale}/services`} className="transition hover:text-blue-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-black text-white">{messages.footer.contact}</h3>
          <ul className="space-y-3 text-sm text-white/68">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-400" />
              <span>{site.email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-400" />
              <span>{site.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/46 sm:flex-row">
        <span>{messages.footer.copyright}</span>
        <Link
          href="#home"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/16 text-white/72 transition hover:border-orange-400/70 hover:text-orange-300"
          aria-label="Back to top"
        >
          ↑
        </Link>
      </div>
    </footer>
  );
}
