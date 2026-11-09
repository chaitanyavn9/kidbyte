"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BatteryLevels({ accent = "#15803D" }: { accent?: string }) {
  const [level, setLevel] = useState(80);
  const color = level > 50 ? "#15803D" : level > 20 ? "#F59E0B" : "#EF4444";

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)" }}>
      <div className="px-5 py-3 border-b border-green-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Battery — Stored Chemical Energy</p>
      </div>
      <div className="p-5 flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-32 h-20 rounded-xl border-4 border-gray-300 overflow-hidden bg-gray-100">
            <motion.div className="h-full rounded-lg" style={{ background: color, width: `${level}%` }} animate={{ width: `${level}%` }} />
          </div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-6 rounded-r-sm bg-gray-300" />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-black" style={{ color: level < 30 ? "white" : "#1f2937" }}>{level}%</p>
        </div>
        <input type="range" min={0} max={100} value={level} onChange={e => setLevel(Number(e.target.value))} className="w-full" style={{ accentColor: color }} />
        <div className="flex gap-3 text-xs font-bold">
          <span style={{ color: "#15803D" }}>✅ 50-100% = Good</span>
          <span style={{ color: "#F59E0B" }}>⚠️ 20-50% = Charge soon</span>
          <span style={{ color: "#EF4444" }}>🔴 0-20% = Critical</span>
        </div>
        <p className="text-[10px] text-gray-500 text-center">Lithium-ion batteries store energy as chemical bonds, releasing it as electricity when needed</p>
      </div>
    </div>
  );
}
