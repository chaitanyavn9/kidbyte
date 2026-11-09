"use client";
import { motion } from "framer-motion";

export default function DataInBits({ accent = "#65A30D" }: { accent?: string }) {
  const letter = "A";
  const ascii = 65;
  const bits = ascii.toString(2).padStart(8, "0").split("");

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#14532d)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">The Letter "A" in Binary</p>
      </div>
      <div className="p-5 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <div className="text-6xl font-black text-white/90">A</div>
          <div className="text-white/40 text-2xl">→</div>
          <div className="text-center">
            <p className="text-xs text-white/40 mb-1">ASCII value</p>
            <p className="text-3xl font-black" style={{ color: accent }}>65</p>
          </div>
          <div className="text-white/40 text-2xl">→</div>
          <div className="text-center">
            <p className="text-xs text-white/40 mb-1">Binary (8 bits)</p>
            <div className="flex gap-1">
              {bits.map((b, i) => (
                <motion.div key={i} className="w-7 h-10 rounded-lg flex items-center justify-center text-sm font-black"
                  style={{ background: b === "1" ? accent : "rgba(255,255,255,0.1)", color: b === "1" ? "white" : "#64748B" }}
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 }}>
                  {b}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-white/30 text-center">Every letter, number, emoji and symbol is stored as a pattern of 0s and 1s</p>
      </div>
    </div>
  );
}
