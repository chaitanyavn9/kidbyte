"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTS = [
  { emoji: "🧠", label: "CPU", desc: "Brain — processes all instructions. Every click, every calculation goes here.", color: "#3B82F6" },
  { emoji: "📚", label: "RAM", desc: "Short-term memory — holds everything currently open. Faster than storage.", color: "#7C3AED" },
  { emoji: "💾", label: "Storage", desc: "Long-term memory — saves all your files permanently. SSD or hard disk.", color: "#0891B2" },
  { emoji: "🎨", label: "GPU", desc: "Graphics card — draws every pixel on your screen. Essential for games.", color: "#16A34A" },
  { emoji: "🔌", label: "Motherboard", desc: "Main board — connects all components together with circuits.", color: "#9333EA" },
  { emoji: "⚡", label: "PSU", desc: "Power supply — converts wall electricity to safe voltages for components.", color: "#F59E0B" },
];

export default function ComputerParts({ accent = "#1D7CFF" }: { accent?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>What's Inside a Computer — Tap to Learn</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {PARTS.map(p => (
            <motion.button key={p.label} onClick={() => setActive(active === p.label ? null : p.label)}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="rounded-xl p-3 text-center border-2 transition-all"
              style={{ background: active === p.label ? p.color : "white", borderColor: active === p.label ? p.color : `${p.color}30` }}>
              <div className="text-2xl mb-1">{p.emoji}</div>
              <p className="text-[10px] font-black" style={{ color: active === p.label ? "white" : p.color }}>{p.label}</p>
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {active && (() => {
            const p = PARTS.find(x => x.label === active)!;
            return (
              <motion.div key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="rounded-xl px-4 py-3" style={{ background: `${p.color}15`, border: `1.5px solid ${p.color}40` }}>
                <p className="text-xs font-black mb-1" style={{ color: p.color }}>{p.emoji} {p.label}</p>
                <p className="text-xs text-gray-700">{p.desc}</p>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </div>
  );
}
