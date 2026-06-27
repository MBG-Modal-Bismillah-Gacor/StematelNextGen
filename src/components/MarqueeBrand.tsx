"use client";

import React from "react";

const PARTNERS = [
  {
    name: "Telkom Indonesia",
    logo: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="22" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">TELKOM</text>
      </svg>
    ),
  },
  {
    name: "Cisco",
    logo: (
      <svg viewBox="0 0 80 40" className="h-7 w-auto" fill="currentColor">
        <rect x="0" y="14" width="10" height="12" rx="2"/>
        <rect x="14" y="8" width="10" height="24" rx="2"/>
        <rect x="28" y="4" width="10" height="32" rx="2"/>
        <rect x="42" y="8" width="10" height="24" rx="2"/>
        <rect x="56" y="14" width="10" height="12" rx="2"/>
        <text x="0" y="38" fontSize="9" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">CISCO</text>
      </svg>
    ),
  },
  {
    name: "Google",
    logo: (
      <svg viewBox="0 0 100 40" className="h-7 w-auto">
        <text x="0" y="30" fontSize="26" fontWeight="700" fontFamily="sans-serif" fill="currentColor" letterSpacing="-1">Google</text>
      </svg>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 130 40" className="h-7 w-auto" fill="currentColor">
        <rect x="0" y="2" width="17" height="17" fill="#currentColor" opacity="0.9"/>
        <rect x="20" y="2" width="17" height="17" fill="currentColor" opacity="0.6"/>
        <rect x="0" y="21" width="17" height="17" fill="currentColor" opacity="0.6"/>
        <rect x="20" y="21" width="17" height="17" fill="currentColor" opacity="0.4"/>
        <text x="44" y="28" fontSize="16" fontWeight="700" fontFamily="sans-serif">Microsoft</text>
      </svg>
    ),
  },
  {
    name: "MikroTik",
    logo: (
      <svg viewBox="0 0 110 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">MikroTik</text>
      </svg>
    ),
  },
  {
    name: "Huawei",
    logo: (
      <svg viewBox="0 0 90 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="20" fontWeight="700" fontFamily="sans-serif">Huawei</text>
      </svg>
    ),
  },
  {
    name: "Indosat",
    logo: (
      <svg viewBox="0 0 100 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="20" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">Indosat</text>
      </svg>
    ),
  },
  {
    name: "Dicoding",
    logo: (
      <svg viewBox="0 0 100 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="19" fontWeight="800" fontFamily="sans-serif">Dicoding</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg viewBox="0 0 60 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="24" fontWeight="900" fontFamily="sans-serif">AWS</text>
      </svg>
    ),
  },
  {
    name: "Tokopedia",
    logo: (
      <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="currentColor">
        <text x="0" y="30" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5">Tokopedia</text>
      </svg>
    ),
  },
];

// Duplicate for seamless infinite loop
const ITEMS = [...PARTNERS, ...PARTNERS];

export default function MarqueeBrand() {
  return (
    <section className="relative w-full bg-white border-t border-b border-zinc-100 py-10 overflow-hidden select-none">

      {/* Label */}
      <div className="text-center mb-8">
        <span className="text-zinc-400 text-[10.5px] font-bold uppercase tracking-[0.2em]">
          Partner Industri &amp; Kolaborasi
        </span>
      </div>

      {/* Marquee Track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling track */}
        <div
          className="flex gap-16 items-center w-max"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {ITEMS.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-zinc-300 hover:text-zinc-600 transition-colors duration-300 cursor-default flex-shrink-0"
              title={partner.name}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
