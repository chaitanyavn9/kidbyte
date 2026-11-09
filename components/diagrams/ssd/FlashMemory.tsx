"use client";
import { motion } from "framer-motion";

export default function FlashMemory({ accent = "#0891B2" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#083344)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">How Flash Memory Stores Data</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-10 rounded-lg flex items-center justify-center text-xs font-black border"
              style={{
                background: i % 3 === 0 ? `${accent}30` : i % 3 === 1 ? `${accent}80` : `${accent}15`,
                borderColor: `${accent}40`,
                color: i % 3 === 0 ? "#fff" : i % 3 === 1 ? "#fff" : "#64748B"
              }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: (i * 0.13) % 2 }}
            >
              {i % 3 === 1 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {[
            { emoji: "🔵", label: "Cell charged = 1", desc: "Electron trapped in floating gate = data bit '1'" },
            { emoji: "⚫", label: "Cell empty = 0",   desc: "No electrons = data bit '0'" },
            { emoji: "⚡", label: "No moving parts",  desc: "Unlike HDD, nothing spins — data stored in silicon" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-sm">{item.emoji}</span>
              <span className="text-xs font-black text-white/70">{item.label}</span>
              <span className="text-[10px] text-white/30">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
