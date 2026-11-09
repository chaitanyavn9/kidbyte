"use client";
import { motion } from "framer-motion";

export default function ScratchVsCode({ accent = "#FF6B35" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF7ED,#FFEDD5)" }}>
      <div className="px-5 py-3 border-b border-orange-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Scratch vs Text Code — Same Idea, Different Look</p>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {[
          { scratch: "when 🚩 clicked", python: "# Start of program", label: "Start" },
          { scratch: "repeat 10", python: "for i in range(10):", label: "Loop" },
          { scratch: "move 10 steps", python: "x = x + 10", label: "Move" },
          { scratch: 'say "Hello!"', python: 'print("Hello!")', label: "Output" },
        ].map((row, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="flex gap-3 items-center">
            <div className="w-16 text-center rounded-lg py-1 px-2 text-[9px] font-black text-white shrink-0" style={{ background: accent }}>{row.label}</div>
            <div className="flex-1 rounded-lg bg-orange-100 px-3 py-1.5 text-xs font-mono text-orange-800">{row.scratch}</div>
            <div className="text-gray-400 text-sm">≈</div>
            <div className="flex-1 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-mono text-green-400">{row.python}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
