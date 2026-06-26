"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <header className="w-full bg-white h-[76px] flex items-center justify-between px-6 md:px-12 select-none border-b border-gray-100 gap-4">
        
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" className="flex items-center">
            <img
              src="/Logo-SMK-Telkom-Purwokerto.png"
              alt="SMK Telkom Purwokerto Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Center Section: Unified Navigation Pill (Desktop Only - Cohesive, sleek h-[38px] height, text-only) */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <div className="flex items-stretch h-[38px] border border-gray-300/80 rounded-[6px] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            
            {/* Tentang */}
            <div className="flex items-center px-5 border-r border-gray-300/80 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#hero"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                TENTANG
              </a>
            </div>

            {/* Jurusan */}
            <div className="flex items-center px-5 border-r border-gray-300/80 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#jurusan"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                JURUSAN
              </a>
            </div>

            {/* Unggulan */}
            <div className="flex items-center px-5 border-r border-gray-300/80 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#unggulan"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                UNGGULAN
              </a>
            </div>

            {/* Alumni */}
            <div className="flex items-center px-5 border-r border-gray-300/80 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#alumni"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                ALUMNI
              </a>
            </div>

            {/* Virtual Tour */}
            <div className="flex items-center px-5 border-r border-gray-300/80 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#virtual-tour"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                VIRTUAL TOUR
              </a>
            </div>

            {/* Prestasi */}
            <div className="flex items-center px-5 hover:bg-zinc-50/50 transition-colors">
              <a
                href="#wall-of-fame"
                className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
              >
                PRESTASI
              </a>
            </div>

          </div>
        </div>

        {/* Right Section: PPDB Button (Desktop) & Menu Toggle (Mobile) */}
        <div className="flex-shrink-0 flex items-center gap-4">
          
          {/* PPDB Button (Desktop Only - Premium Gradient, Arrow Icon, Hover Glow & Scaling) */}
          <a
            href="#footer"
            className="hidden lg:flex items-center justify-center bg-gradient-to-r from-[#ED1C24] to-[#D11018] hover:from-[#D11018] hover:to-[#B30E14] text-white text-[12px] font-bold tracking-wider px-6 h-[38px] rounded-[6px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 active:scale-[0.97] whitespace-nowrap uppercase cursor-pointer flex items-center gap-1.5 group"
          >
            PPDB
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[76px] bottom-0 bg-white/97 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 gap-4 transition-all duration-300 border-t border-gray-100 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            TENTANG
          </a>
          <a
            href="#jurusan"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            JURUSAN
          </a>
          <a
            href="#unggulan"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            UNGGULAN
          </a>
          <a
            href="#alumni"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            ALUMNI
          </a>
          <a
            href="#virtual-tour"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            VIRTUAL TOUR
          </a>
          <a
            href="#wall-of-fame"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            PRESTASI
          </a>
        </div>
        <a
          href="#footer"
          onClick={() => setIsOpen(false)}
          className="mt-4 w-full text-center py-3.5 bg-[#ED1C24] hover:bg-[#C8161D] text-white rounded-lg text-sm font-bold tracking-wide transition-all uppercase flex items-center justify-center gap-2"
        >
          PPDB
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}
