"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
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
        <div className="flex-1 flex flex-col justify-center px-12 py-12">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Selamat Datang!</h1>
          <p className="text-sm text-gray-500 text-center mb-8 leading-relaxed">
            Senang melihatmu kembali. Semoga pengalamanmu menyenangkan!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Masukan Email Calon Siswa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#d62b2b]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full px-3.5 py-2.5 pr-11 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#d62b2b]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
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
              <div className="flex justify-end">
                <a href="#" className="text-xs text-[#d62b2b] font-medium hover:underline">Lupa kata sandi?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#d62b2b] hover:bg-[#b91c1c] active:scale-[0.99] text-white font-semibold text-base rounded-lg transition mt-1"
            >
              Masuk
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-5">
            Belum memiliki akun <strong className="text-gray-700">SMK Telkom Purwokerto</strong>?{" "}
            <a href="/daftar" className="text-[#d62b2b] font-semibold hover:underline">Daftar Disini</a>
          </p>
        </div>

      </div>
    </div>
  );
}