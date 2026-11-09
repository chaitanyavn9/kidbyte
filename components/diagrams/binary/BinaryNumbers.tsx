"use client";
import { motion } from "framer-motion";

const ROWS = [
  { bin: "0000", dec: 0 }, { bin: "0001", dec: 1 }, { bin: "0010", dec: 2 }, { bin: "0011", dec: 3 },
  { bin: "0100", dec: 4 }, { bin: "0101", dec: 5 }, { bin: "0110", dec: 6 }, { bin: "0111", dec: 7 },
];

export default function BinaryNumbers({ accent = "#059669" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#052e16)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">How Computers Count in Binary</p>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-xs font-black text-white/40 mb-2 text-center">Decimal (us)</p>
            {ROWS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="text-center py-1 font-black text-sm text-white/80">{r.dec}</motion.div>
            ))}
          </div>
          <div>
            <p className="text-xs font-black text-white/40 mb-2 text-center">Binary (computer)</p>
            {ROWS.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="text-center py-1 font-black text-sm font-mono" style={{ color: accent }}>{r.bin}</motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-xl px-4 py-3 text-center" style={{ background: `${accent}20` }}>
          <p className="text-xs font-bold text-white/70">Place values: 8 · 4 · 2 · 1</p>
          <p className="text-[10px] text-white/40 mt-0.5">Just like 10 · 100 · 1000 in decimal — but powers of 2 instead of 10</p>
        </div>
      </div>
    </div>
  );
}
