"use client";
import { motion } from "framer-motion";

export default function HexBreakdown({ accent = "#BE185D" }: { accent?: string }) {
  const hex = "#FF5733";
  const parts = [
    { label: "R (Red)",   value: "FF", decimal: 255, color: "#EF4444", desc: "Max red" },
    { label: "G (Green)", value: "57", decimal: 87,  color: "#10B981", desc: "Some green" },
    { label: "B (Blue)",  value: "33", decimal: 51,  color: "#3B82F6", desc: "A little blue" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#FDF2F8,#FCE7F3)" }}>
      <div className="px-5 py-3 border-b border-pink-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Breaking Down: <span className="font-mono">#FF5733</span></p>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <div className="w-12 h-12 rounded-xl border-4 border-white shadow-lg" style={{ background: hex }} />
          <div className="font-mono text-2xl font-black text-gray-700">{hex}</div>
        </div>
        <div className="flex gap-2 mb-3">
          <div className="w-6 text-center font-black text-gray-500 text-sm mt-3">#</div>
          {parts.map((p, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15 }}
              className="flex-1 rounded-xl px-3 py-2 text-center border-2"
              style={{ background: `${p.color}15`, borderColor: `${p.color}40` }}>
              <p className="text-xl font-black font-mono" style={{ color: p.color }}>{p.value}</p>
              <p className="text-[9px] text-gray-500">= {p.decimal}</p>
              <p className="text-[9px] font-bold" style={{ color: p.color }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500">Every hex colour is 3 pairs of hex digits: <strong style={{ color: "#EF4444" }}>RR</strong><strong style={{ color: "#10B981" }}>GG</strong><strong style={{ color: "#3B82F6" }}>BB</strong></p>
      </div>
    </div>
  );
}
