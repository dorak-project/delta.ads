"use client";

import { motion } from "framer-motion";

const points = [
  [8, 24, "blue"],
  [16, 62, "orange"],
  [26, 18, "cyan"],
  [34, 52, "blue"],
  [43, 31, "orange"],
  [52, 68, "violet"],
  [61, 24, "blue"],
  [70, 46, "cyan"],
  [79, 18, "orange"],
  [88, 58, "blue"],
  [94, 29, "orange"]
] as const;

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="network-line absolute inset-0 opacity-70" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M8 24 L26 18 L34 52 L52 68 L70 46 L88 58" fill="none" stroke="rgba(35,150,255,.42)" strokeWidth=".16" />
        <path d="M16 62 L43 31 L61 24 L79 18 L94 29" fill="none" stroke="rgba(255,106,0,.42)" strokeWidth=".16" />
        <path d="M26 18 L52 68 L79 18" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth=".08" />
      </svg>
      {points.map(([left, top, tone], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            background:
              tone === "orange"
                ? "var(--orange)"
                : tone === "cyan"
                  ? "var(--cyan)"
                  : tone === "violet"
                    ? "var(--violet)"
                    : "var(--blue-soft)",
            boxShadow: `0 0 16px ${
              tone === "orange" ? "rgba(255,106,0,.95)" : tone === "cyan" ? "rgba(25,213,209,.95)" : "rgba(35,150,255,.95)"
            }`
          }}
          animate={{ opacity: [0.38, 1, 0.38], scale: [0.82, 1.28, 0.82] }}
          transition={{ duration: 2.4 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
