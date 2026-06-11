import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

export default async function LoginPage(props: { searchParams: Promise<{ error?: string }> }) {
  const searchParams = await props.searchParams;
  const error = searchParams.error;

  async function handleLogin(formData: FormData) {
    "use server";
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const expectedUsername = process.env.ADMIN_USERNAME || "admin";
    const expectedPassword = process.env.ADMIN_PASSWORD || "M@ng0482610";

    if (username === expectedUsername && password === expectedPassword) {
      const token = crypto.createHmac('sha256', 'akshar_secret_salt_123')
        .update(expectedPassword)
        .digest('hex');

      const cookieStore = await cookies();
      cookieStore.set("akshar_admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });

      redirect("/admin");
    } else {
      redirect("/admin/login?error=Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen bg-[#12181C] flex items-center justify-center p-4">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,90,37,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#161c21]/90 border border-white/10 backdrop-blur-xl p-8 rounded-lg shadow-2xl relative z-10 transition-all duration-300 hover:border-[#C5A367]/30">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#C5A367]/10 border border-[#C5A367]/20 flex items-center justify-center rounded-full mb-4 text-[#C5A367]">
            <span className="material-symbols-outlined text-3xl">lock</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">CMS Control Panel</h1>
          <p className="text-slate-400 text-sm mt-1">Authenticate to manage Akshar Construction</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-sm mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">error</span>
            <span>{error}</span>
          </div>
        )}

        <form action={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Username</label>
            <input
              type="text"
              name="username"
              required
              autoFocus
              className="w-full bg-black/20 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A367] focus:ring-1 focus:ring-[#C5A367] transition-all duration-300"
              placeholder="Enter username"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-black/20 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C5A367] focus:ring-1 focus:ring-[#C5A367] transition-all duration-300"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C5A367] hover:bg-[#755A25] text-white py-3 rounded-sm text-sm uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
