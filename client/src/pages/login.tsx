import React, { useState } from "react";
// import StarVideoBackground from '@/components/StarVideoBackground';
import { loginUser } from "../lib/Api";
import Login3D from "@/components/Login3D";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.user?.role || "user");
      }
      if (data.user?.role === "admin") {
        window.location.href = "/admin_dashboard";
      } else {
        window.location.href = "/";
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative text-[#e3e8f0] overflow-x-hidden flex items-center justify-center">
      {/* <StarVideoBackground /> */}
      <Login3D />
      <main className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="max-w-sm w-full mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl px-6 py-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-2xl mb-2">
            Login to <span className="font-bold">WebStitch</span>
          </h2>
          <p className="mt-1 text-base text-[#a5b4fc] mb-6">
            Welcome back! Please enter your credentials to continue.
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {error && (
              <div className="mb-2 text-red-500 text-center font-semibold">
                {error}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <label className="text-left font-medium text-[#a5b4fc]">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[#a5b4fc] rounded-lg bg-white/10 text-[#e3e8f0] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-left font-medium text-[#a5b4fc]">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-[#a5b4fc] rounded-lg bg-white/10 text-[#e3e8f0] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white py-2 rounded-lg font-bold shadow-lg hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
