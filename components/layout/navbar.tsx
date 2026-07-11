"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navAnchors } from "@/constants/site";
import { getOppositeLocale, type Messages } from "@/lib/i18n";
import type { Locale } from "@/types/content";
import { cn } from "@/utils/cn";

type NavbarProps = {
  locale: Locale;
  messages: Messages;
};

export function Navbar({ locale, messages }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const oppositeLocale = getOppositeLocale(locale);
  const languageHref = useMemo(() => {
    if (!pathname) return `/${oppositeLocale}`;
    return pathname.replace(`/${locale}`, `/${oppositeLocale}`);
  }, [locale, oppositeLocale, pathname]);

  const navItems = navAnchors.map((item) => ({
    ...item,
    href: `/${locale}${item.href}`,
    label: messages.nav[item.key]
  }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled ? "border-b border-white/10 bg-[#050816]/82 shadow-[0_14px_50px_rgba(0,0,0,.28)] backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="container-x flex h-20 items-center justify-between gap-4" dir="ltr">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Delta.Ads">
          <Image src="/logos/delta-ads-logo.png" alt="Delta.Ads logo" width={58} height={36} priority className="h-9 w-auto" />
          <span className="text-lg font-black text-white">
            Delta.<span className="text-orange-400">Ads</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" dir={locale === "ar" ? "rtl" : "ltr"}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-bold text-white/76 transition hover:bg-white/[0.08] hover:text-white",
                item.key === "home" && "text-orange-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={languageHref}
            className="rounded-lg border border-white/12 px-3 py-2 text-sm font-bold text-white/78 transition hover:border-orange-400/50 hover:text-white"
          >
            {messages.nav.language}
          </Link>
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 text-white/78 transition hover:border-blue-300/50 hover:text-white"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-orange-400/70 px-4 text-sm font-extrabold text-white transition hover:bg-orange-500/12"
          >
            <span>{messages.nav.start}</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/14 bg-white/[0.04] text-white lg:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn("container-x grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0">
          <div className="mb-4 rounded-lg border border-white/12 bg-[#07101f]/96 p-3 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} className="block rounded-lg px-3 py-3 text-sm font-bold text-white/82 hover:bg-white/[0.08]">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <Link href={languageHref} className="rounded-lg border border-white/12 px-3 py-3 text-center text-sm font-bold text-white/80">
                {messages.nav.language}
              </Link>
              <Link href={`/${locale}/contact`} className="orange-gradient rounded-lg px-3 py-3 text-center text-sm font-extrabold text-white">
                {messages.nav.start}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
