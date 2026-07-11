import { cn } from "@/utils/cn";
import type { Tone } from "@/types/content";

const accents: Record<Tone, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  cyan: "bg-cyan-400",
  violet: "bg-violet-500",
  rose: "bg-rose-500"
};

export function ProjectMockup({ tone }: { tone: Tone }) {
  return (
    <div className="relative h-36 overflow-hidden rounded-t-lg border-b border-white/10 bg-[#0a1122]">
      <div className="absolute inset-x-0 top-0 flex h-7 items-center gap-1 border-b border-white/10 bg-white/[0.04] px-3">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ms-auto h-2 w-20 rounded-full bg-white/10" />
      </div>
      <div className="grid h-full grid-cols-[.9fr_1.2fr] gap-3 p-4 pt-10">
        <div className="space-y-2">
          <div className={cn("h-8 w-8 rounded-lg shadow-lg", accents[tone])} />
          <div className="h-2.5 w-20 rounded-full bg-white/18" />
          <div className="h-2 w-14 rounded-full bg-white/10" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <span className="h-8 rounded bg-white/[0.07]" />
            <span className="h-8 rounded bg-white/[0.07]" />
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <div className={cn("mb-2 h-2.5 w-14 rounded-full", accents[tone])} />
          <div className="space-y-1.5">
            <span className="block h-2 rounded-full bg-white/16" />
            <span className="block h-2 w-4/5 rounded-full bg-white/10" />
            <span className="block h-2 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            <span className="h-8 rounded bg-white/[0.08]" />
            <span className="h-8 rounded bg-white/[0.08]" />
            <span className="h-8 rounded bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  );
}
