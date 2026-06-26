"use client";

import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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

      {/* ── CTA BANNER (above footer card) ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#ED1C24] via-[#d41920] to-[#b01018] rounded-[20px] px-10 py-14 mb-4 flex flex-col items-center text-center gap-6">
        {/* Decorative blobs */}
        <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-black/10 pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Badge */}
        <span className="relative z-10 inline-flex items-center bg-white/15 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Penerimaan Peserta Didik Baru 2025/2026
        </span>

        {/* Headline */}
        <div className="relative z-10 flex flex-col gap-3 max-w-[640px]">
          <h3 className="text-white font-black text-[28px] sm:text-[36px] lg:text-[42px] leading-tight tracking-tight">
            Mulai Perjalananmu Bersama<br />
            SMK Telkom Purwokerto
          </h3>
          <p className="text-white/65 text-[13.5px] font-medium leading-relaxed max-w-[460px] mx-auto">
            Bergabunglah dengan komunitas pelajar digital terbaik. Raih masa depan di bidang teknologi, gim, dan telekomunikasi.
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="flex items-center gap-2 bg-white text-[#ED1C24] font-black text-[13px] px-6 py-3 rounded-[12px] hover:bg-zinc-100 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            Daftar Sekarang
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#" className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-bold text-[13px] px-6 py-3 rounded-[12px] hover:bg-white/20 transition-colors duration-200">
            Info Lebih Lanjut
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

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
          style={{ height: "clamp(88px, 12vw, 160px)" }}
        >
          <div className="absolute bottom-0 left-0 w-full flex items-end justify-center">
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
