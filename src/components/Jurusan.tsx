"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Code,
  Smartphone,
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Gamepad2,
  PenTool,
  Layers,
  Activity,
  Volume2,
  Network,
  Server,
  ShieldAlert,
  Wifi,
  Cloud,
  Radio,
  Signal,
  Wrench,
  Gauge,
  Globe,
  Shield,
  Monitor,
  Briefcase,
  Settings,
  ChevronDown
} from "lucide-react";

// Map string icon names to Lucide icons
const IconMap: { [key: string]: React.ComponentType<any> } = {
  BookOpen,
  Code,
  Smartphone,
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Gamepad2,
  PenTool,
  Layers,
  Activity,
  Volume2,
  Network,
  Server,
  ShieldAlert,
  Wifi,
  Cloud,
  Radio,
  Signal,
  Wrench,
  Gauge,
  Globe,
  Shield,
  Monitor,
  Briefcase,
  Settings
};

const JURUSAN_DATA = [
  {
    id: "rpl",
    shortName: "RPL",
    fullName: "Rekayasa Perangkat Lunak",
    description: "Mempelajari seluruh aspek produksi software seperti aplikasi web dan aplikasi mobile.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Mata Pelajaran Kejuruan", icon: "Settings" },
      { name: "Kewirausahaan", icon: "Lightbulb" },
      { name: "Desain Grafis", icon: "PenTool" },
      { name: "Pemrograman web", icon: "Code" },
      { name: "Pemrograman aplikasi android", icon: "Smartphone" },
      { name: "Manajemen Database", icon: "Database" }
    ],
    careers: [
      {
        title: "Web Dev",
        icon: "Globe",
        desc: "Siswa nantinya akan belajar dan dituntut untuk bisa membuat aplikasi berbasis web dengan teknologi pemrograman sesuai standar industri. Back-end menggunakan Node JS/Laravel, dan Front-end menggunakan React JS/Vue JS."
      },
      {
        title: "Mobile Dev",
        icon: "Smartphone",
        desc: "Mengembangkan aplikasi smartphone Android dan iOS menggunakan teknologi mutakhir seperti Flutter, React Native, atau native development."
      },
      {
        title: "Game Dev",
        icon: "Gamepad2",
        desc: "Merancang logika permainan, mekanika, serta interaksi game 2D dan 3D menggunakan game engine populer."
      }
    ],
    visualType: "code",
    imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&h=680&q=80",
    themeColor: "text-[#ED1C24] border-[#ED1C24]/30 bg-[#ED1C24]/10",
    gradientColor: "from-[#ED1C24] to-[#f43f5e]"
  },
  {
    id: "pg",
    shortName: "PG",
    fullName: "Pengembangan Gim",
    description: "Mengembangkan keahlian dalam merancang cerita, visual art, animasi, dan pemrograman untuk industri game digital.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Pemrograman Game", icon: "Gamepad2" },
      { name: "Desain Level & Naratif", icon: "PenTool" },
      { name: "Desain Karakter 2D & 3D", icon: "Layers" },
      { name: "Animasi Game", icon: "Activity" },
      { name: "Rekayasa Audio Game", icon: "Volume2" },
      { name: "Kewirausahaan Digital", icon: "Lightbulb" }
    ],
    careers: [
      {
        title: "Game Programmer",
        icon: "Gamepad2",
        desc: "Menulis kode logika game, kecerdasan buatan (AI), fisika game, dan gameplay menggunakan Unity Engine or Unreal Engine."
      },
      {
        title: "Game Designer",
        icon: "PenTool",
        desc: "Merancang mekanika permainan, aturan main, tantangan, alur level, dan pengalaman interaktif yang menyenangkan."
      },
      {
        title: "3D Game Artist",
        icon: "Layers",
        desc: "Membuat aset visual berupa model karakter 3D, lingkungan (environment), tekstur, dan pencahayaan game."
      }
    ],
    visualType: "game",
    imgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=680&q=80",
    themeColor: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
    gradientColor: "from-[#8B5CF6] to-[#a78bfa]"
  },
  {
    id: "tkj",
    shortName: "TKJ",
    fullName: "Teknik Komputer dan Jaringan",
    description: "Mempelajari perakitan komputer, instalasi sistem operasi, penanganan hardware, serta administrasi jaringan komputer.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Jaringan Komputer Dasar", icon: "Network" },
      { name: "Administrasi Infrastruktur Jaringan", icon: "Server" },
      { name: "Keamanan Jaringan", icon: "ShieldAlert" },
      { name: "Sistem Komunikasi Nirkabel", icon: "Wifi" },
      { name: "Teknologi Cloud Computing", icon: "Cloud" },
      { name: "Internet of Things (IoT)", icon: "Cpu" }
    ],
    careers: [
      {
        title: "Network Engineer",
        icon: "Network",
        desc: "Merancang, mengkonfigurasi, menguji, dan mengelola jaringan LAN/WAN perusahaan menggunakan perangkat Cisco atau MikroTik."
      },
      {
        title: "System Administrator",
        icon: "Server",
        desc: "Mengelola server fisik dan virtual, sistem operasi server (Linux/Windows Server), backup data, dan hak akses."
      },
      {
        title: "Cyber Security Specialist",
        icon: "Shield",
        desc: "Melindungi infrastruktur IT dari ancaman serangan siber, memantau keamanan, dan menganalisis celah siber."
      }
    ],
    visualType: "network",
    imgUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&h=680&q=80",
    themeColor: "text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/10",
    gradientColor: "from-[#3B82F6] to-[#60a5fa]"
  },
  {
    id: "tja",
    shortName: "TJA",
    fullName: "Teknik Jaringan Akses Telekomunikasi",
    description: "Mempelajari instalasi, penyambungan, dan pengukuran jaringan serat optik (Fiber Optic) serta pemancar nirkabel.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Sistem Komunikasi Serat Optik", icon: "Radio" },
      { name: "Jaringan Nirkabel & Seluler", icon: "Signal" },
      { name: "Instalasi Perangkat Akses", icon: "Wrench" },
      { name: "Alat Ukur Fiber Optik (OTDR)", icon: "Gauge" },
      { name: "Sistem Transmisi Satelit", icon: "Globe" },
      { name: "K3 Spesialis Telekomunikasi", icon: "Shield" }
    ],
    careers: [
      {
        title: "Fiber Optic Engineer",
        icon: "Signal",
        desc: "Melakukan instalasi penarikan kabel fiber optik, penyambungan (fusion splicing), dan pengetesan redaman sinyal menggunakan OTDR."
      },
      {
        title: "RF Engineer",
        icon: "Radio",
        desc: "Merancang, mengukur, dan mengoptimalkan sinyal pemancar seluler (BTS) untuk menjamin kualitas sinyal 4G/5G."
      },
      {
        title: "Telecom Supervisor",
        icon: "Wrench",
        desc: "Mengawasi proyek penyediaan jaringan telekomunikasi kabel dan nirkabel untuk operator seluler atau ISP."
      }
    ],
    visualType: "telecom",
    imgUrl: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=400&h=680&q=80",
    themeColor: "text-[#F97316] border-[#F97316]/30 bg-[#F97316]/10",
    gradientColor: "from-[#F97316] to-[#fb923c]"
  }
];

function CardVisual({ type, imgUrl }: { type: string; imgUrl: string }) {
  return (
    <div className="w-full h-full relative">
      <img
        src={imgUrl}
        alt={type}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-10" />
      
      {/* Floating Badge & Text */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-1 text-left">
        <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest leading-none">
          Aktivitas Siswa
        </span>
        <span className="text-[11.5px] text-white font-extrabold tracking-wide uppercase leading-tight">
          {type === "code" ? "Software Engineering" :
           type === "game" ? "Game Development" :
           type === "network" ? "Network Infrastructure" :
           "Telecom Technology"}
        </span>
      </div>
    </div>
  );
}

export default function Jurusan() {
  // Track which career item is open per card: { [majorId]: openIndex | null }
  const [openCareer, setOpenCareer] = useState<{ [key: string]: number | null }>({});

  const toggleCareer = (majorId: string, idx: number) => {
    setOpenCareer(prev => ({
      ...prev,
      [majorId]: prev[majorId] === idx ? null : idx,
    }));
  };

  return (
    <section id="jurusan" className="relative w-full bg-white pt-24 pb-12 px-6 select-none border-t border-gray-100 overflow-visible">
      
      {/* Centered vertical lines running from top to bottom of section */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        {/* Left vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* 1. Static Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 w-full">
          <div className="flex flex-col">
            <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-4">
              Jurusan
            </span>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-black text-zinc-900 leading-tight tracking-tight uppercase max-w-2xl">
              Kenali Lebih Dekat<br />
              <span className="text-[#ED1C24]">Pilihan Jurusanmu</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Monitor Card Frame */}
            <div className="border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[14px] p-4 bg-white flex items-center justify-center w-[92px] h-[92px]">
              <svg className="w-12 h-12 text-[#ED1C24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <polyline points="10 8 8 10 10 12" />
                <polyline points="14 8 16 10 14 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Scrolling Stacked Cards Container */}
        <div className="relative flex flex-col gap-12 pb-10 md:pb-14 overflow-visible">
          {JURUSAN_DATA.map((major, index) => {
            return (
              <div
                key={major.id}
                className="sticky w-full bg-white border border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] rounded-[32px] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-300"
                style={{
                  top: "110px", // Sticks below the floating navbar, allowing the bottom card to slide over and cover the top card
                  zIndex: 10 + index,
                }}
              >
                
                {/* LEFT COLUMN: Subjects Learned (Grid Span: 5) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <h3 className="text-zinc-900 text-[17px] font-extrabold tracking-tight">
                    Apa saja yang di <span className="text-[#ED1C24]">pelajari</span>?
                  </h3>
                  
                  {/* Subject Pills Grid (3 Columns on larger screen to match mockup) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                    {major.subjects.map((subj, idx) => {
                      const IconComponent = IconMap[subj.icon] || BookOpen;
                      return (
                        <div
                          key={idx}
                          className="border border-[#ED1C24]/30 rounded-[8px] bg-white px-3.5 py-3 flex items-center gap-3 transition-all duration-300 hover:border-[#ED1C24]/70 hover:shadow-[0_4px_12px_rgba(237,28,36,0.04)]"
                        >
                          <div className="flex items-center justify-center w-7.5 h-7.5 rounded-[6px] bg-red-50 text-[#ED1C24] flex-shrink-0">
                            <IconComponent className="w-4 h-4 stroke-[2]" />
                          </div>
                          <span className="text-[11.5px] font-bold text-zinc-800 leading-tight">
                            {subj.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CENTER COLUMN: Phone Mockup Frame (Grid Span: 3) */}
                <div className="lg:col-span-4 flex justify-center items-center">
                  <div className="w-[260px] h-[440px] xl:w-[290px] xl:h-[490px] bg-zinc-950 border-[8px] border-zinc-900 rounded-[36px] shadow-2xl relative overflow-hidden flex flex-col flex-shrink-0">
                    <CardVisual type={major.visualType} imgUrl={major.imgUrl} />
                  </div>
                </div>

                {/* RIGHT COLUMN: Major details and Career list (Grid Span: 4) */}
                <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-4">
                  
                  {/* Header & Description */}
                  <div className="space-y-3">
                    <h3 className="text-[32px] sm:text-[36px] font-black text-zinc-900 tracking-tight leading-none uppercase">
                      {major.shortName}
                    </h3>
                    <span className="text-zinc-500 text-[13px] font-bold block">
                      ({major.fullName})
                    </span>
                    <p className="text-zinc-600 text-[13px] sm:text-[13.5px] leading-relaxed font-medium">
                      {major.description}
                    </p>
                  </div>

                  {/* Career Prospects */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-zinc-950 text-xs sm:text-[13px] font-extrabold tracking-wider uppercase">
                      Prospek <span className="text-[#ED1C24]">kerja</span>
                    </h4>
                    
                    <div className="flex flex-col gap-2">
                      {major.careers.map((career, idx) => {
                        const CareerIcon = IconMap[career.icon] || Briefcase;
                        const isOpen = openCareer[major.id] === idx;
                        return (
                          <div key={idx} className="border border-zinc-100 rounded-[12px] overflow-hidden bg-zinc-50/50 hover:border-zinc-200 transition-colors duration-200">
                            {/* Clickable Header */}
                            <button
                              onClick={() => toggleCareer(major.id, idx)}
                              className="w-full flex gap-3 items-center px-4 py-3 cursor-pointer text-left"
                            >
                              <div className="flex items-center justify-center w-7 h-7 rounded-[6px] bg-white border border-zinc-200 text-zinc-600 flex-shrink-0">
                                <CareerIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[12.5px] font-black text-zinc-900 leading-tight flex-1">
                                {career.title}
                              </span>
                              <ChevronDown
                                className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            </button>
                            {/* Expandable Description */}
                            <div
                              className="overflow-hidden transition-all duration-300 ease-in-out"
                              style={{ maxHeight: isOpen ? "120px" : "0px" }}
                            >
                              <p className="text-zinc-500 text-[11px] leading-relaxed font-medium px-4 pb-4 pt-0">
                                {career.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
