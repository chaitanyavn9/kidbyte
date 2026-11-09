"use client";
import { useState } from "react";
import { motion } from "framer-motion";

function getStrength(pwd: string): { score: number; label: string; color: string } {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 1) return { score, label: "Very Weak 🔴", color: "#EF4444" };
  if (score <= 2) return { score, label: "Weak 🟠", color: "#F97316" };
  if (score <= 3) return { score, label: "Medium 🟡", color: "#F59E0B" };
  if (score <= 4) return { score, label: "Strong 🟢", color: "#16A34A" };
  return { score, label: "Very Strong ✅", color: "#059669" };
}

export default function PasswordStrength({ accent = "#047857" }: { accent?: string }) {
  const [pwd, setPwd] = useState("abc123");
  const strength = getStrength(pwd);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Test Your Password Strength</p>
      </div>
      <div className="p-5">
        <input value={pwd} onChange={e => setPwd(e.target.value)}
          className="w-full border-2 rounded-xl px-4 py-2 font-mono text-sm mb-3 outline-none"
          style={{ borderColor: strength.color }}
          placeholder="Type a password..." />
        <div className="mb-3">
          <div className="flex justify-between mb-1">
            <p className="text-xs font-black" style={{ color: strength.color }}>{strength.label}</p>
            <p className="text-xs text-gray-400">{strength.score}/5</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: strength.color }}
              animate={{ width: `${(strength.score / 5) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>
        <div className="rounded-xl bg-white/70 p-3 border border-green-200">
          {[
            { label: "8+ characters", ok: pwd.length >= 8 },
            { label: "12+ characters", ok: pwd.length >= 12 },
            { label: "Uppercase letter", ok: /[A-Z]/.test(pwd) },
            { label: "Number", ok: /[0-9]/.test(pwd) },
            { label: "Symbol (!@#$)", ok: /[^A-Za-z0-9]/.test(pwd) },
          ].map((c, i) => (
            <p key={i} className="text-[10px] flex items-center gap-1.5 py-0.5">
              <span>{c.ok ? "✅" : "⬜"}</span>
              <span className={c.ok ? "text-green-700 font-bold" : "text-gray-400"}>{c.label}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
