"use client";

import React from "react";

const NAV_COLS = [
  {
    title: "Sekolah",
    links: [
      { label: "Profil Sekolah", href: "#" },
      { label: "Visi & Misi", href: "#" },
      { label: "Akreditasi", href: "#" },
      { label: "Sejarah", href: "#" },
    ],
  },
  {
    title: "Program",
    links: [
      { label: "RPL", href: "#jurusan" },
      { label: "Pengembangan Gim", href: "#jurusan" },
      { label: "TKJ", href: "#jurusan" },
      { label: "TJA", href: "#jurusan" },
    ],
  },
  {
    title: "Siswa",
    links: [
      { label: "PPDB Online", href: "#" },
      { label: "Prestasi", href: "#" },
      { label: "Wall of Fame", href: "#" },
      { label: "Beasiswa", href: "#" },
    ],
  },
  {
    title: "Fasilitas",
    links: [
      { label: "Lab Komputer", href: "#" },
      { label: "Studio Gim", href: "#" },
      { label: "Lab Jaringan", href: "#" },
      { label: "Perpustakaan", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-white px-5 pb-5 pt-0">
      {/* ── DARK FOOTER CARD ── */}
      <div className="w-full bg-zinc-950 rounded-[28px] overflow-hidden relative">

        {/* Subtle red glow top-left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 0% 0%, rgba(237,28,36,0.10) 0%, transparent 65%)",
          }}
        />

        {/* ── MAIN LINKS AREA ── */}
        <div className="relative z-10 px-10 pt-10 pb-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">

            {/* LEFT: Logo + Info */}
            <div className="flex-shrink-0 w-full lg:w-[280px] flex flex-col gap-6">
              <img
                src="/logo-telkom-schools-bundar-removebg-preview.png"
                alt="Logo SMK Telkom Purwokerto"
                className="w-[100px] h-[100px] object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />

              <div className="flex flex-col gap-1.5">
                <h3 className="text-white font-black text-[18px] leading-tight uppercase tracking-tight">
                  SMK Telkom Purwokerto
                </h3>
                <p className="text-zinc-500 text-[12.5px] font-medium leading-relaxed">
                  Window to Excellence — Mencetak talenta digital inovatif dan berdaya saing global.
                </p>
              </div>
            </div>

            {/* Vertical separator */}
            <div className="hidden lg:block w-px bg-white/6 self-stretch mx-10 flex-shrink-0" />

            {/* RIGHT: Nav columns */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
              {NAV_COLS.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[11px] font-extrabold uppercase tracking-[0.12em]">
                      {col.title}
                    </span>
                    <div className="w-5 h-[2px] bg-[#ED1C24] rounded-full" />
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-zinc-500 text-[12.5px] font-medium hover:text-zinc-100 transition-colors duration-200 flex items-center gap-1 group"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                            {link.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="relative z-10 mx-10 border-t border-white/6" />
        <div className="relative z-10 px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-zinc-600 text-[11px] font-medium">
            © {new Date().getFullYear()} SMK Telkom Purwokerto. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "PPDB Portal"].map((t, i, arr) => (
              <React.Fragment key={t}>
                <a href="#" className="text-zinc-600 text-[11px] font-medium hover:text-zinc-300 transition-colors duration-200">{t}</a>
                {i < arr.length - 1 && <span className="text-zinc-700 text-[10px]">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── GIANT WORDMARK ── */}
        <div
          className="relative z-10 w-full overflow-hidden"
          aria-hidden="true"
          style={{ height: "clamp(140px, 17vw, 230px)" }}
        >
          <div className="absolute bottom-8 left-0 w-full flex items-end justify-center">
            <span
              className="text-white font-black uppercase whitespace-nowrap"
              style={{
                fontSize: "clamp(68px, 12.5vw, 172px)",
                lineHeight: 0.82,
                letterSpacing: "-0.03em",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.18) 55%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.18) 55%, transparent 100%)",
              }}
            >
              SMK TELKOM
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
