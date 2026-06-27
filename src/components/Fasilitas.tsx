"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    tagline: "Fasilitas",
    name: "Lab RPL",
    desc: "Ruang lab pemrograman canggih dengan iMac dan PC Core i9 untuk riset web, mobile apps, dan AI.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "High-Spec Workstations",
    highlightDesc: "Dilengkapi PC berspesifikasi tinggi untuk kelancaran kompilasi kode dan AI modeling."
  },
  {
    id: 2,
    tagline: "Fasilitas",
    name: "Lab TJA",
    desc: "Lab yang digunakan oeh siswa dengan jurusan TJA untuk perkabelan",
    img: "/lab-tja.png",
    highlightTitle: "Banyak Flneshit",
    highlightDesc: "Lab yang digunakan oeh siswa dengan jurusan TJA untuk perkabelan"
  },
  {
    id: 3,
    tagline: "Fasilitas",
    name: "Lab TKJ",
    desc: "Laboratorium jaringan komputer yang difasilitasi dengan perangkat Cisco Router & Switch Enterprise.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "Cisco Enterprise",
    highlightDesc: "Akses langsung ke server rack fisik untuk konfigurasi LAN/WAN dan keamanan jaringan."
  },
  {
    id: 4,
    tagline: "Fasilitas",
    name: "Lab PG",
    desc: "Studio khusus untuk perancangan aset game 3D, animasi karakter, dan pemrograman engine game.",
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "Game Dev Center",
    highlightDesc: "Dilengkapi VR Headset, drawing tablet, dan dual monitor setup untuk kenyamanan rendering."
  },
  {
    id: 5,
    tagline: "Fasilitas",
    name: "Smart Classroom",
    desc: "Kelas modern yang dilengkapi dengan smart board digital, proyektor nirkabel, dan perangkat AC IoT.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "Smart IoT Board",
    highlightDesc: "Meningkatkan interaksi aktif siswa melalui media pembelajaran digital yang canggih."
  },
  {
    id: 6,
    tagline: "Fasilitas",
    name: "Co-Working Space",
    desc: "Area kolaborasi terbuka siswa untuk inkubator startup, mentoring, presentasi proyek, dan brainstorming.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "Startup Incubator",
    highlightDesc: "Ruang santai dengan akses internet kencang untuk berkolaborasi membangun proyek kreatif."
  },
  {
    id: 7,
    tagline: "Fasilitas",
    name: "Perpustakaan Digital",
    desc: "Perpustakaan nyaman dengan ribuan koleksi e-book IT dan referensi riset berskala internasional.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "E-Library Portal",
    highlightDesc: "Kemudahan meminjam buku secara digital dari mana saja menggunakan aplikasi perpustakaan sekolah."
  },
  {
    id: 8,
    tagline: "Fasilitas",
    name: "Auditorium Utama",
    desc: "Gedung pertemuan serbaguna untuk seminar teknologi, pentas seni, dan wisuda kelulusan siswa.",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&h=600&q=80",
    highlightTitle: "Multipurpose Hall",
    highlightDesc: "Ruangan ber-AC dengan sound system premium dan kapasitas penonton yang besar."
  }
];

export default function Fasilitas() {
  const [current, setCurrent] = useState(1); // Default to Slide 2 (Lab TJA, index 1) matching the user mockup

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  // Autoplay slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = SLIDES[current];
  const formattedIndex = `${String(current + 1).padStart(2, "0")}/${String(SLIDES.length).padStart(2, "0")}`;

  return (
    <section id="fasilitas" className="relative w-full bg-white px-6 py-6 select-none overflow-hidden" style={{ height: "100vh", minHeight: "600px", maxHeight: "800px" }}>
      
      {/* Centered lines wrapper */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="relative z-10 w-full h-full">
        {/* Main Banner Card (Full Width matching Hero / Mengapa Memilih) */}
        <div className="w-full h-full rounded-[28px] overflow-hidden relative border border-zinc-200/70 shadow-2xl bg-zinc-950">
          
          {/* Background Slide Image with Fade Animation */}
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* For Slide 2 (Lab TJA), we scale/zoom the image by 30% to crop out the baked-in text and center the mannequin */}
              <img
                src={slide.img}
                alt={slide.name}
                className={`w-full h-full object-cover object-center ${
                  idx === 1 
                    ? "scale-[1.3] object-[52%_45%] brightness-[0.7]" 
                    : "brightness-[0.4]"
                }`}
              />
            </div>
          ))}

          {/* Premium Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 z-20 pointer-events-none" />

          {/* Interactive Slide Controls */}
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Content Layout Container (Uses absolute coordinates matching the lines container for perfect alignment) */}
          <div className="absolute inset-x-8 md:inset-x-14 lg:inset-x-16 top-10 md:top-14 bottom-24 z-30 flex flex-col justify-between max-w-[1240px] mx-auto w-full pointer-events-none">
            
            {/* Top Row: Tagline & Left Description */}
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-zinc-400 text-xs md:text-sm font-semibold tracking-widest uppercase">
                {activeSlide.tagline}
              </span>
              <p className="text-white text-base sm:text-lg lg:text-[22px] font-medium leading-relaxed">
                {activeSlide.desc}
              </p>
            </div>

            {/* Middle Row: Right Highlight Text (Floats clean on the right) */}
            <div className="absolute right-0 top-[38%] max-w-[280px] hidden md:block">
              <h4 className="text-white font-extrabold text-base lg:text-lg mb-2 uppercase tracking-wide">
                {activeSlide.highlightTitle}
              </h4>
              <p className="text-zinc-300 text-xs lg:text-sm leading-relaxed">
                {activeSlide.highlightDesc}
              </p>
            </div>

            {/* Bottom Row: Number & Huge Name */}
            <div className="flex flex-col items-start gap-1 pb-4">
              <span className="text-white text-2xl sm:text-3xl lg:text-[38px] font-bold font-mono tracking-wider leading-none">
                {formattedIndex}
              </span>
              <h3 className="text-[52px] sm:text-[75px] lg:text-[105px] font-black uppercase tracking-tight leading-none bg-gradient-to-b from-white via-white to-white/10 bg-clip-text text-transparent">
                {activeSlide.name}
              </h3>
            </div>

          </div>

          {/* Bottom Segment Line Indicators - Perfectly aligned with the left edge of the text above */}
          <div className="absolute bottom-8 inset-x-8 md:inset-x-14 lg:inset-x-16 z-30 flex items-center gap-4 max-w-[1240px] mx-auto w-full">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(idx)}
                className={`h-[3.5px] flex-grow rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? "bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
