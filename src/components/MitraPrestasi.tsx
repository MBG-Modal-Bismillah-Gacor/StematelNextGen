"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// ── PARTNERS DATA ──
const PARTNERS = [
  {
    name: "Telkom Indonesia",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Telkom_Indonesia_2013.svg",
  },
  {
    name: "KAI",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Kereta_Api_Indonesia_%28Persero%29_2020.svg",
  },
  {
    name: "NVIDIA",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "Microsoft",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Intel",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
  },
  {
    name: "Cisco",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  },
  {
    name: "Google",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "AWS",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

// Duplicate partners list multiple times to support infinite scrolling
const MARQUEE_ITEMS = [...PARTNERS, ...PARTNERS, ...PARTNERS];


// ── PRESTASI DATA ──
const PRESTASI_DATA = [
  {
    id: 1,
    student: "Idham Baihaqi",
    classInfo: "X PPLG 6",
    achievements: [
      "Medali Emas - Kategori Sejarah (Science & Social Competition)",
      "Medali Emas - Kategori PAI (FOSPAS)",
      "Medali Perak - Kategori Informatika (Science & Social Competition)"
    ],
    date: "10 Jun 2026",
    title: "Idham Baihaqi - X PPLG 6",
    desc: "Meraih 2 Medali Emas & 1 Medali Perak tingkat Nasional pada kompetisi sains bergengsi.",
    readTime: "4 min read",
    imgUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 2,
    student: "Farel Satria & Team",
    classInfo: "XII TJAT 1",
    achievements: [
      "Juara 1 LKS Nasional - Cloud Computing",
      "Medali Emas LKS Wilker II",
      "Best Score Performance Awards"
    ],
    date: "10 Jun 2026",
    title: "Juara 1 LKS Nasional INC",
    desc: "Menyabet predikat Juara 1 Nasional bidang Cloud Computing, mengharumkan nama sekolah di tingkat tertinggi.",
    readTime: "6 min read",
    imgUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 3,
    student: "Rian Prasetya",
    classInfo: "XI TKJ 2",
    achievements: [
      "Juara 3 LKS Provinsi CC",
      "Sertifikasi Internasional AWS",
      "Juara 2 Networking Competition"
    ],
    date: "10 Jun 2026",
    title: "Juara 3 LKS Provinsi CC",
    desc: "Menyabet Juara 3 tingkat Provinsi Jawa Tengah dalam bidang lomba Cloud Computing.",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export default function MitraPrestasi() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRESTASI_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRESTASI_DATA.length) % PRESTASI_DATA.length);
  };

  // Get ordered items to center the active card
  const getOrderedItems = () => {
    const items = [];
    const len = PRESTASI_DATA.length;
    for (let i = -1; i <= 1; i++) {
      const idx = (activeIndex + i + len) % len;
      items.push({ ...PRESTASI_DATA[idx], position: i });
    }
    return items;
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 select-none overflow-hidden border-t border-zinc-100">
      {/* Vertical grid lines */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10 flex flex-col gap-24">
        
        {/* ── SECTION 1: HUBUNGAN INDUSTRI ── */}
        <div className="flex flex-col items-center">
          <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-3">
            Hubungan Industri
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-zinc-900 leading-tight tracking-tight uppercase mb-12">
            Mitra Industri Terkemuka
          </h2>

          {/* Inline styles for guaranteed marquee animation */}
          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-custom {
              display: flex;
              gap: 1.5rem;
              align-items: center;
              width: max-content;
              animation: marqueeScroll 28s linear infinite;
            }
            .animate-marquee-custom:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Partners Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

            {/* Scrolling track */}
            <div className="animate-marquee-custom">
              {MARQUEE_ITEMS.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border border-zinc-200/80 rounded-[20px] shadow-[0_6px_24px_rgba(0,0,0,0.02)] px-8 py-5 flex items-center justify-center h-24 w-44 hover:shadow-[0_12px_30px_rgba(237,28,36,0.05)] hover:border-[#ED1C24]/30 transition-all duration-300 flex-shrink-0"
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="h-8 max-w-[85%] object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 2: PRESTASI SLIDER ── */}
        <div className="flex flex-col items-center relative">
          <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-3">
            Prestasi
          </span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-zinc-900 leading-tight tracking-tight uppercase mb-16">
            Bukti Kualitas Talenta Muda
          </h2>

          {/* Slider Container */}
          <div className="relative w-full max-w-[1240px] flex items-center justify-center px-4 md:px-16 min-h-[460px]">
            
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-4 z-30 w-12 h-12 rounded-[12px] bg-[#ED1C24] hover:bg-[#D11018] text-white flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(237,28,36,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Cards Viewport */}
            <div className="flex items-center justify-center gap-6 w-full overflow-visible relative py-6">
              {getOrderedItems().map((item) => {
                const isCenter = item.position === 0;
                
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-[24px] overflow-hidden border border-zinc-200/80 flex flex-col transition-all duration-500 w-full max-w-[340px] sm:max-w-[360px] md:max-w-[370px] ${
                      isCenter
                        ? "shadow-[0_20px_50px_rgba(0,0,0,0.12)] scale-100 z-20 border-zinc-300"
                        : "opacity-40 scale-90 blur-[1px] hidden sm:flex z-10 pointer-events-none"
                    }`}
                  >
                    {/* Image Area */}
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-100 flex-shrink-0">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Dark overlay top and bottom */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10 pointer-events-none" />
                      
                      {/* Student info tag floating */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <span className="bg-white/90 backdrop-blur-md text-[10px] font-black uppercase text-zinc-950 px-3 py-1.5 rounded-[8px] tracking-wide border border-zinc-200/50 shadow-sm">
                          {item.student}
                        </span>
                        <span className="bg-[#ED1C24] text-[9px] font-black uppercase text-white px-2.5 py-1 rounded-[6px] tracking-wide">
                          {item.classInfo}
                        </span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-6 md:p-7 flex flex-col justify-between flex-grow min-h-[220px]">
                      <div className="space-y-4">
                        {/* Date */}
                        <span className="text-[11px] text-zinc-400 font-bold tracking-wider block">
                          {item.date}
                        </span>

                        {/* Title */}
                        <h3 className="text-zinc-950 text-[18px] sm:text-[20px] font-black leading-tight tracking-tight uppercase">
                          {item.title}
                        </h3>

                        {/* Bullet achievements */}
                        <ul className="space-y-2">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-zinc-600 text-[12px] leading-relaxed font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] mt-1.5 flex-shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer bar */}
                      <div className="flex items-center justify-between pt-6 mt-4 border-t border-zinc-100 flex-shrink-0">
                        <span className="text-zinc-400 text-[11px] font-bold tracking-wider uppercase">
                          {item.readTime}
                        </span>
                        <a
                          href="#"
                          className="flex items-center gap-1.5 text-zinc-900 hover:text-[#ED1C24] text-[11.5px] font-black tracking-wider uppercase transition-colors"
                        >
                          Lebih Detail
                          <span className="w-4 h-4 bg-[#ED1C24] text-white rounded-[4px] flex items-center justify-center flex-shrink-0">
                            <span className="block w-1.5 h-1.5 border-t-2 border-r-2 border-white rotate-45 transform -translate-x-[0.5px]" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 md:right-4 z-30 w-12 h-12 rounded-[12px] bg-[#ED1C24] hover:bg-[#D11018] text-white flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(237,28,36,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
