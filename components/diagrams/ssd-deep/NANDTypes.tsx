"use client";
import { motion } from "framer-motion";

const TYPES = [
  { name: "SLC",  bits: 1, speed: "Fastest", endurance: "100K cycles", price: "$$$$", use: "Enterprise / caching" },
  { name: "MLC",  bits: 2, speed: "Fast",    endurance: "10K cycles",  price: "$$$",  use: "Prosumer / creators" },
  { name: "TLC",  bits: 3, speed: "Good",    endurance: "3K cycles",   price: "$$",   use: "Consumer SSDs (most common)" },
  { name: "QLC",  bits: 4, speed: "Slower",  endurance: "1K cycles",   price: "$",    use: "High-capacity budget SSDs" },
];

export default function NANDTypes({ accent = "#1D4ED8" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>NAND Flash Types — More Bits = Denser but Slower</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {TYPES.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-white border border-blue-100 px-4 py-2.5">
            <div className="flex items-center gap-3 mb-1">
              <div className="rounded-lg px-2 py-0.5 text-white text-xs font-black" style={{ background: accent }}>{t.name}</div>
              <span className="text-[10px] text-gray-500">{t.bits} bit{t.bits > 1 ? "s" : ""} per cell</span>
              <span className="ml-auto text-[10px] font-black text-yellow-600">{t.price}</span>
            </div>
            <div className="flex gap-3 text-[9px] text-gray-500">
              <span>⚡ {t.speed}</span><span>🔁 {t.endurance}</span><span>📦 {t.use}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
