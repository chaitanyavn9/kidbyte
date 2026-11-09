"use client";
import { motion } from "framer-motion";

export default function ThermalPaste({ accent = "#0284C7" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#083344)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">Thermal Paste — The Invisible Hero</p>
      </div>
      <div className="p-5">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-28 h-10 rounded-lg bg-gray-600 flex items-center justify-center text-xs font-black text-white">Heatsink</div>
            <motion.div className="absolute -bottom-2 left-0 right-0 h-2 rounded-sm"
              style={{ background: "#6EE7B7" }}
              animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
            <div className="w-28 h-10 rounded-lg bg-blue-800 flex items-center justify-center text-xs font-black text-white mt-2">CPU Die</div>
          </div>
        </div>
        {[
          { emoji: "🔬", text: "CPU surface has microscopic bumps and gaps — air gets trapped", color: "#F59E0B" },
          { emoji: "🧴", text: "Thermal paste fills gaps — 100× better heat transfer than air", color: accent },
          { emoji: "🌡️", text: "Without it, CPUs run 20–30°C hotter and throttle (slow down)", color: "#EF4444" },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
            className="flex gap-2 items-center mb-2">
            <span className="text-xl">{item.emoji}</span>
            <p className="text-xs text-white/60">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
