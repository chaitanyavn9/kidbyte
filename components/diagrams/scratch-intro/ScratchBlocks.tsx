"use client";
import { motion } from "framer-motion";

const BLOCKS = [
  { color: "#F59E0B", category: "Events", code: "when 🚩 clicked", desc: "Start your program" },
  { color: "#3B82F6", category: "Motion", code: "move 10 steps", desc: "Move the sprite" },
  { color: "#7C3AED", category: "Control", code: "repeat 10", desc: "Loop 10 times" },
  { color: "#EF4444", category: "Looks", code: 'say "Hello!" for 2 secs', desc: "Show a speech bubble" },
  { color: "#16A34A", category: "Operators", code: "if touching edge?", desc: "Check a condition" },
];

export default function ScratchBlocks({ accent = "#FF6B35" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF7ED,#FFEDD5)" }}>
      <div className="px-5 py-3 border-b border-orange-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Scratch — Code by Snapping Blocks Together</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {BLOCKS.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 border-2"
            style={{ background: `${b.color}15`, borderColor: `${b.color}50` }}>
            <div className="rounded-lg px-2 py-1 text-white text-[9px] font-black shrink-0" style={{ background: b.color }}>{b.category}</div>
            <code className="text-xs font-black font-mono text-gray-700 flex-1">{b.code}</code>
            <p className="text-[10px] text-gray-500">{b.desc}</p>
          </motion.div>
        ))}
        <p className="text-center text-xs text-gray-500 mt-1">No typing needed — just drag, snap and run!</p>
      </div>
    </div>
  );
}
