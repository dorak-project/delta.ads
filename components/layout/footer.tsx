import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030916] pb-8 pt-12" id="contact">
      
      {/* الروبوت 4.png متمركز في منتصف الفوتر بوضوح عالي وحجم كبير */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] animate-[bounce_8s_infinite]">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[80px] animate-pulse" />
        <Image src="/images/4.png" alt="Footer Robot" fill className="object-contain drop-shadow-[0_0_50px_rgba(0,91,255,0.6)]" />
      </div>

      <div className="container-x relative z-10 grid gap-10 lg:grid-cols-[1.2fr_.8fr_.9fr_.9fr]">
        <div>
          <Link href={`/${locale}`} className="mb-5 flex items-center gap-3">
            <Image src="/logos/delta-ads-logo.png" alt="Delta.Ads logo" width={64} height={40} className="h-10 w-auto" />
            <span className="text-xl font-black">
              Delta.<span className="text-orange-400">Ads</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-white/64">{messages.footer.description}</p>
          <div className="mt-6 flex gap-2">
            <Link
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/62 transition hover:border-orange-400/70 hover:text-orange-300"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            
            <Link
              href={site.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/62 transition hover:border-orange-400/70 hover:text-orange-300"
            >
              <Twitter className="h-4 w-4" />
            </Link>

            <Link
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/62 transition hover:border-orange-400/70 hover:text-orange-300"
            >
              <Instagram className="h-4 w-4" />
            </Link>

            <Link
              href={site.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/62 transition hover:border-orange-400/70 hover:text-orange-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
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
      <div className="container-x relative z-10 mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/46 sm:flex-row">
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
