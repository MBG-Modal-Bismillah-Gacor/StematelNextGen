"use client";

export default function Alumni() {
  return (
    <section id="alumni" className="relative w-full bg-white py-24 px-6 select-none overflow-hidden border-t border-gray-100">
      
      {/* Centered lines wrapper - runs from top to bottom of section and stays locked to content coordinates */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
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
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-100">
              {/* NUS */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/nus.png"
                  alt="NUS Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* MIT */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/mit.png"
                  alt="MIT Logo"
                  className="h-11 w-auto object-contain"
                />
              </div>

              {/* UI */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/ui.png"
                  alt="UI Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* UGM */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/ugm.png"
                  alt="UGM Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* ITB */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/itb.png"
                  alt="ITB Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Corporate Partners Row */}
            <div className="flex flex-wrap items-center gap-10 opacity-100">
              {/* NVIDIA */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/nvidia.png"
                  alt="NVIDIA Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>

              {/* Google */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/google.png"
                  alt="Google Logo"
                  className="h-11 w-auto object-contain"
                />
              </div>

              {/* Apple */}
              <div className="flex items-center justify-center">
                <img
                  src="/logos/apple.png"
                  alt="Apple Logo"
                  className="h-11 w-auto object-contain"
                />
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
