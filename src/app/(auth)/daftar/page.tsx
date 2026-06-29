"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [step, setStep] = useState(1);

  // State Step 1: Akun
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State Step 2: Biodata
  const [nama, setNama] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [nik, setNik] = useState("");

  // Handler untuk lanjut ke Step 2
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan Confirm Password tidak cocok!");
      return;
    }
    setStep(2); 
  };

  // Handler untuk Submit Final
  const handleSubmitFinal = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      email,
      password,
      nama,
      tanggalLahir,
      whatsapp: `+62${whatsapp}`,
      nik,
    });
    alert("Pendaftaran Berhasil!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans">
      <div className="flex w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden min-h-[500px]">
        
        {/* Left Panel */}
        <div
          className="relative w-[44%] flex flex-col items-center p-7 overflow-hidden"
          style={{
            background: "#d62b2b",
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 32px),
              repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 32px)
            `,
          }}
        >
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Satu langkah lagi..</h1>
          <p className="text-sm text-gray-500 text-center mb-8 leading-relaxed">
            Isilah data di bawah ini untuk melakukan<br />pendaftaran akun terlebih dahulu ya!
          </p>

          {/* Render Form Berdasarkan Step */}
          {step === 1 ? (
            <form onSubmit={handleNextStep} className="flex flex-col gap-4" noValidate>
              {/* Form Step 1: Email & Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Masukan Email Calon Siswa"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#d62b2b]"
                />
              </div>

              <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="••••••••••••"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full px-3.5 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm outline-none transition focus:border-[#d62b2b]"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
  >
    {showPassword ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )}
  </button>
</div>

              <div className="relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="••••••••••••"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
    className="w-full px-3.5 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm outline-none transition focus:border-[#d62b2b]"
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
  >
    {showConfirmPassword ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    )}
  </button>
</div>
              <button
                type="submit"
                className="w-full py-3 bg-[#d62b2b] hover:bg-[#b91c1c] text-white font-semibold text-base rounded-lg transition mt-3"
              >
                Selanjutnya
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmitFinal} className="flex flex-col gap-4" noValidate>
              {/* Form Step 2: Biodata */}
              
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukan Nama Lengkap Calon Siswa"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#d62b2b]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Tanggal Lahir</label>
                <input
                  type="date"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:border-[#d62b2b]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Nomor Whatsapp Ortu/Wali</label>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#d62b2b] transition">
                  <div className="bg-gray-50 px-3 py-2.5 border-r border-gray-200 flex items-center gap-2">
                    <span className="text-base">🇮🇩</span>
                    <span className="text-sm font-medium text-gray-700">+62</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="81234567890"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ''))} // Hanya angka
                    required
                    className="w-full px-3.5 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">NIK</label>
                <input
                  type="text"
                  placeholder="Masukan NIK Calon Siswa"
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))} // Hanya angka
                  required
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#d62b2b]"
                />
              </div>

              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-base rounded-lg transition"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-[#d62b2b] hover:bg-[#b91c1c] text-white font-semibold text-base rounded-lg transition"
                >
                  Daftar
                </button>
              </div>
            </form>
          )}

          {step === 1 && (
            <p className="text-xs text-gray-500 text-center mt-5">
              Sudah memiliki akun <strong className="text-gray-700">SMK Telkom Purwokerto</strong>?{" "}
              <a href="/masuk" className="text-[#d62b2b] font-semibold hover:underline">Masuk Disini</a>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}