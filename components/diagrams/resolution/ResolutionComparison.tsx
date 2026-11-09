"use client";
import { motion } from "framer-motion";

const RES = [
  { name: "480p (SD)", w: 640, h: 480, pixels: "307K", example: "Old DVDs" },
  { name: "720p (HD)", w: 1280, h: 720, pixels: "921K", example: "YouTube Basic" },
  { name: "1080p (FHD)", w: 1920, h: 1080, pixels: "2.1M", example: "Most monitors" },
  { name: "4K (UHD)", w: 3840, h: 2160, pixels: "8.3M", example: "High-end TVs" },
];

export default function ResolutionComparison({ accent = "#1E40AF" }: { accent?: string }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)" }}>
      <div className="px-5 py-3 border-b border-blue-200">
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>Resolution = How Many Pixels Fit on Screen</p>
      </div>
      <div className="p-5 flex flex-col gap-2">
        {RES.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/80 border border-blue-100">
            <div className="rounded-lg overflow-hidden shrink-0" style={{ width: `${10 + i * 8}px`, height: `${7 + i * 6}px`, background: `${accent}${30 + i * 20}` }} />
            <div className="flex-1">
              <p className="text-xs font-black text-gray-800">{r.name}</p>
              <p className="text-[10px] text-gray-500">{r.w}×{r.h} = <strong style={{ color: accent }}>{r.pixels} pixels</strong></p>
            </div>
            <p className="text-[10px] text-gray-400">{r.example}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
