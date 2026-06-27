"use client";

import { Code, Gamepad, Network, Radio, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full bg-white py-20 px-6 select-none border-t border-gray-100 overflow-hidden">
      
      {/* Centered lines wrapper - runs from top to bottom of section and stays locked to content coordinates */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block">
        {/* Left vertical line (aligned with left edge of RPL/TKJ boxes) */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line (aligned right between the columns of the 2x2 grid) */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column (Grid cols: 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* 2x2 Major Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-[250px]">
            
            {/* RPL */}
            <div className="flex flex-col items-center justify-center w-[116px] h-[116px] border border-gray-200/80 rounded-[6px] bg-white hover:border-[#ED1C24]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Code className="w-8 h-8 text-[#ED1C24] stroke-[2]" />
              <span className="text-[12px] font-bold mt-3 text-zinc-800 tracking-wider">RPL</span>
            </div>

            {/* PG */}
            <div className="flex flex-col items-center justify-center w-[116px] h-[116px] border border-gray-200/80 rounded-[6px] bg-white hover:border-[#ED1C24]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Gamepad className="w-8 h-8 text-[#ED1C24] stroke-[1.8]" />
              <span className="text-[12px] font-bold mt-3 text-zinc-800 tracking-wider">PG</span>
            </div>

            {/* TKJ */}
            <div className="flex flex-col items-center justify-center w-[116px] h-[116px] border border-gray-200/80 rounded-[6px] bg-white hover:border-[#ED1C24]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Network className="w-8 h-8 text-[#ED1C24] stroke-[1.8]" />
              <span className="text-[12px] font-bold mt-3 text-zinc-800 tracking-wider">TKJ</span>
            </div>

            {/* TJA */}
            <div className="flex flex-col items-center justify-center w-[116px] h-[116px] border border-gray-200/80 rounded-[6px] bg-white hover:border-[#ED1C24]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <Radio className="w-8 h-8 text-[#ED1C24] stroke-[1.8]" />
              <span className="text-[12px] font-bold mt-3 text-zinc-800 tracking-wider">TJA</span>
            </div>

          </div>

          {/* Heading */}
          <div className="mt-2">
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-zinc-900 tracking-tight leading-[1.15]">
              4 Jurusan<br />terbaru
            </h2>
          </div>

          {/* Red Action Button */}
          <div>
            <Link
            href="/tentang-kami"
            className="inline-flex items-center bg-[#ED1C24] hover:bg-[#C8161D] text-white rounded-[6px] h-[38px] pl-5 pr-1.5 gap-2.5 transition-all hover:shadow-md active:scale-95 w-max">
        <span className="text-[11.5px] font-bold tracking-wider uppercase">Lebih detail</span>
        <span className="flex items-center justify-center w-6 h-6 bg-white rounded-[4px] text-[#ED1C24]">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 stroke-[2.5]" />
              </span>
          </Link>
          </div>
        </div>

        {/* Right Column (Grid cols: 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pt-2">
          
          {/* Label & Main Text */}
          <div className="space-y-2">
            <span className="text-[11.5px] font-bold text-zinc-400 uppercase tracking-widest block">
              Tentang Kami
            </span>
            <h3 className="text-[20px] sm:text-[25px] font-extrabold text-zinc-900 leading-snug tracking-tight max-w-2xl">
              Bangun kemampuan melalui Project-Based Learning. Kolaborasi industri,
            </h3>
          </div>

          {/* Stats Cards Row */}
          <div className="flex flex-row gap-6 mt-4 overflow-x-auto pb-4 scrollbar-none">
            
            {/* Siswa Card */}
            <div className="border border-gray-200/80 rounded-[6px] bg-white p-6 w-[230px] flex-shrink-0 flex flex-col justify-between h-[180px] shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-zinc-300 transition-all duration-300">
              <div>
                <span className="text-[#ED1C24] font-extrabold text-[13px] uppercase tracking-wider relative block w-max">
                  Siswa
                  <div className="w-full h-[1.5px] bg-[#ED1C24] mt-1" />
                </span>
              </div>
              <div>
                <h4 className="text-[38px] font-black text-zinc-900 tracking-tight leading-none">
                  1200+
                </h4>
                <p className="text-[11.5px] font-medium text-zinc-500 leading-snug mt-2">
                  Diseluruh Program yang aktif
                </p>
              </div>
            </div>

            {/* Prestasi Card */}
            <div className="border border-gray-200/80 rounded-[6px] bg-white p-6 w-[230px] flex-shrink-0 flex flex-col justify-between h-[180px] shadow-[0_1px_3px_rgba(0,0,0,0.01)] hover:border-zinc-300 transition-all duration-300">
              <div>
                <span className="text-[#ED1C24] font-extrabold text-[13px] uppercase tracking-wider relative block w-max">
                  Prestasi
                  <div className="w-full h-[1.5px] bg-[#ED1C24] mt-1" />
                </span>
              </div>
              <div>
                <h4 className="text-[38px] font-black text-zinc-900 tracking-tight leading-none">
                  50+
                </h4>
                <p className="text-[11.5px] font-medium text-zinc-500 leading-snug mt-2">
                  Prestasi Nasional dan Internasional
                </p>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2.5 mt-2">
            
            {/* Prev Button */}
            <button className="w-9 h-9 rounded-[6px] bg-[#ED1C24] hover:bg-[#C8161D] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95">
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Next Button */}
            <button className="w-9 h-9 rounded-[6px] bg-white hover:bg-zinc-50 text-zinc-700 border border-gray-200/85 flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95">
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
