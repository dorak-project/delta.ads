import {
  AppWindow,
  BarChart3,
  CalendarDays,
  Code2,
  Folder,
  Headphones,
  PenLine,
  Rocket,
  ScanSearch,
  Settings,
  ShieldCheck,
  ShoppingCart,
  SmilePlus,
  type LucideIcon
} from "lucide-react";
import type { IconName } from "@/types/content";

export const icons: Record<IconName, LucideIcon> = {
  app: AppWindow,
  calendar: CalendarDays,
  cart: ShoppingCart,
  chart: BarChart3,
  code: Code2,
  folder: Folder,
  headset: Headphones,
  pen: PenLine,
  rocket: Rocket,
  scan: ScanSearch,
  settings: Settings,
  shield: ShieldCheck,
  smile: SmilePlus
};

export const toneClasses = {
  blue: "from-[#24a4ff] via-[#005bff] to-[#2738ff] shadow-blue-500/30",
  orange: "from-[#ff9d42] via-[#ff6a00] to-[#ff3f1f] shadow-orange-500/30",
  cyan: "from-[#3deee8] via-[#19d5d1] to-[#087d96] shadow-cyan-500/30",
  violet: "from-[#8b6aff] via-[#6b45ff] to-[#3c2ed6] shadow-violet-500/30",
  rose: "from-[#ff75a8] via-[#f54d86] to-[#d31f55] shadow-rose-500/30"
};
