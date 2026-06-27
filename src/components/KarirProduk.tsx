"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function KarirProduk() {
  return (
    <section
      id="karir-produk"
      className="relative w-full bg-white px-6 py-6 select-none overflow-hidden"
    >
      {/* Vertical lines — sama persis seperti Fasilitas & Jurusan */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="relative z-10 w-full">
        {/* Dark card wrapper — rounded seperti card Fasilitas */}
        <div className="w-full rounded-[2.5rem] overflow-hidden border border-zinc-200/70 shadow-2xl bg-zinc-950 px-10 md:px-16 py-14 md:py-20">

          {/* Subtle dot texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-[1240px] mx-auto">
            {/* Header */}
            <div className="mb-12">
              <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest block mb-3">
                Karir dan produk unggulan
              </span>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-white leading-tight tracking-tight uppercase">
                SMK TELKOM PURWOKERTO
              </h2>
            </div>

            {/* Two Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 — Peluang Karir */}
              <div className="group relative border border-white/10 rounded-[20px] p-8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[240px]">
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-[10px] border border-white/10 bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="16" />
                      <line x1="10" y1="14" x2="14" y2="14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-[22px] sm:text-[24px] font-black leading-tight tracking-tight mb-3">
                      Peluang Karir Terbuka Lebar
                    </h3>
                    <p className="text-zinc-400 text-[13px] leading-relaxed font-medium max-w-sm">
                      Lulusan kami dipersiapkan untuk langsung bersaing di industri
                      teknologi dengan sertifikasi dan pengalaman nyata.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#jurusan"
                    className="inline-flex items-center gap-2 border border-white/15 rounded-full px-5 py-2.5 text-[12px] font-bold text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 group-hover:border-white/30"
                  >
                    Lebih detail
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 2 — Produk Unggulan */}
              <div className="group relative border border-white/10 rounded-[20px] p-8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[240px]">
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-[10px] border border-white/10 bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-[22px] sm:text-[24px] font-black leading-tight tracking-tight mb-3">
                      Produk Unggulan
                    </h3>
                    <p className="text-zinc-400 text-[13px] leading-relaxed font-medium max-w-sm">
                      Tim Inovasi sekolah, kartu ujian digital, dan masih banyak lainnya.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#program-sekolah"
                    className="inline-flex items-center gap-2 border border-white/15 rounded-full px-5 py-2.5 text-[12px] font-bold text-white hover:bg-white hover:text-zinc-950 transition-all duration-300 group-hover:border-white/30"
                  >
                    Lebih detail
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

