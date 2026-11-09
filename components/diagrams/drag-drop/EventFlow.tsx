"use client";
import { motion } from "framer-motion";

const EVENTS = [
  { emoji: "👆", label: "mousedown", desc: "You press the mouse button on an element" },
  { emoji: "🎯", label: "dragstart", desc: "Browser detects you're dragging" },
  { emoji: "🌊", label: "dragover", desc: "Element passes over a valid drop zone" },
  { emoji: "✅", label: "drop", desc: "You release the mouse — drop fires!" },
  { emoji: "🏁", label: "dragend", desc: "Drag operation complete" },
];

export default function EventFlow({ accent = "#EA580C" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#431407)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">What Happens Inside a Drag & Drop</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {EVENTS.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-2.5" style={{ background: `${accent}20`, border: `1.5px solid ${accent}40` }}>
            <span className="text-xl">{e.emoji}</span>
            <div>
              <code className="text-xs font-black font-mono" style={{ color: accent }}>{e.label}</code>
              <p className="text-[10px] text-white/50">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
