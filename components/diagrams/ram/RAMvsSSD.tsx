"use client";
import { motion } from "framer-motion";

export default function RAMvsSSD({ accent = "#7C3AED" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1E1B4B)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">RAM vs Storage — Speed Comparison</p>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {[
          { label: "CPU Registers", emoji: "⚡", speed: "< 1 ns", bar: 100, color: "#F59E0B" },
          { label: "L1 Cache",      emoji: "🔥", speed: "1–4 ns",  bar: 92,  color: "#EF4444" },
          { label: "RAM (DDR5)",    emoji: "📚", speed: "10–80 ns",bar: 60,  color: accent },
          { label: "NVMe SSD",      emoji: "💾", speed: "50–100 µs",bar: 20,  color: "#3B82F6" },
          { label: "Hard Disk",     emoji: "🐢", speed: "5–20 ms", bar: 5,   color: "#64748B" },
        ].map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="text-lg w-6 shrink-0">{row.emoji}</span>
            <div className="w-28 shrink-0">
              <p className="text-xs font-black text-white/80">{row.label}</p>
              <p className="text-[10px] text-white/40">{row.speed}</p>
            </div>
            <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: row.color }}
                initial={{ width: 0 }}
                animate={{ width: `${row.bar}%` }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
              />
            </div>
          </motion.div>
        ))}
        <div className="rounded-xl px-4 py-2 mt-1 text-center" style={{ background: "rgba(255,255,255,0.05)" }}>
          <p className="text-xs text-white/50">RAM is <strong className="text-white/80">1,000× faster</strong> than SSD — that's why programs load into RAM before running</p>
        </div>
      </div>
    </div>
  );
}
