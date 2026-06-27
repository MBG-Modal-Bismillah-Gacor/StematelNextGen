"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-6 pb-6 pt-[88px] select-none" style={{ height: "100vh", minHeight: "600px", maxHeight: "800px" }}>

      {/* Outer rounded card container */}
      <div className="relative w-full h-full rounded-[28px] border border-gray-200 shadow-lg overflow-hidden bg-[#0d0e12]">

        {/* Layer 1: Background Image (Building & Sky) */}
        <img
          src="/smktelkom.png"
          alt="Gedung SMK Telkom Purwokerto Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter contrast-[1.06] brightness-[1.02]"
          style={{ imageRendering: "auto" }}
          loading="eager"
        />

        {/* Layer 2: Massive "SMK TELKOM" Title (Sandwiched behind the foreground building) */}
        <div className="absolute top-10 inset-x-0 flex items-start justify-center pointer-events-none z-10">
          <h1
            className="font-black text-center uppercase tracking-tight select-none bg-gradient-to-b from-white/20 via-white/80 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
              lineHeight: "0.85",
              letterSpacing: "-0.01em",
            }}
          >
            SMK TELKOM
          </h1>
        </div>

        {/* Layer 3: Foreground Building Only (Sky clipped out using CSS clip-path to sandwich the text) */}
        <img
          src="/smktelkom.png"
          alt="Gedung SMK Telkom Purwokerto Foreground"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter contrast-[1.06] brightness-[1.02] pointer-events-none z-20"
          style={{
            imageRendering: "auto",
            clipPath: "polygon(0% 39.5%, 33.3% 32.2%, 33.3% 27%, 66.7% 27%, 66.7% 32.2%, 100% 39.5%, 100% 100%, 0% 100%)"
          }}
          loading="eager"
        />

        {/* Subtle Dark Overlay in front of the building */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none z-20" />

        {/* ===== TOP LEFT: "1200+ Siswa" Badge ===== */}
        <div className="absolute top-10 left-10 z-30">
          <div className="border border-white/40 bg-white/10 backdrop-blur-md rounded-[6px] px-5 py-2">
            <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-wider">
              1200+ Siswa
            </span>
          </div>
        </div>

        {/* ===== TOP RIGHT: "4 Jurusan" Badge ===== */}
        <div className="absolute top-10 right-10 z-30">
          <div className="border border-white/40 bg-white/10 backdrop-blur-md rounded-[6px] px-5 py-2">
            <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-wider">
              4 Jurusan
            </span>
          </div>
        </div>

        {/* ===== "2026" Text Overlay ===== */}
        <div className="absolute left-[24%] top-[39%] z-30 pointer-events-none">
          <span className="text-zinc-800/80 font-bold text-xl sm:text-2xl tracking-wide font-mono">
            2026
          </span>
        </div>

        {/* ===== Bottom Canopy Area Buttons (Premium Glassmorphism + Micro-animations & Icons) ===== */}
        <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-4">

          {/* Virtual Tour Button */}
          <a
            href="#virtual-tour"
            className="w-[140px] py-2.5 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 text-white font-bold text-[12px] tracking-wide rounded-[6px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] text-center flex items-center justify-center gap-2 cursor-pointer group"
          >
            Virtual Tour
          </a>

          {/* PPDB Button */}
          <a
            href="#footer"
            className="w-[140px] py-2.5 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 text-white font-bold text-[12px] tracking-wide rounded-[6px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] text-center flex items-center justify-center gap-1.5 cursor-pointer group"
          >
            PPDB
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>

        {/* ===== White Line Details stretching from PPDB button area to the right ===== */}
        <div
          className="absolute bottom-[20.2%] right-0 w-[31%] h-[1.5px] bg-white/60 z-20 hidden sm:block pointer-events-none"
        />

      </div>
    </section>
  );
}
