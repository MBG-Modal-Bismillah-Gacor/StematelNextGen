"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Tentang", href: "#about" },
  { label: "Program", href: "#unggulan" },
  { label: "Mengapa Kami", href: "#mengapa-memilih" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Alumni", href: "#alumni" },
  { label: "Jurusan", href: "#jurusan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Outer Wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-300">

        {/* Inner Capsule */}
        <div
          className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-300 ease-in-out select-none ${
            isScrolled
              ? "max-w-[1240px] mx-6 mt-4 h-[64px] bg-white/92 backdrop-blur-md border border-gray-200/80 rounded-[14px] shadow-lg px-10"
              : "max-w-full h-[88px] bg-white border-b border-transparent rounded-none px-6 md:px-12"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/Logo-SMK-Telkom-Purwokerto.png"
                alt="SMK Telkom Purwokerto Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-9" : "h-[42px]"
                }`}
              />
            </a>
          </div>

          {/* Desktop Nav Pill */}
          <div className="hidden lg:flex flex-grow items-center justify-center">
            <div className="flex items-stretch h-[40px] border border-gray-300/80 rounded-[6px] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={item.href}
                  className={`flex items-center px-5 hover:bg-zinc-50/50 transition-colors ${
                    idx < NAV_ITEMS.length - 1 ? "border-r border-gray-300/80" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className="text-[10.5px] font-bold text-zinc-700 hover:text-red-600 transition-colors uppercase whitespace-nowrap tracking-wider"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: PPDB + Mobile toggle */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <a
              href="#"
              className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-[#ED1C24] to-[#D11018] hover:from-[#D11018] hover:to-[#B30E14] text-white text-[12px] font-bold tracking-wider px-6 h-[40px] rounded-[6px] transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 active:scale-[0.97] whitespace-nowrap uppercase group"
            >
              PPDB
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[88px] bottom-0 bg-white/97 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 gap-4 transition-all duration-300 border-t border-gray-100 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#"
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
