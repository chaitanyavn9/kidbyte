"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLOTS = [
  { id: "cpu", emoji: "🧠", label: "CPU Socket", color: "#3B82F6", pos: "top-4 left-1/2 -translate-x-1/2", desc: "The brain of the PC. All data flows through here." },
  { id: "ram", emoji: "📚", label: "RAM Slots", color: "#7C3AED", pos: "top-4 right-6", desc: "Up to 4 sticks of fast temporary memory." },
  { id: "pcie", emoji: "🎨", label: "PCIe x16 (GPU)", color: "#16A34A", pos: "top-24 left-6", desc: "The GPU plugs in here — the longest slot on the board." },
  { id: "ssd", emoji: "⚡", label: "M.2 NVMe Slot", color: "#0891B2", pos: "bottom-16 left-1/3", desc: "Ultra-fast storage chip that sits flat on the board." },
  { id: "power", emoji: "🔌", label: "24-pin Power", color: "#F59E0B", pos: "top-4 right-6 mt-20", desc: "Main power connector from the PSU." },
];

export default function MotherboardLayout({ accent = "#9333EA" }: { accent?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F5F3FF,#EDE9FE)" }}>
      <div className="px-5 py-3 border-b border-purple-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Motherboard — The Hub That Connects Everything</p>
      </div>
      <div className="p-5">
        <div className="flex gap-4">
          {/* Board visual */}
          <div className="flex-1 relative h-48 rounded-xl bg-green-900 border-2 border-green-700 overflow-hidden">
            {/* PCB texture */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="absolute h-px bg-green-400" style={{ top: `${i * 25}px`, left: 0, right: 0 }} />
              ))}
            </div>
            {SLOTS.map(s => (
              <motion.button
                key={s.id}
                className={`absolute flex flex-col items-center gap-0.5 cursor-pointer`}
                style={{ top: s.id === "cpu" ? "12px" : s.id === "ram" ? "12px" : s.id === "pcie" ? "72px" : s.id === "ssd" ? "120px" : "56px",
                         left: s.id === "cpu" ? "35%" : s.id === "ram" ? "65%" : s.id === "pcie" ? "12%" : s.id === "ssd" ? "30%" : "70%"
                }}
                onClick={() => setActive(active === s.id ? null : s.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  animate={{ background: active === s.id ? s.color : `${s.color}60`, boxShadow: active === s.id ? `0 0 12px ${s.color}` : "none" }}
                >
                  {s.emoji}
                </motion.div>
                <p className="text-[8px] font-black text-white/80 text-center leading-tight w-12">{s.label}</p>
              </motion.button>
            ))}
          </div>
          {/* Detail panel */}
          <div className="w-32 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {active ? (() => {
                const s = SLOTS.find(x => x.id === active)!;
                return (
                  <motion.div key={active} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    className="rounded-xl p-3" style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}40` }}>
                    <div className="text-2xl mb-1">{s.emoji}</div>
                    <p className="text-xs font-black mb-1" style={{ color: s.color }}>{s.label}</p>
                    <p className="text-[10px] text-gray-600 leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })() : (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-400 text-center">
                  👆 Tap a component to learn what it does
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
