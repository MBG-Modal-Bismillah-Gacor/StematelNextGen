"use client";

export default function MengapaMemilih() {
  return (
    <section id="mengapa-memilih" className="relative w-full bg-white px-6 py-6 select-none overflow-hidden" style={{ height: "100vh", minHeight: "600px", maxHeight: "800px" }}>
      
      {/* Centered lines wrapper - runs from top to bottom of section and stays locked to content coordinates */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        {/* Left vertical line (aligned with left edge of global layout) */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="relative z-10 w-full h-full">
        {/* Giant Black Container Card - styled to match Hero height */}
        <div className="w-full h-full bg-[#08090b] border border-zinc-900 rounded-[28px] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex items-center">
          
          {/* Inner content wrapper to keep text/cards aligned with the global page layout constraints */}
          <div className="max-w-[1240px] mx-auto w-full">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
              
              {/* 1. Tagline & Heading */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-start lg:pr-8 self-start">
                <span className="text-zinc-500 text-sm font-medium tracking-wider mb-2 block">
                  Mengapa Memilih
                </span>
                <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-black text-white leading-[1.1] tracking-tight uppercase">
                  SMK TELKOM PURWOKERTO
                </h2>
              </div>

              {/* 2. Text Description (Column 4, Row 1 on Desktop) */}
              <div className="col-span-1 lg:col-start-4 lg:row-start-1 flex items-start lg:items-center lg:pl-4 self-center">
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed max-w-sm">
                  Bangun kemampuan melalui Project-Based Learning. Kolaborasi industri, dan pengalaman nyata.
                </p>
              </div>

              {/* 3. Card 01 (Kurikulum Terstandar) */}
              <div className="col-span-1 lg:col-start-1 lg:row-start-2 border border-zinc-800 bg-[#0c0d11]/80 rounded-[1.5rem] p-6 flex flex-col justify-between min-h-[190px] hover:border-zinc-700 transition-all duration-300 hover:shadow-lg">
                <div>
                  <span className="text-[#F1A80A] font-mono text-xs sm:text-sm font-bold block mb-4">01</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-2">Kurikulum Terstandar</h3>
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    Fokus pada kurikulum digital dan keterampilan teknologi masa depan.
                  </p>
                </div>
              </div>

              {/* 4. Card 02 (Tenaga Pendidik Berpengalaman) */}
              <div className="col-span-1 lg:col-start-2 lg:row-start-2 border border-zinc-800 bg-[#0c0d11]/80 rounded-[1.5rem] p-6 flex flex-col justify-between min-h-[190px] hover:border-zinc-700 transition-all duration-300 hover:shadow-lg">
                <div>
                  <span className="text-[#F1A80A] font-mono text-xs sm:text-sm font-bold block mb-4">02</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-2">Tenaga Pendidik Berpengalaman</h3>
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    Fokus pada kurikulum digital dan keterampilan teknologi masa depan.
                  </p>
                </div>
              </div>

              {/* 5. Card 03 (Fasilitas Canggih - Elevated Staggered Background) */}
              <div className="col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-1 bg-[#1e2024] border border-zinc-700/60 rounded-[1.5rem] p-6 flex flex-col justify-between min-h-[190px] hover:border-zinc-600 transition-all duration-300 hover:shadow-xl self-start transform lg:-translate-y-2">
                <div>
                  <span className="text-[#F1A80A] font-mono text-xs sm:text-sm font-bold block mb-4">03</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-2">Fasilitas Canggih</h3>
                  <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                    Akses ke perangkat keras dan lunak terbaru untuk praktik nyata.
                  </p>
                </div>
              </div>

              {/* 6. Card 04 (School of Digital Era) */}
              <div className="col-span-1 lg:col-start-4 lg:row-start-2 border border-zinc-800 bg-[#0c0d11]/80 rounded-[1.5rem] p-6 flex flex-col justify-between min-h-[190px] hover:border-zinc-700 transition-all duration-300 hover:shadow-lg">
                <div>
                  <span className="text-[#F1A80A] font-mono text-xs sm:text-sm font-bold block mb-4">04</span>
                  <h3 className="text-white text-base sm:text-lg font-bold mb-2">School of Digital Era</h3>
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed">
                    Fokus pada kurikulum digital dan keterampilan teknologi masa depan.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
