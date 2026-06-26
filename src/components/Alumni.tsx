"use client";

export default function Alumni() {
  return (
    <section id="alumni" className="relative w-full bg-white py-24 px-6 md:px-12 select-none overflow-hidden border-t border-gray-100">
      
      {/* Centered lines wrapper - runs from top to bottom of section and stays locked to content coordinates */}
      <div className="absolute inset-y-0 left-6 right-6 md:left-12 md:right-12 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        {/* Left vertical line (aligned with left edge of global layout) */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line (124px offset) */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Heading, Description & Logos (Grid Span: 7) */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          
          {/* Tagline starts at left-0 */}
          <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-4">
            Lulusan Terbaik
          </span>
          
          {/* Main content aligns right of the vertical line */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-black text-zinc-900 leading-tight tracking-tight uppercase">
              Mereka yang Mendunia
            </h2>
            
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Menjadi bukti nyata kualitas pendidikan kami. Tersebar di berbagai industri terkemuka, merintis bisnis inovatif, dan menembus universitas favorit.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="mt-12 flex flex-col gap-8">
            
            {/* Universities Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-90">
              {/* NUS */}
              <div className="flex items-center gap-1.5 h-8">
                <svg className="w-8 h-8" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H40V25C40 35 30 42 20 45C10 42 0 35 0 25V0Z" fill="#002D62" />
                  <path d="M5 5H35V23C35 30 27 36 20 39C13 36 5 30 5 23V5Z" fill="#EF7C00" />
                  <circle cx="20" cy="18" r="6" fill="white" />
                </svg>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[12px] font-black text-[#002D62] tracking-tight">NUS</span>
                  <span className="text-[6px] font-bold text-zinc-400 uppercase tracking-tighter">National Univ.<br />of Singapore</span>
                </div>
              </div>

              {/* MIT */}
              <div className="flex items-center h-8">
                <svg className="h-7" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="14" height="40" fill="#8A1B29" />
                  <rect x="20" width="14" height="28" fill="#8A1B29" />
                  <rect x="40" width="14" height="40" fill="#8A1B29" />
                  <rect x="60" width="28" height="10" fill="#8A1B29" />
                  <rect x="67" y="14" width="14" height="26" fill="#8A1B29" />
                </svg>
              </div>

              {/* UI */}
              <div className="flex items-center gap-1.5 h-8">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FCD34D" />
                  <circle cx="20" cy="20" r="14" fill="white" />
                  <path d="M20 8V32M20 16C16 16 14 18 14 20C14 22 16 24 20 24C24 24 26 22 26 20C26 18 24 16 20 16Z" stroke="#D97706" strokeWidth="1.8" />
                </svg>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[10px] font-black text-zinc-800 tracking-tight uppercase">UI</span>
                  <span className="text-[5px] font-medium text-zinc-400">Univ. Indonesia</span>
                </div>
              </div>

              {/* UGM */}
              <div className="flex items-center gap-1.5 h-8">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2L23 10L31 8L27 15L35 17L28 22L33 29L25 27L26 35L20 29L14 35L15 27L7 29L12 22L5 17L13 15L9 8L17 10L20 2Z" fill="#F59E0B" />
                  <circle cx="20" cy="20" r="9" fill="white" />
                  <circle cx="20" cy="20" r="6" fill="#F59E0B" />
                </svg>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[10px] font-black text-zinc-800 tracking-tight uppercase">UGM</span>
                  <span className="text-[5px] font-medium text-zinc-400">Univ. Gadjah Mada</span>
                </div>
              </div>

              {/* ITB */}
              <div className="flex items-center gap-1.5 h-8">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#1D4ED8" />
                  <circle cx="20" cy="20" r="14" fill="white" />
                  <path d="M20 10V30M14 16H26M16 24H24" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[10px] font-black text-[#1D4ED8] uppercase">ITB</span>
                  <span className="text-[5px] font-medium text-zinc-400">Inst. Tek. Bandung</span>
                </div>
              </div>
            </div>

            {/* Corporate Partners Row */}
            <div className="flex flex-wrap items-center gap-10 opacity-95">
              {/* NVIDIA */}
              <div className="flex items-center gap-1.5 h-8">
                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8C14 8 20 11 24 16C28 21 30 28 30 32H34C34 26 31 18 26 12C21 6 14 3 8 3V8Z" fill="#76B900" />
                  <path d="M8 14C12 14 16 16 19 19C22 22 24 27 24 30H27C27 25 25 19 21 14C17 9 12 7 8 7V14Z" fill="#76B900" />
                  <path d="M8 20C10 20 12 21 14 23C16 25 17 27 17 29H19C19 26 18 22 15 19C12 16 10 15 8 15V20Z" fill="#76B900" />
                </svg>
                <span className="text-[14px] font-black text-black tracking-widest font-mono uppercase">NVIDIA</span>
              </div>

              {/* Google */}
              <div className="flex items-center h-8">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.9 16.79 15.74 17.56V20.34H19.26C21.32 18.46 22.56 15.62 22.56 12.25Z" fill="#4285F4" />
                  <path d="M12 23C14.97 23 17.46 22.02 19.26 20.34L15.74 17.56C14.76 18.22 13.5 18.63 12 18.63C9.13 18.63 6.7 16.7 5.83 14.09H2.21V16.9C4.03 20.51 7.72 23 12 23Z" fill="#34A853" />
                  <path d="M5.83 14.09C5.61 13.43 5.48 12.73 5.48 12C5.48 11.27 5.61 10.57 5.83 9.91V7.1H2.21C1.48 8.57 1.06 10.23 1.06 12C1.06 13.77 1.48 15.43 2.21 16.9L5.83 14.09Z" fill="#FBBC05" />
                  <path d="M12 5.38C13.62 5.38 15.07 5.94 16.21 7.02L19.34 3.89C17.45 2.13 14.96 1.06 12 1.06C7.72 1.06 4.03 3.55 2.21 7.1L5.83 9.91C6.7 7.3 9.13 5.38 12 5.38Z" fill="#EA4335" />
                </svg>
              </div>

              {/* Apple */}
              <div className="flex items-center h-8">
                <svg className="h-7 w-7 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28C15.46 21.86 13.79 22.03 12.18 21.36C10.5 20.67 8.92 20.73 7.24 21.36C5.6 22.02 4.14 21.78 2.65 20.28C-0.89 16.75 -0.66 10.6 3.12 6.84C5.01 4.97 7.15 4.06 9.27 4.17C11.53 4.29 12.92 5.37 14.16 5.37C15.39 5.37 17.06 4.14 19.34 4.29C21.43 4.43 23.16 5.56 24.16 7.37C19.78 9.97 20.73 15.82 24.78 17.48C23.97 19.46 22.37 21.44 20.31 22.36C19.22 22.84 18.15 22.61 17.05 20.28ZM16.32 2.5C18.68 2.24 20.43 0.5 20.12 -1.5C18 -1.24 16.27 0.65 16.58 2.65C16.48 2.65 16.4 2.5 16.32 2.5Z" />
                </svg>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Globe Graphic (Grid Span: 5) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[440px] lg:max-w-none relative">
            {/* Red/White Globe Graphic (featuring the baked-in mockup avatars and connecting lines) */}
            <img
              src="/Bumi.png?v=2"
              alt="Sebaran Alumni Dunia"
              className="w-full h-auto object-contain transition-all duration-700 hover:rotate-3 hover:scale-[1.03]"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
