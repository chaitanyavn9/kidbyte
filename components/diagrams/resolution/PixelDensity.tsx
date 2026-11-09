"use client";
import { motion } from "framer-motion";

export default function PixelDensity({ accent = "#1E40AF" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1e3a5f)" }}>
      <div className="px-5 py-3 border-b border-white/10">
        <p className="text-xs font-black text-white/50 uppercase tracking-widest">PPI — Pixels Per Inch</p>
      </div>
      <div className="p-5 flex gap-6 justify-center">
        {[{ label: "Low PPI (72)", grid: 4, ppi: "72 PPI", desc: "Old monitor" },
          { label: "High PPI (458)", grid: 8, ppi: "458 PPI", desc: "iPhone 15" }].map((item, j) => (
          <div key={j} className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-black text-white/60">{item.label}</p>
            <div className="border-2 p-1 rounded-lg" style={{ borderColor: `${accent}50` }}>
              <div className={`grid gap-0.5`} style={{ gridTemplateColumns: `repeat(${item.grid}, 1fr)` }}>
                {Array.from({ length: item.grid * item.grid }).map((_, i) => (
                  <motion.div key={i} className="rounded-sm"
                    style={{ width: j === 0 ? "10px" : "5px", height: j === 0 ? "10px" : "5px", background: accent }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: (i * 0.05) % 1.5 }}
                  />
                ))}
              </div>
            </div>
            <p className="text-[10px] font-black" style={{ color: accent }}>{item.ppi}</p>
            <p className="text-[9px] text-white/30">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="px-5 pb-4 text-center">
        <p className="text-[10px] text-white/30">Higher PPI = same screen area, more pixels = sharper image. Retina displays: 300+ PPI.</p>
      </div>
    </div>
  );
}
