"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RGBColors({ accent = "#EC4899" }: { accent?: string }) {
  const [r, setR] = useState(255);
  const [g, setG] = useState(100);
  const [b, setB] = useState(50);

  const color = `rgb(${r},${g},${b})`;
  const hex = `#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`.toUpperCase();

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF2F8,#FCE7F3)" }}>
      <div className="px-5 py-3 border-b border-pink-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Every Pixel = R + G + B mixed together</p>
      </div>
      <div className="p-5">
        <div className="flex gap-4 items-center mb-4">
          <motion.div className="w-20 h-20 rounded-xl border-4 border-white shadow-lg shrink-0" style={{ background: color }} animate={{ background: color }} />
          <div className="flex-1">
            <p className="text-sm font-black text-gray-700">{hex}</p>
            <p className="text-[10px] text-gray-500">rgb({r}, {g}, {b})</p>
          </div>
        </div>
        {[{ label: "🔴 Red",   val: r, set: setR, color: "#EF4444" },
          { label: "🟢 Green", val: g, set: setG, color: "#10B981" },
          { label: "🔵 Blue",  val: b, set: setB, color: "#3B82F6" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 mb-2">
            <p className="text-xs font-black w-16 text-gray-700">{s.label}</p>
            <input type="range" min={0} max={255} value={s.val} onChange={e => s.set(Number(e.target.value))} className="flex-1 h-2 rounded-full" style={{ accentColor: s.color }} />
            <p className="text-xs font-mono font-black w-8 text-right" style={{ color: s.color }}>{s.val}</p>
          </div>
        ))}
        <p className="text-center text-[10px] text-gray-500 mt-1">3 numbers (0–255 each) = 16.7 million possible colours per pixel</p>
      </div>
    </div>
  );
}
