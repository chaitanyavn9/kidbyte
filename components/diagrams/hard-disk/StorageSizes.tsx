"use client";
import { motion } from "framer-motion";

const DATA = [
  { label: "1 GB", examples: "250 songs or 500 photos", bar: 2 },
  { label: "100 GB", examples: "50 HD movies", bar: 10 },
  { label: "1 TB", examples: "500,000 photos or 500 HD movies", bar: 30 },
  { label: "10 TB", examples: "Every book ever published (text)", bar: 70 },
  { label: "20 TB", examples: "Typical large desktop hard drive today", bar: 100 },
];

export default function StorageSizes({ accent = "#475569" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#F8FAFC,#F1F5F9)" }}>
      <div className="px-5 py-3 border-b border-slate-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>How Big is Storage? Put it in Perspective</p>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {DATA.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3">
            <p className="text-xs font-black w-16 shrink-0 text-right" style={{ color: accent }}>{d.label}</p>
            <div className="flex-1 h-5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: accent }}
                initial={{ width: 0 }} animate={{ width: `${d.bar}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }} />
            </div>
            <p className="text-[10px] text-gray-500 w-32 shrink-0">{d.examples}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
