"use client";

import { ChevronRight } from "lucide-react";

const OUTCOMES = [
  {
    num: "01",
    letter: "B",
    word: "ekerja",
    desc: "Terjun langsung ke industri dengan bekal skill mutakhir dan mental profesional yang siap menjawab tantangan dunia kerja nyata."
  },
  {
    num: "02",
    letter: "M",
    word: "elanjutkan",
    desc: "Bangun fondasi akademik yang solid untuk melangkah lebih jauh ke jenjang pendidikan tinggi dan meraih target karier impian."
  },
  {
    num: "03",
    letter: "W",
    word: "irausaha",
    desc: "Wujudkan ide inovatifmu menjadi bisnis nyata. Kami membentuk mental entrepreneur yang mandiri dan jeli melihat peluang."
  }
];

export default function ProgramSekolah() {
  return (
    <section id="unggulan" className="relative w-full bg-white py-24 px-6 md:px-12 select-none overflow-hidden border-t border-gray-100">
      
      {/* Centered lines wrapper - runs from top to bottom of section and stays locked to content coordinates */}
      <div className="absolute inset-y-0 left-6 right-6 md:left-12 md:right-12 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        {/* Left vertical line (aligned with left edge of global layout) */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line (124px offset) */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Header Area (Flex layout on mobile, horizontal split on desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 relative w-full">
          
          {/* Left Column: Tagline & Heading */}
          <div className="flex-grow">
            <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-4">
              Program Sekolah
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[38px] font-black text-zinc-900 leading-tight tracking-tight max-w-2xl relative">
              {/* On desktop, 'A' is placed absolutely at the left of the container */}
              <span className="lg:absolute lg:left-0 lg:top-0">A</span>
              {/* On desktop, the rest of the text is indented by 124px to align with the vertical line */}
              <span className="block lg:pl-[124px]">
                World-Class Range of <br />
                <span className="text-[#ED1C24]">BMW</span> for Every <br />
                Ambition and Passion
              </span>
            </h2>
          </div>

          {/* Right Column: TS Logo Card */}
          <div className="flex-shrink-0 self-start lg:self-center">
            <div className="border border-zinc-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[14px] p-5 bg-white flex items-center justify-center w-[160px] h-[92px] transition-transform duration-300 hover:scale-[1.02]">
              {/* SVG representing the Telkom Schools Logo */}
              <svg className="w-16 h-12" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Red open book shape */}
                <path d="M22 18C32 18 42 24 50 26C58 24 68 18 78 18V28C68 28 58 32 50 34C42 32 32 28 22 28V18Z" fill="#ED1C24" />
                <path d="M50 26V34" stroke="white" strokeWidth="1.5" />
                
                {/* Gray TS letters */}
                {/* The letter T */}
                <path d="M38 38H62V41.5H52V52H48V41.5H38V38Z" fill="#71717A" />
                {/* The letter S */}
                <path d="M43 49C43 46.5 45.5 45.5 48 45.5H52C54.5 45.5 57 46.5 57 49C57 51.5 54.5 52.5 52 52.5H48" stroke="#71717A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

        </div>

        {/* Outcomes List */}
        <div className="flex flex-col w-full border-t border-gray-100">
          {OUTCOMES.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:grid lg:grid-cols-[124px_240px_1fr_auto] gap-4 lg:gap-0 items-start lg:items-center py-8 lg:py-10 border-b border-gray-100 last:border-0 relative"
            >
              {/* Col 1: Number (placed left of Line 2) */}
              <div className="text-[#ED1C24] font-mono text-sm sm:text-base font-bold">
                {item.num}
              </div>

              {/* Col 2: Title (placed right of Line 2) */}
              <div className="text-xl lg:text-2xl font-bold text-zinc-900 tracking-tight">
                <span className="text-[#ED1C24]">{item.letter}</span>{item.word}
              </div>

              {/* Col 3: Description */}
              <div className="text-xs sm:text-[13px] lg:text-sm text-zinc-500 leading-relaxed max-w-xl lg:pr-8">
                {item.desc}
              </div>

              {/* Col 4: Red Chevron Button */}
              <div className="self-end lg:self-auto flex justify-end">
                <button className="w-9 h-9 rounded-[6px] bg-[#ED1C24] hover:bg-[#C8161D] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95">
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
