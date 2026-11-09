"use client";
import { motion } from "framer-motion";

const TASKS = [
  { emoji: "🎮", label: "Game running", ops: "2 billion ops/sec" },
  { emoji: "🌐", label: "Website loading", ops: "millions of calculations" },
  { emoji: "📱", label: "Video playing", ops: "24 frames decoded/sec" },
  { emoji: "📊", label: "Spreadsheet", ops: "thousands of cell formulas" },
];

export default function CPUWhyWeNeed({ accent = "#3B82F6" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden p-5" style={{ background: "linear-gradient(135deg,#DBEAFE,#EFF6FF)" }}>
      <p className="text-center text-xs font-black uppercase tracking-widest mb-4" style={{ color: accent }}>
        Why Every Computer Needs a CPU
      </p>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 flex flex-col gap-2">
          {TASKS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2"
            >
              <span className="text-xl">{t.emoji}</span>
              <div>
                <p className="text-xs font-black text-gray-800">{t.label}</p>
                <p className="text-[10px] text-gray-500">{t.ops}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-2xl"
          >→</motion.div>
          <p className="text-[9px] text-gray-500 font-bold text-center">all need<br/>processing</p>
        </div>

        {/* CPU */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <motion.div
            className="text-5xl"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >🧠</motion.div>
          <div className="rounded-xl px-3 py-2 text-center" style={{ background: `${accent}20`, border: `1.5px solid ${accent}50` }}>
            <p className="text-xs font-black" style={{ color: accent }}>CPU</p>
            <p className="text-[9px] text-gray-600">processes<br/>everything</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl px-4 py-3 bg-white/60 text-center">
        <p className="text-sm font-bold text-gray-700">
          Every single instruction — clicking, typing, loading, calculating — flows through the CPU. <span style={{ color: accent }}>No CPU = no computer.</span>
        </p>
      </div>
    </div>
  );
}
