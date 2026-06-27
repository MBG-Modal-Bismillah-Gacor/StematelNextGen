import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function CtaBanner() {
  // ── CTA BANNER ──
  return (
    <div className="w-full bg-white px-5">
    <div className="relative overflow-hidden bg-gradient-to-br from-[#ED1C24] via-[#d41920] to-[#b01018] rounded-[28px] px-10 py-14 mb-4 flex flex-col items-center text-center gap-6">
      {/* Decorative blobs */}
      <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-black/10 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Badge */}
      <span className="relative z-10 inline-flex items-center bg-white/15 border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
        Penerimaan Peserta Didik Baru 2025/2026
      </span>

      {/* Headline */}
      <div className="relative z-10 flex flex-col gap-3 max-w-[640px]">
        <h3 className="text-white font-black text-[28px] sm:text-[36px] lg:text-[42px] leading-tight tracking-tight">
          Mulai Perjalananmu Bersama<br />
          SMK Telkom Purwokerto
        </h3>
        <p className="text-white/65 text-[13.5px] font-medium leading-relaxed max-w-[460px] mx-auto">
          Bergabunglah dengan komunitas pelajar digital terbaik. Raih masa depan di bidang teknologi, gim, dan telekomunikasi.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
        <a href="#" className="flex items-center gap-2 bg-white text-[#ED1C24] font-black text-[13px] px-6 py-3 rounded-[12px] hover:bg-zinc-100 transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
          Daftar Sekarang
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <a href="#" className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-bold text-[13px] px-6 py-3 rounded-[12px] hover:bg-white/20 transition-colors duration-200">
          Info Lebih Lanjut
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
    </div>
  );
}